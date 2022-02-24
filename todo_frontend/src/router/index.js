import Vue from 'vue'
import VueRouter from 'vue-router'
import authMiddleware from './middlewares/auth-middleware';

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        components: {
            default: () => import(/* webpackChunkName: "auth" */ '../views/Login'),
        },
        meta: {
            auth: false
        }
    },
    {
        path: '/register',
        name: 'register',
        components: {
            default: () => import(/* webpackChunkName: "auth" */ '../views/Register'),
        },
        meta: {
            auth: false
        }
    },
    {
        path: '/home',
        name: 'home',
        components: {
            default: () => import(/* webpackChunkName: "auth" */ '../views/components/TodoList'),
        },
        meta: {
            auth: true
        }
    },
    {
        path: '*',
        redirect: '/login',
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})
router.beforeEach((to, from, next) => {
    let result = null;
    if (to.meta.auth) {
        result = authMiddleware(to, next);
    }else{
        result = next();
    }
    return result;
});

export default router
