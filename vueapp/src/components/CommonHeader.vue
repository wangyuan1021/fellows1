<template>
  <div class="header" :style="{background:bgColor}">
    <span class="header-home">首页</span>
    <h1 class="header-title">movie</h1>
  </div>

</template>
<script>

  export  default {
    props:['bgColor']
  }
</script>
<style lang="scss">
  .header{
    height: 2rem;
    width: 100%;
    color:#fff;
    position:fixed;
    top: 0;
    line-height: 2rem;
    &-home{
      font-size: 16px;
    };
    &-title{
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    };
  }

</style>
