<template>
  <transition appear leave-active-class="slide-out-blurred-left" enter-active-class="slide-in-blurred-left">
    <div key="Foo" class="container" >
      <img class="logo-icon" src="../public/assets/logo.png" alt="">
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-icon {
  width: 250px;
  height: 250px;
}

.slide-out-blurred-left {
  transform-origin: 50% 50%;
	animation: slide-out-blurred-left 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}
.slide-in-blurred-left {
  transform-origin: 50% 50%;
	animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
}

@keyframes slide-in-blurred-left {
  0% {
    transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scaleY(1) scaleX(1);
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes slide-out-blurred-left {
  0% {
    transform: translateX(0) scaleY(1) scaleX(1);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-1000px) scaleX(2) scaleY(0.2);
    filter: blur(40px);
    opacity: 0;
  }
}
</style>