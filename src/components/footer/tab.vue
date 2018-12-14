<!--footer父组件-->

<template>
  <div class="tab">

   <router-link to="/gohome">
     <tabItem @getIndex="fn"  :activeIndex="activeIndex" index="gohome" text="首页" itempic="./../../../static/48/5.png"
              activepic="./../../../static/48/1.png">
     </tabItem>
   </router-link>

      <router-link to="/find">
      <tabItem  @getIndex="fn"  :activeIndex="activeIndex" index="find" text="发现" itempic="./../../../static/48/6.png"
               activepic="./../../../static/48/2.png">
      </tabItem>
    </router-link>

    <router-link to="/cars">
      <tabItem  @getIndex="fn" :activeIndex="activeIndex " index="cars" text="购物车" itempic="./../../../static/48/7.png"
               activepic="./../../../static/48/3.png">
      </tabItem>
    </router-link>

    <router-link to="/my">
      <tabItem  @getIndex="fn" :activeIndex="activeIndex " index="my" text="我的" itempic="./../../../static/48/8.png"
               activepic="./../../../static/48/4.png">
      </tabItem>
    </router-link>

  </div>
</template>

<script>
  import tabItem from'./tabItem'
  export default {
    components:{
      tabItem
    },
    data:function(){
      return {
        activeIndex:''
      }
    },
    created:function(){
      // .split('/')[0]
      var hash = window.location.hash.substr(2);
      this.activeIndex = hash || 'home';
    },
    methods:{
      fn:function(msg){
        this.activeIndex = msg;
      }
    }
  }
</script>

<style>
  .tab{
    width: 100%;
    height: .6rem;
    border-top:1px solid #d4d4d4;
    position:fixed;
    left: 0;
    bottom:0;
    z-index:3;
    background-color:#fff;
    color: rgb(137,137,137);
  }
</style>
