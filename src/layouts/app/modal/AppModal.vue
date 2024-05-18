<script setup lang="ts">
import { Dialog } from '@/services/dialog/dialog.service';
import { VCard, VDialog } from 'vuetify/components';

const { isActive } = Dialog;
</script>

<template>
  <VDialog v-model="isActive" max-width="500">
    <VCard> Hello! </VCard>
  </VDialog>
</template>
