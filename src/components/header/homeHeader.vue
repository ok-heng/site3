<template>
  <div>
    <Top/>
    <HomeMenu/>
  </div>
</template>

<script>
import Top from "./top.vue";
import HomeMenu from "./homeMenu.vue";

export default {
  name: "Header",
  components: {
    Top,
    HomeMenu
  }
};
</script>