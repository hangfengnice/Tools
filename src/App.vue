<template>
  <div>
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'hello Vue'
    }
  }
}
</script>

<style scoped>
  div {
    color: lightblue;
  }
</style>