import { mount } from 'svelte';
import App from './App.svelte';

const app = mount(App, {
    target: document.body,
    props: {
        version: '2.4'
    }
});

export default app;
