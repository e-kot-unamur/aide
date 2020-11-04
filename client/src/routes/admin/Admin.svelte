<script>
  import translations from "../../static/diagrams/diagram.js";
  import lang, { getString } from "../../stores/lang.js";
  import Tree from "./Tree.svelte";

  let code = "";
  let diagram;

  $: diagram = translations[$lang][code.charAt(0)];
</script>

<main>
  <p>
    <label for="name">{getString($lang, 'admin-errorCode')}</label>
    <input placeholder="0-2-4-7..." bind:value={code} />
  </p>
  <Tree {code} {diagram} />
</main>
