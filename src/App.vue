<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  background-color: rgb(247, 247, 247) !important;
  font-family: "Avenir", Helvetica, Arial, sans-serif !important;
  // font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
  //   "Microsoft YaHei", "微软雅黑", Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
  }
}
</style>
