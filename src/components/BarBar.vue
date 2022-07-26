<template>
  <transition appear leave-active-class="roll-out-blurred-right" enter-active-class="roll-in-blurred-right">
    <div key="Bar" class="container">
      <img class="logo-icon" src="@/assets/react-logo.png" alt="">
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
.roll-in-blurred-right {
  transform-origin: 50% 50%;
	animation: roll-in-blurred-right 0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
}

.roll-out-blurred-right {
  transform-origin: 50% 50%;
	animation: roll-out-blurred-right 0.65s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}

@keyframes roll-in-blurred-right {
  0% {
    transform:translateX(1000px) rotate(720deg);
    filter: blur(10px);
    opacity: 0;
  }
  100% {
    transform:translateX(0) rotate(0deg);
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes roll-out-blurred-right {
  0% {
    transform: translateX(0) rotate(0deg);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateX(1000px) rotate(720deg);
    filter: blur(10px);
    opacity: 0;
  }
}


</style>