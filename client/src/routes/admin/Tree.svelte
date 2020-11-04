<script>
  import diagrams from "../../static/diagrams/diagram.js";
  export let code = "";

  let nodes, root;

  function refIsNextNode(index, ref) {
    return nodes[index + 1] === ref.toString();
  }

  $: (root = code.split("-")[0]),
    (nodes = code
      .split("-")
      .slice(1)
      .filter((str) => str !== ""));
</script>

{#if diagrams[root]}
  <div class="card">
    <header>
      <h4>{diagrams[root][0].text}</h4>
    </header>
    <hr />
    {#each nodes as node, index}
      {#if diagrams[root][node]}
        <p>
          {@html diagrams[root][node].text}
        </p>
        {#each diagrams[root][node].answers as { text, ref }}
          {#if refIsNextNode(index, ref)}
            <p class="text-grey text-right">{text}</p>
            <hr />
          {/if}
        {/each}
      {:else}
        <p>Erreur, le noeud {node} n'existe pas.</p>
      {/if}
    {/each}
  </div>
{/if}
