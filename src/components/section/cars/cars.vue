<!--购物车页面-->

<template>
  <div class="cars" >
    <nav v-show="flag">
      <p class="shopCar">购物车({{json.length}})</p>
      <p class="right">管理</p>
    </nav>
    <carHaeder></carHaeder>
    <div class="main" >
      <ul class="list">
        <!-- 列表循环 -->
        <li v-for="(item,index) in json" @click.capture="mp(index,$event)">
          <!-- 商家 -->
          <p class="list-dp" v-show="item.show">
            <span :class="[yuan1,{bg:item.select}]" @click.stop="dpSelected(index)"></span>
            <span class="dp">{{item.sj}}</span>
          </p>
          <!-- 图片产品名称价格数量展示 -->
          <div class="item" v-for="(pl,index) in json[index].items" >
            <!-- 选择按钮 -->
            <p class="item-select">
              <span :class="[yuan,{bg:pl.select},pl.animateAn]"  @click.capture="selected(index,$event)"></span>
            </p>
            <!-- 商品图片 -->
            <div class="item-img">
              <img :src="pl.img" alt="">
            </div>
            <!-- 商品名称 -->
            <div v-if="pl.id==index" class="item-text" :class="pl.animate">
              <div class="sl">
                <span @click="reduce(index)">-</span>
                <input type="text" v-model="pl.sl">
                <span @click="add(index)">+</span>
                <p @click="del(index)">删除</p>
              </div>
              <div  class="Hide" @click="Hide(index)">
                完成
              </div>
            </div>

            <div v-else class="item-text" :class="pl.animate">
              <p>{{pl.cp}}</p>
              <p>{{pl.cp2}}</p>
              <p>
                <span class="item-jg">￥{{pl.jg}}</span>
                <span  class="bj" @click='show(index)'>编辑</span>
              </p>
            </div>
            <p class="item-sl">
              x{{pl.sl}}
            </p>
          </div>
        </li>
      </ul>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
    <div style="height:100px"></div>
    <div class="footer-box">
      <div class="footer">
        <span :class="[yuan,{bg:allSelect}]" @click="AllSelect()"></span>
        <span class="all" >全选</span>
        <span class="hj">合计: <span style="color: red">￥{{allPrice}}</span></span>
        <router-link to="/jiesuan">
          <p class="up" @click='js()'>结算({{allNum}})</p>
        </router-link>

      </div>
      <div class="mask"></div>
    </div>


    <Tab></Tab>
  </div>
