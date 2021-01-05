<script>
  import { createEventDispatcher } from "svelte";
  import lang, { getString } from "../../stores/lang.js";
  import htmlParser from "../../lib/HtmlParser.js";

  export let diagram;
  export let id = "";
  export let node = 0;
  export let hideButton = false;

  let refs = [];
  let selected = false;
  let errorCode = "";

  const dispatch = createEventDispatcher();

  function goToNode(ref) {
    refs = [...refs, node];
    node = ref;
  }

  function goBack() {
    refs.length ? (node = refs.pop()) : dispatch("back");
  }

  // FIXME : Oh common !
  function copyText(text) {
    const temp = document.createElement("textarea");
    document.body.appendChild(temp);
    temp.value = text;
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  }

  $: node, (selected = node > 0), dispatch("selection");
  $: errorCode = [id, ...refs, node].join("-");
</script>

<style>
  .answer {
    color: var(--color-primary);
  }

  .answer:hover {
    cursor: pointer;
    opacity: 0.75;
  }

  .error-code {
    transition-duration: 0.8s;
  }

  .error-code:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .error-code:active {
    transition-duration: 0s;
    color: var(--color-success) !important;
  }
</style>

<div class="card">
  {#if !selected}
    <h5>{diagram[0].text}</h5>
  {:else}
    <p class="text-justify">
      {@html htmlParser.parseContact(diagram[node].text)}
    </p>
    <p
      class="text-grey text-justify error-code"
      on:click={(e) => copyText(e.target.childNodes[2].textContent)}>
      {getString($lang, 'diagram-errorCode')} : {errorCode}
      {getString($lang, 'diagram-copy')}.
    </p>
  {/if}

  <hr />

  <footer>
    {#if diagram[node].answers.length}<br />{/if}
    {#each diagram[node].answers as answer}
      <!-- Buttons from chota are broken if text is too long... -->
      <div class="text-center answer" on:click={goToNode(answer.ref)}>
        {answer.text}
      </div>
      <br />
    {/each}
    {#if !hideButton}
      <hr />
      <button
        class="button outline secondary"
        on:click={goBack}>{getString($lang, 'diagram-back')}</button>
    {/if}
  </footer>
</div>
