<template>
  <div>
    <div class='face perStyle' v-for="item in faceData">
        <img :src='"static/images/"+item.url' class='seLectFace' @click="select(item, faceData)" />
        <h3>{{item.title}}</h3>
        <p>{{item.msg}}</p>
    </div>
  </div>     
</template>

<script>
export default {
  name: 'select-item',
  props: ['data', 'type'],
  data () {
    return {
      faceData: this.data,
      pageType: this.type
    }
  },
  methods: {
    select (item, itemArr) {
      let collectData = JSON.parse(window.localStorage.getItem('data'));
      item.isSelect = true;
      itemArr.forEach((data, index) => {
        data.url = data.oldUrl;
        if (data.oldUrl !== item.oldUrl) {
          item.isSelect = false;
        } else {
          item.url = `${item.url.split('.')[0]}_on.${item.url.split('.')[1]}`;
        }
      });
      collectData[this.pageType] = {};
      collectData[this.pageType].oldUrl = item.oldUrl;
      collectData[this.pageType].title = item.title;
      window.localStorage.setItem('data', JSON.stringify(collectData));
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
