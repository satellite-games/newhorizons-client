<script setup lang="ts">
import ButtonSelect from '@/components/common/ButtonSelect.vue';
import type { Blueprint, CharacterOrigin } from '@newhorizons/core';
import { intl } from '@spuxx/browser-utils';
import { ref } from 'vue';
import { VDivider, VTextField } from 'vuetify/components';

const firstLanguage = ref<string>(intl('character-creation.route.origin.first-language.value'));

const props = defineProps<{
  origin: Blueprint<CharacterOrigin>;
  disabled?: boolean;
}>();

const handleSkillSelect = (skill: string) => {
  console.log(skill);
};
</script>

<template>
  <h3 style="margin-bottom: 0">Erzähle uns noch etwas mehr über Deine Herkunft...</h3>
  <VDivider style="margin: 0.5rem 0 1rem 0" />
  <div v-for="(bonus, index) in props.origin.selectableSkillBonuses" :key="index">
    <ButtonSelect
      :label="intl('character-creation.route.origin.select-skill-bonus')"
      :options="
        bonus.skills.map((skill) => {
          return {
            title: `${intl(skill)} ${bonus.value > 0 ? `+${bonus.value}` : bonus.value}`,
            value: skill,
          };
        })
      "
      :on-select="handleSkillSelect"
      :disabled
    />
  </div>
  <VTextField
    :label="intl('character-creation.route.origin.first-language.label')"
    :hint="intl('character-creation.route.origin.first-language.hint')"
    :model-value="firstLanguage"
    bg-color="secondary"
    required
  />
</template>
