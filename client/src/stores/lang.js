import { writable } from 'svelte/store';
import translations from './translations/translations.js'

const STORAGE_KEY = 'aide-lang'
const DEFAULT_LANG = 'fr'

/**
 * Initial language: the one the user picked last time, otherwise the first
 * supported language of the browser (so that international students land on
 * the English version), otherwise French.
 */
function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && translations[saved]) return saved
  } catch (e) { /* storage unavailable (private mode...) */ }

  if (typeof navigator !== 'undefined') {
    const preferred = navigator.languages || [navigator.language]
    for (const tag of preferred) {
      const code = String(tag || '').slice(0, 2).toLowerCase()
      if (translations[code]) return code
    }
  }
  return DEFAULT_LANG
}

function applyToDocument(lang) {
  if (typeof document !== 'undefined') document.documentElement.lang = lang
}

function language() {
  const initial = initialLanguage()
  const { subscribe, set } = writable(initial)
  applyToDocument(initial)

  return {
    subscribe,
    set: (lang) => {
      if (!translations[lang]) return
      try { localStorage.setItem(STORAGE_KEY, lang) } catch (e) { /* ignore */ }
      applyToDocument(lang)
      set(lang)
    },
  };
}

function getString(lang, str) {
  return translations[lang][str] ?? translations[DEFAULT_LANG][str]
}

export default language()
export {
  getString,
}
