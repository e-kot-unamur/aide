<script>
  export let version;
</script>

<style>
  .background {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    z-index: -1;
    text-align: center;
    background-color: var(--bg-secondary-color);
  }

  .logo {
    margin-top: 20vh;
  }

  .semi-transparent {
    opacity: 0.04;
  }

  .bottom-right {
    position: fixed;
    bottom: 0;
    right: 0;
    color: var(--color-darkGrey);
    margin: 10px;
    opacity: 0.5;
  }
</style>

<div class="background">
  <img class="logo semi-transparent" src="images/logo.png" alt="E-kot logo" />
  <p class="bottom-right">v{version}, © tsepton</p>
</div>
<p class="bottom-right"></p>
