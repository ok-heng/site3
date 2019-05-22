<template>
  <div class="container-main">
    <Carousel/>
    <div class="main-main">
      <!-- row-1 -->
      <div class="row-1">
        <div class="row-1-1">
          <i class="el-icon-star-on"/>
          <span>猜你喜欢</span>
        </div>

        <div class="row-1-2" v-for="i in 2" :key="i">
          <Product
            title="蛋白蛋白粉蛋白粉蛋白蛋白蛋白粉蛋白粉蛋白"
            price="340"
            image="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            v-for="i in 4"
            :key="i"
          />
        </div>
      </div>

      <!-- row-2 -->
      <div class="row-2">
        <div class="col-1">
          <Card
            title="纽崔莱祝你健康纽崔莱祝你健康"
            icon1="el-icon-cherry"
            text1="增强免疫"
            icon2="el-icon-cherry"
            text2="增强免疫"
            icon3="el-icon-cherry"
            text3="增强免疫"
            icon4="el-icon-cherry"
            text4="增强免疫"
            buttonText="增强免疫"
            buttonIcon="el-icon-arrow-right"
            image="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          />
        </div>
        <div class="col-2">
          <Card
            title="纽崔莱祝你健康纽崔莱祝你健康"
            icon1="el-icon-cherry"
            text1="增强免疫"
            icon2="el-icon-cherry"
            text2="增强免疫"
            icon3="el-icon-cherry"
            text3="增强免疫"
            icon4="el-icon-cherry"
            text4="增强免疫"
            buttonText="增强免疫"
            buttonIcon="el-icon-arrow-right"
            image="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  .main-main {
    display: flex;
    flex-direction: column;
    width: 1100px;
    background-color: rgb(247, 247, 247);
    .row-1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 40px;
      height: 400px;
      background-color: #fff;
      .row-1-1 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 25px;
        .el-icon-star-on {
          font-size: 30px;
          color: #e43838;
        }
        span {
          font-size: 18px;
        }
      }
      .row-1-2 {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
      }
    }
    .row-2 {
      display: flex;
      .col-1 {
        flex: 1;
      }
      .col-2 {
        flex: 1;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>

<script>
import Card from "./card.vue";
import Product from "./product.vue";
import Carousel from "./carousel.vue";

export default {
  name: "Main",
  components: {
    Card,
    Product,
    Carousel
  }
};
</script>


