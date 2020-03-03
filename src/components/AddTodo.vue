<template>
  <form @submit.prevent="onSubmit">
    <input placeholder="Add new task..." type="text" v-model="title" required />
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("Submit", this.title);
      if (this.title.trim()) {
        const todo = {
          id: Date.now(),
          title: this.title,
          completed: false
        };

        this.$emit("add-todo", todo);
        this.title = "";
      }
    }
  }
};
</script>


<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  width: 80%;
  border-radius: 4px;
  border: 1px solid #142b31;
  padding-left: 0.5rem;
  outline: none;
  background-color: #161b1f;
  color: #b5cbd3;
  line-height: 30px;
  letter-spacing: 1px;
  margin: 0rem 1rem 1rem 1rem;
  transition: all 0.3s ease-out;
}

input:valid,
input:hover {
  border: 1px solid #04819e;
  border-radius: 4px;
}

input:focus {
  border: 1px solid #04819e;
  -webkit-box-shadow: 0px 0px 15px -4px rgba(4, 129, 158, 1);
  -moz-box-shadow: 0px 0px 15px -4px rgba(4, 129, 158, 1);
  box-shadow: 0px 0px 15px -4px rgba(4, 129, 158, 1);
  border-radius: 4px;
}

input::placeholder {
  color: #496668;
}

button {
  background: #184f5f;
  color: #e3fbff;
  border: none;
  border-radius: 4px;
  padding: 0rem 1rem;
  font-size: 16px;
  line-height: 32px;
  font-weight: bold;
  outline: none;
  letter-spacing: 2px;
  margin: 0rem 1rem 1rem 1rem;
}
</style>