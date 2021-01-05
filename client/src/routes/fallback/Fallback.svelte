<script>
  import { links } from "svelte-routing";
  import { fade } from 'svelte/transition';
  import lang, { getString } from "../../stores/lang.js";
</script>

<main in:fade>
  <h1>{getString($lang, 'fallback-title1')}</h1>
  <p>{getString($lang, 'fallback-text1')}</p>
  <span use:links>{@html getString($lang, 'fallback-text2')}</span>
  <hr />
  <h6>{getString($lang, 'fallback-title2')}</h6>
</main>
