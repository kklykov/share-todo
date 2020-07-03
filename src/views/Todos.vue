
<template>
  <div>
    <div class="title">
      <h2>Todos</h2>
    </div>
    <!-- <router-link to="/">Home</router-link> -->
    <div class="loader" v-if="loading"><Loader ></Loader></div>
    <div v-else>
      <AddTodo @add-todo="addTodo" />
      <TodoList v-bind:todos="filteredTodos" @remove-todo="removeTodo" />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/loaders/Loader";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      options: [
        { id: 1, text: "All", value: "all" },
        { id: 2, text: "Completed", value: "completed" },
        { id: 3, text: "Not Completed", value: "not-completed" }
      ],
      loading: true,
      filter: "all"
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=4")
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.loading = false;
          this.todos = json;
        }, 600);
      });
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      if (this.filter === "completed") {
        return this.todos.filter(t => t.completed);
      }
      if (this.filter === "not-completed") {
        return this.todos.filter(t => !t.completed);
      }
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    }
  }
};
</script>

<style  scoped>

div.title,
div.loader {
  position: relative;
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
}

div.loader {
  margin-top: 4rem;
}

</style>

