<script>
  import { Col, Row } from "svelte-chota";
  import diagrams from "../../diagrams/diagram.js";
  import Diagram from "./Diagram.svelte";

  let selection;
  function focus(ref) {
    selection = ref;
  }
</script>

<Row>
  {#if selection >= 0}
    <Col>
      <Diagram diagram={diagrams[selection]} on:back={focus} node={1} />
    </Col>
  {:else}
    {#each diagrams as diagram, i}
      <Col>
        <Diagram on:selection={() => focus(i)} {diagram} />
      </Col>
    {/each}
  {/if}
</Row>
