<template>
  <div class="sucess">

   <div class="top-box">
     <p><img class="fanhui" src="./fanhui0@2x@2x.png" alt="" @click="goback()"></p>
     <div class="top-text">
       <p><img class="duigou" src="./对勾.png" alt=""></p>
       <p><span class="zhifu">支付成功</span></p>
       <p class="zongjia">金额&nbsp;&nbsp;&nbsp;¥15959.00</p>
     </div>
     <div class="btn">
       <router-link to="/gohome">
         <button class="btn-one">返回首页</button>
       </router-link>

       <button class="btn-two">查看订单</button>
     </div>
   </div>
    <div class="bottom-box">
      <div class="xian"></div>
      <p class="caini">猜你喜欢</p>
      <div class="xian1"></div>
      <div class="img-box">
        <img src="./1@2x.png" alt="">
        <p>戴蒙德女士专项</p>
        <p>￥3799</p>
      </div>
      <div class="img-box">
        <img src="./tuceng2@2x.png" alt="">
        <p>戴蒙德女士专项</p>
        <p>￥3799</p>
      </div>
      <div class="img-box">
        <img class="san" src="./3@2x.png" alt="">
        <p>戴蒙德女士专项</p>
        <p>￥3799</p>
      </div>
      <div class="img-box">
        <img class="si" src="./4@2x.png" alt="">
        <p>戴蒙德女士专项</p>
        <p>￥3799</p>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "message",
        methods:{
          goback:function () {
            this.$router.go(-1);
          }
        }
    }
</script>

<style scoped>

  .top-box{
    width: 3.75rem;
    height: 2rem;
    background:linear-gradient(60deg, rgb(254,17,17), rgb(253,50,155));
    position: relative;
  }
  .zhifu{
    font-size: .16rem;
    color: rgb(255,255,255);
  }
  .top-text{
    width: 3.75rem;
    position: absolute;
    top: .5rem;
    text-align: center;
  }
  .top-text .zongjia{
    font-size: .12rem;
    margin-top: .1rem;
    color: white;
  }
.caini{
  font-size: .16rem;
  color: rgb(153,153,153);
  position: absolute;
left: 1.5rem;
}
  .btn{
    width: 2.04rem;
    height: .3rem;
    position: absolute;
    bottom: .4rem;
    left: .8rem;
  }
  .btn button{
    width: .84rem;
    height: .3rem;
    color: white;
    border-radius: .06rem;
    background: none;
    border: 1px solid #ffffff;
  }
  .btn button:nth-of-type(2){
   float: right;
  }
  .bottom-box{
    padding: .1rem;
  }
  .img-box{
    float: left;
    width:1.725rem;
    text-align: center;
    margin-right: .05rem;
    margin-top: .3rem;
  }
  .img-box img{
    width:1.725rem;
    height: 1.725rem;
  }
.san{
    margin-top:-.3rem;
  }
.si{
  margin-top:-.3rem;
}
  .img-box p:nth-of-type(2){
    margin: .1rem 0 .2rem 0;
    color: red;
  }
  .xian{
    width: .68rem;
    height: .01rem;
    background-color: #d8d8d8;
    position: absolute;
    left: .8rem;
    bottom: 4.45rem;
  }
  .xian1{
    width: .68rem;
    height: .01rem;
    background-color: #d8d8d8;
    position: absolute;
    right: 1rem;
    bottom: 4.45rem;
  }
  .fanhui{

    width: .21rem;
    height: .21rem;
    position: absolute;
    top: .2rem;
    left: .1rem;
  }
  .duigou{
    width: .4rem;
    height: .4rem;
    position: absolute;
   left: 1rem;
  }
</style>
