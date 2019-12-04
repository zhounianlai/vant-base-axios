import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from './store/index';
import config from "./config";
import useVant from "./uiComponents/vant/index";
import api from './api/index';
// import { httpJson, httpForm, httpMultipart } from "./libs/http";
import $cookie from "./storage/cookie";
import $localStorage from "./storage/localStorage";
import $sessionStorage from "./storage/sessionStorage";
import globalRegister from "./components/index";
import "vant/lib/icon/local.css";

// TODO: 真机调试时使用插件，切记打包上线时注释掉！！！！！！！！！
// import VConsole from "vconsole";
// var vConsole = new VConsole();

Vue.use(api)

Vue.config.productionTip = false

// Use mobile UI of Vant.
useVant(Vue);

// Ourself defined components global register.
globalRegister(Vue);

// Global config.
Vue.prototype.$config = config;

// Global request method of params format is JSON.
// Vue.prototype.$httpJson = httpJson;

// // Global request method of params format is FormData.
// Vue.prototype.$httpForm = httpForm;

// // Global request method of params format is multipart.
// Vue.prototype.$httpMultipart = httpMultipart;

// Global cookie method $cookie.
Vue.prototype.$cookie = $cookie;

// Global localStorage method $localStorage
Vue.prototype.$localStorage = $localStorage;

// Global sessionStorage method $sessionStorage
Vue.prototype.$sessionStorage = $sessionStorage;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

