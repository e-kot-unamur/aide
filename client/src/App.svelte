<script>
  import { Router, Route } from "svelte-routing";
  import Navbar from "./routes/overall/Navbar.svelte";
  import Background from "./routes/overall/Background.svelte";
  import Diagrams from "./routes/diagrams/Diagrams.svelte";
  import About from "./routes/about/About.svelte";
  import Admin from "./routes/admin/Admin.svelte";
  import Fallback from "./routes/fallback/Fallback.svelte";

  export let version;
  export let url = "";
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

  .container {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
</style>

<Background {version} />
<Navbar />
<div class="container">
  <Router {url}>
    <Route path="/" component={Diagrams} />
    <Route path="/about" component={About} />
    <Route path="/admin" component={Admin} />
    <Route path="" component={Fallback} />
  </Router>
</div>
