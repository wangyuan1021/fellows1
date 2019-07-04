<template>
  <ul class="footer" :style="{background:bg}">
    <li v-for="menu in menuList" @click="changeBg(menu)">
      <router-link :to="menu.path">{{menu.name}}</router-link>
    </li>
  </ul>
</template>
<script>
  export default {
    props:['menuList'],
    data(){
      return {
        bg:'rgb(33,150,243)'
      }
    },
    methods:{
      changeBg(menu){
        this.bg = menu.bgColor;
        this.$emit('changeBg',this.bg)

      }
    }
  }
</script>
<style lang="scss">
  .footer{
    height: 2rem;
    width: 100%;
    background: rgb(33,150,243);
    color:#fff;
    position:fixed;
    bottom: 0;
    line-height: 2rem;
    display: flex;
    li{
      flex-grow: 1;
      text-align: center;
      a{
        color:#ccc;
        outline: none;
        &.router-link-active{
          color:#fff;
        }
      }
    }
  }

</style>
