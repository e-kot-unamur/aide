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
</style>

<nav class="nav">
  <div class="nav-left" use:links>
    <a href="/" class="brand">
      <img class="logo" src="images/logo.png" alt="E-kot logo" />
    </a>
    <details class="dropdown">
      <summary class="tag outline">{$lang}</summary>
      <div class="card">
        {#each languages as language}
          <p>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a
              on:click={() => lang.set(language)}>{language}</a>
          </p>
        {/each}
      </div>
    </details>
  </div>

  <div class="nav-right" use:links>
    <a class="active" href={contact} target="_blank">{getString($lang, "navbar-contact")}</a>
    <a href="/about">{getString($lang, "navbar-about")}</a>
  </div>
</nav>

<hr />
