import { writable } from 'svelte/store';

/**
 * Light / dark theme.
 * - By default it follows the system setting (and updates live if it changes).
 * - Once the user clicks the toggle, their choice is remembered and wins.
 * The class is also set early by a small script in public/index.html to
 * avoid a flash of the wrong theme while the app loads.
 */
const STORAGE_KEY = 'aide-theme'
const systemDark = window.matchMedia('(prefers-color-scheme: dark)')

function savedTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'dark' || value === 'light' ? value : null
  } catch (e) {
    return null
  }
}

function systemTheme() {
  return systemDark.matches ? 'dark' : 'light'
}

function apply(theme) {
  const root = document.documentElement
  root.classList.toggle('dark-theme', theme === 'dark')
  root.classList.toggle('light-theme', theme !== 'dark')
}

function createTheme() {
  let current = savedTheme() || systemTheme()
  const { subscribe, set } = writable(current)
  apply(current)

  function update(theme) {
    current = theme
    apply(theme)
    set(theme)
  }

  // Follow the system only while the user hasn't picked a theme themselves.
  const onSystemChange = () => {
    if (!savedTheme()) update(systemTheme())
  }
  if (systemDark.addEventListener) systemDark.addEventListener('change', onSystemChange)
  else if (systemDark.addListener) systemDark.addListener(onSystemChange)

  return {
    subscribe,
    toggle() {
      const next = current === 'dark' ? 'light' : 'dark'
      try { localStorage.setItem(STORAGE_KEY, next) } catch (e) { /* ignore */ }
      update(next)
    },
  }
}

export default createTheme()
