<script setup lang="ts">
import { CharacterCreator } from '@/features/character-creation/services/character-creator';
import { VCol, VContainer, VExpansionPanel, VExpansionPanels, VRow } from 'vuetify/components';
import { VNumberInput } from 'vuetify/labs/components';
import config from './form-config';
import { intl } from '@spuxx/browser-utils';

const { variant, fields } = config;

const handleUpdate = () => {
  if (CharacterCreator.preset) {
    CharacterCreator.preset.name = 'character.preset.custom';
  }
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
              <VNumberInput
                name="attributePoints"
                :variant
                v-model="CharacterCreator.preset.attributePoints"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.attribute-points.label')"
                :min="fields.attributePoints.min"
                :max="fields.attributePoints.max"
              />
            </VCol>
            <VCol>
              <VNumberInput
                :variant
                v-model="CharacterCreator.preset.traitPoints"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.trait-points.label')"
                :min="fields.traitPoints.min"
                :max="fields.traitPoints.max"
              />
            </VCol>
            <VCol>
              <VNumberInput
                :variant
                v-model="CharacterCreator.preset.interestPoints"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.interest-points.label')"
                :min="fields.interestPoints.min"
                :max="fields.interestPoints.max"
              />
            </VCol>
          </VRow>
          <VRow>
            <VCol>
              <VNumberInput
                :variant
                v-model="CharacterCreator.preset.traitsMinimum"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.traits-minimum.label')"
                :min="fields.traitsMinimum.min"
                :max="fields.traitsMinimum.max"
              />
            </VCol>
            <VCol>
              <VNumberInput
                :variant
                v-model="CharacterCreator.preset.traitsMaximum"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.traits-maximum.label')"
                :min="fields.traitsMaximum.min"
                :max="fields.traitsMaximum.max"
              />
            </VCol>
            <VCol>
              <VNumberInput
                :variant
                v-model="CharacterCreator.preset.abilitiesMaximum"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.abilities-maximum.label')"
                :min="fields.abilitiesMaximum.min"
                :max="fields.abilitiesMaximum.max"
              />
            </VCol>
          </VRow>
          <VRow>
            <VCol>
              <VNumberInput
                :variant
                v-model="CharacterCreator.preset.bonusCredits"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.bonus-credits.label')"
                :min="fields.bonusCredits.min"
                :max="fields.bonusCredits.max"
              />
            </VCol>
            <VCol>
              <VNumberInput
                :variant
                v-model="CharacterCreator.preset.startExperience"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.start-experience.label')"
                :min="fields.startExperience.min"
                :max="fields.startExperience.max"
              />
            </VCol>
            <VCol>
              <VNumberInput
                :variant
                v-model="CharacterCreator.preset.startFatePoints"
                @update:model-value="handleUpdate"
                :label="intl('character-creation.route.preset.start-fate-points.label')"
                :min="fields.startFatePoints.min"
                :max="fields.startFatePoints.max"
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
  margin: 1rem 0;

  :global(.v-expansion-panel-text__wrapper) {
    padding: 1rem 2rem;
  }

  :global(.v-input) {
    min-width: 12rem;
  }
}
</style>
