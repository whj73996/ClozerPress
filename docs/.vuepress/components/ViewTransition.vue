<template>
  <div class="page-container">
    <div class="iframe-box">
    </div>
    <p>
      <router-link to="/pages/views/BarBar.html"> vue </router-link>
      <router-link to="/pages/views/FooFoo.html"> react </router-link>
    </p>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
    }
  },  
  created() {
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  height: 100%;
  text-align: center;
}

</style>
