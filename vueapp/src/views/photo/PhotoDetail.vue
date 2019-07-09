<template>
  <router-link to="/photo">
    <v-touch class="photo-detail" :style="{'background-image':'url('+ photoList[index].src+')'}"
             @swipeleft="left" @swiperight="right">
    </v-touch>
  </router-link>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    data(){
      return {
        index: this.$route.params.index
      }
    },
    created(){
      console.log(this.$route.params.index);
      console.log(this.photoList[this.$route.params.index].src);

    },
    methods:{
      left(){
       this.index++

      },
      right(){
        this.index--
      }
    },
    computed:mapState(['photoList'])


  }

</script>
<style scoped lang="scss">
  .photo-detail{

    background-repeat: no-repeat ;
    background-size: contain;
    background-color: #000;
    background-position: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
