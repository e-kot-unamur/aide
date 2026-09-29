<script>
  import translations from "../../static/diagrams/diagram.js";
  import lang, { getString } from "../../stores/lang.js";
  import Diagram from "./Diagram.svelte";
  import { fade } from "svelte/transition";
  import {
    parseCode,
    startNode,
    buildCode,
    searchDiagrams,
  } from "../../lib/diagramPath.js";
  import { openCode, replaceCode, currentCode, hash } from "../../lib/navigation.js";
  import { facebookLink } from "../../lib/HtmlParser.js";

  // Passed by some versions of svelte-routing; not used (see `hash`).
  export let location = null;

  let query = "";

  $: t = (key) => getString($lang, key);
  $: diagrams = translations[$lang];
  // The current step is stored in the URL hash (see lib/diagramPath.js).
  $: current = parseCode($hash, diagrams);
  // Clean up invalid / outdated links (e.g. an old code after a diagram
  // changed): the URL is corrected to what is actually displayed.
  $: expected = current ? buildCode(current.id, current.path) : "";
  $: if ($hash !== undefined && currentCode() !== expected) replaceCode(expected);
  $: results = searchDiagrams(diagrams, query);

  function open(id, diagram) {
    openCode(buildCode(id, [startNode(diagram)]));
  }
</script>

<style>
  .home {
    max-width: 64rem;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8rem;
    margin-bottom: 0.4rem;
  }

  .subtitle {
    color: var(--color-grey);
    margin-top: 0;
  }

  .search {
    margin: 2rem 0 1.5rem;
  }

  .search input {
    width: 100%;
    padding: 1.2rem 1.4rem;
    font-size: 1.6rem;
    border-radius: 8px;
    background: var(--bg-color);
    color: var(--font-color);
  }

  .topics {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 1rem;
  }

  .topic {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    width: 100%;
    margin: 0;
    padding: 1.6rem 2rem;
    text-align: left;
    white-space: normal;
    font-size: 1.7rem;
    line-height: 1.4;
    color: var(--font-color);
    background: var(--bg-color);
    border: 1px solid var(--color-lightGrey);
    border-left: 4px solid var(--color-primary);
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .topic:hover {
    opacity: 1;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .chevron {
    flex-shrink: 0;
    font-size: 2.4rem;
    line-height: 1;
    color: var(--color-primary);
  }

  .empty,
  .not-listed {
    text-align: center;
    color: var(--color-grey);
  }

  .not-listed {
    margin-top: 3rem;
  }

  @media (prefers-reduced-motion: reduce) {
    .topic {
      transition: none;
    }
    .topic:hover {
      transform: none;
    }
  }
</style>

<main in:fade={{ duration: 150 }}>
  {#if current}
    {#key current.id}
      <Diagram id={current.id} diagram={current.diagram} path={current.path} />
    {/key}
  {:else}
    <section class="home">
      <h1>{t('home-title')}</h1>
      <p class="subtitle">{t('home-subtitle')}</p>

      <div class="search" role="search">
        <label for="search" class="sr-only">{t('home-searchLabel')}</label>
        <input
          id="search"
          type="search"
          autocomplete="off"
          placeholder={t('home-search')}
          bind:value={query} />
      </div>

      {#if results.length}
        <ul class="topics">
          {#each results as { id, diagram } (id)}
            <li>
              <button type="button" class="topic" on:click={() => open(id, diagram)}>
                <span>{diagram[0].text}</span>
                <span class="chevron" aria-hidden="true">›</span>
              </button>
            </li>
          {/each}
        </ul>
      {:else}
        <p class="empty" role="status">{t('home-noResult')}</p>
      {/if}

      <p class="not-listed">
        {t('home-notListed')}
        <a href={facebookLink} target="_blank" rel="noopener">{t('home-contactUs')}</a>
      </p>
    </section>
  {/if}
</main>
