<template>
<div>
  <div class="Headerline">
  <img src="./images/toutiao@2x.png" alt="" class="tiao">
  <div>最新</div><p  v-for='item in items'>{{item.name}}</p>
  <div class="re">最热</div>
  </div>
</div>



</template>


<script>

  export default {
    data() {
      return {
        animate: false,
        items: [
          {name: "珠宝简报|De Beers开始"},
          {name: "ALROSA在美国首次举行"},
          {name: "2018第55届公路开始销售"},
          {name: "行业前瞻、品类前瞻"}
        ]
      }
    },
    created() {
      setInterval(this.scroll, 3000)
    },
    methods: {
      scroll() {
        this.animate = true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(() => {      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
          this.items.push(this.items[0]);  // 将数组的第一个元素添加到数组的
          this.items.shift();               //删除数组的第一个元素
          this.animate = false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        }, 3000)
      }
    }
  }



</script>

<style scoped>
  .Headerline{
    width: 100%;
    height: .8rem;
    margin-top: 1.5rem;
    background: url("./images/jianbian@2x.png") no-repeat 180px 0;
    position: relative;
    overflow: hidden;
  }
  .Headerline img{
    width: .45rem;
    height: .56rem;
    position: absolute;
    top: .12rem;
    left: .15rem;
  }
   .Headerline div{
    width: .35rem;
    height: .18rem;
    text-align: center;
    border-radius: .03rem;
    border: 1px solid orangered;
    font-size: .12rem;
    position: absolute;
    top: .11rem;
    left: .7rem;
     color: red;
  }
   .Headerline .re{
    position: absolute;
    top: .5rem;
     color: red;
  }
   .Headerline p{
    line-height: .4rem;
    margin-left: 1.2rem;
    font-size: .14rem;
    color: black;
  }





</style>
