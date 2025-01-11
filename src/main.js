import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import Pouch from 'pouchdb-browser';

createApp(App).mount('#app');

const db = new Pouch('kittens');

console.log(db)