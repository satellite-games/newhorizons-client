<script setup lang="ts">
import { Snacks } from '@/services/snacks/snacks.service';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { Logger } from '@spuxx/browser-utils';
import { useI18n } from 'vue-i18n';
import { VBtn } from 'vuetify/components';

const props = defineProps<{
  book: string;
  chapter: string;
  article: string;
}>();

const { t } = useI18n();

const share = async () => {
  try {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    Snacks.add({
      message: t('stellarpedia.route.article.share.success'),
      timeout: 2500,
      type: 'success',
    });
  } catch (error) {
    Logger.error(error as string, 'StellarpediaArticleToolbar');
    Snacks.add({
      message: t('stellarpedia.route.article.share.error'),
      type: 'error',
    });
  }
};
</script>
<template>
  <div :class="$style.toolbar" role="toolbar">
    <p :class="[$style.breadcrumps, 'v-btn--variant-plain']">
      {{ props.book }} / {{ props.chapter }} / {{ props.article }}
    </p>
    <VBtn icon variant="plain" :onclick="share">
      <Icon icon="mdi:share" class="icon" />
    </VBtn>
  </div>
</template>

<style module>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.breadcrumps {
  font-size: smaller;
  color: rgb(var(--v-theme-plain));
}
</style>
