<template>
  <div>
    <Header/>
    <div class="container-detail">
      <div class="main-detail">
        <el-breadcrumb class="module1" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>纽崔莱</el-breadcrumb-item>
          <el-breadcrumb-item>内服润养系列</el-breadcrumb-item>
          <el-breadcrumb-item>纽崔莱胶原蛋白饮品</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="module2">
          <div class="module2-row1">
            <el-image
              class="module2-row1-image"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              :fit="fit"
            />
            <div class="module2-row1-col2">
              <span class="module2-row1-col2-row1">纽崔莱®胶原蛋白肽饮品</span>
              <span class="module2-row1-col2-row2">编号 : 29293</span>
              <span class="module2-row1-col2-row3">净含量：5g/包x30包</span>
              <span class="module2-row1-col2-row4">￥368.00</span>

              <div class="module2-row1-col2-row5">
                <span>购买数:</span>
                <el-input-number
                  v-model="num"
                  @change="handleChange"
                  :min="1"
                  :max="999"
                  label="描述文字"
                >购买数量</el-input-number>
              </div>

              <div class="module2-row1-col2-row6">
                <div class="button-buy">
                  <span>立即购买</span>
                </div>
                <div class="button-cart">
                  <i class="el-icon-delete"/>
                  <span>立即购买</span>
                </div>
                <div class="collect">
                  <i class="el-icon-delete"/>
                  <span>收藏</span>
                </div>
              </div>
            </div>
          </div>
          <div class="module2-row2">
            <el-image
              class="module2-row2-image"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              :fit="fit"
            />
            <el-image
              class="module2-row2-image"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              :fit="fit"
            />
            <el-image
              class="module2-row2-image"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              :fit="fit"
            />
            <el-image
              class="module2-row2-image"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              :fit="fit"
            />
          </div>
        </div>
        <div class="module3">
          <div class="module3-row1">
            <i class="el-icon-delete"/>
            <span>立即购买</span>
          </div>
          <div style="width: 100%; height: 1px; background-color: #eee"></div>
        </div>
        <div class="module4">
          <h1>雅蜜®爽肤沐浴露</h1>
          <ul>
            <li>
              <p>全新雅蜜清爽+配方，甄选芦荟精华、葡萄籽萃取物、绿茶提取物等植物精华，帮助肌肤排浊、焕发肌肤活力。</p>
            </li>
            <li>
              <p>薄荷清凉体感，配上清新香气，带来清爽的沐浴体验，绽放身心爽洁活力。</p>
            </li>
          </ul>
          <div class="row-image">
            <el-image style="width: 600px; height: 500px" :src="images.item1" :fit="fit"/>
          </div>
          <h2>美肤级身体护理</h2>
          <p>需要呵护的，从来不只有脸。雅蜜身体护理系列，如同呵护脸部肌肤般，呵护身体每一寸肌肤，悦享天然呵护。</p>
          <h2>3大美肤成分</h2>
          <p>来自自然界的天然成分，带来更加独特的身体护理享受。</p>

          <div class="row-card">
            <div class="row-card-col1">
              <div class="row-card-col1-row1">
                <p>库拉索芦荟</p>
                <el-image
                  style="width: 300px; height: 250px"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  :fit="fit"
                />
                <span style="margin-top: 20px; font-size: 18px; font-weight: 500">肌肤舒缓圣品</span>
                <span>在400多种芦荟中，库拉索芦荟叶片宽大厚实，叶内海绵组织（即芦荟凝胶）特别丰富，能带给肌肤舒缓、镇静的效果。带给肌肤舒缓、镇静的效果。</span>
              </div>
            </div>

            <div class="row-card-col1">
              <div class="row-card-col1-row1">
                <p>库拉索芦荟</p>
                <el-image
                  style="width: 300px; height: 250px"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  :fit="fit"
                />
                <span style="margin-top: 20px; font-size: 18px; font-weight: 500">肌肤舒缓圣品</span>
                <span>在400多种芦荟中，库拉索芦荟叶片宽大厚实，叶内海绵组织（即芦荟凝胶）特别丰富，能带给肌肤舒缓、镇静的效果。带给肌肤舒缓、镇静的效果。</span>
              </div>
            </div>

            <div class="row-card-col1">
              <div class="row-card-col1-row1">
                <p>库拉索芦荟</p>
                <el-image
                  style="width: 300px; height: 250px"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  :fit="fit"
                />
                <span style="margin-top: 20px; font-size: 18px; font-weight: 500">肌肤舒缓圣品</span>
                <span>在400多种芦荟中，库拉索芦荟叶片宽大厚实，叶内海绵组织（即芦荟凝胶）特别丰富，能带给肌肤舒缓、镇静的效果。带给肌肤舒缓、镇静的效果。</span>
              </div>
            </div>
          </div>

          <el-image
            style="width: 100%; height: 250px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            :fit="fit"
          />

          <p>多元化的安利个人护理用品，采用珍贵配方，结合现代高科技，从洗发护发到身体护理，从口腔护理到抗菌清洁，轻柔呵护，全面照顾身体洁净和护理的需要，带来清新爽洁新感受。</p>
          <p>雅蜜身体护理系列，蕴含橙花蜂蜜、乳木果油、葡萄籽精华等美肤成分，令肌肤享受温和的丝滑呵护；必速消毒产品，更让人们安心体会欢聚时刻的愉悦感受；丝婷美发系列，以用于肌肤保养的细致成分和珍贵配方，直接运用到发丝的洁净、滋润、修护与造型上，精心呵护秀发；丽齿健口腔护理系列采用独特配方，洁齿健牙，清新口气，让人时刻展现灿烂笑容。</p>
          <p>美好生活始于美好形象。安利个人护理系列伴你健康光彩每一天！</p>
        </div>

        <div class="module5">
          <div class="module5-row1">
            <i class="el-icon-delete"/>
            <span>猜你喜欢</span>
          </div>
          <div class="module5-row2">
            <div class="module5-row2-col1" v-for="i in 4" :key="i">
              <div class="module5-row2-col1-card">
                <el-image
                  style="width: 200px; height: 200px"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  :fit="fit"
                />
                <span class="module5-row2-col1-card-title">雅姿恒时凝颜粉底液3中颜色时凝颜粉</span>
                <span class="module5-row2-col1-card-price">¥420.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style lang="scss">
