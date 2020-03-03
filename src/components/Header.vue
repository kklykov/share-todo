<template>
  <header>
    <div class="title">ShareTodo</div>
    <div class="options">Options</div>
  </header>
</template>

<script>
export default {};
</script>



<style scoped>
@font-face {
  font-family: "MrRobot";
  src: url("../assets/fonts/MrRobot.ttf") format("truetype");
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 1px #fff, 0 0 3px #04819e, 0 0 4px #04819e, 0 0 5px #04819e,
      0 0 6px #04819e, 0 0 7px #04819e;
  }
  to {
    text-shadow: 0 0 2px #fff, 0 0 3px #04819e, 0 0 4px #04819e, 0 0 5px #04819e,
      0 0 6px #04819e, 0 0 7px #04819e, 0 0 8px #04819e;
  }
}

header {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  background-color: #262e35;
}

.title {
  cursor: pointer;
  margin-left: 2rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-family: "MrRobot", "Roboto", sans-serif;
  text-shadow: 0 0 1px #04819e, 0 0 2px #04819e, 0 0 3px #04819e,
    0 0 4px #04819e, 0 0 5px #04819e;
}

.title:hover {
  -webkit-animation: glow 2s ease-in-out infinite alternate;
  -moz-animation: glow 2s ease-in-out infinite alternate;
  animation: glow 2s ease-in-out infinite alternate;
}

.options {
  margin-right: 2rem;
}
</style>