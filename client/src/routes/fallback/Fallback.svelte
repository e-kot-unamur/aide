<script>
  // The link is used inside the @html
  import { link } from "svelte-routing";
  import lang, { getString } from "../../stores/lang.js";
</script>

<main>
  <h1>{getString($lang, 'fallback-title1')}</h1>
  <p>{getString($lang, 'fallback-text1')}</p>
  <p>{@html getString($lang, 'fallback-text2')}</p>
  <hr />
  <h6>{getString($lang, 'fallback-title2')}</h6>
</main>
