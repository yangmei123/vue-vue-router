<template>
    <div id="music" v-show="musicShow">
        <div class="music on play"></div>
       <!--  <audio :src="url" loop="loop" autoplay="autoplay" id="bgmusic"></audio> -->
    </div>
</template>

<script>
export default {
  name: 'music',
  props: ['musicShow'],
  data () {
    return {
      loadShow: this.show,
      url: '/static/audio/bg.mp3'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#music {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 30px;
    height: 30px;
}

.music {
    width: 100%;
    height: 100%;
    background: url(../assets/images/m_off.png) left top no-repeat;
    background-size: 100% auto;
}

#music .on {
    background: url(../assets/images/m_on.png) left top no-repeat;
    width: 30px;
    height: 30px;
    background-size: 100% auto;
}

.play {
    animation: r 1.2s linear infinite;
    -webkit-animation: r 1.2s linear infinite;
}

@keyframes r {
    0% {
        transform: rotate(0)
    }
    100% {
        transform: rotate(-360deg)
    }
}

@-webkit-keyframes r {
    0% {
        -webkit-transform: rotate(0)
    }
    100% {
        -webkit-transform: rotate(-360deg)
    }
}

</style>
