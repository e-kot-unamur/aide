<script>
  import { links } from "svelte-routing";
  import lang, { getString } from "../../stores/lang.js";
  import theme from "../../stores/theme.js";

  const contact = "https://www.messenger.com/t/ekotnamur";
  const languages = ["fr", "en"];

  $: themeLabel = getString($lang, $theme === "dark" ? "theme-toLight" : "theme-toDark");
</script>

<style>
  .nav {
    align-items: center;
  }

  .nav-left a {
    color: var(--font-color);
    padding: 1rem 1.2rem;
  }

  .logo {
    width: 60px;
    height: 60px;
  }

  .brand {
    padding: 0.5rem 1rem;
  }

  .languages {
    display: flex;
    gap: 0.2rem;
  }

  .languages button {
    margin: 0;
    padding: 0.6rem 1.2rem;
    min-width: 4.4rem;
    min-height: 4.4rem;
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--color-lightGrey);
    border-radius: 0;
    color: var(--color-grey);
    text-transform: uppercase;
    font-size: 1.4rem;
    cursor: pointer;
  }

  .languages button[aria-pressed="true"] {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
    font-weight: 600;
  }

  .nav-right {
    align-items: center;
    gap: 1rem;
  }

  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.4rem;
    height: 4.4rem;
    margin: 0;
    padding: 0;
    background: transparent;
    border: 1px solid var(--color-lightGrey);
    border-radius: 50%;
    color: var(--font-color);
    cursor: pointer;
  }

  .theme-toggle:hover {
    opacity: 1;
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  .theme-toggle svg {
    width: 2rem;
    height: 2rem;
  }

  hr {
    margin-top: 0;
  }

  @media (max-width: 600px) {
    .nav {
      flex-wrap: wrap;
      justify-content: center;
    }

    .nav-left a {
      padding: 1rem 0.8rem;
    }
  }
</style>

<nav class="nav" use:links>
  <div class="nav-left">
    <a href={contact} target="_blank" rel="noopener">
      {getString($lang, 'navbar-contact')}
    </a>
    <a href="/about">{getString($lang, 'navbar-about')}</a>
  </div>

  <div class="nav-center">
    <a href="/" class="brand" aria-label={getString($lang, 'navbar-home')}>
      <img class="logo" src="/images/logo.webp" alt="E-kot" />
    </a>
  </div>

  <div class="nav-right">
    <button
      type="button"
      class="theme-toggle"
      aria-label={themeLabel}
      title={themeLabel}
      on:click={theme.toggle}>
      {#if $theme === "dark"}
        <!-- sun: switch to light mode -->
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      {:else}
        <!-- moon: switch to dark mode -->
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      {/if}
    </button>
    <div
      class="languages"
      role="group"
      aria-label={getString($lang, 'navbar-language')}>
      {#each languages as language}
        <button
          type="button"
          lang={language}
          aria-pressed={language === $lang ? 'true' : 'false'}
          on:click={() => lang.set(language)}>{language}</button>
      {/each}
    </div>
  </div>
</nav>

<hr />
