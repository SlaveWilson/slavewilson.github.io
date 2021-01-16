import { createApp } from 'vue'
import App from './App.vue'
const AOS = require('aos')
import './registerServiceWorker'
import "./assets/styles/index.scss"
import "alertifyjs/build/css/alertify.css"
import "alertifyjs/build/css/themes/semantic.css"
import "alertifyjs/build/alertify"
import 'aos/dist/aos.css'

const app = createApp(App)
new AOS.init()
app.mount("#app")
