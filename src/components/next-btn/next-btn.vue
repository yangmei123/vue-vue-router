<template>
  <div>
    <span class="btn next" @click="next">下一步</span>
    <span class="attBtn" v-show="show">{{data.msg}}</span>
  </div>     
</template>

<script>
export default {
  name: 'next-btn',
  props: ['data'],
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.collectData = JSON.parse(window.localStorage.getItem('data'));
  },
  methods: {
    next () {
      this.collectData = JSON.parse(window.localStorage.getItem('data'));
      if (this.collectData[this.data.type].title) {
        this.$router.push({path: this.data.url});
      } else {
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 1000);
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
