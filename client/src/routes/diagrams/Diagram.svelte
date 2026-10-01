<script>
  import { tick, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import lang, { getString } from "../../stores/lang.js";
  import htmlParser from "../../lib/HtmlParser.js";
  import { buildCode, answerBetween } from "../../lib/diagramPath.js";
  import { openCode, goBackTo, goHome } from "../../lib/navigation.js";

  export let diagram;
  export let id;
  // Nodes visited so far, from the first question to the current one.
  export let path;

  let card;
  let question;
  let copied = false;
  let copyTimer;
  let lastCode;

  $: t = (key) => getString($lang, key);
  $: node = path[path.length - 1];
  $: step = diagram[node];
  $: isEnd = step.answers.length === 0;
  // Answers flagged `"help": true` in the JSON ("it doesn't work", "I don't
  // know my eID"...) are not real choices: they are shown apart, lighter.
  $: choices = step.answers.filter((answer) => !answer.help);
  $: helpAnswers = step.answers.filter((answer) => answer.help);
  // Same format as before ("0-1-2-3"): the /admin page can still decode it.
  $: code = buildCode(id, path);
  $: parentCode = path.length > 1 ? buildCode(id, path.slice(0, -1)) : "";
  // Breadcrumb: the topic, then every answer given so far. Each crumb leads
  // to the step reached at that point; the last one is the current step.
  $: crumbs = collapseRepeats([
    { text: diagram[0].text, code: buildCode(id, path.slice(0, 1)) },
    ...path.slice(1).map((next, index) => ({
      text: answerBetween(diagram, path[index], next),
      code: buildCode(id, path.slice(0, index + 2)),
    })),
  ]);

  // "Next › Next › Next" says nothing: keep only the last crumb of a run of
  // identical answers (it leads to the furthest step of that run).
  function collapseRepeats(list) {
    return list.filter(
      (crumb, index) => index === list.length - 1 || crumb.text !== list[index + 1].text
    );
  }

  $: if (code !== lastCode) {
    lastCode = code;
    onStepChange();
  }

  function choose(answer) {
    openCode(buildCode(id, [...path, String(answer.ref)]));
  }

  function back() {
    goBackTo(parentCode);
  }

  function restart() {
    openCode(buildCode(id, [path[0]]));
  }

  // After each step: bring the card into view and move the keyboard /
  // screen-reader focus to the new question.
  async function onStepChange() {
    copied = false;
    await tick();
    if (!card) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (card.getBoundingClientRect().top < 0) {
      card.scrollIntoView({ block: "start", behavior: reduceMotion ? "auto" : "smooth" });
    }
    if (question) question.focus({ preventScroll: true });
  }

  function legacyCopy(text) {
    const temp = document.createElement("textarea");
    temp.value = text;
    temp.setAttribute("readonly", "");
    temp.style.position = "fixed";
    temp.style.opacity = "0";
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch (e) {
      legacyCopy(code);
    }
    copied = true;
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => (copied = false), 2500);
  }

  onDestroy(() => clearTimeout(copyTimer));
</script>

