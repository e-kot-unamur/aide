import { writable } from 'svelte/store';

function language() {
	const { subscribe, set, } = writable("fr");

	return {
		subscribe,
		set: (lang) => set(lang)
	};
}

export const lang = language();