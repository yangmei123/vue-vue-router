<template>
  <div v-show="loadShow" class="loading">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: ['show'],
  data () {
    return {
      loadShow: this.show
    }
  },
  created () {
    setTimeout(() => {
      this.loadShow = false;
    }, 2000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 66px;
    height: 40px;
    margin: -20px 0 0 -33px;
}

.loading i {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 10px;
    height: 40px;
    background: #fff;
}

i:nth-child(1) {
    animation: bump01 2s ease-out infinite;
}

i:nth-child(2) {
    left: 14px;
    animation: bump02 2s ease-out infinite;
}

i:nth-child(3) {
    left: 28px;
    animation: bump03 2s ease-out infinite;
}

i:nth-child(4) {
    left: 42px;
    animation: bump04 2s ease-out infinite;
}

i:nth-child(5) {
    left: 56px;
    animation: bump05 2s ease-out infinite;
}

@keyframes bump01 {
    0% {
        top: 0;
    }
    14% {
        top: -10px;
    }
    28% {
        top: 15px;
    }
    42% {
        top: 0;
    }
}

@keyframes bump02 {
    0% {
        top: 0;
    }
    18% {
        top: 0;
    }
    28% {
        top: -10px;
    }
    42% {
        top: 15px;
    }
    56% {
        top: 0;
    }
}

@keyframes bump03 {
    0% {
        top: 0;
    }
    32% {
        top: 0;
    }
    42% {
        top: -10px;
    }
    56% {
        top: 15px;
    }
    70% {
        top: 0;
    }
}

@keyframes bump04 {
    0% {
        top: 0;
    }
    46% {
        top: 0;
    }
    56% {
        top: -10px;
    }
    70% {
        top: 15px;
    }
    84% {
        top: 0;
    }
}

@keyframes bump05 {
    0% {
        top: 0;
    }
    60% {
        top: 0;
    }
    70% {
        top: -10px;
    }
    84% {
        top: 15px;
    }
    98% {
        top: 0;
    }
}

</style>
