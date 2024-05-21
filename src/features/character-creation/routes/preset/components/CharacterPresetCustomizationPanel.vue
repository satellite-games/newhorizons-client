<script setup lang="ts">
import { CharacterCreator } from '@/features/character-creation/services/character-creator';
import { VCol, VContainer, VExpansionPanel, VExpansionPanels, VRow } from 'vuetify/components';
import { VNumberInput } from 'vuetify/labs/components';

const config: { inputVariant: VProps<VNumberInput>['variant'] } = {
  inputVariant: 'outlined',
};

const handleUpdate = () => {
  if (CharacterCreator.preset) {
    CharacterCreator.preset.name = 'character.preset.custom';
  }
};
</script>
<template>
  <VExpansionPanels v-if="CharacterCreator.preset" class="panels">
    <VExpansionPanel :title="$t('character-creation.route.preset.customize')" bg-color="secondary2">
      <template v-slot:text>
        <VContainer>
          <VRow>
            <VCol>
              <VNumberInput
                :variant="config.inputVariant"
                v-model="CharacterCreator.preset.attributePoints"
                @update:model-value="handleUpdate"
                :label="$t('character-creation.route.preset.attribute-points.label')"
                :min="0"
                :max="99"
              />
            </VCol>
            <VCol>
              <VNumberInput
                :variant="config.inputVariant"
                v-model="CharacterCreator.preset.traitPoints"
                @update:model-value="handleUpdate"
                :label="$t('character-creation.route.preset.trait-points.label')"
                :min="-99"
                :max="99"
              />
            </VCol>
            <VCol>
              <VNumberInput
                :variant="config.inputVariant"
                v-model="CharacterCreator.preset.interestPoints"
                @update:model-value="handleUpdate"
                :label="$t('character-creation.route.preset.interest-points.label')"
                :min="0"
                :max="999"
              />
            </VCol>
          </VRow>
          <VRow>
            <VCol>
              <VNumberInput
                :variant="config.inputVariant"
                v-model="CharacterCreator.preset.traitsMinimum"
                @update:model-value="handleUpdate"
                :label="$t('character-creation.route.preset.traits-minimum.label')"
                :min="0"
                :max="99"
              />
            </VCol>
            <VCol>
              <VNumberInput
                :variant="config.inputVariant"
                v-model="CharacterCreator.preset.traitsMaximum"
                @update:model-value="handleUpdate"
                :label="$t('character-creation.route.preset.traits-maximum.label')"
                :min="0"
                :max="99"
              />
            </VCol>
            <VCol>
              <VNumberInput
                :variant="config.inputVariant"
                v-model="CharacterCreator.preset.abilitiesMaximum"
                @update:model-value="handleUpdate"
                :label="$t('character-creation.route.preset.abilities-maximum.label')"
                :min="0"
                :max="99"
              />
            </VCol>
          </VRow>
          <VRow>
            <VCol>
              <VNumberInput
                :variant="config.inputVariant"
                v-model="CharacterCreator.preset.bonusCredits"
                @update:model-value="handleUpdate"
                :label="$t('character-creation.route.preset.bonus-credits.label')"
                :min="0"
                :max="999999999"
              />
            </VCol>
            <VCol>
              <VNumberInput
                :variant="config.inputVariant"
                v-model="CharacterCreator.preset.startExperience"
                @update:model-value="handleUpdate"
                :label="$t('character-creation.route.preset.start-experience.label')"
                :min="0"
                :max="99999"
              />
            </VCol>
            <VCol>
              <VNumberInput
                :variant="config.inputVariant"
                v-model="CharacterCreator.preset.startFatePoints"
                @update:model-value="handleUpdate"
                :label="$t('character-creation.route.preset.start-fate-points.label')"
                :min="0"
                :max="5"
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
