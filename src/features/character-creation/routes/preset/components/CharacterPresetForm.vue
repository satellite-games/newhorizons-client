<script setup lang="ts">
import ButtonSelect, { type ButtonSelectOption } from '@/components/common/ButtonSelect.vue';
import { CharacterCreator } from '@/features/character-creation/services/character-creator';
import type { Blueprint, CharacterPreset } from '@newhorizons/core';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { SubmitEventPromise } from 'vuetify';
import { VBtn, VForm } from 'vuetify/components';

const props = defineProps<{
  characterPresets: Blueprint<CharacterPreset>[];
}>();

const characterPresets = props.characterPresets ?? [];
if (!CharacterCreator.preset) CharacterCreator.setPreset(characterPresets[0]);
const characterPresetOptions: ButtonSelectOption[] = characterPresets.map((preset) => ({
  value: preset.name,
  title: preset.name,
}));

const handlePresetSelect = (value: string) => {
  const selectedPreset = characterPresets.find((preset) => preset.name === value);
  if (selectedPreset) {
    CharacterCreator.setPreset(selectedPreset);
  }
};

const form = ref<VForm>();
const { t } = useI18n();
const rules = {
  preset: [(value: string) => (value ? true : t('validation.selection-required'))],
};

const handleSubmit = async (event: SubmitEventPromise) => {
  const { valid } = await event;
  if (valid) {
    CharacterCreator.start();
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
    class="form"
    :disabled="CharacterCreator.creationInProgress"
  >
    <ButtonSelect
      :label="$t('character-creation.route.preset.select')"
      :options="characterPresetOptions"
      :selected-value="CharacterCreator.preset.name"
      :rules="rules.preset"
      color="secondary"
      required
      :disabled="CharacterCreator.creationInProgress"
      :on-select="handlePresetSelect"
    />

    <footer class="d-flex justify-center">
      <VBtn
        v-if="CharacterCreator.creationInProgress"
        type="button"
        size="large"
        color="primary"
        variant="outlined"
        @click="handleReset"
      >
        {{ $t('character-creation.route.preset.reset') }}
      </VBtn>
      <VBtn v-else type="submit" size="large" color="primary">
        {{ $t('character-creation.route.preset.start') }}
      </VBtn>
    </footer>
  </VForm>
</template>

<style scoped>
.form > *:not(:first-child) {
  margin-top: 1rem;
}
</style>
