<template>
    <div class="mine-box">
      <img class="beijing" src="./img/beijing1@2x.png" alt="">
      <p class="shezhi">设置</p>
      <img class="touxiang" src="./img/touxiang@2x.png" alt="">
      <router-link to="/regite">
        <span class="dashu" @click="fn()">你好,请登录</span>
      </router-link>

    <span class="span1">12</span><p class="p1">收藏夹</p>
    <span class="span2">12</span> <p class="p2">店铺关注</p>
    <span class="span3">12</span> <p class="p3">浏览</p>
    <span class="span4">12</span> <p class="p4">优惠卷</p>
      <div class="middle-box">
  <span class="span5">我的订单</span>
    <img class="icon1" src="./img/icon1@2x.png" alt="">
    <span class="dingdan">查看更多订单</span>
    <img class="jiantou" src="./img/backicon(1).png" alt="">
    <img class="logo1" src="./img/shangping1@2x.png" alt="">
    <p class="xinkuan">925跳动的心最新款</p>
    <p class="xianglian">灵动纯银项链</p>
    <p class="dai">待收货</p>
  </div>
      <div class="middle-box1">
        <span class="span6">常用工具</span>
        <img class="icon2" src="./img/icon2@2x.png" alt="">
        <span class="dingdan1">查看全部工具</span>
        <img class="jiantou1" src="./img/backicon(1).png" alt="">
        <img class="tubiao1" src="./img/icon1-1@2x.png" alt=""><span class="wuliu1">物流信息</span>
        <img class="tubiao2" src="./img/icon1-2@2x.png" alt=""><span class="wuliu2">物流信息</span>
        <img class="tubiao3" src="./img/icon1-3@2x.png" alt=""><span class="wuliu3">物流信息</span>
        <img class="tubiao4" src="./img/icon1-4@2x.png" alt=""><span class="wuliu4">物流信息</span>
        <img class="tubiao5" src="./img/icon1-5@2x.png" alt=""><span class="wuliu5">物流信息</span>
        <img class="tubiao6" src="./img/icon1-6@2x.png" alt=""><span class="wuliu6">物流信息</span>
        <img class="tubiao7" src="./img/icon7@2x.png" alt=""><span class="wuliu7">物流信息</span>
        <img class="tubiao8" src="./img/icon8@2x.png" alt=""><span class="wuliu8">物流信息</span>
      </div>
      <div class="bottom-box">
        <span class="span7">猜你喜欢</span>
        <img class="icon3" src="./img/icon5@2x.png" alt="">
        <img class="xihuan1" src="./img/商品2@2x.png" alt="">
        <img class="xihuan2" src="./img/商品3@2x.png" alt="">
        <img class="xihuan3" src="./img/商品4@2x.png" alt="">
        <img class="xihuan4" src="./img/商品5@2x.png" alt="">
      </div>

      <Tab></Tab>
    </div>
</template>

<script>
  import Tab from './../../../components/footer/tab'
    export default {
    components:{
      Tab
    },
      created:function () {
        var name = localStorage.getItem('name');
        console.log(name)
        // var h="<p>用户名："+name+"欢迎来到钻石汇！"
        // console.log(name);
        // $(".dashu").html(h) ;
        $('.dashu').text('你好,+'+name+'');
      },
        methods:{

      fn(){
        var name = localStorage.getItem('name');
        $('.dashu').text('你好,+'+name+'');
      }

        }

    }
</script>

<style scoped>
.mine-box{
  width: 100%;
  position: relative;
}
  .beijing{
   width:3.75rem;
    height:1.575rem;
    position: absolute;
  }
  .touxiang{
    width: .57rem;
    height: .57rem;
    position: absolute;
    left: .1rem;
    top: .4rem;
  }
  .shezhi{
    font-size: .16rem;
    color: #ffffff;
    position: absolute;
    right: .16rem;
    top: .2rem;
  }
  .dashu{
    position: absolute;
    font-size: .16rem;
    color: #ffffff;
    left: 0.75rem;
    top: .6rem;
  }
  .span1{
    font-size: .12rem;
    color: white;
    position: absolute;
    top:0.98rem;
    left:.58rem;
}
  .p1{
    font-size: .12rem;
   position: absolute;
    color: white;
    left: .47rem;
    top: 1.15rem;
  }
.span2{
  font-size: .12rem;
  color: white;
  position: absolute;
  top:0.98rem;
  left:1.46rem;
}
.p2{
  font-size: .12rem;
  position: absolute;
  color: white;
  top: 1.15rem;
  left:1.28rem;
}
.span3{
  font-size: .12rem;
  color: white;
  position: absolute;
  top:0.98rem;
  left: 2.25rem;
}
.p3{
  font-size: .12rem;
  position: absolute;
  color: white;
  left: 2.2rem;
  top: 1.15rem;
}
.span4{
  font-size: .12rem;
  color: white;
  position: absolute;
  top:0.98rem;
  left: 2.9rem;
}
.p4{
  font-size: .12rem;
  position: absolute;
  color: white;
  left: 2.8rem;
  top: 1.15rem;
}
  .middle-box{
    width: 3.55rem;
    height: 1.17rem;
    background-color: #fff;
    border-radius: 0.05rem;
    /*border: 1px solid #ccc;*/
    position: absolute;
    top: 1.38rem;
    left: .1rem;
  }
  .span5{
    font-size: .12rem;
    color: #000000;
    position: absolute;
    left: .1rem;
    top: .05rem;
  }
  .icon1{
    width: .24rem;
    height: .24rem;
    position: absolute;
    left: .56rem;
    top: .01rem;
  }
  .dingdan{
    font-size: .1rem;
    color: #666666;
    position: absolute;
    right:.2rem;
    top: .1rem;
  }
  .jiantou{
    width: .24rem;
    height: .24rem;
    position: absolute;
    right: .005rem;
    top: .04rem;
  }
  .logo1{
    width: 0.775rem;
    height:0.69rem ;
    position: absolute;
    top: .35rem;
    left: .1rem;
  }
