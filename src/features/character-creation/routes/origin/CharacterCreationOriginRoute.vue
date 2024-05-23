<script setup lang="ts">
import Container from '@/components/layout/Container.vue';
import { Resource } from '@/reactivity/resource';
import { GameDataProvider } from '@/services/game-data-provider';
import { CharacterOrigin, getWikiPath, type Blueprint } from '@newhorizons/core';
import { intl } from '@spuxx/browser-utils';
import { VForm } from 'vuetify/components';
import { CharacterCreationProgress, CharacterCreator } from '../../services/character-creator';
import ButtonSelect, { type ButtonSelectOption } from '@/components/common/ButtonSelect.vue';
import { ref } from 'vue';
import { computed } from 'vue';
import { createSelectValidationRules } from '@/utils/form.utils';
import StellarpediaArticle from '@/features/stellarpedia/components/article/StellarpediaArticle.vue';

const characterOrigins = new Resource<Blueprint<CharacterOrigin>[]>(async () => {
  const origins = await GameDataProvider.getBlueprints<CharacterOrigin>('characterOrigins');
  if (!selectedOrigin.value) selectedOrigin.value = origins[0].name;
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

const selectedOrigin = ref<string | null>(CharacterCreator.character?.general.originName ?? null);

const handleSelect = (value: string) => {
  selectedOrigin.value = value;
};

const disabled = computed(() => {
  return CharacterCreator.progress !== CharacterCreationProgress.presetSelected;
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
    <VForm ref="form" v-if="selectedOrigin" @submit.prevent="handleSubmit" class="form" :disabled>
      <ButtonSelect
        :label="intl('character-creation.route.preset.select')"
        :selected-value="selectedOrigin"
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

      <StellarpediaArticle v-if="selectedOrigin" v-bind="getWikiPath(selectedOrigin)" />
    </VForm>
  </Container>
</template>
<style scoped></style>
