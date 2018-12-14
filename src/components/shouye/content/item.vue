<template>
  <div class="item">
      <div>{{text}}</div>
  </div>
</template>

<script>

  export default {
    props:['text']

  }

</script>


<style>
.item div{
    width: .35rem;
    height: .3rem;
    text-align: center;
    font-size: .16rem;
    color: white;
    line-height: .3rem;
  }
/*.boxs .items .item div:nth-of-type(1){*/
  /*border-bottom: .02rem solid;*/
/*}*/

</style>
