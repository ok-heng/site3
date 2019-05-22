<template>
  <div class="container-menu">
    <div class="main-menu">
      <!--  -->
      <div class="row-1">
        <!--  -->
        <div class="col-1">
          <router-link to="/category" class="menu-1">
            <i class="el-icon-s-unfold"/>
            <span>产品分类</span>
          </router-link>
          <el-divider direction="vertical"/>
          <div class="menu-2">
            <a href="#">云购首页</a>
            <a href="#">安利微购</a>
            <a href="#">安利长客会</a>
            <a href="#">活动专区</a>
            <a href="#">悦享荟礼品</a>
            <a href="#">海外购</a>
          </div>
        </div>
        <!--  -->
        <div class="col-2">
          <el-input placeholder="请输入内容" v-model="input">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" >
.container-menu {
  display: flex;
  justify-content: center;
  background-color: #fff;
  .main-menu {
    width: 1100px;
    .row-1 {
      display: flex;
      .col-1 {
        display: flex;
        align-items: center;
        flex: 3;
        height: 72px;
        background-color: #fff;
      }
      .col-2 {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        height: 72px;
        background-color: #fff;
      }
      a {
        text-decoration: none;
        font-size: 14px;
        color: #001;
      }
      .menu-1 {
        display: flex;
        align-items: center;
        width: 200px;
        .el-icon-s-unfold {
          font-size: 20px;
          margin-right: 20px;
        }
      }
      .el-divider {
        height: 40px;
        margin-left: 0px;
        margin-right: 50px;
      }
      .menu-2 {
        a {
          margin-right: 30px;
        }
      }
      .el-input {
        width: 200px;
      }
    }
  }
}
</style>

<script>
export default {
  name: "headerMenu",
  data() {
    return {
      input: ""
    };
  },
  methods: {}
};
</script>



