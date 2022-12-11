<template>
  <div>
    <h1>Vue 객체 옵션 : data, methods , computed</h1>
    <li>data는 사용할 데이터를 정의하는 옵션이다.</li>
    <li>methods 는 사용할 함수를 정의하는 옵션이다.</li>
    <li>computed는 data를 기반으로 계산된 값을 캐싱하는 함수이다.</li>

<!--    {{log(this)}}-->


    <h1>methods vs computed</h1>
    <p>a: <input type="text" v-model="a"></p>
    <p>{{computedA}}</p>
    <p>{{computedA}}</p>
    <p>{{inMethod()}}</p>
    <p>{{inMethod()}}</p>

    <h1>watch</h1>
    <p>target: <input type="text" v-model="target"></p>
  </div>
</template>

<script>
export default {
  name: "Options",
  data : () => ({
    str : 'hello world',
    a : 1,
    target : 3
  }),
  methods : {
    log (data){
      console.log('hello',data);
    },
    inMethod(){
      console.log('inMethod')
      return this.a*10;
    }
  },
  computed : {
     computedA(){
       console.log('computed');
       return this.a*10;
     }
  },
  watch : {
    target (){
      console.log('target 바뀜')
    }
  }
}
</script>

<style scoped>

</style>