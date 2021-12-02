<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
})
</script>


<template>
  <div id="header">
    <div class="header-container">
      <div class="inner">
        <h1 class="header-title">
          <span class="douyin">星垂平野阔</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
#header {
  display: flex;
  text-align: center;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 3;
  box-shadow: 0 1px 2px rgba(150, 150, 150, 0.7);
  margin: 0;
  padding: 0;
  background: url(../assets/image/back.bmp);
  background-size: 100%;
  background-repeat: no-repeat;
  height: 55vw;
  width: 100vw;
}
.header-container {
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 2;
  align-items: center;
}
#header .inner {
  margin:  auto;
}
.header-title {
  margin: 0;
  letter-spacing: -1px;
  font-weight: 700;
  color: #fff;
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.5s;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  animation: fade-in-down 1s both;
  -webkit-animation: fade-in-down 1s both;
  mix-blend-mode: screen;
  font-size: 4vw;
  font-family: Playball, cursive;
}
.douyin:hover {
  animation: uk-text-shadow-glitch 0.65s cubic-bezier(1, -2.91, 0, 3.79) 0s
    infinite normal both running;
}

@keyframes uk-text-shadow-glitch {
  0% {
    text-shadow: none;
  }

  25% {
    text-shadow: -2px -2px 0 #ff0048, 2px 2px 0 #3234ff;
  }

  50% {
    text-shadow: 2px -2px 0 #ff0048, -2px 2px 0 #3234ff;
  }

  75% {
    text-shadow: -2px 2px 0 #ff0048, 2px -2px 0 #3234ff;
  }

  100% {
    text-shadow: 2px 2px 0 #ff0048, -2px -2px 0 #3234ff;
  }
}

@keyframes uk-flicker {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 0.6;

    transform: scale(0.8);
  }

  20% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  50% {
    opacity: 0.2;

    transform: scale(1.1);
  }

  100% {
    opacity: 1;

    transform: scale(1);
  }
}
</style>
