import HMR from '@roxi/routify/hmr'
import App from './App.svelte';

const app = HMR(App, { target: document.body, props: { theme: "glow.theme" } }, 'routify-app')
if (window.localStorage.getItem('fs') === null) {
    window.localStorage.setItem("fs", JSON.stringify({ "created": Date.now(), "lastUpdated": Date.now(), "files": []}));
}
window.solar = {settings: {theme: "C:/Windows/Resources/Themes/Glow.theme"}};

export default app;