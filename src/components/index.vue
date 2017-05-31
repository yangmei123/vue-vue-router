<template>
  <div id="app">
  <music :music-show="musicShow"></music>
    <div class="bgWrap" ref="index">
        <div class="indexMain">
             <div class="boxWrap">
                 <span class="huiZ"><img src="../assets/images/icon.png" alt="宠物小精灵" /></span>
                 <div class="boxBody">
                     <div class="boxCon">
                         <img src="../assets/images/title.png" alt="宠物小精灵测试" />
                         <p class="title">揭秘你的宠物小精灵，宠物小精灵宠物小精灵宠物小精灵。</p>
                     </div>
                 </div>
             </div>
        </div>
        <div class="btnArea"> 
         <router-link to="beauty" class="btn nowBtn" v-on:click="start">开始测试</router-link>
        </div>
    </div>
    <load :show="show"></load>  
  </div>
</template>

<script>
import loading from './loading.vue';
import music from './music.vue';
export default {
  name: 'index',
  data () {
    return {
      show: true,
      musicShow: true,
      contentShow: false
    }
  },
  created () {
    this.show = false;
  },
  mounted () {
    this.$refs.index.style.height = window.innerHeight + 'px';
    // this.$refs.index.style.width = window.innerWidth + 'px';
  },
  components: {
    'load': loading,
    music
  },
  methods: {
    start () {
      this.mainShow = false;
    }
  }
}
</script>

<style>
</style>