</template>
<!--<img src="" alt="">-->
<script>

  import Tab from './../../../components/footer/tab'
  import carHaeder from './carHeader'

  export default{
    created(){
      this.$ajax.get('http://172.25.5.128:8080/supermarket/util/bill?str=getList&id=0',{}).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      })
    },
    data:function () {
      return{
        flag:false,
        yuan:'yuan1',
        yuan1:'yuan',
        Index:'',
        cpIndex:'',
        allPrice:'0.00',
        allSelect:false,
        Show:-1,
        allNum:0,
        animated:'',
        json:[
          {
            sj:'客瑞思珠宝',
            select:false,
            show:true,
            items:[
              {
                animateAn:'',
                animate:'',
                id:1,
                cp:'925跳动的心最新款',
                cp2:'女戒-11号',
                jg:15959.00,
                sl:1,
                select:false,
                img:'./../../../../static/carsImgs/img2@2x.png',
              },
            ]
          },{
            sj:'客瑞思珠宝',
            select:false,
            show:true,
            items:[
              {
                animateAn:'',
                animate:'',
                id:1,
                cp:'925跳动的心最新款',
                cp2:'女戒-11号',
                jg:15959.00,
                sl:1,
                select:false,
                img:'./../../../../static/carsImgs/img2@2x.png',
              },
            ]
          },{
            sj:'客瑞思珠宝',
            select:false,
            show:true,
            items:[
              {
                animateAn:'',
                animate:'',
                id:1,
                cp:'925跳动的心最新款',
                cp2:'女戒-11号',
                jg:15959.00,
                sl:1,
                select:false,
                img:'./../../../../static/carsImgs/img2@2x.png',
              },
            ]
          },


        ]
      }
    },
    components:{
      Tab,carHaeder
    },
    mounted () {//给window添加一个滚动滚动监听事件
      window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
      handleScroll () { //改变元素#searchBar的top值
        var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(top)
        if(top > 50){
          return this.flag =true;
        }else {
          this.flag = false;
        }
      },

      //获取店铺id冒泡事件捕获阶段触发
      mp(dpIndex){
        this.Index=dpIndex;
        // console.log("1---选择的是店铺------"+this.Index);
        //    console.log(e.currentTarget);
      },
      //获取商品id
      selected(cpIndex){
        if(this.json[this.Index].items[cpIndex].animateAn=='animated tada'){
          this.json[this.Index].items[cpIndex].animateAn='animated';
        }else this.json[this.Index].items[cpIndex].animateAn='animated tada';

        var select=this.json[this.Index].items[cpIndex].select;
        this.json[this.Index].items[cpIndex].select=!select;
        this.cpIndex=cpIndex;
        var length=this.json[this.Index].items.length;

        // console.log(length);
        //商品全部选中，店铺才选中
        var select=true;
        for(var i=0;i<length;i++){
          //叠加积累有false就为false
          select*=this.json[this.Index].items[i].select;
        }
        if(select==true){
          this.json[this.Index].select=true;
        }else this.json[this.Index].select=false;
        //判断商品是否全部选中，是的话，全选也选中
        var json=this.json.length;
        var all=true;
        for(var i=0;i<json;i++){
          all*=this.json[i].select;
        }
        if(all==true){
          this.allSelect=true;
        }
        // console.log("2---店铺----"+this.Index+"商品序列---"+cpIndex);
        // console.log(e.currentTarget);
        this.allSl();//商品数量
        this.cancel();//商品没有全部选中就取消全选
        this.price();//总价
      },
      //结算商品数量
      allSl(){
        var json=this.json.length;
        var js=0;
        for(var i=0;i<json;i++){
          var  arr=this.json[i].items;
          for(var j=0;j<arr.length;j++){
            js+=this.json[i].items[j].select;
          }
        }
        this.allNum=js;
      },
      //计算价格
      price(){
        var all=0;
        for(var j=0;j<this.json.length;j++){//点击循环有多少个商家
          var arr=this.json[j].items;//获取商家下面的列表产品
          for(var i=0;i<arr.length;i++){//循环产品列表
            if(arr[i].select===true){//列表里面那些为true
              all+=arr[i].jg*arr[i].sl//为true的价格加起来，为总价
            }
          }
        }
        this.allPrice=all.toFixed(2);//返回数据
      },
      //选择属于某个商家地所有产品
      dpSelected(index){
        //商家选中
        var select=this.json[index].select;
        this.json[index].select=!select;

        var arr=this.json[index].items;//获取店铺下面的产品数量
        for(var i=0;i<arr.length;i++){//循环产品数量
          if(arr[i].select==false){//判断有那些产品未选中
            arr[i].select=true    //选中咯
          }
          if(this.json[index].select===false){//当店铺取消全选的时候
            arr[i].select=false;        //产品全部没选中
          }
        }
        var select=true;//创建一个为真的变量
        for(var i=0;i<this.json.length;i++){
          if(this.json[i].select==false){//如果有商家没选中全选则为false
            this.allSelect=false;
          }
          select*=this.json[i].select;
        }
        console.log(select);
        if(select==true){
          this.allSelect=true;
        }

        this.allSl();//商品数量
        this.price();
        // console.log(arr.length);
      },
      //全选
      AllSelect(){
        var selected=this.allSelect;
        this.allSelect=!selected;

        var dp=this.json.length;//获取店铺数量
        for(var i=0;i<dp;i++){//循环店铺
          var  arr=this.json[i].items;//获取每个店铺的商品
          for(var j=0;j<arr.length;j++){//循环每个店铺里面的商品为选中
            if(this.allSelect==true){
              var select=this.json[i].items[j].select;
              this.json[i].items[j].select=true;

            }
            if(this.allSelect==false){
              this.json[i].items[j].select=false;
            }
          }
          if(this.allSelect==true){
            this.json[i].select=true;
          }else{
            this.json[i].select=false;
          }
        }
        this.allSl();//商品数量
        this.price();
      },
      //商品没有全部选中就取消全选
      cancel(){
        if(this.json[this.Index].items[this.cpIndex].select==false){
          this.allSelect=false;
        }

      },
      //显示编辑商品
      show(index){
        this.json[this.Index].items[index].id=index;
        this.json[this.Index].items[index].animate='animated bounceInLeft';
        console.log(index);
      },
      Hide(index){
        this.json[this.Index].items[index].id=-1;
        this.json[this.Index].items[index].animate='animated bounceInRight';
      },
      //商品--
      reduce(index){
        if(this.json[this.Index].items[index].sl<=1){
          return;
        }
        this.json[this.Index].items[index].sl--;
        this.price();
      },
      //商品++
      add(index){
        if(this.json[this.Index].items[index].sl>999999){
          return;
        }
        this.json[this.Index].items[index].sl++;
        this.price();
      },
      del(index){
        this.json[this.Index].items.splice(index,1);
        if(this.json[this.Index].items.length==0){
          this.json[this.Index].show=false;
        }
      },
      //结算支付
      js(){
        if(this.allPrice==0){
          alert("请选择商品");
          return;
        }
        alert("老板请支付："+this.allPrice+"元");
      }

    },

  }
