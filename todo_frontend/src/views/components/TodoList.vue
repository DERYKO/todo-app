<template>
    <div class="flex justify-center min-h-screen bg-gray-100 w-full">
        <div class="px-8 py-12 mt-4 text-left bg-white shadow-lg w-full">
            <button @click="logout" class="mb-2 border">
                <div class="flex p-2">
                    <span class="mr-2">Logout</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </div>
            </button>
            <div class="new-item">
                <new-todo-form @submit="postTodo"/>
                <ul>
                    <todo-item
                        v-for="todo in todos"
                        :key="todo.id"
                        @toggle="putTodo"
                        @remove="id => removeTodo(id)"
                        :todo="todo"
                    />
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import NewTodoForm from "./NewTodoForm";
import TodoItem from "./TodoItem";
import {mapActions, mapGetters} from "vuex";

export default {
    components: {NewTodoForm, TodoItem},
    mounted() {
        this.getTodos({})
    },
    computed: {
        ...mapGetters({
            todos: 'todos'
        })
    },
    methods: {
        ...mapActions({
            getTodos: 'getTodos',
            postTodo: 'postTodo',
            putTodo: 'putTodo',
            removeTodo: 'removeTodo',
            signOut: 'signOut'
        }),
        logout(){
           this.signOut();
        }
    }
};
</script>
