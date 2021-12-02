<script setup lang="ts">

</script>
<template>
<div id="loading-app">
  <div>
    <div id="loading-app-corners"></div>
    <button style="display:none" id="loading-app-alert">加载超时,点击刷新页面！</button>
  </div>
</div>
</template>

<style scoped>
#loading-app {
  display: flex;
  position: fixed;
  color: black;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  background: #fff;
  justify-content: center;
  align-items: center;
}

#loading-app-alert {
  margin-top: 12px;
  background: #ff5252;
  height: 36px;
  padding: 0 16px;
  font-size: 0.875rem;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  border-radius: 4px;
  color: #FFFFFF;
  user-select: none;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}

#loading-app-alert:hover {
  opacity: 0.8;
}

#loading-app-corners {
  margin: 0 auto;
  position: relative;
  width: 16px;
  height: 16px;
  animation: corners 1s ease infinite;
  border-radius: 10px;
  box-sizing: border-box;
  background: #5B5777;
}

@keyframes corners {
  0% {
    border-radius: 50%;
    transform: rotate(0deg);
  }
  25% {
    border-radius: 50% 50% 50% 20%
  }
  50% {
    border-radius: 50% 50% 20% 30%
  }
  75% {
    border-radius: 50% 50% 20% 30%
  }
  100% {
    border-radius: 50% 20% 30% 30%;
    transform: rotate(-180deg)
  }
}
</style>
