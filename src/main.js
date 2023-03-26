import { createApp } from 'vue'

import App from './App.vue'
import '@/style/app.scss'
import i18n from '@/i18n'
import { createPinia } from 'pinia'

createApp(App).use(i18n).use(createPinia()).mount('#app')
