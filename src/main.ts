import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { i18n } from './plugins/vue-i18n';
import { vuetify } from './plugins/vuetify';
import './assets/styles/main.css';

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(i18n);

app.mount('#app');
