<template>
  <div>
    <warp-header :postion="postion"></warp-header>
    <div class='selectWrap' id="skin">
        <div class='selectBox clearFix'>
        <selectItem :data="faceData" :type="'skin'"></selectItem>
        </div>
        <div class='btnArea'>
          <router-link to="/beauty/faceColor" class="personPre">&nbsp;上一步</router-link>
          <next-btn :data="nextData"></next-btn>
        </div>   
    </div>
  </div>
</template>

<script>
export default {
  name: 'skin',
  data () {
    return {
      nextData: {type: 'skin', url: '/beauty/gstyle', msg: '请选择肤质！'},
      postion: { width: '80%', index: '4', msg: '您的肤质？' },
      faceData: [{
        url: 'w_color.jpg',
        oldUrl: 'w_color.jpg',
        title: '混油'
      },
      {
        url: 'r_color.jpg',
        oldUrl: 'r_color.jpg',
        title: '敏感'
      },
      {
        url: 'y_color.jpg',
        oldUrl: 'y_color.jpg',
        title: '干皮'
      },
      {
        url: 'm_color.jpg',
        oldUrl: 'm_color.jpg',
        title: '油皮'
      }]
    }
  },
  mounted () {
    this.collectData = JSON.parse(window.localStorage.getItem('data'));
    this.faceData.forEach((data, index) => {
      data.url = data.oldUrl;
      if (data.oldUrl === this.collectData.skin.oldUrl && data.title === this.collectData.skin.title) {
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
