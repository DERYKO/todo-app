<template>
    <li
        class="flex row items-center justify-between w-full py-1 px-4 my-1 rounded border bg-gray-100 text-gray-600"
    >
        <div class="items-center column">
            <input
                class="mx-1"
                type="checkbox"
                :checked="todo.checked === 1"
                @input="$emit('toggle', {checked: todo.checked === 1 ? 0: 1,id: todo.id,todo: todo.todo})"
            >
            <span :class="{'line-through': todo.checked === 1}">{{ todo.todo }}</span>
            -
            <span :class="{'line-through': todo.checked === 1}">{{ todo.user.name }}</span>
        </div>
        <div class="items-center row-reverse">
      <span class="px-4 py-2 float-right" @click="$emit('remove', todo.id)">
        <i class="fas fa-times"/>
      </span>
        </div>
    </li>
</template>
<script>
export default {
    props: {
        todo: {type: Object, required: true}
    }
};
</script>
