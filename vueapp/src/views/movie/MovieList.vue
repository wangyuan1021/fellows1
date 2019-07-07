<template>
<div>
  <li>
  <div class="movie-img">
  <img :src="movie.images.small" alt="">
  </div>
  <div class="movie-desc">
  <h2>{{movie.title}}</h2>
  <p><观众评分 <span class="aver">{{movie.rating.average}} </span></p>
  主演：<span v-for="actor in movie.casts">{{actors.name}} </span>
  </div>
  </li>
</div>
</template>
<script>
  export default {

    props:['movie']
  }
</script>
<style>

</style>
