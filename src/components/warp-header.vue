<template>
  <div class="navWrap" id="header">
      <div class="navBox">
          <span class="cover" ref="cover"></span>
          <span class="step" ref="step">{{postionData.index}}</span> 
          <span class="stepOn" v-show="postionData.index != 5">{{postionData.index}}/5</span>
          <span class="opt" ref="opt">{{postionData.msg}}</span>
      </div>  
  </div> 
</template>

<script>
export default {
  name: 'header',
  props: ['postion'],
  data () {
    return {
      postionData: this.postion
    }
  },
  mounted () {
    this.$refs.step.style.left = this.postionData.width;
    this.$refs.cover.style.width = this.postionData.width;
    if (this.postionData.width === '100%') {
      this.$refs.opt.style.right = 0;
      this.$refs.opt.style.left = 'initial';
      this.$refs.opt.style.transform = 'initial';
    } else {
      this.$refs.opt.style.left = this.postionData.width;
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
