<template>
  <div>
    <Child :number-prop="3" string-prop="3" @change="log"/>
  </div>
</template>

<script>
import Child from "@/views/templates/Child";
export default {
  name: "Props",
  components: {Child},
  methods : {
    log(){
      console.log('이벤트 감지됨')
    }
  }
}
</script>

<style scoped>

</style>