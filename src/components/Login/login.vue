<!--登录页面-->

<template>
  <div class="content">
    <chechBox></chechBox>
    <div class="login">

      <!--表单验证-->
      <form action="">
        <div class="items">
          <div class="item">
            <img src="./loginImgs/icon-1@2x.png" alt="">
            <el-input placeholder="请输入您的手机号码" v-model="ruleForm.userName"
                      clearable class="lucencyInput" @blur="userTel()"></el-input>
            <div :class="{err:!err,ok:err}"></div>
          </div>
        </div>

        <div class="items">
          <div class="item">
            <img class="tel" src="./loginImgs/icon-2@2x.png" alt="">
            <el-input type="password" placeholder="请输入6-18位字符" v-model="ruleForm.password" clearable class="lucencyInput" @blur="password()" ></el-input>
          </div>
          <div :class="{err:!ok,ok:ok}"></div>
        </div>

        <!--忘记密码-->
        <div class="items">
          <!--<el-checkbox v-model="checked" style="color:#a0a0a0;">一周内自动登录</el-checkbox>-->
          <span class="forget">忘记密码？</span>
        </div>

        <!--立即登录-->
        <div class="items">
          <router-link to="/gohome">
            <button class="btn" @click="submitForm('ruleForm')" >登 录</button>
          </router-link>

        </div>
        <!--第三方登录-->
        <div class="items">
          <span class="leftLine" ></span>
          <p class="third">第三方登录</p>
          <span class="rightLine"></span>
          <!--qq/微信登录-->
          <div class="qq">
            <img src="./loginImgs/qq@2x.png" alt="">
            <img src="./loginImgs/cha@2x.png" alt="">
          </div>
        </div>
        <p class="footerTo"><span style="color:#d7bf99 ">登录</span>代表您已同意《钻石汇用户使用协议》</p>
      </form>

    </div>
  </div>

</template>

<script>
  import chechBox from './../chechBox'
  export default{
    data() {
      return {
        ruleForm: {
          userName: '', //用户名
          password: ''  //密码
        },
        err:'',//验证错误
        ok:'',//验证正确
        // checked:''
      }
    },
    components:{
      chechBox
    },
    methods:{
      //点击登录调用方法
      submitForm(formName) {
        //保存的账号
        var name=this.ruleForm.userName;
        var pass=this.ruleForm.password;
        //保存的密码
        // var pass=this.ruleForm.password;//
        if(name===''||name===null){
          alert("请输入正确的用户名");
          return
        }else if(pass==''||pass==null) {
          alert("请输入正确的密码");
          return
        }
        // //判断复选框是否被勾选 勾选则调用配置cookie方法
        // if(this.checked=true){
        //   //传入账号名，密码，和保存天数3个参数
        //   this.setCookie(name,pass,7);
        // }
        //接口
        var url='http://172.25.5.128:8080/supermarket/util/buy?str=login';

        this.$ajax.get(url,
          {
            params:{
              phone:this.ruleForm.userName,password:this.ruleForm.password
            }
          }).then(function(response){

          console.log(response);
          var buyID = localStorage.setItem('buyID',response.data.id);
          localStorage.setItem('name',response.data.name);
        }).catch(function (err) {
          console.log(err)
        })
      },
//设置cookie
      setCookie(c_name,c_pwd,exdays) {
        var exdate=new Date();//获取时间
        exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);//保存的天数
        //字符串拼接cookie
        window.document.cookie="userName"+ "=" +c_name+";path=/;expires="+exdate.toGMTString();
        window.document.cookie="userPwd"+"="+c_pwd+";path=/;expires="+exdate.toGMTString();
      },
      //读取cookie
      getCookie:function () {
        if (document.cookie.length>0) {
          var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
          for(var i=0;i<arr.length;i++){
            var arr2=arr[i].split('=');//再次切割
            //判断查找相对应的值
            if(arr2[0]=='userName'){
              this.ruleForm.userName=arr2[1];//保存到保存数据的地方
            }else if(arr2[0]=='userPwd'){
              this.ruleForm.password=arr2[1];
            }
          }
        }
      },
      // //清除cookie
      // clearCookie:function () {
      //   this.setCookie("","",-1);//修改2值都为空，天数为负1天就好了
      // },
      //验证手机号码
      userTel:function () {
        var reg = /^[1][3|4|5|7|8|9][0-9]{9}$/;
        if(reg.test(this.ruleForm.userName)){
          this.err = true;
          console.log(this.err)
        }else{
          this.err = false;
          console.log(this.err)
        }
      },
      //验证密码
      password:function(){
        var reg = /[\w]{6,18}/
        if(reg.test(this.ruleForm.password)){
          this.ok = true;
          console.log(this.ok)
        }else{
          this.ok = false;
          console.log(this.ok)
        }
      }
    },
    //页面加载调用获取cookie值
    mounted(){
      this.getCookie()
    }
  }
</script>

<style scoped>
  .leftLine,.rightLine{
    display: inline-block;
    width: .5rem;
    height: .01rem;
    background-color: #d7bf99;
  }
  .leftLine{
    position: absolute;
    left: 1rem;
    bottom:.5rem ;
  }
  .rightLine{
    position: absolute;
    right: 1rem;
    bottom: .5rem;
  }
  .content{
    font-family: "PingFang SC";
    background: url("./loginImgs/bgc.png")no-repeat;
    /*background-color:#fff ;*/
    background-size: 100%;
    height: 6.67rem;
  }
  .login{
    width: 100%;
    height:4.30rem;
    margin-top: .6rem;
    /*font-size: .13rem;*/
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

  /*第三方登录*/
  .third{
  font-size: .1rem;
  color: #fff;
  text-align: center;
  }
  /*qq/微信登录*/
  .qq{
  width: 100%;
  margin-top: .25rem;
  display: flex;
  justify-content: space-around;
  padding:0 .8rem ;
  box-sizing: border-box;


  }
  .qq img{
  width: .18rem;
  height: .18rem;
  margin:0 .2rem;
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
  .el-input__icon{
    height: .25rem;
    margin-top: .2rem;
  }
  .el-checkbox__input.is-checked+.el-checkbox__label{
    margin-top: .2rem;
  }

</style>
