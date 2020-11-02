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

<style>
  .answer {
    color: var(--color-primary);
  }

  .answer:hover {
    cursor: pointer;
    opacity: 0.75;
  }
</style>

<Card>
  {#if !selected}
    <h4>{diagram[0].text}</h4>
  {:else}
    <p class="text-justify">
      {@html htmlParser.parseContact(diagram[node].text)}
    </p>
  {/if}

  <div slot="footer">
    {#if diagram[node].answers.length}
    <br>
    {/if}
    {#each diagram[node].answers as answer}
      <!-- Buttons from chota are broken if text is too long... -->
      <div class="text-center answer" on:click={goToNode(answer.ref)}>
        {answer.text}
      </div>
      <br>
    {/each}
    {#if !hideButton}
      <hr />
      <Button outline secondary on:click={goBack}>Retour.</Button>
    {/if}
  </div>
</Card>
