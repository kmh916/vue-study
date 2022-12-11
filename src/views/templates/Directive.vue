<template>
  <div>

    <h1>속성 바인딩 v-bind</h1>
    <p v-bind:id="testId">id 바인딩</p>
    <p :id="testId">id 바인딩</p>

    <h1> 조건부 렌더링 v-if vs v-show</h1>
    <p v-if="foo">v-if</p>
    <p v-show="foo">v-show</p>


    <h1>반복문 v-for</h1>
    1. 단순 숫자 범위 반복
      <p v-for="n in 10">{{n}}</p>
    2. 배열 반복
      <p v-for="item in arr">{{item}}</p>
    3. 객체 반복
      <p v-for="(value , key) in object">{{key}} : {{value}}</p>

    <h1>이벤트 핸들링</h1>
    <div>
      <p>Template 에서는 DOM,BOM 같은 요소에 접근 할수 없음 <button v-on:click="alert('alert')">버튼</button></p>
      <p>v-on:click <button v-on:click="onClicks">버튼</button></p>
      <p>@click <button @click="onClicks">버튼</button></p>
    </div>

    <h1>입력값 바인딩</h1>
    <input v-model="inputValue">
    <p>입력한 값 : {{inputValue}}</p>

  </div>
</template>

<script>
export default {
  name: "Directive",
  data : () => ({
    testId: 'test123',
    foo : 2 > 1,
    a : 1,
    arr : [5,4,3,2,1],
    inputValue : '',
    object : {
      a : 1,
      b : 'b'
    }
  }),
  methods : {
    onClicks (){
      alert('alert')
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 50px
}
</style>