<script setup lang="ts">
import { VTabs, VTab } from 'vuetify/components';
import { Icon } from '@iconify/vue';
import { useDisplay } from 'vuetify';
import { computed } from 'vue';

const { mobile } = useDisplay();
</script>
<template>
  <VTabs :direction="mobile ? 'vertical' : 'horizontal'">
    <VTab to="/" exact>
      <template v-slot:prepend>
        <Icon icon="mdi:home" />
      </template>
      {{ $t('route.home.title') }}
    </VTab>
    <VTab to="/create-character">
      <template v-slot:prepend>
        <Icon icon="mdi:account-plus" />
      </template>
      {{ $t('route.create-character.title') }}
    </VTab>
    <VTab to="/stellarpedia/basic-rules/introduction/welcome">
      <template v-slot:prepend>
        <Icon icon="mdi:weather-sunny" />
      </template>
      {{ $t('route.stellarpedia.title') }}
    </VTab>
  </VTabs>
</template>