.container-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .main-detail {
    display: flex;
    flex-direction: column;
    width: 1100px;
    .module1 {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .module2 {
      display: flex;
      flex-direction: column;
      padding: 20px 20px 80px 20px;
      background-color: #fff;
      .module2-row1 {
        display: flex;
        margin-bottom: 40px;
        .module2-row1-image {
          margin-right: 40px;
          width: 400px;
          height: 400px;
        }
        .module2-row1-col2 {
          display: flex;
          flex-direction: column;
          .module2-row1-col2-row1 {
            font-size: 22px;
            margin-bottom: 10px;
          }
          .module2-row1-col2-row2 {
            margin-bottom: 20px;
          }
          .module2-row1-col2-row3 {
            margin-bottom: 30px;
          }
          .module2-row1-col2-row4 {
            margin-bottom: 30px;
            font-size: 28px;
            color: #ff0000;
          }
          .module2-row1-col2-row5 {
            margin-bottom: 50px;
          }
          .module2-row1-col2-row6 {
            display: flex;
            .button-buy {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 2px;
              width: 120px;
              height: 60px;
              font-size: 20px;
              background-color: #84fbff;
            }
            .button-cart {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 40px;
              width: 200px;
              height: 60px;
              font-size: 20px;
              background-color: #da2828;
            }
            .collect {
              display: flex;
              flex-direction: column;
              align-items: center;
              font-size: 20px;
            }
          }
        }
      }
      .module2-row2 {
        display: flex;
        .module2-row2-image {
          width: 60px;
          height: 60px;
          margin-right: 15px;
        }
      }
    }
    .module3 {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      padding: 0px 20px;
      .module3-row1 {
        margin-left: 20px;
        font-size: 22px;
      }
    }
    .module4 {
      padding: 0px 40px;
      background-color: #fff;
      margin-bottom: 20px;
      .row-image {
        display: flex;
        justify-content: center;
      }
      .row-card {
        flex: 1;
        display: flex;
        margin-bottom: 40px;
        .row-card-col1 {
          flex: 1;
          display: flex;
          .row-card-col1-row1 {
            display: flex;
            flex-direction: column;
            margin-right: 20px;
          }
        }
      }
    }
    .module5 {
      display: flex;
      flex-direction: column;
      padding: 20px 40px 60px 40px;
      background-color: #fff;
      .module5-row1 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
      }
      .module5-row2 {
        flex: 1;
        display: flex;
        .module5-row2-col1 {
          flex: 1;
          display: flex;
          justify-content: center;
          .module5-row2-col1-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 200px;
            .module5-row2-col1-card-title {
              margin-top: 15px;
              margin-bottom: 10px;
              text-align: center;
            }
            .module5-row2-col1-card-price {
              font-size: 20px;
              color: #ff0000;
            }
          }
        }
      }
    }
  }
}
</style>


<script>
import Header from "@/components/header/header.vue";
import Footer from "@/components/footer/footer.vue";

export default {
  name: "Detail",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      num: 1,
      images: {
        item1: require("../assets/39604.jpg")
      }
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>