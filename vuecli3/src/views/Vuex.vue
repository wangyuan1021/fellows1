<template>
  <div>
    <!--<h1>{{count1}}</h1>-->
    <!--<h1>{{xx}}</h1>-->
    <h1>{{count}}</h1>
    <h1>{{msg}}</h1>
    <h1>{{len}}</h1>
    <!--<h1>{{$store.getters.count100}}</h1>-->
    <h1>{{count100}}</h1>

    <!--<button @click="$store.commit('add',2)">+</button>-->
    <!--<button @click="$store.dispatch('addNum',2)">+</button>-->
    <button @click="addNum(2)">+</button>


    <button @click="sub">-</button>
    <input type="text" v-model="str">

  </div>
</template>
<script>
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
  export default {
    data(){
      return{
        str:'ssss'

      }
    },

    // computed:{
    //   count(){
    //     return this.$store.state.count;
    //   }
    // }
    // computed:mapState({
    //   count1:state=> {
    //     return state.count
    //   },
    //   xx:state=>state.msg
    // })
    // computed:mapState(['count','msg'])

    methods:{
      ...mapMutations(['sub']),
      ...mapActions(['addNum'])
    },


    computed:{
      len(){
        return this.str.length;
      },
      ...mapState(['count','msg']),
      ...mapGetters(['count100'])

    }

  }
</script>
<style>

</style>
