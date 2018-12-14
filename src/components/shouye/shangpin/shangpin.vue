<template>
<div class="box">
  <img class="fanhui" src="./img/fanhui0@2x@2x.png" @click="goback()">
  <input type="text">
  <img class="sousuo" src="./img/sousuo@2x@2x.png">
  <div class="tuceng">图层 X</div>
  <img class="xiangji" src="./img/xiangji@2x@2x.png">
  <div class="box0">
  <div class="baobei">宝贝</div>
  <div class="dianpu">店铺</div>
  <ul>
    <li>综合<img src="./img/组1副本@2x.png"></li>
    <li>销量<img src="./img/组1副本@2x.png"></li>
    <li>信用<img src="./img/组1副本@2x.png"></li>
    <li>价格<img src="./img/组1副本@2x.png"></li>
  </ul>
    <img class="logo1" src=./img/5949c9b8Na4427e1f@2x.png>
    <img class="qiye1" src="./img/qieye@2x.png">
    <p class="xinwanfu">鑫万福 女人花白18K金钻女<br> <span>石戒镶1克拉求婚订婚结婚钻石</span></p>
    <p class="pic">￥1599.00</p>
    <span class="pinglun">6992条评论 &nbsp;&nbsp;&nbsp;99%好评 </span>
  </div>
  <div class="box1">
    <img  class="logo2" src="./img/5b7e0b83N6a0812e6@2x.png" alt="">
    <img class="qiye2" src="./img/qieye@2x.png">
    <p class="xinwanfu1">鑫万福 女人花白18K金钻女<br> <span>石戒镶1克拉求婚订婚结婚钻石</span></p>
    <p class="pic2">￥1599.00</p>
    <span class="pinglun1">6992条评论 &nbsp;&nbsp;&nbsp;99%好评 </span>
  </div>
  <div class="box2">
    <img class="logo3" src="./img/58eae4b9Nc4ff8f5f@2x.png" alt="">
    <img class="qiye3" src="./img/qieye@2x.png">
    <p class="xinwanfu2">鑫万福 女人花白18K金钻女<br> <span>石戒镶1克拉求婚订婚结婚钻石</span></p>
    <p class="pic3">￥1599.00</p>
    <span class="pinglun2">6992条评论 &nbsp;&nbsp;&nbsp;99%好评 </span>
  </div>
  <div class="box3">
    <img class="logo4" src="./img/5949c9b8Na4427e1f@2x.png" alt="">
    <img class="qiye4" src="./img/qieye@2x.png">
    <p class="xinwanfu3">鑫万福 女人花白18K金钻女<br> <span>石戒镶1克拉求婚订婚结婚钻石</span></p>
    <p class="pic4">￥1599.00</p>
    <span class="pinglun3">6992条评论 &nbsp;&nbsp;&nbsp;99%好评 </span>
  </div>
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
<style scoped>
  .box{
    width: 100%;
    height: .66rem;
    background-color: rgb(255,35,98);
    position: relative;
  }
  .fanhui{
    margin-top: .09rem;
  }
  input{
    width: 3rem;
    height: .3rem;
    border: 0;
    outline: none;
    position: absolute;
    top: .19rem;
    left: .4rem;
    border-radius: 0.15rem;
  }
  .tuceng{
    width: .6rem;
    height: .25rem;
    background-color: rgba(127,127,127, .5);
    position: absolute;
    color: white;
    border-radius: 0.15rem;
    text-align: center;
    line-height: .25rem;
    top: .21rem;
    left: .7rem;
  }
  .sousuo{
    width: .14rem;
    height: .14rem;
    position: absolute;
    top: .27rem;
    left: .5rem;
  }
  .xiangji{
    width: .22rem;
    height: .165rem;
    position: absolute;
    top: .25rem;
    left: 2.9rem;
  }
  .box0 {
    width: 100%;
    height: 2.3rem;
    background-color: #d8d8d8;
    position: absolute;
    border: 1px solid #d8d8d8;
    top:.66rem;
  }
  .baobei{
    width:0.95rem;
    height: .3rem;
    background-color: rgb(255,35,98);
    color: white;
    line-height: .3rem;
    border-radius: .15rem 0 0 .15rem;
    text-align: center;
    border: 1px solid red;
    position: absolute;
    left: .9rem;
    top: .07rem;
}
  .dianpu{
    width:0.95rem;
    height: .3rem;
    background-color:white;
    color: rgb(255,35,98);
    line-height: .3rem;
    border-radius: 0 .15rem .15rem 0;
    text-align: center;
    border: 1px solid red;
    position: absolute;
    left: 1.8rem;
    top: .07rem;
  }
  .box0 ul{
    display: flex;
    list-style: none;
    font-size: .14rem;
    color: rgb(255,35,98);

  }
  .box0 ul li img{
    width: .1rem;
    height: .13rem;
  }

  .box0 ul li {
    float: left;
    margin-left: .45rem;
    margin-top: .45rem;
  }
  .logo1{
    width: 1.4rem;
    height: 1.4rem;
    position: absolute;
    left: .1rem;
    bottom: .1rem;
  }
  .qiye1{
    width: .23rem;
    height: .14rem;
    position: absolute;
    left:1.6rem;
    top: .9rem;
  }
  .xinwanfu{
    font-size: .12rem;
    color: rgb(51,51,51);
    position: absolute;
    left: 1.9rem;
    top: .89rem;
  }
