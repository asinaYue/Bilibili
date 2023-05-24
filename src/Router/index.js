import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/page/Home'
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home
        }
    ]
})