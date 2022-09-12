import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);


//引入路由组件
import Home from '../views/Home/index.vue'
import Detail from '../views/Detail/index.vue'

//对外暴露VueRouter类的实例
export default new VueRouter({
    routes: [{
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/detail',
            name: 'Detail',
            component: Detail
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})