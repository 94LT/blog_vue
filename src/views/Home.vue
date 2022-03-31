<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import Header from '@/components/Header.vue';
import Recommendation from '@/components/Recommendation.vue';
import EssayList from '@/components/EssayList.vue';
import ChatList from '@/components/ChatList.vue';
// import Fish from '@/components/Fish.vue';
import axios from 'axios'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  components: {
    Recommendation,
    EssayList,
    ChatList,
    Header,
    // Fish,
  },
  setup() {

    return {}
  }
})

</script>

<template>
  <Header />
  <div class="main"> 
    <div class="container">
      <div class="grid-con">
        <Recommendation />
      </div>
      <div class="grid-con">
        <div class="flex-container">
          <div class="flex-item-left">
            <div class="flex-item-con-l">
              <EssayList />
            </div>
          </div>
          <div class="flex-item-right">
            <div class="flex-item-con-r">
              <ChatList />
            </div>
          </div>
        </div>
      </div>
      <div class="grid-con">
        <!-- <Fish></Fish> -->
      </div>
    </div>
  </div>
</template>



<style scoped>
.main {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  max-width: 1080px;
  margin: auto;
  display: grid;
}
@media screen and (min-width: 1200px) {
  .container {
    max-width: 1080px;
  }
}
@media screen and (min-width: 0px) and (max-width: 1199px) {
  .container {
    width: 100%;
    max-width: none;
  }
}

.grid-con {
  border-radius: 16px;
  box-shadow: none;
  padding: 0 24px 40px;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-item-left {
  flex: 66.6666666%;
}

.flex-item-right {
  flex: 33.33333333%;
}
.flex-item-con-l {
  padding-right: 24px;
}
.flex-item-con-r {
  padding-left: 24px;
}

/* 响应式布局 - 制作单列布局（100％）而不是两列布局（50％） */
@media screen and (max-width: 800px) {
  .flex-item-con-l {
    padding-right: 0px;
  }
  .flex-item-con-r {
    padding-left: 0px;
  }
  .flex-item-right,
  .flex-item-left {
    flex: 100%;
  }
  
}
</style>
