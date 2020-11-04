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

  const date = new Date();
  const now = date.getHours() * 60 + date.getMinutes();
  const day = 8 * 60 < now && now <= 20 * 60;
</script>

<style>
  :global(:root) {
    --color-error: #f15152;
    --color-success: #20a169;
  }

  :global(.light-theme) {
    --bg-color: #fff;
    --bg-secondary-color: #f5f5f5;
    --font-color: #333;
    --color-primary: #197bbd;
    --color-lightGrey: #adaeae;
    --color-grey: #898c8b;
    --color-darkGrey: #2e3532;
  }

  :global(.dark-theme) {
    --bg-color: #3d3d3d;
    --bg-secondary-color: #292929;
    --font-color: #eeeeee;
    --color-primary: #5db1ea;
    --color-lightGrey: #dce1e4;
    --color-grey: #d1d7dc;
    --color-darkGrey: #607180;
  }

  .container {
    padding-top: 5vh;
    padding-bottom: 10vh;
  }
</style>

<main class={day ? 'light-theme' : 'dark-theme'}>
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
</main>
