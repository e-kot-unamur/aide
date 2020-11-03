<script>
  import { link } from "svelte-routing";
  import lang, { getString } from "../../stores/lang.js";
</script>

<style>
  main {
    margin-top: 10rem;
  }
</style>

<main>
  {@html getString($lang, "fallback-inner")}
</main>
