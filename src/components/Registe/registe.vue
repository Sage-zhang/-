<!--注册页面-->

<template>
  <div class="content">
    <chechBox></chechBox>
    <div class="registe">

      <!--表单验证-->
      <form action="/registe" method="get" @submit.prevent="submit">
        <div class="items">
          <div class="item">
            <img src="./loginImgs/icon-1@2x.png" alt="">
            <el-input placeholder="请输入您的手机号码" v-model="input10"
                      clearable class="lucencyInput" @blur="userTel()"></el-input>
            <div :class="{err:!err,ok:err}"></div>
          </div>
        </div>
        <div class="items">
          <div class="item">
            <el-input placeholder="验证码" v-model="input12" clearable class="lucencyInput test" ></el-input>
            <button class="yanzheng" @click="getCode()" >{{msg}}</button>
            <span  class="count" style="color: #fff;width: .7rem" v-show="show">| {{count}}S</span>
          </div>
        </div>

        <div class="items">
          <div class="item">
            <img class="tel" src="./loginImgs/icon-2@2x.png" alt="">
            <el-input type="password" placeholder="请输入6-18位字符" v-model="input11" clearable class="lucencyInput" @blur="password()" ></el-input>
          </div>
          <div :class="{err:!ok,ok:ok}"></div>
        </div>
        <!--立即登录-->
        <div class="items">
          <input type="submit" class="btn" value="立即注册" style="color:#fff">
        </div>
        <p class="footerTo"><span style="color:#d7bf99 ">注册</span>代表您已同意《钻石汇用户使用协议》</p>
      </form>
    </div>
  </div>

</template>

<script>
  import chechBox from './../chechBox'
  export default{
    components:{
      chechBox
    },
    data() {
      return {
        input10: '',
        input12: '',
        input11: '',
        show: false,
        count: '5',
        timer: null,
        msg:'获取验证码',
        err:'',
        ok:'',
      }
    },
    props:['num'],
    methods: {

      submit: function() {
        var that = this;
        // var formData = JSON.stringify(this.user); // 这里才是你的表单数据
        this.$ajax.get('http://172.25.5.128:8080/supermarket/util/buy?str=regist',
          {
            params:{
              phone:this.input10,password:this.input11
            }
          }).then(function(response){
          console.log(response);
          if(response.data === '1'){
            that.$router.push('login')
          }
        }).catch(function (err) {
          console.log(err)
        })
      },
      getCode() {
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = true;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = false;
              clearInterval(this.timer);
              this.timer = null;
              this.msg = '重新获取'
            }
          }, 1000)
        }
        this.$http.get('http://172.25.5.128:8080/supermarket/regist.jsp',{params:{num}}).then(function(response){
          console.log(response.data);
        }, (res) => {
          console.log(res);
          // error callback
        });
      },
      userTel:function () {
        var reg = /^[1][3|4|5|7|8|9][0-9]{9}$/;
        if(reg.test(this.input10)){
          this.err = true;
          console.log(this.err)
        }else{
          this.err = false;
          console.log(this.err)
        }
      },
      password:function(){
        var reg = /[\w]{6,18}/
        if(reg.test(this.input11)){
          this.ok = true;
          console.log(this.ok)
        }else{
          this.ok = false;
          console.log(this.ok)
        }
      }
    },
  }
</script>

<style scoped>
  .content{
    font-family: "PingFang SC";
    background: url("./loginImgs/bgc.png")no-repeat;
    /*background-color:#fff ;*/
    background-size: 100%;
    height: 6.67rem;
  }
  .registe{
    width: 100%;
    height:4.30rem;
    margin-top: .6rem;
  }
  .items{
    width: 100%;
    position: relative;

  }
  .item{
    width: 2.04rem;
    height: .48rem;
    border-bottom:.01rem solid #d7bf99;
    margin: 0 auto;
    display: flex;
  }
  .item img{
    width: .3rem;
    height: .3rem;
    margin-top: .2rem;
    margin-left: -.07rem;
  }

  /*验证状态*/
  .ok{
    width: .3rem;
    height: .3rem;
    background: url("./loginImgs/icon-4@2x.png");
    background-size: contain;
    position: absolute;
    top:.2rem;
    right: .5rem;
  }
  .err{
    width: .3rem;
    height: .3rem;
    background: url("./loginImgs/icon-5@2x.png");
    background-size: contain;
    position: absolute;
    top:.15rem;
    right: .4rem;
  }
  /*忘记密码*/
  .forget{
    float: right;
    color: #fff;
    position: absolute;
    right: .9rem;
    top:.1rem;

  }
  /*验证码*/
  .yanzheng{
    width: 1.4rem;
    padding-left: .05rem;
    color: #fff;
    font-size: .1rem;
    background-color: transparent;
    margin-top: .2rem;
    border: none;
    outline: none;
  }
  .count{
    margin-top: .25rem;
  }
  /*登录按钮*/
  .btn{
    width: 1.72rem;
    height: .28rem;
    border-radius: .04rem;
    background: linear-gradient(135deg, #ac6d20 ,#fdcf86);
    margin: .5rem auto;
    color: #fff;
    font-size: .12rem;
    border: none;
    outline: none;
    margin-left:1.015rem ;
    font-weight: 700;
  }
  /*协议*/
  .footerTo{
    font-size: .1rem;
    color: #fff;
    text-align: center;
    margin-top: .6rem;
  }

</style>
<style>
  .lucencyInput .el-input__inner{
    background-color: transparent;
    border: none;
    font-size: .2rem;
    margin-top: .15rem;
    margin-left:-.1rem;
    color: white;
    height: .4rem;
  }
  .lucencyInput .el-input__inner::placeholder{
    font-size: .14rem;
    padding: 0;
    margin: 0;

  }
  .test .el-input__inner::placeholder{
    color: white;
  }
  .el-input__icon{
    height: .25rem;
    margin-top: .2rem;
  }

</style>

