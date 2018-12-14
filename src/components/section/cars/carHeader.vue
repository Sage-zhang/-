<template>
  <div class="header">
    <div class="nav">
      <div class="left">
        <p>购物车</p>
        <p class="num">共3件商品</p>
      </div>
      <p class="right">管理</p>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>

<style scoped>
  .header{
    width: 100%;
    background: url("./carsImgs/beijing1@2x.png") no-repeat;
    background-size: 100%;
    height: 1.65rem ;
    font-size: .12rem;
    font-weight: 900;
    color: #fff;
  }
  .left{
    float: left;
    margin-left: .1rem;
    margin-top: .2rem;
  }
  .right{
    float: right;
    margin-right: .1rem;
    margin-top: .4rem;
  }
  .left .num{
    font-size: .1rem;
    margin-top: .05rem;
    font-weight: 500;
  }
</style>
