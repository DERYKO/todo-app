import Vue from 'vue'
import Vuex from 'vuex'
import api from "./api";
import router from "../router";

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        todos: []
    },
    getters: {
        todos: state => state.todos,
        loggedIn() {
            return !!window.localStorage.getItem('token');
        },
    },
    mutations: {
        setTodos(state, todos) {
            state.todos = todos
        }
    },
    actions: {
        async login(context, credentials) {
            try {
                const {token} = await api.login(credentials);
                localStorage.setItem('token', token);
                window.location.href = '/home';
            } catch (e) {
                alert(e.response.data.message)
            }
        },
        async register(context, payload) {
            try {
                await api.register(payload);
                await router.push('/login')
            } catch (e) {
                alert(e.response.data.message)
            }
        },
        async signOut() {
            try {
                await api.signOut();
                await router.push('/login')
            } catch (e) {
                console.log(e);
            }
        },
        async getTodos({commit}, filters) {
            try {
                const response = await api.getTodos(filters);
                console.log(response);
                commit('setTodos', response);
            } catch (e) {
                alert(e.response.data.message)
            }
        },
        async postTodo({dispatch}, payload) {
            try {
                await api.createTodo(payload);
                dispatch('getTodos', {})
            } catch (e) {
                alert(e.response.data.message)
            }
        },
        async putTodo({dispatch}, payload) {
            try {
                await api.updateTodo(payload);
                dispatch('getTodos', {})
            } catch (e) {
                alert(e.response.data.message)
            }
        },
        async removeTodo({dispatch}, id) {
            try {
                await api.deleteTodo(id);
                dispatch('getTodos', {})
            } catch (e) {
                alert(e.response.data.message)
            }
        }

    }
})
