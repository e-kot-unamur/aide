<script>
  import { Container } from "svelte-chota";
  import { Router, Route } from "svelte-routing";
  import Navbar from "./routes/overall/Navbar.svelte";
  import Background from "./routes/overall/Background.svelte";
  import Diagrams from "./routes/diagrams/Diagrams.svelte";
  import About from "./routes/about/About.svelte";
  import Admin from "./routes/admin/Admin.svelte";

  export let version;
  export let url="";
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
  <Router {url}>
    <Route path="/home" component={Diagrams} />
    <Route path="/about" component={About} />
    <Route path="/admin" component={Admin} />
  </Router>
</Container>
