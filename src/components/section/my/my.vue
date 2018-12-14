<!--我的页面-->
<template>
  <div class="my">
    <navbar text="我的" rightImg="./../../../../static/navimgs/ic_settings.png" ></navbar>
    <header>
      <div class="box"></div>
      <span><router-link to="/login">立即登录</router-link></span>
    </header>
    <Tab></Tab>
  </div>
</template>

<script>
  import navbar from'./../../../components/header/navbar'
  import Tab from './../../../components/footer/tab'
  export default{
    components:{
      navbar,Tab
    },
  }
</script>

<style scoped>
header{
  width: 100%;
  height: 2rem;
  background:linear-gradient(135deg, #8791ff,blue);
  align-items: center;
  display: flex;
  font-size: .3rem;
  color: white;
}
  .box{
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    background:linear-gradient(135deg, #faf4ff, #000060) ;
  }
body{
  background-color: #fff;
}
</style>
