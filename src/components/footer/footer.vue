<template>
  <div>
    <Info/>
    <Bottom/>
  </div>
</template>

<script>
import Info from './info.vue';
import Bottom from './bottom.vue';

export default {
  name: "Footer",
  components: {
    Info,
    Bottom
  }
};
</script>
