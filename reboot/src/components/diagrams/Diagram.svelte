<script>
  import { Card, Button } from "svelte-chota";
  import { createEventDispatcher } from "svelte";
  import htmlParser from "../../lib/HtmlParser.js"
  export let diagram;

  export let node = 0;
  let refs = [];
  let selected = false;

  const dispatch = createEventDispatcher();

  function goToNode(ref) {
    refs = [...refs, node];
    node = ref;
  }

  function goBack() {
    refs.length ? (node = refs.pop()) : dispatch("back");;
  }

  $: node, (selected = refs.length > 0), dispatch("selection");
</script>

<Card>
  <h4 slot="header">
    {#if !selected}{diagram[0].text}{/if}
  </h4>

  <span> {@html htmlParser.parseContact(diagram[node].text)} </span>

  <div slot="footer" class="is-right">
    {#each diagram[node].answers as answer}
      <Button clear on:click={() => goToNode(answer.ref)}>{answer.text}</Button>
    {/each}
    <Button on:click={goBack}>Retour</Button>
  </div>
</Card>
