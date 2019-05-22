<template>
  <div class="container-info">
    <div class="main-info">
      <div class="row-1">
        <div class="col-1">
          <span class="title">关于安利</span>
          <span>企业文化</span>
          <span>企业证照</span>
          <span>工作机会</span>
          <span>各地店铺</span>
          <span>联系我们</span>
        </div>
        <div class="col-1">
          <span class="title">关于安利</span>
          <span>企业文化</span>
          <span>企业证照</span>
          <span>工作机会</span>
          <span>各地店铺</span>
          <span>联系我们</span>
        </div>
        <div class="col-1">
          <span class="title">关于安利</span>
          <span>企业文化</span>
          <span>企业证照</span>
          <span>工作机会</span>
          <span>各地店铺</span>
          <span>联系我们</span>
        </div>
        <div class="col-1">
          <span class="title">关于安利</span>
          <span>企业文化</span>
          <span>企业证照</span>
          <span>工作机会</span>
          <span>各地店铺</span>
          <span>联系我们</span>
        </div>
        <div class="col-1">
          <span>关于安利</span>
          <span>企业文化</span>
          <span>企业证照</span>
          <span>工作机会</span>
          <span>各地店铺</span>
          <span>联系我们</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  background-color: #fff;
  .main-info {
    display: flex;
    flex-direction: column;
    width: 1100px;
    .row-1 {
      display: flex;
      height: 300px;
      margin-top: 20px;
      background-color: #fff;
      .col-1 {
        flex: 1;
        display: flex;
        flex-direction: column;
        .title {
          margin-bottom: 20px;
          font-size: 16px;
          color: rgb(154, 180, 228);
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "Info"
};
</script>


