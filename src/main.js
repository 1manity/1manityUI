import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './styles/index.scss'
import Button from "@/components/Button/Button.vue";

const app = createApp(App)

app.use(router)

app.component('Iui-Button',Button)
app.mount('#app')
