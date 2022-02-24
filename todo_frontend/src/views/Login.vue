<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100 w-full">
        <div class="px-8 py-12 mt-4 text-left bg-white shadow-lg w-1/4">
            <div class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-center">Login to your account</h3>
            <form @submit.prevent="authenticate">
                <div class="mt-4">
                    <div>
                        <label class="block" for="email">Email</label>
                        <input v-model="email" type="email" id="email" placeholder="Email"
                               class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                    </div>
                    <div class="mt-4">
                        <label class="block">Password</label>
                        <input v-model="password" type="password" placeholder="Password"
                               class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                    </div>
                    <div class="flex items-baseline justify-between">
                        <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login
                        </button>
                        <router-link to="/register" class="text-sm text-blue-600 hover:underline">Not Registered ? Click here.</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import {mapActions} from "vuex";

export default {
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions({
            login: 'login'
        }),
        authenticate(){
            this.login({
                email: this.email,
                password: this.password
            })
        }
    }
}

</script>
