<script>
  import { links } from "svelte-routing";
  import lang, { getString } from "../../stores/lang.js";

  const contact = "https://www.messenger.com/t/ekotnamur";
  const languages = ["fr", "en"];
</script>

<style>
  .logo {
    width: 15vh;
    max-width: 60px;
    height: 15vh;
    max-height: 60px;
  }

  a:hover {
    cursor: pointer;
  }
</style>

<nav class="nav">
  <div class="nav-left">
    <a href={contact} target="_blank" rel="noopener">{getString($lang, 'navbar-contact')}</a>
    <a href="/about">{getString($lang, 'navbar-about')}</a>
  </div>

  <div class="nav-center">
    <a href="/" class="brand">
      <img class="logo" src="images/logo.webp" alt="E-kot logo" />
    </a>
  </div>

  <div class="nav-right tabs" use:links>
    {#each languages as language}
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
          on:click={() => lang.set(language)}
          class={language === $lang ? 'active' : 'unactive'}>{language}</a>
    {/each}
  </div>
</nav>

<hr />
