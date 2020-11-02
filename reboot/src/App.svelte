<script>
  import { Container } from "svelte-chota";
  import Navbar from "./components/overall/Navbar.svelte";
  import Diagrams from "./components/diagrams/Diagrams.svelte";
  import Background from "./components/overall/Background.svelte";

  export let version;
</script>

<style>
  :global(:root) {
    --color-primary: #3a5ebb;
    --color-background: #ebe8e8;
    --color-lightGrey: #bdbdbd;
    --color-grey: #857a7a;
    --color-darkGrey: #545252;
    --color-error: #f64740;
    --color-success: #0cf574;
    --grid-maxWidth: 120rem;
    --grid-gutter: 2rem;
    --font-size: 1.6rem;
    --font-family: "Helvetica Neue", sans-serif;
  }
</style>

<Container style="height: 100%;">
  <Background {version} />
  <Navbar />
  <Diagrams />
</Container>