<style>
  .flow {
    max-width: 64rem;
    margin: 0 auto;
    padding: 1.6rem 2.8rem 2.8rem;
    background: var(--bg-color);
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    scroll-margin-top: 1rem;
  }

  /* ---- top: back + breadcrumb (small, discreet) ---- */
  .back {
    margin: 0 0 0 -0.8rem;
    padding: 0.6rem 0.8rem;
    background: transparent;
    border: none;
    color: var(--color-grey);
    font-size: 1.4rem;
    cursor: pointer;
  }

  .back:hover {
    opacity: 1;
    color: var(--color-primary);
  }

  .trail ol {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.2rem 0.6rem;
    list-style: none;
    margin: 0.4rem 0 0;
    padding: 0;
    font-size: 1.35rem;
    line-height: 1.5;
    color: var(--color-grey);
  }

  .trail li {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    min-width: 0;
  }

  .trail li + li::before {
    content: "›";
  }

  .crumb {
    max-width: 22rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button.crumb {
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    border-radius: 0;
    color: inherit;
    font-size: inherit;
    cursor: pointer;
  }

  button.crumb:hover {
    opacity: 1;
    color: var(--color-primary);
    text-decoration: underline;
  }

  .crumb[aria-current] {
    max-width: none;
    white-space: normal;
    color: var(--font-color);
    font-weight: 600;
  }

  /* ---- the question / message: the main thing on the page ---- */
  .question {
    margin-top: 2.4rem;
    font-size: 1.8rem;
    line-height: 1.6;
    overflow-wrap: anywhere;
  }

  .question:focus {
    outline: none;
  }

  /* ---- optional screenshot ---- */
  .step-image {
    display: block;
    margin-top: 1.6rem;
  }

  .step-image img {
    display: block;
    max-width: 100%;
    height: auto;
    border: 1px solid var(--color-lightGrey);
    border-radius: 8px;
  }

  /* ---- answers ---- */
  .answers {
    display: grid;
    gap: 1rem;
    margin-top: 2.4rem;
  }

  .answer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    width: 100%;
    min-height: 4.8rem;
    margin: 0;
    padding: 1.2rem 1.6rem;
    text-align: left;
    white-space: normal;
    line-height: 1.4;
    font-size: 1.6rem;
    color: var(--font-color);
    background: var(--bg-color);
    border: 1px solid var(--color-lightGrey);
    border-radius: 8px;
    cursor: pointer;
    transition: border-color 0.15s ease, background-color 0.15s ease;
  }

  .answer:hover {
    opacity: 1;
    border-color: var(--color-primary);
    background: var(--bg-secondary-color);
  }

  .chevron {
    flex-shrink: 0;
    font-size: 2.2rem;
    line-height: 1;
    color: var(--color-primary);
  }

  /* ---- "having trouble?" answers ---- */
  .help {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.2rem;
    margin-top: 2.8rem;
    padding: 1.4rem 1.6rem;
    border-radius: 8px;
    background: var(--bg-secondary-color);
  }

  .help-title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .help-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .help-button {
    margin: 0;
    padding: 0.6rem 1.4rem;
    font-size: 1.5rem;
    white-space: normal;
    text-align: left;
    color: var(--color-primary);
    background: var(--bg-color);
    border: 1px solid var(--color-lightGrey);
    border-radius: 999px;
    cursor: pointer;
  }

  .help-button:hover {
    opacity: 1;
    border-color: var(--color-primary);
  }

  /* ---- end of a path ---- */
  .code-line {
    margin: 2rem 0 0;
    font-size: 1.4rem;
    color: var(--color-grey);
  }

  .code {
    margin: 0 0.4rem;
    padding: 0.2rem 0.6rem;
    font-size: 1.4rem;
    user-select: all;
    white-space: nowrap;
  }

  .link-button {
    margin: 0;
    padding: 0.4rem 0.6rem;
    background: transparent;
    border: none;
    color: var(--color-primary);
    font-size: inherit;
    text-decoration: underline;
    text-underline-offset: 2px;
    cursor: pointer;
  }

  .link-button:hover {
    opacity: 1;
    text-decoration-thickness: 2px;
  }

  .copied {
    color: var(--color-success);
    text-decoration: none;
  }

  .end-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.6rem;
    margin-top: 2.4rem;
  }

  .end-actions .button {
    margin: 0;
  }

  .end-actions .link-button {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    .flow {
      padding: 1.2rem 1.6rem 2rem;
    }

    .question {
      font-size: 1.7rem;
      margin-top: 2rem;
    }

    .end-actions .button {
      flex: 1 1 100%;
    }

    .end-actions .link-button {
      margin: 0 auto;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .answer {
      transition: none;
    }
  }
</style>

<article class="flow" bind:this={card}>
  <button type="button" class="back" on:click={back}>
    <span aria-hidden="true">‹</span> {t('diagram-back')}
  </button>

  <nav class="trail" aria-label={t('diagram-path')}>
    <ol>
      {#each crumbs as crumb, index}
        <li>
          {#if index === crumbs.length - 1}
            <span class="crumb" aria-current="step" title={crumb.text}>{crumb.text}</span>
          {:else}
            <button
              type="button"
              class="crumb"
              title={crumb.text}
              on:click={() => openCode(crumb.code)}>{crumb.text}</button>
          {/if}
        </li>
      {/each}
    </ol>
  </nav>

  {#key code}
    <div class="question" tabindex="-1" bind:this={question} in:fade={{ duration: 150 }}>
      {@html htmlParser.parseContact(step.text)}
    </div>
    <!-- Optional screenshot: "image": { "src": "/images/...", "alt": "..." } -->
    {#if step.image && step.image.src}
      <a class="step-image" href={step.image.src} target="_blank" rel="noopener">
        <img src={step.image.src} alt={step.image.alt || ''} />
      </a>
    {/if}
  {/key}

  {#if !isEnd}
    {#if choices.length}
      <div class="answers">
        {#each choices as answer}
          <button type="button" class="answer" on:click={() => choose(answer)}>
            <span>{answer.text}</span>
            <span class="chevron" aria-hidden="true">›</span>
          </button>
        {/each}
      </div>
    {/if}

    {#if helpAnswers.length}
      <div class="help" role="group" aria-labelledby="help-title-{id}">
        <p class="help-title" id="help-title-{id}">{t('diagram-helpTitle')}</p>
        <div class="help-actions">
          {#each helpAnswers as answer}
            <button type="button" class="help-button" on:click={() => choose(answer)}>
              {answer.text}
            </button>
          {/each}
        </div>
      </div>
    {/if}
  {:else}
    <!-- End of a path: the code lets the E-kot see the whole path at once
         (it can be decoded on the /admin page). Kept discreet on purpose. -->
    <p class="code-line">
      {t('diagram-errorCode')}
      <code class="code">{code}</code>
      <button
        type="button"
        class="link-button"
        class:copied
        on:click={copy}>{copied ? t('diagram-copied') : t('diagram-copy')}</button>
      <span class="sr-only" role="status">{copied ? t('diagram-copied') : ''}</span>
    </p>

    <div class="end-actions">
      <button type="button" class="button primary" on:click={goHome}>
        {t('diagram-otherProblem')}
      </button>
      <button type="button" class="link-button" on:click={restart}>
        {t('diagram-restart')}
      </button>
    </div>
  {/if}
</article>
