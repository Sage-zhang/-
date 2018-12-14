<template>
  <div id="app">
    <!--<chechBox></chechBox>-->
    <router-view></router-view>
    <!--<tab></tab>-->
  </div>
</template>

<script>
  // import chechBox from './components/chechBox'
  import tab from './components/footer/tab'
export default {
  components:{
    // chechBox
    tab
  },
}
</script>

<style >
  *{
    margin: 0;
    padding: 0;
  }
  .clearfix{
    clear: both;
  }
html{
  font-size:100px;
}
  a{
    text-decoration: none;
    color:  #dcb474;
  }
  body{
    font-size: .13rem;
    font-family: "PingFang SC";
    /*background: url("./components/Login/loginImgs/bgc.png")no-repeat;*/
    background-color:#efefef ;
    background-size: 100%;
  }
</style>
