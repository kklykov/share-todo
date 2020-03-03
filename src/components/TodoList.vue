<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, i) of todos"
        v-bind:todo="todo"
        v-bind:index="i"
        v-bind:key="i"
        v-on:remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  props: ["todos"],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    }
  }
};
</script>

<style scoped >
ul {
  list-style: none;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  background-color: #202e3b;
}
</style>
