<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/normalize.scss';

#app {
  text-align: center;
  display: flex;
  flex-direction: column;
}
.container {
  position: relative;
  flex: 1;
}
</style>
