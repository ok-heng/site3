<template>
  <div>
    <Top/>
    <Menu/>
  </div>
</template>

<script>
import Top from "./top.vue";
import Menu from "./menu.vue";

export default {
  name: "Header",
  components: {
    Top,
    Menu
  }
};
</script>