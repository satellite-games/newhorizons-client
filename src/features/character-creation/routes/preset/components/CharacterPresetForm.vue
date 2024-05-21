<script setup lang="ts">
import ButtonSelect, { type ButtonSelectOption } from '@/components/common/ButtonSelect.vue';
import { CharacterCreator } from '@/features/character-creation/services/character-creator';
import router from '@/router';
import type { Blueprint, CharacterPreset } from '@newhorizons/core';
import { intl, sleep } from '@spuxx/browser-utils';
import { ref } from 'vue';
import type { SubmitEventPromise } from 'vuetify';
import { VBtn, VForm } from 'vuetify/components';
import CharacterPresetCustomizationPanel from './CharacterPresetCustomizationPanel.vue';
import formConfig from './form-config';

const props = defineProps<{
  characterPresets: Blueprint<CharacterPreset>[];
}>();

const characterPresets = props.characterPresets ?? [];
if (!CharacterCreator.preset) CharacterCreator.setPreset(characterPresets[0]);
const characterPresetOptions: ButtonSelectOption[] = characterPresets.map((preset) => ({
  value: preset.name,
  title: intl(preset.name),
}));

const handlePresetSelect = (value: string) => {
  const selectedPreset = characterPresets.find((preset) => preset.name === value);
  if (selectedPreset) {
    CharacterCreator.setPreset(selectedPreset);
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
    CharacterCreator.start();
    submitLoading.value = false;
    router.push({ name: 'character-creation/origin' });
  }
};

const handleReset = () => {
  CharacterCreator.reset();
  CharacterCreator.setPreset({ ...characterPresets[0] });
};
</script>

<template>
  <VForm
    ref="form"
    v-if="Array.isArray(characterPresets) && CharacterCreator.preset"
    @submit.prevent="handleSubmit"
    :disabled="CharacterCreator.creationInProgress"
  >
    <ButtonSelect
      :label="intl('character-creation.route.preset.select')"
      :options="characterPresetOptions"
      :rules="formConfig.rules.preset"
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
