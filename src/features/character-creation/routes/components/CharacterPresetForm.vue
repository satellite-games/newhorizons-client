<script setup lang="ts">
import ButtonSelect, { type ButtonSelectOption } from '@/components/common/ButtonSelect.vue';
import type { Blueprint, CharacterPreset } from '@newhorizons/core';
import { computed } from 'vue';
import { VBtn, VForm } from 'vuetify/components';
import { CharacterCreator } from '../../services/character-creator';

const props = defineProps<{
  characterPresets: Blueprint<CharacterPreset>[];
}>();

const characterPresets = props.characterPresets ?? [];
const { creationInProgress } = CharacterCreator;

const characterPresetOptions = computed(() => {
  if (!Array.isArray(props.characterPresets)) return;
  const options: ButtonSelectOption[] = characterPresets.map(
    (preset): ButtonSelectOption => ({
      title: preset.name,
      value: preset.name,
    }),
  );
  return options;
});

const handlePresetSelect = (preset: ButtonSelectOption) => {
  console.log(preset);
};
</script>

<template>
  <VForm v-if="Array.isArray(characterPresets)" validate-on="submit">
    <ButtonSelect
      :label="$t('character-creation.route.preset.select')"
      :options="characterPresetOptions"
      color="secondary"
      required
      :on-select="handlePresetSelect"
    />

    <footer class="d-flex justify-center">
      <VBtn type="submit" size="large" color="primary">
        {{ $t(`character-creation.route.preset.${creationInProgress ? 'restart' : 'start'}`) }}
      </VBtn>
    </footer>
  </VForm>
</template>
