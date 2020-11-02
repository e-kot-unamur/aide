<script>
  import { Col, Row } from "svelte-chota";
  import diagrams from "../../static/diagrams/diagram.js";
  import Diagram from "./Diagram.svelte";

  let selection;
  function focus(ref) {
    selection = ref;
  }
</script>

<style>
  main {
    max-height: min-content;
    min-height: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<main>
  <Row>
    {#if selection >= 0}
      <Col>
        <Diagram diagram={diagrams[selection]} on:back={focus} node={1} />
      </Col>
    {:else}
      {#each diagrams as diagram, i}
        <Col>
          <Diagram on:selection={() => focus(i)} {diagram} hideButton={true} />
        </Col>
      {/each}
    {/if}
  </Row>
</main>
