<template>
    <div>
      <img src="./Login/loginImgs/backicon.png" alt="" @click="back()"
           style="width: .24rem;height: .24rem;margin-top: .2rem; margin-left: .2rem">
      <check></check>
      <div class="login-box">
        <span @click="fn" :class="{active:flag}">
          <router-link to="/login" >登录</router-link>
        </span>
        <span @click="fn" :class="{active:!flag}">
          <router-link to="/regite">注册</router-link>
        </span>
      </div>
    </div>
</template>

<script>
  import check from './check'
  export default {
    components:{
      check
    },
    data: function () {
      return {
        flag: true
      }
    },
    methods: {
      back:function () {
        this.$router.go(-1);
      },
      fn: function () {
        var hash = window.location.hash.substr(2);
        hash === 'login' ? this.flag = true : this.flag = false;
      }
    },
    created: function () {
      this.fn();
    }

  }
</script>

<style scoped>
  a{
    text-decoration: none;
    color:  #fff;
  }
  body{
    font-size: .13rem;
    font-family: "PingFang SC";
    background: url("./Login/loginImgs/bgc.png")no-repeat;
    background-size: 100%;
  }
  .login-box{
    position: absolute;
    top: 1.5rem;
    left: 27%;
  }
  .login-box span{
    margin: .21rem;
    font-size: .2rem;
    color: #dcb474;
  }
  .login-box .active a {
    color: #dcb474;
    border-bottom: .02rem solid #dcb474;
  }
</style>
