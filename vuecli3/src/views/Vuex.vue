<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="$store.commit('add',2)">+</button>
    <button @click="$store.commit('sub')">-</button>

  </div>
</template>
<script>

  export default {
    data(){
      return{

      }
    },
    computed:{
      count(){
        return this.$store.state.count;
      }
    }
  }
</script>
<style>

</style>
