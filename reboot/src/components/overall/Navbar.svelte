<script>
  import { Nav } from "svelte-chota";

  export let version;
</script>

<style>
  .logo {
    width: 15vh;
    max-width: 60px;
    height: 15vh;
    max-height: 60px;
  }

  .unactive {
    color: var(--color-darkGrey);
  }
</style>

<Nav>
  <a slot="left" href="/" class="brand">
    <img class="logo" src="images/logo.png" alt="E-kot logo" />
  </a>
  <p class="unactive" href="/" slot="left">v{version}</p>


  <a
    slot="right"
    href="https://www.messenger.com/t/ekotnamur"
    target="_blank">Prendre Contact</a>
  <a slot="right" class="active" href="/">A propos</a>
</Nav>
