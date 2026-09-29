import { navigate } from "svelte-routing";
import { readable } from "svelte/store";
import { safeDecode } from "./diagramPath.js";

/**
 * All navigation inside the diagrams goes through the URL hash
 * (see diagramPath.js). We use svelte-routing's `navigate` so that the
 * router stays in sync with the URL.
 */

/**
 * Current URL hash, updated on every navigation: our own links, the router's
 * links (e.g. the logo), and the browser's back / forward buttons.
 * We don't rely on the router for this: depending on its version,
 * svelte-routing does not tell the page when only the hash changes.
 */
export const hash = readable(window.location.hash, (set) => {
    const update = () => set(window.location.hash);
    const wrapped = ["pushState", "replaceState"].map((method) => {
        const original = window.history[method];
        window.history[method] = function (...args) {
            const result = original.apply(this, args);
            update();
            return result;
        };
        return [method, original];
    });
    window.addEventListener("popstate", update);
    window.addEventListener("hashchange", update);
    update();

    return () => {
        wrapped.forEach(([method, original]) => (window.history[method] = original));
        window.removeEventListener("popstate", update);
        window.removeEventListener("hashchange", update);
    };
});

function urlFor(code) {
    return "/" + (code ? "#" + code : "");
}

/** Goes to a step, adding an entry to the browser history. */
export function openCode(code) {
    const from = currentCode();
    navigate(urlFor(code), { state: { from } });
}

/** Goes back to the home page (list of topics). */
export function goHome() {
    openCode("");
}

/**
 * Goes back to `parentCode`. When the previous history entry is exactly that
 * step, we simply use the browser history (same behaviour as the browser's
 * back button). Otherwise (e.g. the user arrived through a shared link) we
 * replace the current entry, so that "Back" never leaves the website.
 */
export function goBackTo(parentCode) {
    const state = window.history.state;
    if (state && state.from === parentCode) {
        window.history.back();
    } else {
        navigate(urlFor(parentCode), { replace: true });
    }
}

/** Replaces the current step without adding a history entry. */
export function replaceCode(code) {
    navigate(urlFor(code), { replace: true });
}

export function currentCode() {
    return safeDecode(window.location.hash.replace(/^#/, ""));
}
