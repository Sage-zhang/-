<template>
    <div class="box">
      <nav v-show="flag">
        <div class="left">
          <img src="./img/fanhuih@2x.png" alt="" @click="goback()">
        </div>
        <p class="shopCar"><img src="./img/3@2x+.png" alt=""></p>
        <div class="right">
          <img src="./img/gouwuc@2x.png" alt="">
        </div>
      </nav>
      <img class="beijing" src="./img/3@2x1.png" alt="">
      <img class="tubiao1" src="./img/fanhui0@2x.png" alt="" @click="goback()">
      <h1>戴梦得</h1>
      <img class="tubiao2"  src="./img/gouwuc@2x+.png" alt="">
      <div class="middle-box">
        <!--<img class="jiage" src="./img/￥3799@2x.png" alt="">-->
        <span style="color: deeppink;margin: .2rem;font-weight: 900;padding-top: .2rem ;font-size: .25rem">￥15959</span>
        <img class="tubiao3" src="./img/guanzhu@2x.png" alt="">
        <img class="tubiao4" src="./img/zhuanfa@2x.png" alt="">
        <img class="qiye" src="./img/qieye@2x@2x.png" alt="">
        <p class="p1">戴梦得钻戒女正品1克裸钻铂金钻石婚戒裸钻钻石男女 <br>真爱永恒，终身质保，一生仅限一枚。</p>
        <p class="p2">快递: 0.00</p>
        <p class="p3">月销254笔</p>
        <p class="p4">广东深圳</p>
      </div>
      <div class="middle-box1">
        <p class="p5">优惠</p>
        <img class="manjian1" src="./img/manjian1@2x.png" alt="">
        <img class="manjian2" src="./img/manjian2@2x.png" alt="">
        <p class="lingjuan">领券</p>
        <img class="fanhui" src="./img/fanhui@2x.png" alt="">
        <p class="fuwu">服务</p>
        <span class="zhengpin">正品保证·极速退款·赠运费险</span>
        <p class="xuanze">选择</p>
        <span class="guige">规格 颜色</span>
        <p class="canshu">参数</p>
        <span class="shangshi">上市时间 主钻分数</span>
      </div>
      <div class="middle-box2">
        <p class="baobei">宝贝评价 (1660)</p>
        <p class="chakan">查看全部</p>
        <img class="fanhui1" src="./img/fanhui@2x.png" alt="">
        <div class="yuan1">宝贝很漂亮 (80)</div>
        <div class="yuan2">价格很合适 (68)</div>
        <div class="yuan3">美呆了 (76)</div>
        <img class="touxiang" src="./img/touxiang@2x.png" alt="">
        <p class="tinghao">挺好的，什么时候有时间去调试一下，略小一点点，老婆很喜欢</p>
        <img class="tu" src="./img/saitu1@2x.png" alt="">
        <img class="tu1" src="./img/saitu2@2x.png" alt="">
      </div>
      <div class="middle-box3">
        <img class="dianbao" src="./img/dianbiao@2x.png" alt="">
        <img class="baibei" src="./img/baibeimiaos@2x.png" alt="">

      <div class="hengxian"></div>
        <p class="xiangguan">相关宝贝</p>
        <p class="rexiao">热销排行</p>
        <img class="xiang " src="./img/xiangguanbaobei@2x.png" alt="">
        <img class="quan3" src="./img/youhuiquan3@2x.png" alt="">
        <img class="quan2" src="./img/youhuiq1@2x.png" alt="">
        <img class="quan1" src="./img/youhiuq2@2x.png" alt="">
        <img class="xiangqing1" src="./img/baobeixiangq@2x.png" alt="">
        <img class="xiangqing" src="./img/xiangq1@2x.png" alt="">
      </div>
      <div class="bottom-box" >
        <router-link to="/zhuye">
          <img class="dian" src="./img/zhuye@2x.png" alt=""><p class="fu">店铺</p>
        </router-link>
        <router-link to="/cars">
          <img class="gou" src="./img/gouwuc@2x.png" alt=""><p class="wu">购物车</p>
        </router-link>

        <img class="xin" src="./img/xiaox@2x.png" alt=""><p class="xi">信息</p>
        <!--<router-link to="/buy">-->
          <button class="jiaru" @click="tan()">加入购物车</button>
        <!--</router-link>-->
        <div class="shier" v-show="bola">1</div>
        <router-link to="/jiesuan"><button class="goumai">立即购买</button></router-link>
      </div>
      <div class="tan">
        <div class="tan-header">
          <img src="./img/saitu2@2x.png" alt="" class="saitu">
          <div class="clearfix"></div>
          <div class="des-right">
            <p style="color: red">￥15959</p>
            <p style="margin: .05rem 0">库存94件</p>
            <p>选择规格，数量</p>
          </div>
          <router-link to="/zhubao"><div class="del" @click="del()">X</div></router-link>
        </div>
        <div class="tan-content">
          <div class="gge">
            <p style="font-size: .16rem;margin: .15rem 0">规格</p>
            <span class="njie " v-for="(items,index) in arr" :class="{active:items.isActive}" @click="activeFun(items,index)">
                 {{items.value}}</span>
            <!--<span class="njie">女戒-11号</span>-->
            <!--<span class="njie">女戒-12号</span>-->
            <!--<span class="njie">女戒-13号</span>-->
            <!--<span class="njie">女戒-14号</span>-->
            <!--<span class="njie">女戒-15号</span>-->
          </div>
          <div class="clearfix"></div>
          <div class="tan-num">
            <span class="gmai">购买数量</span>
            <span class="num">
                  <span class="sub" @click="sub()">-</span>
                  <input type="text" class="count"  v-model="num">
                  <span class="add" @click="add()">+</span>
            </span>
          </div>
          <div class="clearfix"></div>
          <div class="hua">
            <p>花呗分期（可选）</p>
            <div class="fenqi">
              <p style="padding: .05rem 0">分3期（0手续费）￥919.33期</p>
            </div>
            <div class="fenqi">
              <p style="padding: .05rem 0">分6期（0手续费）￥619.33期</p>
            </div>
          </div>
          <button class="ok" @click="ok">确定</button>
        </div>

      </div>
    </div>
