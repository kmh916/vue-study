<template>
  <div>
    <h1> Props를 이용해 하위컴포넌트로 데이터를 전송할 수 있다.</h1>
    numberProp : {{numberProp}} , stringProp : {{stringProp}}

    <h2>emit을 이용해 상위 컴포넌트로 이벤트를 전송할 수 있다.</h2>
    <button @click="emit">emit</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props : {
    numberProp : {
      type: Number
    },
    stringProp : {
      type: String
    },
  },
  methods : {
    emit(){
      this.$emit('change')
    }
  }
}
</script>

<style scoped>

</style>