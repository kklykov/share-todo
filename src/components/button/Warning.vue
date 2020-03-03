<template>
  <button @click="clicked" :disabled="isDisabled">Remove</button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clicked() {
      this.$emit("clicked");
    }
  }
};
</script>

<style lang="css" scoped>
button {
  background: #4c3540;
  color: #bac4ca;
  border-radius: 4px;
  font-weight: 400;
  border: 1px solid #ef4444;
  padding: 0.3rem 0.8rem;
  font-size: 16px;
  letter-spacing: 2px;
  outline: none;
}

button:hover {
  border: 1px solid #a13e45;
  background: #a13e45;
  cursor: pointer;
}

button:disabled {
  border: 1px solid #a13e45;
  background: #a13e45;
  opacity: 0.6;
}
</style>