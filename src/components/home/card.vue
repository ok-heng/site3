<template>
  <div class="card">
    <div class="row1">
      <span>{{title}}</span>
    </div>
    <div class="divider"/>
    <div class="row2">
      <div class="row2-col1">
        <div class="row2-col1-row1">
          <div class="row2-col1-row1-col1">
            <i :class="icon1"/>
            <span>{{text1}}</span>
          </div>
          <div class="row2-col1-row1-col1">
            <i :class="icon2"/>
            <span>{{text2}}</span>
          </div>
        </div>

        <div class="row2-col1-row1">
          <div class="row2-col1-row1-col1">
            <i :class="icon3"/>
            <span>{{text3}}</span>
          </div>
          <div class="row2-col1-row1-col1">
            <i :class="icon4"/>
            <span>{{text4}}</span>
          </div>
        </div>

        <div class="row2-col1-row2">
          <el-button>
            <span>{{buttonText}}</span>
            <i :class="buttonIcon"/>
          </el-button>
        </div>
      </div>
      <div class="row2-col2">
        <el-image style="width:220px; height: 220px" :src="image" :fit="fit"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  width: 520px;
  background-color: #fff;
  .row1 {
    display: flex;
    padding: 15px;
    span {
      font-size: 22px;
    }
  }
  .divider {
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }
  .row2 {
    display: flex;
    padding: 15px;
    .row2-col1 {
      flex:1;
      .row2-col1-row1 {
        display: flex;
        .row2-col1-row1-col1 {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px 60px 20px 0px;
          i {
            font-size: 22px;
          }
        }
      }
      .row2-col1-row2 {
        display: flex;
        justify-content: center;
        .el-button {
          width: 150px;
          height: 50px;
          font-size: 16px;
        }
      }
    }
    .row2-col2 {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    icon1: String,
    text1: String,
    icon2: String,
    text2: String,
    icon3: String,
    text3: String,
    icon4: String,
    text4: String,
    buttonText: String,
    buttonIcon: String,
    image: String
  }
};
</script>