.xinwanfu span{
  font-size: .12rem;
  color: rgb(51,51,51);
  position: absolute;
  left:-.28rem;
}
  .pic{
    font-size: .14rem;
    color: rgb(240,37,15);
    position: absolute;
    left: 1.7rem;
    top: 1.7rem;
  }
.pinglun{
  font-size: .1rem;
  color: rgb(153,153,153);
  position: absolute;
  left: 1.7rem;
  top: 2.05rem;
}
.box1 {
  width: 100%;
  height: 1.7rem;
  background-color: #d8d8d8;
  position: absolute;
  border: 1px solid #d8d8d8;
  top:3rem;
}
.logo2{
  width: 1.4rem;
  height: 1.4rem;
  position: absolute;
  left: .1rem;
  bottom: .15rem;
}
.qiye2{
  width: .23rem;
  height: .14rem;
  position: absolute;
  left:1.6rem;
  top: .2rem;
}
.xinwanfu1{
  font-size: .12rem;
  color: rgb(51,51,51);
  position: absolute;
  left: 1.9rem;
  top: .17rem;
}
.xinwanfu1 span{
  font-size: .12rem;
  color: rgb(51,51,51);
  position: absolute;
  left:-.28rem;
}
.pic2{
  font-size: .14rem;
  color: rgb(240,37,15);
  position: absolute;
  left: 1.7rem;
  top: 1rem;
}
.pinglun1{
  font-size: .1rem;
  color: rgb(153,153,153);
  position: absolute;
  left: 1.7rem;
  top: 1.45rem;
}
.box2 {
  width: 100%;
  height: 1.7rem;
  background-color: #d8d8d8;
  position: absolute;
  border: 1px solid #d8d8d8;
  top:4.74rem;
}
.logo3{
  width: 1.4rem;
  height: 1.4rem;
  position: absolute;
  left: .1rem;
  bottom: .15rem;
}
.qiye3{
  width: .23rem;
  height: .14rem;
  position: absolute;
  left:1.6rem;
  top: .2rem;
}
.xinwanfu2{
  font-size: .12rem;
  color: rgb(51,51,51);
  position: absolute;
  left: 1.9rem;
  top: .17rem;
}
.xinwanfu2 span{
  font-size: .12rem;
  color: rgb(51,51,51);
  position: absolute;
  left:-.28rem;
}
.pic3{
  font-size: .14rem;
  color: rgb(240,37,15);
  position: absolute;
  left: 1.7rem;
  top: 1rem;
}
.pinglun2{
  font-size: .1rem;
  color: rgb(153,153,153);
  position: absolute;
  left: 1.7rem;
  top: 1.45rem;
}
.box3 {
  width: 100%;
  height: 1.7rem;
  background-color: #d8d8d8;
  position: absolute;
  border: 1px solid #d8d8d8;
  top:6.49rem;
}
.logo4{
  width: 1.4rem;
  height: 1.4rem;
  position: absolute;
  left: .1rem;
  bottom: .15rem;
}
.qiye4{
  width: .23rem;
  height: .14rem;
  position: absolute;
  left:1.6rem;
  top: .2rem;
}
.xinwanfu3{
  font-size: .12rem;
  color: rgb(51,51,51);
  position: absolute;
  left: 1.9rem;
  top: .17rem;
}
.xinwanfu3 span{
  font-size: .12rem;
  color: rgb(51,51,51);
  position: absolute;
  left:-.28rem;
}
.pic4{
  font-size: .14rem;
  color: rgb(240,37,15);
  position: absolute;
  left: 1.7rem;
  top: 1rem;
}
.pinglun3{
  font-size: .1rem;
  color: rgb(153,153,153);
  position: absolute;
  left: 1.7rem;
  top: 1.45rem;
}
</style>
