<template>
  <div class="movie">
    <h1>电影详情页面</h1>
    {{msg}}
  </div>
</template>
<script>
  export default {
    data(){
      return{

        msg:this.$route.params.movieId
      }
    }
  }
</script>
<style>

</style>
