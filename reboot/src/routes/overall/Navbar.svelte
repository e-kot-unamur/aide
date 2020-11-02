<script>
  import { link } from "svelte-routing";
  import { Nav } from "svelte-chota";
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
  <a href="/" slot="left" class="brand" use:link>
    <img class="logo" src="images/logo.png" alt="E-kot logo" />
  </a>

  <a
    slot="right"
    class="active"
    href="https://www.messenger.com/t/ekotnamur"
    target="_blank">Prendre Contact</a>

  <a href="/about" slot="right" class="active" use:link>A propos</a>
</Nav>
