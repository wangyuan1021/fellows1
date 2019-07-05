<template>
  <ul class="footer" :style="{background:bgColor}">
    <li v-for="menu in menuList">
      <router-link :to="menu.path" @click.native="changeBg(menu)">{{menu.name}}</router-link>
    </li>
  </ul>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    props:['menuList'],
    data(){
      return {
        // bg:'rgb(33,150,243)'
      }
    },
    methods:{
      changeBg(menu){
        // this.bg = menu.bgColor;
        // this.$emit('changeBg',this.bg);
        this.$store.dispatch('changeBg',menu);
      }
    },
    computed:mapState(['bgColor']),
  }
</script>
<style lang="scss">
  .footer{
    height: 1rem;
    width: 100%;
    background: rgb(03,150,200);
    color:#fff;
    font-size: 20px;
    position:fixed;
    bottom: 0;
    line-height: 1rem;
    display: flex;
    li{
      flex-grow: 1;
      text-align: center;
      a{
        color:#ccc;
        outline: none;
        text-decoration: none;
        &.router-link-active{
          color:#fff;
        }
      }
    }
  }

</style>
