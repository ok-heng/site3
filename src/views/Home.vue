<template>
  <div>
    <HomeHeader/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import HomeHeader from "@/components/header/homeHeader.vue";
import Main from "@/components/home/main.vue";
import Footer from "@/components/footer/footer.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    Main,
    Footer
  },
  computed: {
    username() {
      //return this.$route.params.username
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>
