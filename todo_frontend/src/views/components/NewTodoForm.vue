<template>
    <div class="new-todo-form flex column">
        <tailwind-input type="text" v-model="todo" placeholder="Nova todo" @submit="submitTodo"/>
        <elevated-button class="ml-1" type="button" @click="submitTodo">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
        </elevated-button>
    </div>
</template>
<script>
import TailwindInput from "./TailwindInput";
import ElevatedButton from "./ElevatedButton";

export default {
    components: {TailwindInput, ElevatedButton},
    data() {
        return {todo: ""};
    },
    methods: {
        submitTodo: function () {
            this.$emit("submit", {todo: this.todo,checked: false});
            this.todo = "";
        }
    }
};
</script>
