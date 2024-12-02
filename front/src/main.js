import {createApp} from 'vue'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.mount('#app');
app.use(ArcoVue);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}




