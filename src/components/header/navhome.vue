<!--首页导航-->
<template>
  <div>
    <div class="navhome">
      <div class="search">
        <img src="./navimgs/ic_group_search_small.png" alt="">
        <input type="text"placeholder="影视 唱片 图书 小组等">
        <img src="./navimgs/ic_scan_gray.png" alt="">
      </div>
      <img class="rightImg" src="./navimgs/ic_chat_white.png" alt="">
    </div>
    <div class="navhome-child"></div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style scoped>
  .navhome{
    width: 100%;
    height:.6rem;
    line-height:.6rem;
    text-align:center;
    border-bottom:1px solid #606060;
    position:fixed;
    background-color:#42bd56;
    display:flex;
    z-index:3;
  }
  .navhome-child{
    width: 100%;
    height:.6rem;
    background-color: transparent;
  }
  .search{
    width: 80%;
    display:flex;
    align-items:center;
    height:.3rem;
    line-height:.3rem;
    position:absolute;
    bottom:.15rem;
    left:.1rem;
    background-color:#fff;
    justify-content:space-around;
    border-radius:.06rem;
  }
  .search img{
    height:.15rem;
    background-color: #fff;
  }
  input{
    width: 70%;
    margin-left:.1rem;
    font-size:.15rem;
    height:.2rem;
    border:none;
    outline:none;
  }
  input::placeholder{
    font-size:.13rem;
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
  /*.leftImg{*/
    /*position:absolute;*/
    /*!*height:.4rem;*!*/
    /*top:.1rem;*/
    /*right:.6rem;*/
  /*}*/

</style>
