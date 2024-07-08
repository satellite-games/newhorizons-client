<script setup lang="ts">
import Container from '@/components/layout/Container.vue';
import { CharacterCreator } from '@/features/character-creation/services/character-creator';
import { createInputValidationRules } from '@/utils/form.utils';
import { intl } from '@spuxx/browser-utils';
import { computed } from 'vue';
import { VCol, VForm, VRow, VTextField, VTextarea } from 'vuetify/components';
import formConfig from './form-config';

const character = computed(() => CharacterCreator.character);
const { fields, variant, bgColor } = formConfig;
</script>

<template>
  <Container :title="intl('character-creation.route.general.title')" size="large">
    <VForm ref="form" class="form" v-if="character" @submit.prevent>
      <VRow>
        <VCol>
          <VTextField
            :label="intl('character-creation.route.general.name.label')"
            :hint="intl('character-creation.route.general.name.hint')"
            :model-value="character.general.name"
            @update:model-value="character.general.name = $event"
            :rules="createInputValidationRules({ ...fields.name })"
            v-bind="fields.name"
            :variant
            :bgColor
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VTextField
            class="mt-2"
            :label="intl('character-creation.route.general.gender.label')"
            :hint="intl('character-creation.route.general.gender.hint')"
            :model-value="character.general.gender"
            @update:model-value="character.general.gender = $event"
            :rules="createInputValidationRules({ ...fields.gender })"
            v-bind="fields.gender"
            :variant
            :bgColor
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VTextField
            class="mt-2"
            :label="intl('character-creation.route.general.birthday.label')"
            :hint="intl('character-creation.route.general.birthday.hint')"
            :model-value="character.general.birthday"
            @update:model-value="character.general.birthday = $event"
            :rules="createInputValidationRules({ ...fields.birthday })"
            v-bind="fields.birthday"
            :variant
            :bgColor
          />
        </VCol>
        <VCol>
          <VTextField
            class="mt-2"
            :label="intl('character-creation.route.general.age.label')"
            :hint="intl('character-creation.route.general.age.hint')"
            :model-value="character.general.age"
            @update:model-value="character.general.age = parseInt($event)"
            :rules="createInputValidationRules({ ...fields.age })"
            v-bind="fields.age"
            :variant
            :bgColor
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VTextField
            class="mt-2"
            :label="intl('character-creation.route.general.height.label')"
            :hint="intl('character-creation.route.general.height.hint')"
            :model-value="character.general.height"
            @update:model-value="character.general.height = parseInt($event)"
            :rules="
              createInputValidationRules({
                ...fields.height,
              })
            "
            v-bind="fields.height"
            :variant
            :bgColor
          />
        </VCol>
        <VCol>
          <VTextField
            class="mt-2"
            :label="intl('character-creation.route.general.weight.label')"
            :hint="intl('character-creation.route.general.weight.hint')"
            :model-value="character.general.weight"
            @update:model-value="character.general.weight = parseInt($event)"
            :rules="
              createInputValidationRules({
                ...fields.weight,
              })
            "
            v-bind="fields.weight"
            :variant
            :bgColor
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VTextarea
            class="mt-2"
            :label="intl('character-creation.route.general.appearance.label')"
            :hint="intl('character-creation.route.general.appearance.hint')"
            :model-value="character.general.appearance"
            @update:model-value="character.general.appearance = $event"
            :rules="createInputValidationRules({ ...fields.appearance })"
            v-bind="fields.appearance"
            :variant
            :bgColor
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VTextarea
            class="mt-2"
            :label="intl('character-creation.route.general.personality.label')"
            :hint="intl('character-creation.route.general.personality.hint')"
            :model-value="character.general.personality"
            @update:model-value="character.general.personality = $event"
            :rules="createInputValidationRules({ ...fields.personality })"
            v-bind="fields.personality"
            :variant
            :bgColor
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VTextarea
            class="mt-2"
            :label="intl('character-creation.route.general.family.label')"
            :hint="intl('character-creation.route.general.family.hint')"
            :model-value="character.general.family"
            @update:model-value="character.general.family = $event"
            :rules="createInputValidationRules({ ...fields.family })"
            v-bind="fields.family"
            :variant
            :bgColor
          />
        </VCol>
      </VRow>
    </VForm>
  </Container>
</template>

<style scoped></style>
