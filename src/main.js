import App from './App.svelte';
import './app.css';

import db, { getDayData } from './db';

const app = new App({
    target: document.getElementById('app'),
    props: {
        today: getDayData()
    }
})

export default app;