.xinkuan{
  font-size: .14rem;
  color: black;
  position: absolute;
  top: .5rem;
  left:1rem;
}
  .xianglian{
    font-size: .12rem;
    color: #666666;
    position: absolute;
    left: 1rem;
    top: .74rem;
  }
  .dai{
    font-size: .12rem;
    color: #ff6666;
    position: absolute;
    right: .12rem;
    top: 0.9rem;
  }
.middle-box1{
  width: 3.55rem;
  height: 1.65rem;
  background-color: #fff;
  border-radius: 0.05rem;
  /*border: 1px solid #ccc;*/
  position: absolute;
  left: .1rem;
  top: 2.8rem;
}
.span6{
    font-size: .12rem;
    color: #000000;
    position: absolute;
    left: .1rem;
    top: .05rem;
  }
  .icon2{
    width: .24rem;
    height: .24rem;
    position: absolute;
    left: .56rem;
    top: .01rem;
  }
  .dingdan1{
    font-size: .1rem;
    color: #666666;
    position: absolute;
    right:.2rem;
    top: .1rem;
  }
  .jiantou1{
    width: .24rem;
    height: .24rem;
    position: absolute;
    right: .005rem;
    top: .04rem;
  }
.tubiao1{
    width: .4rem;
    height: .4rem;
    position: absolute;
    left: .28rem;
    top: .35rem;
  }
.tubiao2{
       width: .4rem;
       height: .4rem;
       position: absolute;
         top: .35rem;
        left: 1.2rem;
     }
.tubiao3{
          width: .4rem;
          height: .4rem;
          position: absolute;
                 top: .35rem;
            left: 2rem;
        }
.tubiao4{
             width: .4rem;
             height: .4rem;
             position: absolute;
              top: .35rem;
              right: .28rem;
           }
.tubiao5{
                width: .4rem;
                height: .4rem;
                position: absolute;
                left: .28rem;
                top: 1.0rem;
              }
.tubiao6{
                   width: .4rem;
                   height: .4rem;
                   position: absolute;
                    top: 1.0rem;
                 left: 1.2rem;
                 }
.tubiao7{
                      width: .4rem;
                      height: .4rem;
                      position: absolute;
                      top: 1.0rem;
                      left: 2rem;
                    }
.tubiao8{
                         width: .4rem;
                         height: .4rem;
                         position: absolute;
                          top: 1rem;
                         right: .28rem;
                       }
.wuliu1{
  font-size: .1rem;
  color: #666666;
  position: absolute;
  left:.28rem ;
  top: .8rem;
}
.wuliu2{
  font-size: .1rem;
  color: #666666;
  position: absolute;
  top: .8rem;
  left:1.2rem;
}
.wuliu3{
  font-size: .1rem;
  color: #666666;
  position: absolute;
  top: .8rem;
  left: 2rem;
}
.wuliu4{
  font-size: .1rem;
  color: #666666;
  position: absolute;
  top: .8rem;
  right: .28rem;
}
.wuliu5{
  font-size: .1rem;
  color: #666666;
  position: absolute;
  top: 1.45rem;
  left: .28rem;
}
.wuliu6{
  font-size: .1rem;
  color: #666666;
  position: absolute;
  top: 1.45rem;
  left: 2rem;
}
.wuliu7{
  font-size: .1rem;
  color: #666666;
  position: absolute;
  top: 1.45rem;
  left: 1.2rem;
}
.wuliu8{
  font-size: .1rem;
  color: #666666;
  position: absolute;
  top: 1.45rem;
  right: .28rem;
}
  .bottom-box{
    width: 3.55rem;
    height: 1.36rem;
    background-color: #fff;
    border-radius: 0.05rem;
    /*border: 1px solid #ccc;*/
    position: absolute;
    left: .1rem;
    top: 4.7rem;
    margin-bottom: .6rem;
  }
  .icon3{
    width: .24rem;
    height: .24rem;
    position: absolute;
    left: .56rem;
    top: .01rem;
  }
  .span7{
    font-size: .12rem;
    color: #000000;
    position: absolute;
    left: .1rem;
    top: .05rem;
  }
  .xihuan1,.xihuan2,.xihuan3,.xihuan4{
    width: 0.76rem;
    height: 0.76rem;
  }
.xihuan1{
  position: absolute;
  bottom: .17rem;
  left: .1rem;
}
.xihuan2{
  position: absolute;
  bottom: .17rem;
left: 0.95rem;
}
.xihuan3{
  position: absolute;
  bottom: .17rem;
  left:1.8rem;
}
.xihuan4{
  position: absolute;
  bottom: .17rem;
  right: .1rem;
}
</style>
