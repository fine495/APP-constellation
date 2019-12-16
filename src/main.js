// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Icon from 'vue-svg-icon/Icon.vue'
import axios from 'axios'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.component('icon', Icon)
Vue.prototype.$http = axios
//指定json
axios.defaults.headers['Content-Type'] = 'application/json'
//url前自动加上 /api
axios.defaults.baseURL = '/api'

//导入muse-ui
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);



//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

 

/* eslint-disable no-new */
// document.addEventListener('deviceready', function() {
	new Vue({
		el: '#app',
		router,
		components: { App },
		template: '<App/>'
	})
// 	window.navigator.splashscreen.hide()
// }, false);
