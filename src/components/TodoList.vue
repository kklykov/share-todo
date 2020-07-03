<template>
  <div>
    <ul v-if="todos.length">
      <TodoItem
        v-for="(todo, i) of todos"
        v-bind:todo="todo"
        v-bind:index="i"
        v-bind:key="i"
        v-on:remove-todo="removeTodo"
      />
    </ul>
    <ul v-else>
      <TodoItem
        v-bind:todo="notodo"
        v-bind:index="notodo.index"
        v-bind:key="notodo.key"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  data() {
    return {
      notodo: {
        completed: false,
        id: 0,
        title: 'No todos, Add todos to start!',
        index: 0,
        key: -1
      }
    };
  },
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  background-color: #202e3b;
  min-height: 94px;
}
</style>