</template>
<script>
  export default {
    data:function () {
      return{
        flag:false,
        bol:true,
        bola:false,
        num:1,
        arr:[
          {
            isActive: true,
            value: '女戒-10号'
          },
          {
            isActive: false,
            value: '女戒-11号'
          },{
            isActive: false,
            value: '女戒-12号'
          },
          {
            isActive: false,
            value: '女戒-13号'
          },{
            isActive: false,
            value: '女戒-14号'
          },
          {
            isActive: false,
            value: '女戒-15号'
          },

        ]
      }
    },
    mounted () {//给window添加一个滚动滚动监听事件
      window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
      activeFun: function(data,index){
        // console.log(index)
        var rea = this.arr[index].value;
        console.log(rea);
        // localStorage.setItem('rea',rea)

        this.arr.forEach(function(obj){
          obj.isActive = false;
        });
        data.isActive = !data.isActive;
      },

      select: function (index) {
        var rea = this.arr[index].value;
        console.log(rea);

        // rea.css({color:'red'})
      },

        ok(){
        this.bola = true;
        $('.tan').slideUp(1000);
        var url = 'http://172.25.5.128.8080:/util/bill?str=insertCar';
        var goodsId = localStorage.getItem('goodsId');
        var buyuserid = localStorage.getItem('buyuserid');
        this.$ajax.get(url,
          {
            params:{
              // properties:rea,
              goodsId:goodsId,
              buyuserid:buyuserid,
              // totalprice:
              // number:
            }
          }).then(function(res){
            console.log(res);
        }).catch(function(err){
          console.log(err);
        })
      },
      del(){
        $('.tan').slideUp(-0);
      },
      sub:function () {
        if(this.num > 1){
          this.num--;
        }else {
          this.num === 1;
        }
      },
      add(){
       this.num++;
      },
      tan(){
        $('.tan').slideDown(1000);
        var buyer = localStorage.getItem('buyID');

        // console.log(buyer);
          this.$ajax.get('http://172.25.5.128:8080/supermarket/util/bill?str=getList&id=0',
          {
            params:{

            }
          }).then(function(response){
          console.log(response);
            localStorage.setItem('goodsId',response.data[1].goodsid)
            localStorage.setItem('buyuserid',response.data[1].buyuserid)
        }).catch(function (err) {
          console.log(err)
        })
      },
      goback:function () {
        this.$router.go(-1);
      },
      handleScroll() { //改变元素#searchBar的top值
        var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(top)
        if (top > 50) {
          return this.flag = true;
        } else {
          this.flag = false;
        }
      },
      fn:function(msg){
        // this.activeIndex = msg;
        console.log()
      }
    }
  }
