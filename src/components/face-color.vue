<template>
  <div>
    <warp-header :postion="postion"></warp-header>
    <div class='selectWrap' id="faceColor">
        <div class='selectBox clearFix'>
        <selectItem :data="faceData" :type="'faceColor'"></selectItem>
        </div>
        <div class='btnArea'>
          <router-link to="/beauty/face" class="personPre">&nbsp;上一步</router-link>
          <next-btn :data="nextData"></next-btn>
        </div>   
    </div>
  </div>
</template>

<script>
export default {
  name: 'face-color',
  data () {
    return {
      nextData: {type: 'faceColor', url: '/beauty/skin', msg: '请选择肤色！'},
      postion: { width: '60%', index: '3', msg: '您的肤色？' },
      faceData: [{
        url: 'w_color.jpg',
        oldUrl: 'w_color.jpg',
        title: '晶莹白皙'
      },
      {
        url: 'r_color.jpg',
        oldUrl: 'r_color.jpg',
        title: '自然红润'
      },
      {
        url: 'y_color.jpg',
        oldUrl: 'y_color.jpg',
        title: '自然偏黄'
      },
      {
        url: 'm_color.jpg',
        oldUrl: 'm_color.jpg',
        title: '活力小麦'
      }]
    }
  },
  mounted () {
    this.collectData = JSON.parse(window.localStorage.getItem('data'));
    this.faceData.forEach((data, index) => {
      data.url = data.oldUrl;
      if (data.oldUrl === this.collectData.faceColor.oldUrl && data.title === this.collectData.faceColor.title) {
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
