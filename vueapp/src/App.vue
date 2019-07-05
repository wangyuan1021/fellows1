<template>
  <div id="app">
    <!--<CommonHeader :bgColor="bgColor"></CommonHeader>-->
    <CommonHeader></CommonHeader>
    <router-view class="content"/>
    <!--<commonFooter :menuList="menuList" @changeBg="fn"></commonFooter>-->
    <commonFooter :menuList="menuList" ></commonFooter>


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
              bgColor:'rgb(03,150,200)',
              title:'movie'
            },{
              name:'音乐',
              path:'/music',
              bgColor:'rgb(0,150,136)',
              title:'music'

            },{
              name:'书籍',
              path:'/book',
              bgColor:'rgb(121,85,72)',
              title:'book'

            },{
              name:'图片',
              path:'/photo',
              bgColor:'#3f51b5',
              title:'photo'

            }
          ],
          // bgColor:'rgb(03,150,200)'
        }
      },
      // methods:{
      //   fn(bg){
      //     this.bgColor = bg
      //   }
      // },

      components:{
        CommonHeader,
        CommonFooter
      },
      created(){
        var path = this.$route.path;
        var menu = this.menuList.filter(elem=>{
          return elem.path == path;
        });
        this.$store.dispatch('changeBg',menu[0]);





      }
    }


</script>

<style lang="scss">

  .content{
    margin: 1rem 0;
  }

</style>