</script>
<style scoped>
  .gge .active{
    background-color:pink;
    /*color: white;*/
  }
  .ok{
    width: 90%;
    margin: .1rem 5%;
    height: .4rem;
    line-height: .4rem;
    border-radius: .4rem;
    background-color: #ff2362;
    outline: none;
    border: none;
    color: white;
    font-size: .16rem;
  }
  .hua{
    margin: .1rem 0 0 0 ;
  }
  .fenqi{
    float: left;
    width: 1.2rem;
    height: .5rem;
    text-align: center;
    font-size: .13rem;
    background-color: #efefef;
    margin-top: .1rem;
    margin-right: .1rem;
    border-radius: .04rem;
  }
  .hua{
    width: 90%;
    border-top:.01rem solid  #ccc ;
    padding: .05rem 0;
    margin: .2rem auto;
  }
  .gmai{
    float: left;
  }
  .tan-num{
    width: 90%;
    margin: .2rem auto;
  }
  .num{
    float: right;
    border: .01rem solid #ccc;
  }
  .num .count{
    text-align: center;
  }
  /*商品数量*/
  .sub,.add{
    display: inline-block;
    width: .3rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    background: #efefef;
  }
  /*商品数量加*/
  .sub{
    border-right:.01rem solid #ccc;
  }
  /*商品数量减*/
  .add{
    border-left:.01rem solid #ccc;
  }
  /*input框*/
  .count{
    display: inline-block;
    width: .4rem;
    height: .3rem;
    outline: none;
    background-color: transparent;
    text-indent: .05rem;
    border: none;
  }
  .gge{
    width: 90%;
    margin: 0 auto;
    border-bottom: .01rem solid #ccc;
  }
  .tan-content{
    /*margin-left: .2rem ;*/
  }
  .njie{
    display: inline-block;
    color: black;
    width: .8rem;
    height: .3rem;
    background-color: #efefef;
    border-radius: .06rem;
    text-align: center;
    line-height: .3rem;
    margin: .05rem .1rem .05rem 0;
  }
  .del{
    font-size: .2rem;
    float:right ;
    margin: .2rem;
    width: .25rem;
    height: .25rem;
    border-radius: .25rem;
    border:.02rem solid #2f2f2f;
    text-align: center;
    line-height: .25rem;
  }
  .tan-header{
    width: 100%;
    height:1.5rem;
  }
  .saitu{
    float:left;
    width: 1.36rem;
    height: 1.36rem;
    margin-top: .1rem;
    margin-left: .2rem;
    position: fixed;
  }
  .des-right{
    float: left;
    margin-left: 1.9rem;
    margin-top: .2rem;
  }
  .clearfix{
    clear:both;
  }
  /*滑动时出现的导航栏*/
  nav{
    width: 100%;
    height: .6rem;
    line-height: .6rem;
    /*border:1px solid #ccc;*/
    background: rgba(255,255,255,.7);
    position: fixed;
    display: flex;
    justify-content: space-between;
    z-index: 99;
    color:#fff;
    text-align: center;
  }
  /*nav中的购物车字体样式*/
  .shopCar img{
    width: .36rem;
    height: .36rem;
    margin-top: .11rem;
  }
  /*nav中的管理的样式*/
  .left{
    margin-top: .07rem;
  }
  .right{
    margin-top: .06rem;
  }
  .left img{
    margin-left: .11rem;
    width: .21rem;
    height: .21rem;
  }
  .right img{
    margin-right: .15rem;
    width: .21rem;
    height: .21rem;
  }
  .tan{
    width: 100%;
    height: 5rem;
    background-color: white;
    position: fixed;
    bottom: 0;
    right: 0;
    display: none;
  }
  .bottom-box{
    width: 100%;
    height: .6rem;
    background-color: #ffff;
    position: fixed;
    bottom: 0;
  }
  .shier{
    font-size: .1rem;
    width: .15rem;
    height: .15rem;
    line-height: .15rem;
    border-radius: 50%;
    text-align: center;
    background-color: rgb(255,35,98);
    color: white;
    position: absolute;
    top: .06rem;
    left: .75rem;
  }
  .dian{
    width: .185rem;
    height: .17rem;
    position: absolute;
    top: .1rem;
    left: .13rem;
  }
  .fu{
    font-size: .12rem;
    color: rgb(51,51,51);
    position: absolute;
    left: .1rem;
    top: .3rem;
  }
  .gou{
    width: .185rem;
    height: .185rem;
    position: absolute;
    top: .1rem;
    left: .68rem;
  }
  .wu{
    font-size: .12rem;
    color: rgb(51,51,51);
    position: absolute;
    top: .3rem;
    left: .6rem;
  }
  .xin{
    width: .185rem;
    height: .185rem;
    position: absolute;
    top: .1rem;
    left: 1.22rem;
  }
  .xi{
    font-size: .12rem;
    color: rgb(51,51,51);
    position: absolute;
    top: .3rem;
    left: 1.2rem;
  }
  .box{
  width: 100%;
    /*height: 100%;*/
  position: relative;
}
  .tubiao1{
    width: .36rem;
    height: .36rem;
    position: absolute;
    left: .07rem;
    top: .03rem;
  }
