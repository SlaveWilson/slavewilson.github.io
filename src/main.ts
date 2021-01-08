import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import "./assets/styles/index.scss"

const app = createApp(App)
app.mount("#app")
