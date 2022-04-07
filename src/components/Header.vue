<script>
import { defineComponent } from 'vue'
import $ from 'jquery'

export default defineComponent({
  name: 'Header',
})
// 导航栏上拉悬浮
$(function(){
    //页面初始化的时候，获取滚动条的高度（上次高度）
    var start_height = $(document).scrollTop();
    //获取导航栏的高度(包含 padding 和 border)
    var navigation_height = $('.header-con').outerHeight();
    $(window).scroll(function() {
        //触发滚动事件后，滚动条的高度（本次高度）
        var end_height = $(document).scrollTop();
        //触发后的高度 与 元素的高度对比
        if (end_height > navigation_height){
            $('.header-con').css('top', '-56px');
        }else {
            $('.header-con').css('top', '0');
        }
        //触发后的高度 与 上次触发后的高度
        if (end_height < start_height){
            $('.header-con').css('top', '0');
        }
        //再次获取滚动条的高度，用于下次触发事件后的对比
        start_height = $(document).scrollTop();
    });
});
$(function(){
  
  if( $(window).width() < 800 ) {		         
          $('.header-log-l').hide();
          $('.header-log-m').show(); 	 
      }else{
          $('.header-log-l').show();
          $('.header-log-m').hide();   
      }
  $(window).resize(function(){				         //  监控窗口宽度变化
      if( $(window).width() < 800 ) {		         
          $('.header-log-l').hide();
          $('.header-log-m').show(); 	 
      }else{
          $('.header-log-l').show();
          $('.header-log-m').hide();   
      }
  });
});

</script>


<template>
  <div class="header-con">
    <div class="header-log-l">
      <div class="header-con-l">
      <div class="header-con-log">
        <button><a href="">log</a></button>
      </div>
    </div>
    <div class="header-con-m">
      <div class="header-con-m-c">
        <div class="header-con-m-i"><button>首页</button></div>
        <div class="header-con-m-i"><button>碎语</button></div>
        <div class="header-con-m-i"><button>留言</button></div>
        <div class="header-con-m-i"><button>阿巴阿巴</button></div>
      </div>
    </div>
    <div class="header-con-r">
      <div class="header-con-r-c">
        <div class="header-con-r-fa">
          <button><i class="fas fa-moon"></i></button>
        </div>     
      </div>     
    </div>
    </div>
    <div class="header-log-m">
        <button><a href="">log</a></button>
        <!-- <div class="header-m-menu-c"><i class="fas fa-bars" ></i></div> -->
      <div class="header-m-menu">
        <div class="header-m-menu-i"><i class="fas fa-bars"></i></div>   
        </div>
    </div>
  </div>
  
</template>

<style scoped>
  .header-con {
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 56px;
    background-color: #f4f4f4;
    transition: top 1s;
  }
  .header-log-l {
    display: flex; 
  }
  .header-con-l {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .header-con-log button{
    border: none;
    height: 100%;
    font-size: 1.75rem;
    font-weight: 600;
  }
  .header-con-m {
    flex: 3;
    display: flex;
    justify-content: center;
  }
  .header-con-m-c {
    width: 60%;
    display: flex;
    /* background-color: #f0efef; */
    align-content: center;
    justify-content: center;
  }
  .header-con-m-c :hover {
    background-color: #e9e8e8;
  }
  .header-con-m-i button{
    border: none;
    width: 100%;
    height: 100%; 
    font-size: 0.8rem;
    font-weight: 400;
  }

  .header-con-r {
    flex: 1;
    position: relative;
  }
  .header-con-r-c {
    position: absolute;
    top: 8px;
    /* text-align: center; */
  }
  .header-con-r-fa {
    cursor: pointer;
  }
  .header-con-r-fa button{
    font-size: 1.25rem;
    border-style: none;
    border-radius: 8px;
  }
  .header-con-r-fa :hover{
    background-color: #e9e8e8;
  }

  .header-log-m {
    display: flex;
    height: 100%;
  }
  .header-log-m button{
    margin: auto;
    border: none;
    height: 100%;
    font-size: 1.75rem;
    font-weight: 600;
  }
  .header-m-menu {
    position: relative;
    height: 36px;
    width: 36px;
    top: 8px;
    right: 16px;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 1px 1px 4px -3px rgb(168, 168, 168), -1px -1px 4px -3px rgb(168, 168, 168),
    -1px 1px 4px -3px rgb(168, 168, 168),1px -1px 4px -3px rgb(168, 168, 168);
  }
   .header-m-menu :hover{
    background-color: #e7e7e7c5;
   }
  .header-m-menu-i {
    position: absolute;
    width: 36px;
    height: 36px;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.25rem;
  }
  .header-m-menu-i i {
    margin-top: 8px;
  }

</style>
