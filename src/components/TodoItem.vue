<template>
  <li v-bind:class="{blurry: todo.key == -1}">
    <span>
      <input
        type="checkbox"
        v-model="todo.completed"
        v-bind:class="{checked: todo.completed}"
        style="display: none;"
        v-bind:id="'checkbox-'+todo.id"
        :disabled="todo.key == -1"
      />
      <label v-bind:for="'checkbox-'+todo.id" class="check">
        <svg width="18px" height="18px" viewBox="0 0 18 18">
          <path
            d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
          />
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </label>
      <strong>{{ index + 1 }}</strong>
      <span v-bind:class="{text: todo.title, strike: todo.completed}">{{ todo.title | uppercase }}</span>
    </span>
    <RemoveButton @clicked="removeTodo(todo.id)" :disabled="todo.key == -1"></RemoveButton>
  </li>
</template>

<script>
import RemoveButton from "./button/Warning";
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    RemoveButton
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    }
  }
};
</script>


<style scoped>
span {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #b5cbd3;
  font-size: 13px;
  letter-spacing: 1px;
}

strong {
  margin-left: 1rem;
}

strong::after {
  content: "-";
  margin-left: 0.6rem;
  margin-right: 0.6rem;
}

li {
  background: #2c3f51;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin: 1rem;
  transition: background-color 0.2s ease;
  -webkit-box-shadow: 1px 4px 3px -2px rgba(26, 37, 48, 0.9),
    inset 1px 2px 2px -1px rgba(52, 71, 88, 1);
  -moz-box-shadow: 1px 4px 3px -2px rgba(26, 37, 48, 0.9),
    inset 1px 2px 2px -1px rgba(52, 71, 88, 1);
  box-shadow: 1px 4px 3px -2px rgba(26, 37, 48, 0.9),
    inset 1px 2px 2px -1px rgba(52, 71, 88, 1);


}

li:hover {
  background-color: #1d3946;
}

li.blurry {
  filter: blur(4px);
  pointer-events: none;
}

li.blurry:hover {
  background-color: #2c3f51;
}

.check {
  cursor: pointer;
  position: relative;
  margin: auto;
  width: 18px;
  height: 18px;
  -webkit-tap-highlight-color: transparent;
  transform: translate3d(0, 0, 0);
}


.check:before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 19px;
  height: 19px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.check:hover:before {
  opacity: 1;
}

.check svg {
  position: relative;
  z-index: 1;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #c8ccd4;
  stroke-width: 1.5;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
}
.check svg path {
  stroke-dasharray: 60;
  stroke-dashoffset: 0;
}
.check svg polyline {
  stroke-dasharray: 22;
  stroke-dashoffset: 66;
}

.check:hover svg {
  stroke: #00e5ff;
}
.checked + .check svg {
  stroke: #00e5ff;
}
.checked + .check svg path {
  stroke-dashoffset: 60;
  transition: all 0.3s linear;
}
.checked + .check svg polyline {
  stroke-dashoffset: 42;
  transition: all 0.2s linear;
  transition-delay: 0.15s;
}

@keyframes strike {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.strike {
  position: relative;
}
.strike::after {
  content: " ";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: #00e5ff;
  animation-name: strike;
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
</style>