</script>

<style scoped>
  ul{
    list-style: none;
  }

  .cars{
    width: 100%;
    background-color: #fff;
  }
  .shopCar{
      font-size: .16rem;
      margin-top: .4rem;
      text-align: center;
      color: white;
    }
  nav{
    width: 100%;
    height: .9rem;
    border:1px solid #ccc;
    background: #e6afb3;
    position: fixed;
    z-index: 99;
  }
  .main{
    position: absolute;
    top:.9rem;
    left: .1rem;
  }
  .right{
    float: right;
    margin-right: .1rem;
    margin-top: -.2rem;
    font-size: .12rem;
    font-weight: 900;
    color: #fff;
  }
  .footer{
    width: 100%;
    height: .5rem;
    background: #fff;
    position: fixed;
    bottom:.6rem;
    z-index: 999;
  }
  /*.footer-box{*/
  /*width: 100%;*/
  /*position: relative;*/
  /*height: .5rem;*/
  /*background-color: red;*/
  /*bottom:.6rem;*/
  /*}*/
  /*.mask{*/
  /*width: 100%;*/
  /*height: .5rem;*/
  /*background: yellow;*/
  /*position: relative;*/
  /*bottom:.6rem;*/
  /*z-index: 999;*/
  /*}*/

  .list li{
    width: 3.55rem;
    /*height: 1.45rem;*/
    background: #fff;
    margin: 0 auto .1rem auto;
    border-radius: .06rem;
  }
  /*商铺的小圆*/
  .yuan{
    border:1px solid #ccc;
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
    position:relative;
    left: .07rem;
    top:.06rem;
  }
  /*商铺盒子*/
  .list-dp{
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    font-size: 18px;
    color: #666;
    margin-top: 0.2rem;
  }
  /*店铺名字*/
  .dp{
    margin-left:.2rem;
    margin-top: 0.4rem;
    font-size:.12rem;
  }
  /*商品盒子*/
  .item{
    width: 100%;
    height: 1.5rem;
    /*line-height:1.5rem ;*/
    display: flex;
    margin: 0 auto;
    justify-content:center;
    align-items:center;
    position: relative;
  }
  .yuan1{
    border:1px solid #ccc;
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    margin-top: -.1rem;
    left: .07rem;
  }
  /*左边小圆盒子*/
  .item-select{
    width: .6rem;
  }
  /*商品图片*/
  .item-img{
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.3rem
  }
  .item-img img{
    width: 100%;
  }
  .item-text{
    height: 1.5rem;
    width: 95%;
    margin-left: .1rem;
    margin-top: 0.3rem;
    overflow: hidden;
  }
  /*商品名称*/
  .item-text p:nth-child(1){
    color: #666;
    font-size: 14px;
  }
  /*商品重量*/
  .item-text p:nth-child(2){
    color: #999;
    font-size: 12px;
    padding-top:0.05rem;
    padding-bottom:0.3rem;
  }
  /*商品单价*/
  .item-jg{
    color: #f40;
    padding-right:10px;
  }
  /*商品数量*/
  .item-sl{
    color: #999;
    line-height: 1.5rem;
    font-size: 12px;
  }

  .footer{
    font-size: 12px;
    color: #666;
    display: flex;
    align-items:center;
    justify-content:space-around;
  }
  .up{
    width: 1.5rem;
    height: 50px;
    color: #fff;
    font-size: 14px;
    line-height: 50px;
    text-align: center;
    background: red;
    margin-right: -6%;
  }
  .all{
    margin-left: .4rem;
  }
  .hj{
    margin-left: .5rem;
  }
  /*编辑*/
  .bj{
    color: #999;
    font-size: 12px;
    float: right;
    margin-right: .3rem;
  }
  /*选择变红*/
  .bg{
    background-color: red;
  }
  .sl{
    width: 70%;
    height: 1.5rem;
    display: inline-block;
    font-size: 12px;
  }
  .sl span{
    font-size: 20px;
    width: .25rem;
    height: 0.3rem;
    background-color: red;
    display: inline-block;
    text-align: center;
    color: white;
  }
  .sl input{
    display: inline-block;
    width: 50%;
    height: 0.3rem;
    text-align: center;
    background-color: red;
    color: white;
  }
  .Hide{
    width: 30%;
    height: 1.3rem;
    background: red;
    display: inline-block;
    float: right;
    font-size: 16px;
    line-height: 1.3rem;
    text-align: center;
    color: #fff;
  }
  [v-cloak] {
    display: none;
  }

</style>
