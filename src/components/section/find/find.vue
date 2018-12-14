<template>
  <div class="box">
    <div class="title">
      <img src="./imgs/5.png" alt="">
      <p>发现</p>
      <img src="./imgs/6.png" alt="./imgs/6.png">
    </div>
    <!--轮播图-->
    <div class="swiper-container boxs" >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in arr">
          <img :src="item.img" alt="">
          <h4>{{item.textOne}}</h4>
          <p>{{item.textTwo}}</p>
          <span>{{item.textThree}}</span>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <!--<div class="swiper-pagination"></div>-->
    </div>
    <!--轮播图结束-->
    <div class="foot">
      <div><img src="./imgs/xinhong@2x.png" alt=""><span>喜欢2667</span></div>
      <div><img src="./imgs/fenx@2x.png" alt="">分享</div>
      <div>阅读更多</div>
    </div>

    <Tab></Tab>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import Tab from './../../../components/footer/tab'
  export default {
    // created(){
    //   var that=this;
    //   this.$ajax.get('http://172.25.7.150:8080/supermarket/util/find?str=showInfo',{}).then(function(res){
    //     console.log(res);
    //     that.arr = res.data;
    //   }).catch(function (err) {
    //     console.log(err)
    //   })
    //
    // },

    data:function(){
      return{
        arr:[
          {
            img:'./../../../../static/imgs/1.jpg',
            textOne:'Van Cleef & Arpels 焚克雅宝Emeraude e......',
            textTwo:'芭蕾舞伦的裙摆薄纱与内衬分别由钻石、祖母绿镶嵌，形成鲜明的颜色对比，以强调裙摆的厚度与蓬起的立体感.',
            textThree:'Van Cleef & Arpels'
          },
          {
            img:'./../../../../static/imgs/2.jpg',
            textOne:'Van Cleef & Arpels 焚克雅宝Emeraude e......',
            textTwo:'芭蕾舞伦的裙摆薄纱与内衬分别由钻石、祖母绿镶嵌，形成鲜明的颜色对比，以强调裙摆的厚度与蓬起的立体感.',
            textThree:'Van Cleef & Arpels'
          },
          {
            img:'./../../../../static/imgs/3.jpg',
            textOne:'Van Cleef & Arpels 焚克雅宝Emeraude e......',
            textTwo:'芭蕾舞伦的裙摆薄纱与内衬分别由钻石、祖母绿镶嵌，形成鲜明的颜色对比，以强调裙摆的厚度与蓬起的立体感.',
            textThree:'Van Cleef & Arpels'
          }
        ]

      }
    },
   methods:{

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
      window.addEventListener('scroll', this.handleScroll);
    },
    components:{
      Tab
    }
  }
</script>

<style scoped>
  /*上面盒子*/
  .box .title{
    width: 100%;
    height: .5rem;
    display: flex;
    justify-content: space-between;
    background-color: rgb(255,35,98);
  }
  .box .title img{
    width: .36rem;
    height: .36rem;
    margin-top: .07rem;
  }
  .box .title p{
    color: white;
    line-height: .5rem;
    font-size: .16rem;
  }
 /*轮播图部分*/
  .boxs{
    width: 100%;
    height:5.11rem;
    background-color: white;
  }
  .boxs h4{
    width: 100%;
    font-size: .16rem;
    margin-left: .15rem;
    line-height: .5rem;
  }
  .boxs p{
    height: .6rem;
    font-size: .14rem;
    margin-left: .15rem;
    margin-right: .15rem;
    color: rgb(85,85,85);
  }
  .boxs span{
    font-size: .12rem;
    margin-left: .15rem;
    color: rgb(170,170,170);
  }
  .boxs img{
    width: 3.75rem;
    height: 3.75rem;
  }
  /*foot部分*/
  .foot{
    height: .45rem;
    background-color: white;
    display: flex;
    border-top:.01rem solid #cccccc ;
  }
  .foot img{
    width: .18rem;
    height: .15rem;
  }
  .foot div{
    width: 1rem;
    height: .22rem;
    text-align: center;
    padding-top: .08rem;
    border-radius: .03rem;
    margin-top: .07rem;
    background-color: #e5e5e5;
  }
  /*.foot div span{*/
    /*line-height: .3rem;*/
  /*}*/
  .foot div:nth-of-type(1){
    margin-left: .15rem;
  }
  .foot div:nth-of-type(2){
    margin-left: .25rem;
  }
  .foot div:nth-of-type(3){
    margin-left: .35rem;
  }

</style>

