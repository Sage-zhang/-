<!--footer子组件-->

<template>
  <div class="item" @click="fn()">
    <!--<img src="./../../../static/footer-imgs/ic_tab_home_normal.png" alt="">-->
    <img  v-show="!flag" :src="itempic" alt="">
    <img v-show="flag"  :src="activepic" alt="">
    <p :class="{activetext:flag}" >{{text}}</p>
  </div>
</template>

<script>
  export default {
    data:function(){
      return{
      }
    },
    computed:{
      flag:function(){
        if(this.index === this.activeIndex){
          return true;
        }
        return false;
      }
    },
    props:['text','itempic','activepic','index','activeIndex'],
    methods:{
      fn:function(){
        this.$emit('getIndex',this.index)
      }
    },
    components:{

    },
  }
</script>

<style scoped>
  .item{
    width: 25%;
    float:left;
    font-size:.13rem;
    text-align:center;
    color: rgb(137,137,137);
    /*margin-top: .05rem;*/
    }
  .item img{
    height: .36rem;
    width: .36rem;
    /*vertical-align:top;*/
  }
  .activetext{
    color:rgb(219,182,123);
  }
  body{
    background-color: #fff;
  }

</style>
