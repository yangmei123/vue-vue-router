<template>
  <div>
    <warp-header :postion="postion"></warp-header>
    <div class='selectWrap' id="style">
        <div class='selectBox clearFix'>
        <selectItem :data="faceData" :type="'style'"></selectItem>
        </div>
        <div class='btnArea'>
          <router-link to="/beauty/style" class="personPre">&nbsp;上一步</router-link>
          <next-btn :data="nextData"></next-btn>
        </div>   
    </div>
  </div>
</template>

<script>
export default {
  name: 'gstyle',
  data () {
    return {
      nextData: {type: 'style', url: '/result/result', msg: '请选择风格！'},
      postion: { width: '100%', index: '5', msg: '您的风格？' },
      faceData: [{
        url: 'h_style.jpg',
        oldUrl: 'h_style.jpg',
        title: '韩剧女主角'
      },
      {
        url: 'r_style.jpg',
        oldUrl: 'r_style.jpg',
        title: '日系小清新'
      },
      {
        url: 'q_style.jpg',
        oldUrl: 'q_style.jpg',
        title: '轻熟OL系'
      },
      {
        url: 'o_style.jpg',
        oldUrl: 'o_style.jpg',
        title: '欧美出街范'
      },
      {
        url: 'w_style.jpg',
        oldUrl: 'w_style.jpg',
        title: '文艺复古情怀'
      },
      {
        url: 'z_style.jpg',
        oldUrl: 'z_style.jpg',
        title: '中性运动风'
      }]
    }
  },
  mounted () {
    this.collectData = JSON.parse(window.localStorage.getItem('data'));
    this.faceData.forEach((data, index) => {
      data.url = data.oldUrl;
      if (data.oldUrl === this.collectData.style.oldUrl && data.title === this.collectData.style.title) {
        data.url = `${data.url.split('.')[0]}_on.${data.url.split('.')[1]}`;
      } else {
        data.isSelect = false;
      }
    });
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
