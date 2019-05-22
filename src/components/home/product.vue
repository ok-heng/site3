<template>
  <div class="product">
    <el-image style="width: 80px; height: 80px" :src="image" :fit="fit"/>
    <div class="col2">
      <div class="col2-row1">
        <span class="name">{{title}}</span>
      </div>
      <div class="col2-row2">
        <span class="price">¥{{price}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product {
  display: flex;
  .el-image {
    margin-right: 10px;
  }
  .col2 {
    display: flex;
    flex-direction: column;
    width: 175px;
    .col2-row1 {
      flex: 1;
    }
    .col2-row2 {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .price {
      font-size: 22px;
      color: #db5353;
    }
  }
}
</style>

<script>
export default {
  name: "Product",
  props: {
    title: String,
    price: String,
    image: String
  }
};
</script>

