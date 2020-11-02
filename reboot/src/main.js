import App from './App.svelte';

const app = new App({
    target: document.body,
    hydrate: true,
    props: {
        version: '2.0'
    }
});

export default app;