import { writable } from 'svelte/store';
import translations from './translations/translations.js'

function language() {
  const { subscribe, set, } = writable("fr");

  return {
    subscribe,
    set: (lang) => set(lang),
  };
}

function getString(lang, str) { 
  return translations[lang][str] ?? translations['fr'][str]
}

export default language()
export {
  getString,
}