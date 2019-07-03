<template>
  <div class="movie">
    <ul>
      <li v-for="m in movieList" @click="detail(m.id)">
        <!--<router-link :to="'/movieDetail/'+ m.id">-->
          {{m.name}},{{m.avg}}
        <!--</router-link>-->
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        movieList: [
          {
            id: 1,
            name: '复仇者',
            avg: 8.9
          },
          {
            id: 2,
            name: '复仇者1',
            avg: 8.9
          },
          {
            id: 3,
            name: '复仇者2',
            avg: 9.1
          },
        ]
      }
    },
    methods:{
      detail(id){
        this.$router.push('/movieDetail/'+ id);
      }
    }
  }
</script>
<style>

</style>
