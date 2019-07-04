<template>
  <div id="app">
    <CommonHeader :bgColor="bgColor"></CommonHeader>
    <router-view class="content"/>
    <commonFooter :menuList="menuList" @changeBg="fn"></commonFooter>

  </div>
</template>
<script>
    import CommonHeader from '@/components/CommonHeader.vue';
    import CommonFooter from '@/components/CommonFooter.vue';
    export default {
      data(){
        return{
          menuList:[
            {
              name:'电影',
              path:'/movie',
              bgColor:'rgb(33,150,243)'
            },{
              name:'音乐',
              path:'/music',
              bgColor:'rgb(0,150,136)'
            },{
              name:'书籍',
              path:'/book',
              bgColor:'rgb(121,85,72)'
            },{
              name:'图片',
              path:'/photo',
              bgColor:'#3f51b5'
            }
          ],
          bgColor:'rgb(33,150,243)'
        }
      },
      methods:{
        fn(bg){
          this.bgColor = bg

        }
      },
      components:{
        CommonHeader,
        CommonFooter
      }
    }


</script>

<style lang="scss">

  .content{
    margin: 2rem 0;
  }

</style>

