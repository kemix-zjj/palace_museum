import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入路由
import router from './router'

//引入swiper样式
import "swiper/css/swiper.min.css";

//引入MockServe.js-----mock数据
import './mock/mockServer';

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')