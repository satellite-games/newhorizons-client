<script setup lang="ts">
import ButtonSelect, { type ButtonSelectOption } from '@/components/common/ButtonSelect.vue';
import { CharacterCreator } from '@/features/character-creation/services/character-creator';
import StellarpediaArticle from '@/features/stellarpedia/components/article/StellarpediaArticle.vue';
import { createInputValidationRules, createSelectValidationRules } from '@/utils/form.utils';
import { type Blueprint, type CharacterOrigin, type CharacterSkillName } from '@newhorizons/core';
import { Wiki } from '@newhorizons/wiki';
import { intl } from '@spuxx/browser-utils';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import type { SubmitEventPromise } from 'vuetify';
import { VBtn, VDivider, VForm, VTextField } from 'vuetify/components';

const router = useRouter();

const props = defineProps<{
  characterOrigins: Blueprint<CharacterOrigin>[];
}>();

const characterOriginOptions =
  props.characterOrigins.map(
    (origin) =>
      ({
        value: origin.name,
        title: intl(origin.name),
      }) as ButtonSelectOption,
  ) ?? [];

const selectedOriginName = ref<string>(props.characterOrigins[0].name);
const selectedOrigin = computed(() => {
  return props.characterOrigins.find((origin) => origin.name === selectedOriginName.value)!;
});

const selectableSkillBonuses = computed(() => selectedOrigin.value.selectableSkillBonuses);
const selectedSkillBonuses = computed(() => {
  return selectedOrigin.value.selectableSkillBonuses.map(({ value, skills }) => {
    return { value, name: skills[0] };
  });
});

const handleSelectSkillOption = (index: number, value: string) => {
  selectedSkillBonuses.value[index].name = value as CharacterSkillName;
};

const firstLanguage = ref<string>(intl('character-creation.route.origin.first-language.value'));

const disabled = computed(() => {
  return CharacterCreator.originLocked;
});

const form = ref<VForm>();
const handleSubmit = async (event: SubmitEventPromise) => {
  const { valid } = await event;
  if (valid) {
    CharacterCreator.chooseOrigin(
      selectedOrigin.value,
      selectedSkillBonuses.value,
      firstLanguage.value,
    );
    router.push({ name: 'character-creation/general' });
  }
};
</script>

<template>
  <VForm ref="form" v-if="selectedOrigin" @submit.prevent="handleSubmit" class="form" :disabled>
    <ButtonSelect
      :label="intl('character-creation.route.preset.select')"
      v-model="selectedOriginName"
      :options="characterOriginOptions"
      :rules="
        createSelectValidationRules({
          required: true,
        })
      "
      color="secondary"
      required
      :disabled
    />

    <StellarpediaArticle v-bind="Wiki.getArticlePath(selectedOrigin.name)" />

    <h3 style="margin-bottom: 0">Erzähle uns noch etwas mehr über Deine Herkunft...</h3>
    <VDivider style="margin: 0.5rem 0 1rem 0" />
    <div :key="selectedOriginName">
      <ButtonSelect
        class="mb-2"
        v-for="(bonus, index) in selectableSkillBonuses"
        :key="index"
        :label="intl('character-creation.route.origin.select-skill-bonus')"
        :options="
          bonus.skills.map((skill) => {
            return {
              title: `${intl(skill)} ${bonus.value > 0 ? `+${bonus.value}` : bonus.value}`,
              value: skill,
            };
          })
        "
        :default-value="selectedSkillBonuses[index].name"
        :on-select="
          (value: string) => {
            handleSelectSkillOption(index, value);
          }
        "
        :disabled
        :rules="createInputValidationRules({ required: true })"
        required
      />
    </div>
    <VTextField
      class="mb-2"
      :label="intl('character-creation.route.origin.first-language.label')"
      :hint="intl('character-creation.route.origin.first-language.hint')"
      :model-value="firstLanguage"
      :rules="createInputValidationRules({ required: true, type: 'text' })"
      bg-color="secondary"
      required
    />
    <footer class="d-flex justify-center">
      <VBtn :disabled="CharacterCreator.originLocked" type="submit" size="large" color="primary">
        {{ intl('character-creation.route.origin.submit') }}
      </VBtn>
    </footer>
  </VForm>
</template>

<style scoped></style>
