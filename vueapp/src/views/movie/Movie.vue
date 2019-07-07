<template>
  <div class="movie">
    <!--<ul>-->
      <!--<li v-for="movie in movieList">-->
        <!--<div class="movie-img">-->
          <!--<img :src="movie.images.small" alt="">-->
        <!--</div>-->
        <!--<div class="movie-desc">-->
          <!--<h2>{{movie.title}}</h2>-->
          <!--<p><观众评分 <span class="aver">{{movie.rating.average}} </span></p>-->
          <!--主演：<span v-for="actor in movie.casts">{{actors.name}} </span>-->
        <!--</div>-->
      <!--</li>-->
    <!--</ul>-->


    <!--法二:-->
    <ul>
      <MovieList v-for="movie in movieList" :movie="movie"></MovieList>
    </ul>
    <div class="loading" v-show="isShow">
      <img src="../../assets/img/loading.gif" alt="">
    </div>
    <div v-show="isEnd">
      到底了...
    </div>
    豆瓣接口失效
  </div>

</template>
<script>

  // 法二
  import MovieList from '@/views/movie/MovieList.vue';


  import Axios from 'axios';
  export default {
    data(){
      return{
        movieList:[],
           isShow: false,
           isEnd: false
      }
    },
    created(){
     this.getData();
          window.onscroll = ()=>{
            var scrollTop = document.documentElement.scrollTop;
            var scrollHeight = document.documentElement.scrollHeight;
            var clientHeight = document.documentElement.clientHeight;
            if(scrollTop + clientHeight == scrollHeight && !this.isEnd){
              this.isShow = true;
              this.getData();
            }
          };
    },
  methods:{
    getData(){
      Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start='+this.movieList.length+'&count=5')
        .then((res)=>{

          this.movieList =[...this.movieList, ...res.data.subjects];
          this.isShow = false;

          if(res.data.subjects < 5){
            this.isEnd = true;
          }
        });
    }
  },

  // 法二
      components:{
        MovieList
      }
  }

</script>
<style lang="scss">
  .movie li{
    display: flex;
    padding: 10px;
    .movie-img{
      flex-grow: 1;
      width: 0;
    }
    .movie-desc{
      flex-grow: 3;
      margin-left: 20px;
      width: 0;
      .aver{
        color:orange;
      }
    }
  }
.loading{
  text-align: center;
}

</style>
