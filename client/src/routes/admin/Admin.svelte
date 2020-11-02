<script>
  import { Input } from "svelte-chota";
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
    <Input placeholder="Error code" bind:value={code} />
  </p>

  <Tree {code} />
</main>
