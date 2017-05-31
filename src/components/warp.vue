<template>
  <div class="beauty">
      <router-view :setData ='setData'></router-view>
  </div> 
</template>

<script>
export default {
  name: 'beauty',
  data () {
    return {
      setData: {
        age: {},
        height: {},
        weight: {},
        face: {},
        faceColor: {},
        skin: {},
        style: {}
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
.step{
  margin: 0 0 0 -20px;
}
</style>
