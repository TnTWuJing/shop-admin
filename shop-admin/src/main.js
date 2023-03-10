import {
    createApp
} from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from "./router/index"
const app = createApp(App)
app.use(router)
app.use(ElementPlus)

import 'virtual:windi.css'
app.mount('#app')