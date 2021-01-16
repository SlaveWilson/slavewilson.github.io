import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import "./assets/styles/index.scss"
import "alertifyjs/build/css/alertify.css"
import "alertifyjs/build/css/themes/semantic.css"
import "alertifyjs/build/alertify"

const app = createApp(App)
app.mount("#app")
