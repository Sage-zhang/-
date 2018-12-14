<template>
  <div class="cars">
    <nav v-show="flag">
      <p class="shopCar">购物车({{arr.length}})</p>
      <p class="right">管理</p>
    </nav>
    <carHeader></carHeader>
    <div class="main">
      <ul class="list">
        <!--v-for="item in arr"-->
        <li class="item" v-for="(item,index) in arr">
          <div class="dp-header">
            <div class="yuan1"></div>
            <img :src="item.src" alt="" class="dpPic">
            <div class="dpName">{{item.title}}</div>
            <div class="status">{{item.status}}</div>
            <!--{{item.stateName}}-->
          </div>
          <div class="clearfix"></div>
          <div class="dp-content">
            <div class="yuan2"></div>
            <img :src="item.pic" alt="" class="spPic">
            <div class="spDes">
              <p class="spTit">{{item.name}}</p>
              <div class="spModel">{{item.model}}</div>
              <div class="spBuy">
                <span class="spPrice">￥{{item.money}}</span>
                <span class="num">
                  <span class="sub" @click="sub(index)">-</span>
                  <input type="text" class="count"  v-model="num">
                  <span class="add" @click="add(index)">+</span>
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
    <div class="footer-box">
     <div class="yuan3"></div>
      <div class="tol">全选</div>
      <div class="total">
        <span class="hj">合计：<span style="color: red">￥666666</span></span>
        <span class="js">结算({{arr.length}})</span>
      </div>
    </div>
    <Tab></Tab>
  </div>
</template>
<script>
  import Tab from './../../../components/footer/tab'
  import carHeader from'./carHeader'
  export default {
    components:{
      carHeader,Tab
    },
    data:function () {
      return{
        flag:'',
        arr:[
          { name: "925纯银晶钻世纪吊坠灵动纯银项链灵动纯银项链",
            status:'待付款',
            model:'灵动纯银项链',
            num: 1,
            money: 10,
            src: "./../../../../static/carsImgs/icon2@2x.png",
            pic:'./../../../../static/carsImgs/img1@2x.png',
            title: "华润珠宝",
            selected: true
          },
          { name: "925纯银晶钻世纪吊坠灵动纯银项链灵动纯银项链",
            status:'待收货',
            model:'灵动纯银项链',
            num: 1,
            money: 10,
            src: "./../../../../static/carsImgs/icon2@2x.png",
            pic:'./../../../../static/carsImgs/img1@2x.png',
            title: "华润珠宝",
            selected: true
          },
          ],
        num:1
      }
    },
    mounted () {//给window添加一个滚动滚动监听事件
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      //总价总数量方法   方便调用   再次多写了一次[可以跟初始化封装为一个方法]
      hh: function() {
        var price = 0;
        var numb = 0;
        var arr = this.arr;
        for(var i = 0; i < arr.length; i++) {
          if(arr[i].selected) {
            price += arr[i].num * arr[i].money;
            numb += arr[i].num;
          }
        }
        this.money = price;
        this.num = numb;
        console.log(numb);
      },
      sub:function (index) {
        // if(this.num > 1){
        //   this.num--;
        // }else {
        //   this.num === 1;
        // }
      },
      add(index){
        var arr = this.arr;
        var num = arr[index].num;
        num = num + 1;
        arr[index].num = num;
        this.hh();
      },
      handleScroll() { //改变元素#searchBar的top值
        var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(top)
        if (top > 50) {
          return this.flag = true;
        } else {
          this.flag = false;
        }
      }
    },

    // created(){
    //   var that=this;
    //   this.$ajax.get('http://172.25.7.101:8080/joint_project/user?opr=info',{}).then(function(res){
    //     console.log(res);
    //     that.arr = res.data;
    //   }).catch(function (err) {
    //     console.log(err)
    //   })
    //
    // }
  }
