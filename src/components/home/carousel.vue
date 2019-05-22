<template>
    <el-row type="flex" justify="center">
      <el-carousel height="400px" trigger="click" arrow="never">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image
            style="width: 1500px; height: 400px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            :fit="fit"
          />
        </el-carousel-item>
      </el-carousel>
    </el-row>
</template>

<style lang="scss">
.el-carousel {
  width: 1500px;
}
</style>


<script>
export default {
  name: "Carousel"
};
</script>



