<template>
  <div class="container-bottom">
    <div class="main-bottom">
      <div class="row-1">
        <span>版权为安利日用品有限公司所有版权为安利日用品有限公司所有，2019年粤ICP备0316484</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgb(42, 59, 117);
  .main-bottom {
    display: flex;
    flex-direction: column;
    width: 1100px;
    .row-1 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 42px;
      background-color: rgb(42, 59, 117);
      color: #fff;
    }
  }
}
</style>

<script>
export default {
  name: "Bottom"
};
</script>