</script>
<style scoped>
  /*<!--清除浮动-->*/
  .clearfix{
    clear: both;
  }
  ul{
    list-style: none;
  }
  /*购物车最外层大盒子*/
  .cars{
    width: 100%;
    background-color: #fff;
  }
  /*主体部分*/
  .main{
    position: absolute;
    top:.8rem;
    left: .1rem;
  }

  /*需要遍历的li*/
  .list li{
    width: 3.55rem;
    height: 1.6rem;
    background: #ccc;
    margin: 0 auto .1rem auto;
    border-radius: .1rem;
  }
  /*滑动时出现的导航栏*/
  nav{
    width: 100%;
    height: .7rem;
    border:1px solid #ccc;
    background: red;
    position: fixed;
    z-index: 99;
    color:#fff;
  }
  /*nav中的购物车字体样式*/
  .shopCar{
    font-size: .18rem;
    margin-top: .3rem;
    text-align: center;
  }
  /*nav中的管理的样式*/
  .right{
    float: right;
    margin-right: .1rem;
    margin-top: -.2rem;
    font-size: .14rem;
    font-weight: 900;
  }
  /*店铺部分*/
  .dp-header{
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    background-color: white;
    border-radius: .1rem .1rem 0 0;
  }
  /*店铺前面的小圆圈*/
  .yuan1{
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    background-color: #fff;
    border: .01rem solid #ccc;
    float: left;
    margin: .1rem .1rem .1rem .2rem;
  }
  /*店铺小logo*/
  .dpPic{
    float: left;
    vertical-align: middle;
    width: .3rem;
    height: .3rem;
    margin-top: .05rem;
  }
  /*店铺名字*/
  .dpName{
    float: left;
    margin-left:.1rem ;
  }
  /*商品状态*/
  .status{
    float: right;
    margin-right: .2rem;
    color: red;
  }
  /*店铺主体部分*/
  .dp-content{
    width: 100%;
    height: 1.2rem;
    background-color: #fffbfd;
    border-radius: 0 0 .1rem .1rem;
  }
  /*商品前面的小圆*/
  .yuan2{
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    background-color: #fff;
    border: .01rem solid #ccc;
    float: left;
    margin: .4rem .1rem .4rem .2rem;
  }
  /*商品图片*/
  .spPic{
    float: left;
    height: .8rem;
    width: .8rem;
    margin: .2rem .1rem;
  }
  /*商品描述*/
  .spDes{
    float: left;
    width: 1.95rem;
    height: 1rem;
    margin-top:.2rem ;
  }
  /*商品标题*/
  .spTit{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .14rem;
  }
  /*商品规格*/
  .spModel{
    width: 100%;
    font-size: .12rem;
    margin: 0 0 .15rem 0;
  }
  /*商品价钱*/
  .spPrice{
    margin-right: .3rem ;
    color:red;
  }
  .num{
    border: .01rem solid #ccc;
  }
  /*商品数量*/
  .sub,.add{
    display: inline-block;
    width: .2rem;
    height: .2rem;
    line-height: .2rem;
    text-align: center;
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
    width: .3rem;
    height: .2rem;
    outline: none;
    background-color: transparent;
    text-indent: .05rem;
    border: none;
  }
  /*下面的盒子*/
  .footer-box{
    width: 100%;
    height: .6rem;
    line-height: .6rem;
    background-color: whitesmoke;
    position: fixed;
    bottom: .6rem;
    color: #676767;
  }
  /*全选圆圈*/
  .yuan3{
    float: left;
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    background-color: #fff;
    border: .01rem solid #ccc;
    margin: .2rem .2rem ;
  }
  /*全选*/
  .tol{
    float: left;
    font-size: .14rem;
  }
  /*右边盒子*/
  .total{
    /*width: .8rem;*/
    /*height: .6rem;*/
    /*background-color: #fff;*/
    float: right;
    font-size: .12rem;
  }
  /*合计*/
  .hj{
    color: black;
    font-size: .14rem;
  }
  .js{
    display: inline-block;
    width: .8rem;
    height: .5rem;
    line-height: .5rem;
    background-color: red;
    color: white;
    border-radius: .25rem;
    font-size: .16rem;
    text-align: center;
    padding: 0 .1rem;
    margin: .05rem .1rem;
  }


</style>
