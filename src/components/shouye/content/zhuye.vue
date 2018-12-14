<template>
<div>
  <div class="boxs">
    <!--上面第一个盒子-->
    <div class="box">
      <img src="./imgs/fanhui@2x.png" alt="" class="fan" @click="goback()">
      <div class="smallBox">
        <img src="./imgs/sousuo@2x.png" alt="" class="sou">
        <input type="text" placeholder="钻石项链/吊坠">
      </div>
      <img src="./imgs/gl86o0ij5b@2x.png" alt="" class="hua">
      <img src="./imgs/5ej3ul7qrb@2x.png" alt="" class="xiao">
    </div>
    <!--第二个盒子-->
    <div class="boxss">
      <img src="./imgs/LOGOshangpu@2x.png" alt="">
      <img src="./imgs/dmd@2x.png" alt="">
      <img src="./imgs/guanzhuyouli@2x.png" alt="">
    </div>
    <!--第三个盒子-->
    <div class="items">
      <Item text="首页" class="one"></Item>
      <Item text="宝贝" class=""></Item>
      <Item text="热销" class=""></Item>
      <Item text="上新" class=""></Item>
      <Item text="活动" class=""></Item>
    </div>

  </div>
  <!--最后下面图片-->
  <a href="#" id="back-top" @click="back()"><img src="./imgs/fanhuidingbu@2x.png" alt="" class="fanhui"></a>

  <img src="./imgs/beij2@2x.png" alt="" class="bottom">

</div>

</template>


<script>

  import Item from './item'
  export default {
    methods:{
      goback:function () {
        this.$router.go(-1);
      }
    },
    components:{
      Item
    }
  }
</script>

<style scoped>
  /*第一个盒子部分*/
  .boxs{
    width: 3.75rem;
    height: 1.715rem;
    background: url("imgs/beij@2x.png");
    background-size: 100%;
    position: fixed;
    z-index: 99;
  }
  .boxs .box{
    width: 100%;
    height: .3rem;
    display: flex;
    padding-top: .3rem;
    position: relative;
  }
  .boxs .box .smallBox{
    width: 2rem;
    height: .3rem;
    border-radius: .15rem;
    background-color: rgba(255,255,255 ,0.7);
    display: flex;
    position: absolute;
    top: .3rem;
    left: .55rem;
  }
  .boxs .box .smallBox .sou{
    width: .14rem;
    height: .14rem;
    margin-left: .1rem;
    margin-top: .08rem;
  }
  .boxs .box .smallBox input{
    border: none;
    outline: none;
    margin-top: .02rem;
    margin-left: .1rem;
    background-color: rgba(255,255,255 ,0);
  }
  .boxs .box .fan{
    width: .25rem;
    height: .25rem;
    position: absolute;
    top: .3rem;
    left: .1rem;
  }
  .boxs .box .hua{
    width: .25rem;
    height: .25rem;
    position: absolute;
    top: .3rem;
    right: .45rem;
  }
  .boxs .box .xiao{
    width: .25rem;
    height: .25rem;
    position: absolute;
    top: .3rem;
    right: .1rem;
  }
  /*第二个盒子部分*/
  .boxs .boxss{
    width: 100%;
    height: .36rem;
    display: flex;
    margin-top: .2rem;
  }
  .boxs .boxss img:nth-of-type(1){
    width: .36rem;
    height: .36rem;
    margin-left: .1rem;
  }
  .boxs .boxss img:nth-of-type(2){
    width: 1.5rem;
    height: .18rem;
    margin-top: .09rem;
    margin-left: .2rem;
  }
  .boxs .boxss img:nth-of-type(3){
    width: .55rem;
    height: .18rem;
    margin-top: .09rem;
    margin-left: .94rem;
  }
  /*第三个盒子*/
  .boxs .items{
    width: 100%;
    height: .4rem;
    margin-top: .1rem;
    display: flex;
    justify-content: space-around;
  }
  .boxs .items .one{
    height: .3rem;
    border-bottom: .02rem solid white;
  }

  .fanhui{
    width: .93rem;
    height: .93rem;
    position: fixed;
    top: 5.2rem;
    left: 3rem;
    z-index: 99;
  }
  .bottom{
    width: 3.75rem;
    position: absolute;
    top: 1.715rem;
    left: 0;
  }

  /*<!--楼层跳转开始-->*/
      /*<a href="#" id="back-top" @click="back()">Top</a>*/
  /*<!--楼层跳转结束-->*/
  /*js*/
  /*//楼层跳转开始*/
  /*methods:{*/
  /*handleScroll() { //改变元素#searchBar的top值*/
  /*var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;*/
  /*// console.log(top)*/
    /*if ($(window).scrollTop() > 100) {*/
    /*$('#back-top').fadeIn(1000);*/
  /*} else {*/
      /*$("#back-top").fadeOut(1000);*/
    /*}*/
  /*},*/
  /*back(){*/
  /*$(window).animate({*/
    /*scrollTop: '0'*/
  /*}, 1000);*/
  /*return false; //防止默认事件行为*/
  /*}*/
  /*},*/
  /*mounted:function () {*/
    /*window.addEventListener('scroll', this.handleScroll);*/
  /*$(function() {*/
  /*//先将#back-top隐藏*/
  /*$('#back-top').hide();*/
  /*})*/
  /*}*/
  /*//  楼层跳转结束*/
      /*css*/
        /*!*楼层跳转开始*!*/
      /*.a{*/
        /*width: 100%;*/
        /*height: 5rem;*/
        /*background-color: green;*/
      /*}*/
  /*#back-top{*/
    /*position:fixed;*/
    /*width:.6rem;*/
    /*height:.6rem;*/
    /*bottom:.3rem;*/
    /*right:.3rem;*/
    /*background:#ccc;*/
    /*text-align:center;*/
    /*line-height:.6rem;*/
    /*text-decoration:none;*/
    /*font-size: .3rem;*/
  /*}*/
</style>
