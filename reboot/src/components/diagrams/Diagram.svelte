<script>
  import { Card, Button } from "svelte-chota";
  import { createEventDispatcher } from "svelte";
  import htmlParser from "../../lib/HtmlParser.js";
  export let diagram;

  export let node = 0;
  export let hideButton = false;

  let refs = [];
  let selected = false;

  const dispatch = createEventDispatcher();

  function goToNode(ref) {
    refs = [...refs, node];
    node = ref;
  }

  function goBack() {
    refs.length ? (node = refs.pop()) : dispatch("back");
  }

  $: node, (selected = node > 0), dispatch("selection");
</script>

<Card style="height: 100%;">
  {#if !selected}
    <h4>{diagram[0].text}</h4>
  {:else}
    <p class="text-justify">
      {@html htmlParser.parseContact(diagram[node].text)}
    </p>
  {/if}

  <div slot="footer" class="answers text-right">
    {#each diagram[node].answers as answer}
      <Button clear on:click={() => goToNode(answer.ref)}>{answer.text}</Button>
    {/each}
    {#if !hideButton}
      <Button outline secondary on:click={goBack}>Retour.</Button>
    {/if}
  </div>
</Card>
