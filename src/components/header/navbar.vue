<!--头部-->
<template>
  <div class="navbar">
    <h1>{{text}}</h1>
    <span class="leftImg"><slot name="leftImg"></slot></span>
    <img :src="rightImg" alt="" class="rightImg">
  </div>
</template>

<script>
  export default{
      props:['text','rightImg','leftImg']
  }
</script >

<style scoped>
  .navbar{
    width: 100%;
    height:.6rem;
    line-height:.6rem;
    text-align:center;
    border-bottom:1px solid #606060;
    position:relative;
    background-color: #f9f9f3;
  }
  img{
    height:.3rem;
  }
  .rightImg{
    position:absolute;
    /*height:.4rem;*/
    top:.15rem;
    right:.1rem;

  }
  .leftImg{
    position:absolute;
    /*height:.4rem;*/
    top:.1rem;
    right:.6rem;
  }
</style>
