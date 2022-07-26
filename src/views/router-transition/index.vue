<template>
  <div class="page-container">
    <p>
      <router-link to="/foo" replace> vue </router-link>
      <router-link to="/bar" replace> react </router-link>
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
