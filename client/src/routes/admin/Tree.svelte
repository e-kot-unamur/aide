<script>
  import lang, { getString } from "../../stores/lang.js";
  export let code, diagram;

  let nodes;

  function refIsNextNode(index, ref) {
    return nodes[index + 1] === ref.toString();
  }

  $: nodes = code
    .split("-")
    .slice(1)
    .filter((str) => str !== "");
</script>

{#if diagram}
  <div class="card">
    <header>
      <h4>{diagram[0].text}</h4>
    </header>
    <hr />
    {#each nodes as node, index}
      {#if diagram[node]}
        <p>
          {@html diagram[node].text}
        </p>
        {#each diagram[node].answers as { text, ref }}
          {#if refIsNextNode(index, ref)}
            <p class="text-grey text-right">{text}</p>
            <hr />
          {/if}
        {/each}
      {:else}
        <p>{getString($lang, 'admin-error')}</p>
      {/if}
    {/each}
  </div>
{/if}
