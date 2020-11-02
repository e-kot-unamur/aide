<script>
  import { navigate } from "svelte-routing";
  import { Nav } from "svelte-chota";

  function goto(page) {
    navigate(`/${page}`);
  }
</script>

<style>
  .logo {
    width: 15vh;
    max-width: 60px;
    height: 15vh;
    max-height: 60px;
  }
</style>

<Nav>
  <!-- svelte-ignore a11y-missing-attribute -->
  <a slot="left" class="brand" on:click={(e) => goto('home')}>
    <img class="logo" src="images/logo.png" alt="E-kot logo" />
  </a>

  <!-- svelte-ignore a11y-missing-attribute -->
  <a
    slot="right"
    class="active"
    href="https://www.messenger.com/t/ekotnamur"
    target="_blank">Prendre Contact</a>

  <!-- svelte-ignore a11y-missing-attribute -->
  <a slot="right" class="active" on:click={() => goto('about')}>A propos</a>
</Nav>
