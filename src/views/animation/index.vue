<template>
  <div>
    <div class="box1" :style="{height: boxHeight}"></div>
    <div class="box2" :style="{'transform': `scale(${1+ count * 0.2})`}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      cal: null
    }
  },
  computed: {
    boxHeight() {
      return (100 + this.count * 20) + 'px';
    }
  },
  watch: {
    count(val) {
      if(val>10) {
        clearInterval(this.cal)
      }
    }
  },
  created() {
    this.cal = setInterval(()=> {
      this.count ++
    },1000)
  }
}
</script>

<style lang="scss" scoped>
.box1 {
  width: 100px;
  height: 100px;
  background-color: red;
  margin-bottom: 8px;
  transition: height .3s;
}
.box2 {
  width: 100px;
  height: 100px;
  background-color: blue;
  transform-origin: 0% 0%;
  transition: transform .3s;
}
</style>