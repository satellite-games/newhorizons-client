<script setup lang="ts">
import Container from '@/components/layout/Container.vue';
import { Resource } from '@/reactivity/resource';
import { GameDataProvider } from '@/services/game-data-provider';
import { CharacterOrigin, type Blueprint } from '@newhorizons/core';
import { intl } from '@spuxx/browser-utils';
import { VBtn, VForm } from 'vuetify/components';
import { CharacterCreator } from '../../services/character-creator';
import ButtonSelect, { type ButtonSelectOption } from '@/components/common/ButtonSelect.vue';
import { ref } from 'vue';
import { computed } from 'vue';
import { createSelectValidationRules } from '@/utils/form.utils';
import StellarpediaArticle from '@/features/stellarpedia/components/article/StellarpediaArticle.vue';
import OriginOptionsForm from './components/OriginOptionsForm.vue';
import SimpleNavButton from '@/components/common/SimpleNavButton.vue';
import { Wiki } from '@newhorizons/wiki';

const characterOrigins = new Resource<Blueprint<CharacterOrigin>[]>(async () => {
  const origins = await GameDataProvider.getBlueprints<CharacterOrigin>('characterOrigins');
  if (!selectedOriginName.value) selectedOriginName.value = origins[0].name;
  return origins;
}, 'characterPresets');
characterOrigins.load();
const characterOriginOptions = computed(() => {
  return (
    characterOrigins.data?.map(
      (origin) =>
        ({
          value: origin.name,
          title: intl(origin.name),
        }) as ButtonSelectOption,
    ) ?? []
  );
});

const selectedOriginName = ref<string | null>(
  CharacterCreator.character?.general.originName ?? null,
);
const selectedOrigin = computed(
  () => characterOrigins.data?.find((origin) => origin.name === selectedOriginName.value) ?? null,
);

const selectedOptions = ref<{
  firstLanguage: string;
  selectedSkillBonuses: Record<string, number>;
}>();

const handleSelect = (value: string) => {
  selectedOriginName.value = value;
};

const disabled = computed(() => {
  return CharacterCreator.originLocked;
});

const form = ref<VForm>();
const handleSubmit = () => {};
</script>
<template>
  <Container
    :title="intl('character-creation.route.origin.title')"
    size="large"
    :state="characterOrigins.state"
    loaderType="spinner"
  >
    <template v-slot:actions>
      <SimpleNavButton type="back" to="/create-character/preset" />
      <SimpleNavButton
        type="forward"
        to="/create-character/general"
        :disabled="!CharacterCreator.originLocked"
      />
    </template>
    <VForm
      ref="form"
      v-if="selectedOriginName"
      @submit.prevent="handleSubmit"
      class="form"
      :disabled
    >
      <ButtonSelect
        :label="intl('character-creation.route.preset.select')"
        :selected-value="selectedOriginName"
        :options="characterOriginOptions"
        :rules="
          createSelectValidationRules({
            required: true,
          })
        "
        color="secondary"
        required
        :disabled
        :on-select="handleSelect"
      />

      <StellarpediaArticle
        v-if="selectedOriginName"
        v-bind="Wiki.getArticlePath(selectedOriginName)"
      />
      <OriginOptionsForm v-if="selectedOrigin" :origin="selectedOrigin" :disabled />
      <VBtn :disabled="CharacterCreator.originLocked" type="submit" size="large" color="primary">
        {{ intl('character-creation.route.origin.submit') }}
      </VBtn>
    </VForm>
  </Container>
</template>

<style scoped>
.form {
  display: grid;
}

.form .v-btn[type='submit'] {
  margin-top: 1rem;
  justify-self: center;
}
</style>
