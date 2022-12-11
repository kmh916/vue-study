<template>
  <div>

    <h1>텍스트 보간법</h1>
    a는 {{a}} 입니다.

    <h1>디렉티브</h1>
    <p v-html="b"></p>


    <h2>디렉티브와 텍스트 보간법에서는 자바스크립트 표현식을 사용할 수 있습니다.</h2>
    <li>{{c + d}}</li>
    <li v-html="(c+d).length"></li>
    <li>{{'aabbs'.charAt(4)}}</li>
  </div>
</template>

<script>
export default {
  name: "Interpolation",
  data : () => ({
    a : 3,
    b : "html 태그의 속성외의 vue의 속성을 디렉티브 라고 합니다. ex) v-bind, v-html",
    c : "hello ",
    d : "world",
  }),
}
</script>

<style scoped>
h1, h2 {
  margin-top: 50px;
}
</style>