.tubiao2{
       width: .36rem;
       height: .36rem;
       position: absolute;
       right: .07rem;
       top: .03rem;
     }
  .beijing{
    width: 3.76rem;
    height: 3.76rem;
    position: absolute;
    left: .001rem;
  }
  h1{
    font-size: .2rem;
    color: red;
    position: absolute;
    font-weight: 100;
    top: .45rem;
    left: .1rem;
  }
  .middle-box{
    position:absolute ;
    width: 100%;
    height: 1.1rem;
    background-color: #fff;
    border: 1px solid #d8d8d8;
    top:3.75rem;
  }
  .jiage{
    position: absolute;
    width: .375rem;
    height: .135rem;
    top:.2rem;
    left: .2rem;
  }
.tubiao3{
  width: .2rem;
  height: .27rem;
  position: absolute;
  top: .1rem;
  right: .6rem;
}
.tubiao4{
  width: .2rem;
  height: .295rem;
  position: absolute;
  top: .1rem;
  right: .2rem;
}
 .qiye{
   width: .23rem;
   height: .14rem;
   position: absolute;
   left: .2rem;
   top: .45rem;
 }
  .p1{
    font-size: .13rem;
    position: absolute;
    left: .55rem;
    top: .42rem;
  }
  .p2,.p3,.p4{
    font-size: .12rem;
    color: rgb(153,153,153);
  }
  .p2{
       position: absolute;
       bottom: .1rem;
       left: .2rem;
     }
