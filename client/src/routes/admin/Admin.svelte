<script>
  import translations from "../../static/diagrams/diagram.js";
  import lang, { getString } from "../../stores/lang.js";
  import Tree from "./Tree.svelte";
	import { fade } from 'svelte/transition';

  let code = "";
  let diagram;

  $: diagram = translations[$lang][code.trim().charAt(0)];
</script>

<main in:fade>
  <p>
    <label for="name">{getString($lang, 'admin-errorCode')}</label>
    <input placeholder="0-2-4-7..." bind:value={code} />
  </p>
  <Tree {code} {diagram} />
</main>
