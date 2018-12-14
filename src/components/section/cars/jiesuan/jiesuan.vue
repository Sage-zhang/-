<template>
  <div class="boxs">
    <header>
      <!--上面第一个盒子-->
      <div class="top">
        <img src="./img/fanhui0@2x.png" alt="" @click="goback()">
        确认订单
        <img src="./img/3dian@2x.png" alt="">
      </div>
      <!--第二个盒子-->
        <div class="bottom">
          <p>收货人:陈女士</p>
          <p>电话:15090446789</p>
        </div>
      <!--第三个盒子-->
        <div class="bottomss">
          <img src="./img/wujfcnh3vm@2x.png" alt="">
          <p>收货地址:河南省郑州市金水区花园路31号兰德办公楼14楼北大青鸟课工场</p>
          <img src="./img/fanhui2@2x.png" alt="">
        </div>
        <img src="./img/xinfengx@2x.png" alt="" class="xin">
    </header>
    <section>
      <div class="one">
        <img src="./img/LOGOshangpu@2x@2x.png" alt="" class="lo">
        <p>戴梦得旗舰珠宝店</p>
      </div>
      <div class="two">
        <img src="./img/3@2x@2x.png" alt="">
        <span>戴梦得钻戒女正品1克裸钻铂金钻石婚钻裸钻钻石男女真爱永恒,终生质保,一生仅限一枚</span>
        <span>主钻分数(最低),18分，钻石净度:vs/微瑕,颜色:1-J淡白，规格:(定制)</span>
      </div>
      <div class="three">
        <p>单价/数量</p>
        <p>15959.00</p>
        <p>✖1</p>
      </div>
      <div class="four">
        <p>配送方式</p>
        <p>快递&nbsp&nbsp&nbsp免邮</p>
        <img src="./img/fanhui3@2x.png" alt="">
      </div>
      <div class="five">
        <p>买家留言:</p>
        <input type="text" placeholder="选填:留言内容已和商家确认">
      </div>
      <div class="six">
        <p>共一件商品</p>
        <p>小计:</p>
        <p>￥15959.00</p>
      </div>


    </section>
    <footer>
      <p>合计金额:</p>
      <p>15959.00</p>
      <router-link to="/zhifu"><div>提交订单</div></router-link>
    </footer>



  </div>

</template>


<script>

  export default{
    methods:{
      goback:function () {
        this.$router.go(-1);
      }
    }
  }

</script>

<style>
  header{
    width: 100%;
    position: relative;
  }
header .top{
  width: 100%;
  height: .66rem;
  font-size: .16rem;
  line-height: .66rem;
  text-align: center;
  background-color: rgb(242,242,242);
  display: flex;
  justify-content: space-between;
}
header .top img{
  width: .24rem;
  height: .24rem;
  margin: .21rem .1rem;
}
header  .bottom{
  display: flex;
  justify-content: space-between;
}
header .bottom p{
  font-size: .14rem;
  margin: .1rem .1rem;
}
header  .bottom p:nth-of-type(1){
  margin-left: .3rem;
}
header  .bottomss{
  width: 100%;
  height: .6rem;
  display: flex;
}
header .bottomss img{
  width: .15rem;
  height: .225rem;
  margin: .187rem .1rem;
}
  header .bottomss p{
    font-size: .14rem;
    margin: .1rem .35rem .18rem .1rem;
  }
  header  .xin{
    width: 3.75rem;
    height: .03rem;
    margin: 0;
    position: absolute;
    top: 1.65rem;
  }
  section .one{
    width: 100%;
    height: .42rem;
    display: flex;
  }
  section div img{
    width: .22rem;
    height: .22rem;
    margin: .1rem .1rem;
  }
  section div p{
    font-size: .14rem;
    line-height: .42rem;
  }
  section .two{
    width: 100%;
    height: 1.2rem;
    border-bottom: 1px solid #cccccc;
  }
  section .two img{
    width: .9rem;
    height: .9rem;
    margin: 0 .1rem;
    float: left;
  }
  section .two span{
    width: 2.5rem;
    height: .4rem;
    font-size: .12rem;
    float: left;
  }
  section .two span:nth-of-type(2){
    color: #cccccc;
  }
  section .three{
    width: 100%;
    height: .42rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
  }
  section .three p{
    margin: 0 .1rem;
  }
  section .three p:nth-of-type(2){
    color: rgb(255,36,99);
    margin-left: 1.8rem;
    font-size: .16rem;
  }
  section .four{
    display: flex;
    width: 100%;
    height: .42rem;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
  }
  section .four img{
    width: .24rem;
    height: .24rem;
    margin: .09rem .05rem;
  }
  section .four p:nth-of-type(1){
    margin-left: .1rem;
  }
  section .four p:nth-of-type(2){
    line-height: .42rem;
    margin-left: 2rem;
  }
  section .five{
    width: 100%;
    height: .42rem;
    display: flex;
    border-bottom: 1px solid #cccccc;
  }
  section .five p{
    line-height: .42rem;
    margin-left: .1rem;
  }
  section .five input{
    width: 2rem;
    border: none;
    outline: none;
    margin-top: .01rem;
    margin-left: .2rem;
  }
  section .six{
    display: flex;
    flex-direction: row;
  }
  section .six p:nth-of-type(1){
    margin-left: 1.5rem;
  }
  section .six p:nth-of-type(2){
    margin-left: 0.2rem;
  }
  section .six p:nth-of-type(3){
    color: rgb(255,36,99);
    margin-left: 0.2rem;
  }
  footer{
    width: 100%;
    height: .5rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    border-top: 1px solid rgb(238,238,238);
  }
  footer p{
    width: 2rem;
    height: .6rem;
    line-height: .5rem;
    font-size: .16rem;
  }
  footer p:nth-of-type(1){
    margin-left: 1.3rem;
  }
  footer p:nth-of-type(2){
    margin-right: .8rem;
  }
  footer div{
    width: 1rem;
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: rgb(255,0,72);
    font-size: .18rem;
    color: white;
  }






</style>
