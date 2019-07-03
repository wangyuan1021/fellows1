<template>
  <div>
    <h1>我是componentA组件</h1>
    <component-b :msg="msg"></component-b>
    <component-c @xx="fn"></component-c>

    {{msg}}

  </div>
</template>
<script>
  import ComponentB from '@/views/ComponentB';
  import ComponentC from '@/views/ComponentC';

  export default {
    data(){
      return{
        msg:0

      }
    },
    methods:{
      fn(a){
        this.msg += a;
        console.log(this.msg)
      }
    },
    components:{
      ComponentB,
      ComponentC
    }

  }
</script>
<style>

</style>
