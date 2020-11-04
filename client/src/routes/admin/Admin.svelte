<script>
  import lang, { getString } from "../../stores/lang.js";
  import Tree from "./Tree.svelte";

  let code = "";
</script>

<style>
  main {
    margin-top: 10rem;
  }
</style>

<main>
  <p>
    <label>{getString($lang, "admin-errorCode")}</label>
    <input placeholder="0-2-4-7..." bind:value={code} />
  </p>

  <Tree {code} />
</main>
