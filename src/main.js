import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/layui.css'
import './assets/style.css'
import './assets/reset.css'
import './assets/iconfont.css'

const app = createApp(App);
app.use(router);
app.mount('#app');