.p3{
  position: absolute;
  bottom: .1rem;
left: 1.55rem;
}
.p4{
  position: absolute;
  bottom: .1rem;
  right: .1rem;
}
  .middle-box1{
    width: 100%;
    height: 1.5rem;
    position:absolute;
    background-color: #fff;
    border: 1px solid #d8d8d8;
    top: 4.92rem;
  }
  .p5{
    font-size: .12rem;
    color: rgb(153,153,153);
    position: absolute;
    top: .1rem;
    left: .2rem;
  }
  .manjian1{
    width: 0.655rem;
    height:0.155rem ;
    position: absolute;
    top: .1rem;
    left: .8rem;
  }
  .manjian2{
    width: 0.655rem;
    height:0.155rem ;
    position: absolute;
    top: .1rem;
    left: 1.7rem;
  }
  .lingjuan{
    font-size: .12rem;
    color: rgb(153,153,153);
    position: absolute;
    top: .1rem;
    right: .38rem;
  }
  .fanhui{
    width: .25rem;
    height: .25rem;
    position: absolute;
    right: .1rem;
    top: .06rem;
  }
  .fuwu{
    font-size: .12rem;
    color: rgb(153,153,153);
    position: absolute;
    left: .2rem;
    top: .5rem;
  }
  .zhengpin{
    font-size: .12rem;
    color: rgb(51,51,51);
    position: absolute;
    left: .8rem;
    top: .5rem;
  }
  .xuanze{
    font-size: .12rem;
    color: rgb(153,153,153);
    position: absolute;
    left: .2rem;
    top: .9rem;
  }
  .guige{
    font-size: .12rem;
    color: rgb(51,51,51);
    position: absolute;
    left: .8rem;
    top: .9rem;
  }
  .canshu{
    font-size: .12rem;
    color: rgb(153,153,153);
    position: absolute;
    left: .2rem;
    top: 1.2rem;
  }
  .shangshi{
    font-size: .12rem;
    color: rgb(51,51,51);
    position: absolute;
    left: .8rem;
    top: 1.2rem;
  }
  .middle-box2{
    width: 100%;
    height: 2.05rem;
    background-color: white;
    border: 1px solid #d8d8d8;
    position: absolute;
    top: 6.47rem;
  }
  .baobei{
    font-size: .12rem;
    color: rgb(51,51,51);
    position: absolute;
    left: .1rem;
    top: .1rem;
  }
  .chakan{
    font-size: .12rem;
    color: rgb(255,35,98);
    position: absolute;
   top: .1rem;
    right: .3rem;
  }
  .fanhui1{
    width: .25rem;
    height: .25rem;
    position: absolute;
    top: .05rem;
    right: .05rem;
  }
  .yuan1,.yuan2,.yuan3{
    font-size: .1rem;
    color: black;
    line-height:.2rem ;
  }
  .yuan1{
     width: 0.9rem;
     height: 0.2rem;
     border-radius:0.1rem;
     background-color: #ffccda;
     text-align: center;
     position: absolute;
     top: .35rem;
     left: .1rem;
   }
  .yuan2{
       width: 0.9rem;
       height: 0.2rem;
       border-radius:0.1rem;
       background-color: #ffccda;
       text-align: center;
       position: absolute;
      top: .35rem;
    left: 1.2rem;
     }
  .yuan3{
    width: 0.7rem;
    height: 0.2rem;
    border-radius:0.1rem;
    background-color: #ffccda;
    text-align: center;
    position: absolute;
    top: .35rem;
    left: 2.3rem;
  }
  .touxiang{
    width: .75rem;
    height: .17rem;
    position: absolute;
    top: .65rem;
    left: .1rem;
  }
  .tinghao{
    font-size: .12rem;
    color: black;
    position: absolute;
    left: .1rem;
    top: .88rem;
  }
  .tu,.tu1{
    width: .85rem;
    height: .85rem;
  }
  .tu{
    position: absolute;
    left: .1rem;
    top: 1.1rem;
  }
  .tu1{
    position: absolute;
    left: 1.1rem;
    top: 1.1rem;
  }
  .middle-box3{
    width: 100%;
   height: 22.275rem;
    background-color: white;
    border: 1px solid #d8d8d8;
    position: absolute;
    top: 8.58rem;
  }
  .dianbao{
    width: 3.55rem;
    height: 0.355rem;
    position: absolute;
    top: .1rem;
    left: .1rem;
}
  .baibei{
    width: 3.535rem;
    height: .14rem;
    position: absolute;
    left: .1rem;
    top: .6rem;
  }
  .hengxian{
    width: 100%;
    height: .02rem;
    background-color: #eeeeee;
    position: absolute;
    top: .8rem;
  }
  .xiangguan,.rexiao{
    font-size: .16rem;
    color:black ;
  }
  .rexiao{
    position: absolute;
    top: .9rem;
    left: 2.5rem;
  }
  .xiangguan{
    position: absolute;
    top: .9rem;
    left: .6rem;
  }
  .xiang{
    width:3.745rem;
    height: 1.765rem;
    position: absolute;
    top: 1.25rem;
  }
 .quan3{
  width: 0.735rem;
  height: 0.35rem;
  position: absolute;
  top: 3.15rem;
  left: .25rem;
}
  .quan2{
    width: 0.735rem;
    height: 0.35rem;
    position: absolute;
    left: 1.5rem;
    top:  3.15rem;
  }
.quan1{
  width: 0.735rem;
  height: 0.35rem;
  position: absolute;
  top: 3.15rem;
  right: .25rem;
}
  .xiangqing1{
    width: 2.1rem;
    height: 0.135rem;
    position: absolute;
    top: 3.6rem;
    left: .78rem;
  }
  .xiangqing{
    width: 3.75rem;
    height: 22.275rem;
    position: absolute;
    top: 3.8rem;
  }
  .bottom-box .jiaru{
    font-size: .16rem;
    width: 1.075rem;
    height: .3rem;
    margin-top: .05rem;
    line-height: .3rem;
    background-color: #fc05a8;
    border-radius:  .15rem 0 0 .15rem;
    color: white;
    text-align: center;
    position: absolute;
    border: 0;
    top: .12rem;
    right: 1.1rem;
  }
  .bottom-box .goumai{
    width: 1.075rem;
    height: .3rem;
    margin-top: .05rem;
    line-height:.3rem;
    border-radius: 0 .15rem  .15rem 0;
    background-color: rgb(255,35,98);
    text-align: center;
    font-size: .16rem;
    color: #ffffff;
    position: absolute;
    border: 0;
    right: .1rem;
    top: .12rem;
  }
</style>
