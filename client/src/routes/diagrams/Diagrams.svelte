<script>
  import translations from "../../static/diagrams/diagram.js";
  import lang from "../../stores/lang.js";
  import Diagram from "./Diagram.svelte";
	import { fade } from 'svelte/transition';

  let selection;

  function focus(ref) {
    selection = ref;
  }

  $: diagrams = translations[$lang];
</script>

<style>
  .diagram {
    margin-top: 2rem;
  }
</style>

<main in:fade>
  {#if selection >= 0}
    <Diagram
      id={selection}
      diagram={diagrams[selection]}
      on:back={focus}
      node={1} />
  {:else}
    {#each diagrams as diagram, id}
      <div class="diagram">
        <Diagram
          {id}
          on:selection={() => focus(id)}
          {diagram}
          hideButton={true} />
      </div>
    {/each}
  {/if}
</main>
