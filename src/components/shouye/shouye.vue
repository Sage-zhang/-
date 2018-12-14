<template>
  <div class="homePage">
    <!--轮播图第一个-->
    <!--<img src="./images/bannerbj2@2x.png" alt="" width="375px">-->
    <div class="swiper-container one">
      <div class="swiper-wrapper two">
        <div class="swiper-slide pics"><img src="./images/bannerbj1@2x.png" alt=""></div>
        <div class="swiper-slide pics"><img src="./images/bannerbj2@2x.png" alt=""></div>
        <div class="swiper-slide pics"><img src="./homeImges/bannerbj4@2x.png" alt=""></div>
      </div>
    </div>
    <div :class="{searchBox:flag}">
      <!--左边扫一扫图片-->
      <img src="./images/saoyisao.png" alt="" class="sao">
      <!--盒子部分-->
      <div class="box"  >
        <img src="./images/sousuo.png" alt="">
        <input type="text" placeholder="搜索钻戒丶项链耳环">
        <img src="./images/xiangji@2x.png" alt="">
      </div>
      <!--右边消息图片-->
      <img src="./images/xiaoxi@2x.png" alt="" class="xiao">
    </div>

   <!--轮播图第二个-->
    <div class="swiper-container ones">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./images/banner1@2x.png" alt=""/></div>
        <div class="swiper-slide"><img src="./images/banner2@2x.png" alt=""/></div>
        <div class="swiper-slide"><img src="./homeImges/banner4@2x.png" alt=""/></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!--下面项链戒指耳环胸针手链-->
    <div class="boxs">
      <div class="item">
        <router-link to="/shangpin"><img src="./homeImges/xianglian@2x.png" alt=""></router-link>
        <span>项链</span>
      </div>
      <div class="item">
        <img src="./homeImges/jiezhi@2x.png" alt="">
        <span>戒指</span>
      </div>
      <div class="item">
        <img src="./homeImges/erhuan@2x.png" alt="">
        <span>耳环</span>
      </div>
      <div class="item">
        <img src="./homeImges/xiongzhen@2x.png" alt="">
        <span>胸针</span>
      </div>
      <div class="item">
        <img src="./homeImges/shoulian@2x.png" alt="">
        <span>手链</span>
      </div>
    </div>
    <!--今日头条插件-->
    <Toutiao></Toutiao>
    <!--下面第二部分-->
    <div class="content">
      <div class="box1">
          <img class="title1" src="./images/CPEXCLUSIVE.png" alt="">
        <router-link to="/zhubao"> <img class="tu1" src="./images/tuceng3@2x.png" alt=""></router-link>
        <!--<a href=""> <img class="tu1" src="./images/tuceng3@2x.png" alt=""></a>-->
        <a href=""><img class="tu2" src="./images/IMG_2598@2x.png" alt=""></a>
        <a href=""><img class="tu3" src="./images/tupian1@2x.png" alt=""></a>
        <a href=""><img class="tu4" src="./images/tupian2@2x.png" alt=""></a>
      </div>
      <img class="title2" src="./images/caoliuxinpin.png" alt="">

      <div class="middle-box1">
        <img class="middle1" src="./homeImges/ttuceng1@2x.png" alt="">
        <img class="pic1" src="./images/qieye@2x.png" alt="">
        <p class="article">喜钻50分铂金钻戒女钻</p>
        <span class="xiaozi">戒18K金婚戒指六爪正品</span>
        <span class="jiage1">￥ 1880</span>
        <p class="article1">18人付款</p>
        <span class="span1">···</span>
      </div>
      <div class="middle-box2">
        <img class="middle2" src="./homeImges/ttuceng2@2x.png" alt="">
        <img class="pic2" src="./images/qieye@2x.png" alt="">
        <p class="article2">克徕帝珠宝钻耳钉私</p>
        <span class="xiaozi1">人定制情侣专属18K金正品</span>
        <span class="jiage2">￥ 2780</span>
        <p class="article3">18人付款</p>
        <span class="span2">···</span>
      </div>
      <div class="middle-box3">
        <img class="middle3" src="./homeImges/ttuceng3@2x.png" alt="">
        <img class="pic3" src="./images/qieye@2x.png" alt="">
        <p class="article4">喜钻50分铂金钻戒女钻</p>
        <span class="xiaozi2">戒18K金婚戒指六爪正品</span>
        <span class="jiage3">￥ 1880</span>
        <p class="article5">18人付款</p>
        <span class="span3">···</span>
      </div>
      <div class="middle-box4">
        <img class="middle4" src="./homeImges/ttuceng4@2x.png" alt="">
        <img class="pic4" src="./images/qieye@2x.png" alt="">
        <p class="article6">克徕帝珠宝钻耳钉私</p>
        <span class="xiaozi3">人定制情侣专属18K金正品</span>
        <span class="jiage4">￥ 2780</span>
        <p class="article7">18人付款</p>
        <span class="span4">···</span>
      </div>
      <div class="title3">
        <img class="title3" src="./images/jiarenbixuan.png" alt="">
      </div>
      <div class="middle-box5">
        <img class="middle5" src="./homeImges/ttuceng5@2x.png" alt="">
        <img class="pic5" src="./images/qieye@2x.png" alt="">
        <p class="article8">喜钻50分铂金钻戒女钻</p>
        <span class="xiaozi4">戒18K金婚戒指六爪正品</span>
        <span class="jiage5">￥ 1880</span>
        <p class="article9">18人付款</p>
        <span class="span5">···</span>
      </div>
      <div class="middle-box6">
        <img class="middle6" src="./homeImges/ttuceng6@2x.png" alt="">
        <img class="pic6" src="./images/qieye@2x.png" alt="">
        <p class="article10">克徕帝珠宝钻耳钉私</p>
        <span class="xiaozi5">人定制情侣专属18K金正品</span>
        <span class="jiage6">￥ 2780</span>
        <p class="article11">18人付款</p>
        <span class="span6">···</span>
      </div>
    </div>

    <div class="mask"style="width: 100%;height: .6rem;position: absolute;bottom: -11.8rem;left: 0;background-color: #fff;"></div>
    <Tab></Tab>

  </div>

