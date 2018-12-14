<!--电影-->
<template>
  <div class="movie">
    <h1>{{date.title}}</h1>
    <ul>
      <li v-for="item in date">
        <div class="item">
          <img :src="item.images.medium" alt="">
          <h3>{{item.title}}</h3>
          <p>{{item.start}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{


    data:function(){
      return{
        date:{},
      }
    },

    props:['url'],
    created:function() {
      var that = this;
      that.$http.jsonp('http://api.douban.com/v2/' +this.url,{params:{start:0,city:'郑州',count:3}}).then(function(res){
// console.log(res);
        that.date = res.body.subjects;
        console.log(that.date);
      })
    }
  }
</script>

<style scoped>
  .item{

    border:.01rem solid red;
  }
  .item img{
    width:100%;
  }
  ul{
    width: 100%;
    display:flex;
  }
  ul li{
    width:33%;
    padding:0.1rem;
    box-sizing:border-box;
    border:1px solid #ccc
  }
  h3{

  }
</style>
