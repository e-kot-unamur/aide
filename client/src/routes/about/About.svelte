<script>
  import lang, { getString } from "../../stores/lang.js";
  import { fade } from 'svelte/transition';
</script>

<main in:fade>
  <h1>{getString($lang, 'about-title1')}</h1>
  <hr />
  <h3>{getString($lang, 'about-title2')}</h3>
  <p class="text-justify">{getString($lang, 'about-text1')}</p>

  <h3>{getString($lang, 'about-title3')}</h3>
  <p class="text-justify">{getString($lang, 'about-text2')}</p>

  <h3>{getString($lang, 'about-title4')}</h3>
  <p class="text-justify">{getString($lang, 'about-text3')}</p>
</main>