</template>

<script>

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import Tab from './../../components/footer/tab'
  import Toutiao from './toutiao'

  export default {
    data:function () {
      return{
        flag:false
      }
    },
    components:{
      Tab,Toutiao
    },
    mounted: function(){
      new Swiper ('.swiper-container', {
        autoplay:true,
        loop: true,

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      });
        window.addEventListener('scroll', this.handleScroll)
    },
  methods:{
     handleScroll () { //改变元素#searchBar的top值
       var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
       // console.log(top)
       if(top > 100){
         this.flag =true;
       }else {
         this.flag = false;
       }
     },
   }
  }

</script>

<style scoped>

  .homePage{
    position: relative;
    background: url("./images/beijing@2x.png")no-repeat;
  }
  .homePage .one{
    width: 100%;
    height: 1.6rem;
    /*border-radius: .8rem;*/
  }
  .homePage .box{
    width: 2.8rem;
    height: .35rem;
    background-color: white;
    border-radius:.4rem;
    position: absolute;
    top: .22rem;
    left: .5rem;
    z-index: 99;
  }
  .content{
    background-color:red;
  }
  .searchBox{
    width: 100%;
    background: #ff2362;
    height: .7rem;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
  }
  .bgc{
    background: #CCC;
  }
  .homePage .box input{
    width: 1.5rem;
    height: .3rem;
    border: none;
    border-radius:.3rem;
    position: absolute;
    top: .03rem;
    left: .4rem;
    outline: none;
  }
  .homePage .sao{
    width: .3rem;
    position: absolute;
    top: .25rem;
    left: .1rem;
    z-index: 99;
  }
  .homePage .xiao{
    width: .3rem;
    position: absolute;
    top: .23rem;
    right: .1rem;
    z-index: 99;
  }
  .homePage .box img:nth-of-type(1){
    height: .35rem;
    position: absolute;
    top: 0;
    left: .05rem;
  }
  .homePage .box img:nth-of-type(2){
    height: .2rem;
    position: absolute;
    top: .06rem;
    right: .25rem;
  }
  .homePage .ones{
    width: 3.12rem;
    height: 1.4rem;
    position: absolute;
    top: .8rem;
    left: .375rem;
  }
  .homePage .ones img{
    width: 3.12rem;
    height: 1.4rem;
  }
  .homePage .boxs{
    width: 100%;
    height: 1.16rem;
    margin-top: 75px;
    position: absolute;
    top: 1.5rem;
    display: flex;
    justify-content: space-around;
  }
  .homePage .boxs .item{
    width: .6rem;
    text-align: center;
  }
  .homePage .boxs .item span{
    font-size: .13rem;
  }
  .homePage .boxs .item img{
    width: .6rem;
  }
  .box1{
    width: 100%;
    position: absolute;
    top: 7rem;
    left: 0;
  }
  .box1 .tu1{
    width: 1.73rem;
    height: 1.88rem;
    position: absolute;
    top:-2.5rem;
    left:.1rem;
  }
  .box1 .tu2{
    width: 1.725rem;
    height: 0.945rem ;
    position: absolute;
    top: -2.5rem;
    left: 1.9rem;
  }
  .box1 .tu3{
    width: .81rem;
    height: .845rem ;
    position: absolute;
    top: -1.45rem;
    left:2.8rem ;

  }
  .box1 .tu4{
    width: .81rem;
    height: .845rem ;
    position: absolute;
    top: -1.45rem;
    left:1.9rem;
  }
  .title1{
    width: .845rem;
    height: .34rem;
    position: absolute;
    top:-2.97rem;
    left: 1.45rem;
  }
  .title2{
    width: .74rem;
    height: .31rem;
    position: absolute;
    top: 6.55rem;
    left: 1.5rem;
  }
  .middle-box1{
    width: 1.73rem;
    height: 2.4rem;
    border-radius: .1rem;
    position: absolute;
    left: .1rem;
    top: 7rem;
    background-color: #fff;
  }
  .middle1{
    width:1.74rem ;
    height:1.74rem;
    position: absolute;
  }
  .pic1{
    width: .23rem;
    height: .14rem;
    margin-left: .1rem;
    margin-top: 1.8rem;
  }
  .article{
    font-size: .12rem;
    color: rgb(51,51,51);
    margin-left: .4rem;
    margin-top: -.2rem;
  }
  .xiaozi{
    font-size: .12rem;
    color: rgb(51,51,51);
    position: absolute;
    left: .2rem;
  }
  .jiage1{
    font-size: .16rem;
    color: red;
    position: absolute;
    left: .05rem;
    top: 2.1rem;
  }
  .article1{
    font-size: .1rem;
    color: rgb(153,153,153);
    margin-left: .7rem;
    margin-top: .2rem;
  }
  .span1{
    font-size: .24rem;
    color: #999999;
    position: absolute;
    left:1.4rem;
    top: 2.07rem;
  }
  .middle-box2{
    width: 1.73rem;
    height: 2.4rem;
    border-radius: .1rem;
    position: absolute;
    left: 1.9rem;
    top: 7rem;
    background-color: #fff;
    /*border: 1px solid #cccc;*/
    color: red;
  }
  .middle2{
    width:1.74rem ;
    height:1.74rem;
    position: absolute;
  }
  .pic2{
    width: .23rem;
    height: .14rem;
    margin-left: .1rem;
    margin-top: 1.8rem;
  }
  .article2{
    font-size: .12rem;
    color: rgb(51,51,51);
    margin-left: .5rem;
    margin-top: -.2rem;
  }
  .xiaozi1{
    font-size: .12rem;
    color: rgb(51,51,51);
    position: absolute;
    left: .1rem;
  }
  .jiage2{
    font-size: .16rem;
    color: red;
    position: absolute;
    left: .05rem;
    top: 2.1rem;
  }
  .article3{
    font-size: .1rem;
    color: rgb(153,153,153);
    margin-left: .7rem;
    margin-top: .2rem;
  }
  .span2{
    font-size: .24rem;
    color: #999999;
    position: absolute;
    left: 1.4rem;
    top: 2.07rem;
  }
  .middle-box3{
    width: 1.73rem;
    height: 2.4rem;
    border-radius: .1rem;
    position: absolute;
    top: 9.5rem;
    left: .1rem;
    background-color: #fff;
    /*border: 1px solid #cccc;*/
  }
  .middle3{
    width:1.74rem ;
    height:1.74rem;
    position: absolute;
  }
  .pic3{
    width: .23rem;
    height: .14rem;
    margin-left: .1rem;
    margin-top: 1.8rem;
  }
  .article4{
    font-size: .12rem;
    color: rgb(51,51,51);
    margin-left: .4rem;
    margin-top: -.2rem;
  }
  .xiaozi2{
    font-size: .12rem;
    color: rgb(51,51,51);
    position: absolute;
    left: .2rem;
  }
  .jiage3{
    font-size: .16rem;
    color: red;
    position: absolute;
    left: .05rem;
    top: 2.1rem;
  }
  .article5{
    font-size: .1rem;
    color: rgb(153,153,153);
    margin-left: .7rem;
    margin-top: .2rem;
  }
  .span3{
    font-size: .24rem;
    color: #999999;
    position: absolute;
    left: 1.4rem;
    top:2.07rem;
  }
  .middle-box4{
    width: 1.73rem;
    height: 2.4rem;
    border-radius: .1rem;
    position: absolute;
    left: 1.9rem;
    top: 9.5rem;
    background-color: #fff;
    /*border: 1px solid #cccc;*/
  }
  .middle4{
    width:1.74rem ;
    height:1.74rem;
    position: absolute;
  }
  .pic4{
    width: .23rem;
    height: .14rem;
    margin-left: .1rem;
    margin-top: 1.8rem;
  }
  .article6{
    font-size: .12rem;
    color: rgb(51,51,51);
    margin-left: .5rem;
    margin-top: -.2rem;
  }
  .xiaozi3{
    font-size: .12rem;
    color: rgb(51,51,51);
    position: absolute;
    left: .1rem;
  }
  .jiage4{
    font-size: .16rem;
    color: red;
    position: absolute;
    left: .05rem;
    top: 2.1rem;
  }
  .article7{
    font-size: .1rem;
    color: rgb(153,153,153);
    margin-left: .7rem;
    margin-top: .2rem;
  }
  .span4{
    font-size: .24rem;
    color: #999999;
    position: absolute;
    left: 1.4rem;
    top: 2.07rem;
  }
  .title3{
    width: 1.15rem;
    height: 0.3rem;
    position: absolute;
    top:6.03rem;
    left: .65rem;
  }
  .middle-box5{
    width: 1.73rem;
    height: 2.4rem;
    border-radius: .1rem;
    position: absolute;
    top: 12.55rem;
    left: .1rem;
    background-color: #fff;
    /*border: 1px solid #cccc;*/
  }
  .middle5{
    width:1.74rem ;
    height:1.74rem;
    position: absolute;
  }
  .pic5{
    width: .23rem;
    height: .14rem;
    margin-left: .1rem;
    margin-top: 1.8rem;
  }
  .article8{
    font-size: .12rem;
    color: rgb(51,51,51);
    margin-left: .4rem;
    margin-top: -.2rem;
  }
  .xiaozi4{
    font-size: .12rem;
    color: rgb(51,51,51);
    position: absolute;
    left: .2rem;
  }
  .jiage5{
    font-size: .16rem;
    color: red;
    position: absolute;
    top:2.12rem;
  }
  .article9{
    font-size: .1rem;
    color: rgb(153,153,153);
    margin-left: .7rem;
    margin-top: .2rem;
  }
  .span5{
    font-size: .24rem;
    color: #999999;
    position: absolute;
    left: 1.5rem;
    top: 2.07rem;
  }
  .middle-box6{
    width: 1.73rem;
    height: 2.4rem;
    border-radius: .1rem;
    position: absolute;
    left: 1.9rem;
    top: 12.55rem;
    /*border: 1px solid #cccc;*/
    background-color: #fff;
    color: red;
  }
  .middle6{
    width:1.79rem ;
    height:1.74rem;
    position: absolute;
  }
  .pic6{
    width: .23rem;
    height: .14rem;
    margin-left: .1rem;
    margin-top: 1.8rem;
  }
  .article10{
    font-size: .12rem;
    color: rgb(51,51,51);
    margin-left: .5rem;
    margin-top: -.2rem;
  }
  .xiaozi5{
    font-size: .12rem;
    color: rgb(51,51,51);
    position: absolute;
    left: .1rem;
  }
  .jiage6{
    font-size: .16rem;
    color: red;
    position: absolute;
    left: .05rem;
    top: 2.1rem;
  }
  .article11{
    font-size: .1rem;
    color: rgb(153,153,153);
    margin-left: .7rem;
    margin-top: .2rem;
  }
  .span6{
    font-size: .24rem;
    color: #999999;
    position: absolute;
    left: 1.4rem;
    top: 2.07rem;
  }

</style>
