<template>
  <div class="container-top">
    <div class="main-top">
      <div class="row-1">
        <div class="col-1">
          <el-image
            style="width: 68px; height: 68px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            :fit="fit"
          />

          <el-select v-model="value" placeholder="送货至" size="mini">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <el-divider direction="vertical"/>

          <a href="#">供货状态</a>
        </div>

        <div class="col-2">
          <div class="login">
            <span>
              您好，欢迎来到xx云购，请
              <a href="#">【 登陆 】</a>
            </span>

            <a href="#">
              <i class="el-icon-shopping-cart-2"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-top {
  display: flex;
  justify-content: center;
  background-color: #08305c;
  .main-top {
    width: 1100px;
    color: #fff;
    .row-1 {
      display: flex;
      .col-1 {
        display: flex;
        align-items: center;
        flex: 2;
        height: 72px;
        background-color: #08305c;
      }
      .col-2 {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        height: 72px;
        background-color: #08305c;
      }
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          opacity: 0.9;
        }
      }
      .el-image {
        margin-right: 50px;
      }
      .el-divider {
        margin-left: 20px;
        margin-right: 20px;
      }
      .login {
        display: flex;
        align-items: center;
        a {
          margin-right: 10px;
          .el-icon-shopping-cart-2 {
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "HeaderTop",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        }
      ],
      value: ""
    };
  }
};
</script>