import { createI18n } from "vue-i18n"

// 英文语言包
import enLocale from './en' 

// 中文语言包
import zhLocale from './zh'

const messages = {
  en: {
    ...enLocale,
  },
  zh: {
    ...zhLocale,
  },
 
}
 
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('i18n'),
  messages,
  fallbackLocale: 'zh',
})
 
export default i18n