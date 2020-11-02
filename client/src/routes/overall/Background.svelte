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
    background-color: var(--color-background);
  }

  .logo {
    margin-top: 20vh;
  }

  .semi-transparent {
    opacity: 0.15;
  }
</style>

<div class="background">
  <img class="logo semi-transparent" src="images/logo.png" alt="E-kot logo" />
  <p class="semi-transparent">v{version}</p>
</div>
