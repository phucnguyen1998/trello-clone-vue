import { createApp } from 'vue'
import App from './App.vue'
import {
    Layout,
    Dropdown,
    Menu,
    Button,
    Row,
    Col
  } from 'ant-design-vue';

const app = createApp(App);
app.config.productionTip = false;
app.use(Layout);
app.use(Dropdown);
app.use(Menu);
app.use(Button);
app.use(Row);
app.use(Col);
app.mount('#app');
