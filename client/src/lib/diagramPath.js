/**
 * Helpers around the "error code" of a diagram.
 *
 * The code has the shape `<diagram index>-<node>-<node>-...`, e.g. `0-1-2-3-13`.
 * It is shown to the user (so they can give it to the E-kot), decoded by the
 * /admin page, and it is also stored in the URL hash (`/#0-1-2-3-13`) so that:
 *   - the browser "back" button goes back one question,
 *   - a page reload keeps the user where they were,
 *   - a precise step can be shared as a link.
 */

/** First node of a diagram: the one the intro node ("0") points to. */
export function startNode(diagram) {
    const first = diagram && diagram[0] && diagram[0].answers[0];
    return first ? String(first.ref) : "1";
}

export function buildCode(id, path) {
    return [id, ...path].join("-");
}

/** decodeURIComponent that never throws (malformed links). */
export function safeDecode(text) {
    try {
        return decodeURIComponent(text);
    } catch (e) {
        return "";
    }
}

/**
 * Turns a code (or a URL hash) into `{ id, diagram, path }`.
 * Invalid or incomplete parts are dropped: we keep the longest valid prefix
 * so that a stale link never crashes the page. Returns null for the home page.
 */
export function parseCode(raw, diagrams) {
    const code = safeDecode(String(raw || "").replace(/^#/, "")).trim();
    if (!code) return null;

    const [idPart, ...nodes] = code.split("-").filter((part) => part !== "");
    const id = Number(idPart);
    const diagram = Number.isInteger(id) ? diagrams[id] : undefined;
    if (!diagram) return null;

    const start = startNode(diagram);
    const path = [start];

    // nodes[0] should be the start node; ignore it if it is not.
    const rest = nodes[0] === start ? nodes.slice(1) : [];
    for (const node of rest) {
        const previous = diagram[path[path.length - 1]];
        const isValidStep =
            diagram[node] &&
            previous.answers.some((answer) => String(answer.ref) === node);
        if (!isValidStep) break;
        path.push(node);
    }

    return { id, diagram, path };
}

/** Text of the answer that leads from `fromNode` to `toNode`. */
export function answerBetween(diagram, fromNode, toNode) {
    const answer = diagram[fromNode].answers.find(
        (candidate) => String(candidate.ref) === String(toNode)
    );
    return answer ? answer.text : "";
}

/** Lowercase, accent-free, tag-free version of a string, for searching. */
export function normalize(text) {
    return String(text || "")
        .replace(/<[^>]*>/g, " ")
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase();
}

function fullText(diagram) {
    return Object.values(diagram)
        .map((node) => [node.text, ...node.answers.map((answer) => answer.text)].join(" "))
        .join(" ");
}

/**
 * Filters the diagrams on a free-text query. Every word of the query must
 * appear somewhere in the diagram; diagrams whose title matches come first.
 * Returns `[{ id, diagram }]` so that the original index (used in the
 * error code) is preserved.
 */
export function searchDiagrams(diagrams, query) {
    const all = diagrams.map((diagram, id) => ({ id, diagram }));
    const words = normalize(query).split(/\s+/).filter(Boolean);
    if (!words.length) return all;

    const scored = [];
    for (const entry of all) {
        const title = normalize(entry.diagram[0].text);
        const content = normalize(fullText(entry.diagram));
        if (!words.every((word) => content.includes(word))) continue;
        const titleHits = words.filter((word) => title.includes(word)).length;
        scored.push({ ...entry, titleHits });
    }

    return scored
        .sort((a, b) => b.titleHits - a.titleHits || a.id - b.id)
        .map(({ id, diagram }) => ({ id, diagram }));
}
