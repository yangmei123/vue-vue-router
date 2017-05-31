<template>
  <div>
    <warp-header :postion="postion"></warp-header>
    <div class='selectWrap' id='face'>
        <div class='selectBox clearFix'>
        <selectItem :data="faceData" :type="'face'"></selectItem>
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
  name: 'face',
  data () {
    return {
      nextData: {type: 'face', url: '/beauty/faceColor', msg: '请选择脸型！'},
      postion: { width: '40%', index: '2', msg: '您的脸型？' },
      faceData: [{
        url: 'e_face.jpg',
        oldUrl: 'e_face.jpg',
        title: '鹅蛋脸',
        msg: '额头、颧骨宽度一致 下巴曲线圆润自然'
      },
      {
        url: 'y_face.jpg',
        oldUrl: 'y_face.jpg',
        title: '圆脸',
        msg: '额头、颧骨、下颌的宽度 基本相同，线条圆润'
      },
      {
        url: 'g_face.jpg',
        oldUrl: 'g_face.jpg',
        title: '瓜子脸',
        msg: '瓜子脸上部略圆下部略尖，形似瓜子'
      },
      {
        url: 'f_face.jpg',
        oldUrl: 'f_face.jpg',
        title: '方脸',
        msg: '额头、颧骨、下颌的宽度 基本相同，四四方方'
      }]
    }
  },
  mounted () {
    this.collectData = JSON.parse(window.localStorage.getItem('data'));
    this.faceData.forEach((data, index) => {
      data.url = data.oldUrl;
      if (data.oldUrl === this.collectData.face.oldUrl && data.title === this.collectData.face.title) {
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
