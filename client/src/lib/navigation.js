import { navigate } from "svelte-routing";
import { safeDecode } from "./diagramPath.js";

/**
 * All navigation inside the diagrams goes through the URL hash
 * (see diagramPath.js). We use svelte-routing's `navigate` so that the
 * router (and therefore the `location` prop of the page) stays in sync.
 */

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
