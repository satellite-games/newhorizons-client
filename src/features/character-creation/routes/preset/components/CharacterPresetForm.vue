<script setup lang="ts">
import ButtonSelect, { type ButtonSelectOption } from '@/components/common/ButtonSelect.vue';
import { CharacterCreator } from '@/features/character-creation/services/character-creator';
import router from '@/router';
import { CharacterPreset, type Blueprint } from '@newhorizons/core';
import { intl } from '@spuxx/browser-utils';
import { ref } from 'vue';
import type { SubmitEventPromise } from 'vuetify';
import { VBtn, VForm } from 'vuetify/components';
import CharacterPresetCustomizationPanel from './CharacterPresetCustomizationPanel.vue';
import { createSelectValidationRules } from '@/utils/form.utils';

const props = defineProps<{
  characterPresets: Blueprint<CharacterPreset>[];
}>();

const characterPresets = props.characterPresets ?? [];
const characterPresetOptions: ButtonSelectOption[] = characterPresets.map((preset) => ({
  value: preset.name,
  title: intl(preset.name),
}));

const handlePresetSelect = (value: string) => {
  const characterPreset = characterPresets.find((preset) => preset.name === value);
  if (characterPreset) CharacterCreator.selectPreset(characterPreset);
};

const form = ref<VForm>();

const handleSubmit = async (event: SubmitEventPromise) => {
  const { valid } = await event;
  if (valid) {
    CharacterCreator.startCreation();
    router.push({ name: 'character-creation/origin' });
  }
};

const handleReset = () => {
  CharacterCreator.reset();
};
</script>

<template>
  <VForm
    ref="form"
    v-if="Array.isArray(characterPresets) && CharacterCreator.preset"
    @submit.prevent="handleSubmit"
    :disabled="CharacterCreator.presetLocked"
  >
    <ButtonSelect
      :label="intl('character-creation.route.preset.select')"
      :default-value="CharacterCreator.preset.name"
      :options="characterPresetOptions"
      :rules="
        createSelectValidationRules({
          required: true,
        })
      "
      color="secondary"
      required
      :disabled="CharacterCreator.presetLocked"
      :on-select="handlePresetSelect"
    />

    <CharacterPresetCustomizationPanel />

    <footer class="d-flex justify-center">
      <VBtn
        v-if="CharacterCreator.presetLocked"
        type="button"
        size="large"
        color="primary"
        variant="outlined"
        @click="handleReset"
      >
        {{ intl('character-creation.route.preset.reset') }}
      </VBtn>
      <VBtn v-else type="submit" size="large" color="primary">
        {{ intl('character-creation.route.preset.start') }}
      </VBtn>
    </footer>
  </VForm>
</template>
