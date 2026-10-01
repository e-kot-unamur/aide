<script>
  import { Router, Route } from "svelte-routing";
  import Navbar from "./routes/overall/Navbar.svelte";
  import Background from "./routes/overall/Background.svelte";
  import Diagrams from "./routes/diagrams/Diagrams.svelte";
  import About from "./routes/about/About.svelte";
  import Admin from "./routes/admin/Admin.svelte";
  import Fallback from "./routes/fallback/Fallback.svelte";
  // Applies the light / dark theme (system setting or user's choice).
  import "./stores/theme.js";

  export let version;
  export let url = "";
</script>

<style>
  :global(:root) {
    --color-error: #f15152;
    --color-success: #20a169;
  }

  /* The theme variables live on <html> so that the whole page (body,
     overscroll area, links...) uses them, not only the content. */
  :global(html.light-theme) {
    --bg-color: #fff;
    --bg-secondary-color: #f5f5f5;
    --font-color: #333;
    --color-primary: #197bbd;
    --color-lightGrey: #d2d6dd;
    --color-grey: #6b6e6d;
    --color-darkGrey: #2e3532;
    color-scheme: light;
  }

  :global(html.dark-theme) {
    --bg-color: #3d3d3d;
    --bg-secondary-color: #292929;
    --font-color: #eeeeee;
    --color-primary: #5db1ea;
    --color-lightGrey: #5f6468;
    --color-grey: #c3c9ce;
    --color-darkGrey: #607180;
    color-scheme: dark;
  }

  /* Readable text on primary buttons in dark mode (light blue background). */
  :global(html.dark-theme .button.primary) {
    color: #10212e;
  }

  /* Visible keyboard focus everywhere (mouse clicks don't show it). */
  :global(:focus-visible) {
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
  }

  /* Text only read by screen readers. */
  :global(.sr-only) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .container {
    max-width: 72rem;
    padding-top: 3vh;
    padding-bottom: 10vh;
  }
</style>

<Background {version} />
<Navbar />
<div class="container">
  <Router {url}>
    <!-- Pages are given as children (not `component={...}`): this is the
         form that works with Svelte 5. -->
    <Route path="/"><Diagrams /></Route>
    <Route path="/about"><About /></Route>
    <Route path="/admin"><Admin /></Route>
    <Route path=""><Fallback /></Route>
  </Router>
</div>
