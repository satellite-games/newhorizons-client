<script setup lang="ts">
import { CharacterCreator } from '@/features/character-creation/services/character-creator';
import {
  VCol,
  VContainer,
  VExpansionPanel,
  VExpansionPanels,
  VRow,
  VTextField,
} from 'vuetify/components';
import config from './form-config';
import { intl } from '@spuxx/browser-utils';
import { createInputValidationRules } from '@/utils/form.utils';

const { variant, fields } = config;

const handleUpdate = () => {
  if (CharacterCreator.preset) {
    CharacterCreator.preset.name = 'character.preset.custom';
  }
};

const createRules = (min: number, max: number) => {
  return createInputValidationRules({
    required: true,
    type: 'number',
    min,
    max,
  });
};
</script>
<template>
  <VExpansionPanels v-if="CharacterCreator.preset" class="panels">
    <VExpansionPanel
      :title="intl('character-creation.route.preset.customize')"
      bg-color="secondary2"
    >
      <template v-slot:text>
        <VContainer>
          <VRow>
            <VCol>
              <VTextField
                type="number"
                :variant
                v-model="CharacterCreator.preset.attributePoints"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.attribute-points.label')"
                :hint="intl('character-creation.route.preset.attribute-points.hint')"
                :min="fields.attributePoints.min"
                :max="fields.attributePoints.max"
                :rules="createRules(fields.attributePoints.min, fields.attributePoints.max)"
              />
            </VCol>
            <VCol>
              <VTextField
                type="number"
                :variant
                v-model="CharacterCreator.preset.traitPoints"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.trait-points.label')"
                :hint="intl('character-creation.route.preset.trait-points.hint')"
                :min="fields.traitPoints.min"
                :max="fields.traitPoints.max"
                :rules="createRules(fields.traitPoints.min, fields.traitPoints.max)"
              />
            </VCol>
            <VCol>
              <VTextField
                type="number"
                :variant
                v-model="CharacterCreator.preset.interestPoints"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.interest-points.label')"
                :hint="intl('character-creation.route.preset.interest-points.hint')"
                :min="fields.interestPoints.min"
                :max="fields.interestPoints.max"
                :rules="createRules(fields.interestPoints.min, fields.interestPoints.max)"
              />
            </VCol>
          </VRow>
          <VRow>
            <VCol>
              <VTextField
                type="number"
                :variant
                v-model="CharacterCreator.preset.traitsMinimum"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.traits-minimum.label')"
                :hint="intl('character-creation.route.preset.traits-minimum.hint')"
                :min="fields.traitsMinimum.min"
                :max="fields.traitsMinimum.max"
                :rules="createRules(fields.traitsMinimum.min, fields.traitsMinimum.max)"
              />
            </VCol>
            <VCol>
              <VTextField
                type="number"
                :variant
                v-model="CharacterCreator.preset.traitsMaximum"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.traits-maximum.label')"
                :hint="intl('character-creation.route.preset.traits-maximum.hint')"
                :min="fields.traitsMaximum.min"
                :max="fields.traitsMaximum.max"
                :rules="createRules(fields.traitsMaximum.min, fields.traitsMaximum.max)"
              />
            </VCol>
            <VCol>
              <VTextField
                type="number"
                :variant
                v-model="CharacterCreator.preset.abilitiesMaximum"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.abilities-maximum.label')"
                :hint="intl('character-creation.route.preset.abilities-maximum.hint')"
                :min="fields.abilitiesMaximum.min"
                :max="fields.abilitiesMaximum.max"
                :rules="createRules(fields.abilitiesMaximum.min, fields.abilitiesMaximum.max)"
              />
            </VCol>
          </VRow>
          <VRow>
            <VCol>
              <VTextField
                type="number"
                :variant
                v-model="CharacterCreator.preset.bonusCredits"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.bonus-credits.label')"
                :hint="intl('character-creation.route.preset.bonus-credits.hint')"
                :min="fields.bonusCredits.min"
                :max="fields.bonusCredits.max"
                :rules="createRules(fields.bonusCredits.min, fields.bonusCredits.max)"
              />
            </VCol>
            <VCol>
              <VTextField
                type="number"
                :variant
                v-model="CharacterCreator.preset.startExperience"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.start-experience.label')"
                :hint="intl('character-creation.route.preset.start-experience.hint')"
                :min="fields.startExperience.min"
                :max="fields.startExperience.max"
                :rules="createRules(fields.startExperience.min, fields.startExperience.max)"
              />
            </VCol>
            <VCol>
              <VTextField
                type="number"
                :variant
                v-model="CharacterCreator.preset.startFatePoints"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.start-fate-points.label')"
                :hint="intl('character-creation.route.preset.start-fate-points.hint')"
                :min="fields.startFatePoints.min"
                :max="fields.startFatePoints.max"
                :rules="createRules(fields.startFatePoints.min, fields.startFatePoints.max)"
              />
            </VCol>
          </VRow>
        </VContainer>
      </template>
    </VExpansionPanel>
  </VExpansionPanels>
</template>

<style scoped>
.panels {
  margin-bottom: 1.5rem;

  :global(.v-expansion-panel-text__wrapper) {
    padding: 1rem 2rem;
  }

  :global(.v-input) {
    min-width: 12rem;
  }
}
</style>
