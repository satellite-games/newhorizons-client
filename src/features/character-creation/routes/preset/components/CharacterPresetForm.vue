<script setup lang="ts">
import ButtonSelect, { type ButtonSelectOption } from '@/components/common/ButtonSelect.vue';
import { CharacterCreator } from '@/features/character-creation/services/character-creator';
import router from '@/router';
import { CharacterPreset, type Blueprint } from '@newhorizons/core';
import { intl, sleep } from '@spuxx/browser-utils';
import { ref } from 'vue';
import type { SubmitEventPromise } from 'vuetify';
import { VBtn, VForm } from 'vuetify/components';
import CharacterPresetCustomizationPanel from './CharacterPresetCustomizationPanel.vue';
import { createSelectValidationRules } from '@/utils/form.utils';

const props = defineProps<{
  characterPresets: Blueprint<CharacterPreset>[];
}>();

const characterPresets = props.characterPresets ?? [];
const selectedPreset = ref<Blueprint<CharacterPreset>>(
  CharacterCreator.preset ?? characterPresets[0],
);
// if (!CharacterCreator.preset) CharacterCreator.setPreset(characterPresets[0]);
const characterPresetOptions: ButtonSelectOption[] = characterPresets.map((preset) => ({
  value: preset.name,
  title: intl(preset.name),
}));

const handlePresetSelect = (value: string) => {
  const characterPreset = characterPresets.find((preset) => preset.name === value);
  if (characterPreset) {
    selectedPreset.value = characterPreset;
  }
};

const form = ref<VForm>();

const submitLoading = ref(false);
const handleSubmit = async (event: SubmitEventPromise) => {
  const { valid } = await event;
  if (valid) {
    // We include a short delay here to indicate that the creation process is starting
    submitLoading.value = true;
    await sleep(1000);
    CharacterCreator.start(selectedPreset.value);
    submitLoading.value = false;
    router.push({ name: 'character-creation/origin' });
  }
};

const handleReset = () => {
  CharacterCreator.reset();
  // CharacterCreator.start({ ...characterPresets[0] });
};
</script>

<template>
  <VForm
    ref="form"
    v-if="Array.isArray(characterPresets) && selectedPreset"
    @submit.prevent="handleSubmit"
    :disabled="CharacterCreator.creationInProgress"
  >
    <ButtonSelect
      :label="intl('character-creation.route.preset.select')"
      :selected-value="selectedPreset.name"
      :options="characterPresetOptions"
      :rules="
        createSelectValidationRules({
          required: true,
        })
      "
      color="secondary"
      required
      :disabled="CharacterCreator.creationInProgress"
      :on-select="handlePresetSelect"
    />

    <CharacterPresetCustomizationPanel />

    <footer class="d-flex justify-center">
      <VBtn
        v-if="CharacterCreator.creationInProgress"
        type="button"
        size="large"
        color="primary"
        variant="outlined"
        @click="handleReset"
      >
        {{ intl('character-creation.route.preset.reset') }}
      </VBtn>
      <VBtn v-else type="submit" size="large" color="primary" :loading="submitLoading">
        {{ intl('character-creation.route.preset.start') }}
      </VBtn>
    </footer>
  </VForm>
</template>
