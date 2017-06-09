<template>
  <div id='result' ref="result" class='selectWrap result'> 
    <div class='bgWrap'>
         <div class='boxWrap'>
             <div class='boxBody'>
                 <div class='boxCon'>
                    <div class='imgArea'>
                      <img :src='"static/images/typeImages/"+imgUrl' />
                    </div>
                    <h1>{{zName}}</h1>
                     <p>{{des}}</p>
                 </div>
             </div>
         </div>
        <div class='btnArea'>
            <span class='refresh' v-on:click="refresh">重试</span>
            <p><a href='javascript:;' class='btn courseBtn'>vuevuevuevue</a></p>
            <p><a href='javascript:;' class='btn shareBtn'>routerrouterrouter</a></p>
        </div>
    </div>
  </div>
</template>

<script>
const result = [{
  name: '皮卡丘',
  desCri: '皮卡丘皮卡丘皮卡丘皮卡丘皮卡丘皮卡丘皮卡丘皮卡丘皮卡丘皮卡丘皮卡丘皮卡丘皮卡丘皮卡丘皮卡丘皮卡丘',
  imgUrl: 're_img_01.png'
}, {
  name: '小火龙',
  desCri: '小火龙小火龙小火龙小火龙小火龙小火龙小火龙小火龙小火龙小火龙小火龙小火龙小火龙小火龙小火龙小火龙小火龙小火龙小火龙',
  imgUrl: 're_img_02.png'
}, {
  name: '妙蛙种子',
  desCri: '妙蛙种子妙蛙种子妙蛙种子妙蛙种子妙蛙种子妙蛙种子妙蛙种子妙蛙种子妙蛙种子妙蛙种子妙蛙种子妙蛙种子妙蛙种子妙蛙种子',
  imgUrl: 're_img_03.png'
}, {
  name: '杰尼龟',
  desCri: '杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟杰尼龟',
  imgUrl: 're_img_04.png'
}, {
  name: '胖丁',
  desCri: '胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁胖丁',
  imgUrl: 're_img_05.png'
}, {
  name: '可达鸭',
  desCri: '可达鸭可达鸭可达鸭可达鸭可达鸭可达鸭可达鸭可达鸭可达鸭可达鸭可达鸭可达鸭可达鸭可达鸭可达鸭可达鸭可达鸭',
  imgUrl: 're_img_06.png'
}, {
  name: '绿毛虫',
  desCri: '绿毛虫绿毛虫绿毛虫绿毛虫绿毛虫',
  imgUrl: 're_img_07.png'
}, {
  name: '波波',
  desCri: '波波波波波波波波波波波波波波波波',
  imgUrl: 're_img_08.png'
}, {
  name: '比比鸟',
  desCri: '比比鸟比比鸟比比鸟比比鸟',
  imgUrl: 're_img_09.png'
}, {
  name: '雷丘',
  desCri: '雷丘雷丘雷丘雷丘雷丘',
  imgUrl: 're_img_10.png'
}, {
  name: '穿山鼠',
  desCri: '穿山鼠',
  imgUrl: 're_img_11.png'
}, {
  name: '皮皮',
  desCri: '皮皮皮皮皮皮皮皮皮皮皮皮皮皮皮皮',
  imgUrl: 're_img_12.png'
}, {
  name: '六尾',
  desCri: '六尾六尾六尾六尾六尾六尾',
  imgUrl: 're_img_13.png'
}, {
  name: '走路草',
  desCri: '走路草走路草走路草走路草走路草走路草走路草走路草走路草走路草走路草走路草走路草走路草走路草走路草走路草走路草走路草走路草走路草走路草',
  imgUrl: 're_img_14.png'
}, {
  name: '胖可丁',
  desCri: '胖可丁胖可丁胖可丁胖可丁胖可丁胖可丁胖可丁胖可丁胖可丁胖可丁胖可丁胖可丁',
  imgUrl: 're_img_15.png'
}];
export default {
  name: 'result',
  data () {
    return {
      zName: '',
      des: '',
      imgUrl: ''
    }
  },
  mounted () {
    // console.log(this.$route.params);
    let self = this;
    this.collectData = JSON.parse(window.localStorage.getItem('data'));
    if (this.collectData) {
      const data = {
        age: this.collectData.age['value'],
        height: this.collectData.height['value'],
        weight: this.collectData.weight['value'],
        faceColor: this.collectData.faceColor['title'],
        face: this.collectData.face['title'],
        skin: this.collectData.skin['title'],
        style: this.collectData.style['title']
      }
      this.$http.post('ip:3000/add', data, {emulateJSON: true}).then((res) => {
        self.id = res.data.data.insertId;
        window.localStorage.removeItem('data');
      });
    } else {
      this.$router.push({path: '/'});
    }
    function type (i) {
      self.zName = result[i].name;
      self.des = result[i].desCri;
      self.imgUrl = result[i].imgUrl;
      self.aUrl = 'http://mp.weixin.qq.com/s?__biz=MTEyNTMwNjYwMQ===&mid=402189012&idx=1&sn=76dbdc8947756f864c75e45c1d6a3d52#rd';
    }
    this.faceC = this.collectData.faceColor.title;
    this.perStyle = this.collectData.style.title;
    if (this.faceC === '晶莹白皙') {
      if (this.perStyle === '韩剧女主角') {
        type(1);
      } else if (this.perStyle === '日系小清新') {
        type(0);
      } else if (this.perStyle === '轻熟OL系') {
        type(7);
      } else if (this.perStyle === '欧美出街范') {
        type(14);
      } else if (this.perStyle === '文艺复古情怀') {
        type(13);
      } else if (this.perStyle === '中性运动风') {
        type(7);
      }
    } else if (this.faceC === '活力小麦') {
      if (this.perStyle === '韩剧女主角') {
        type(6);
      } else if (this.perStyle === '日系小清新') {
        type(1);
      } else if (this.perStyle === '轻熟OL系') {
        type(8);
      } else if (this.perStyle === '欧美出街范') {
        type(10);
      } else if (this.perStyle === '文艺复古情怀') {
        type(13);
      } else if (this.perStyle === '中性运动风') {
        type(9);
      }
    } else if (this.faceC === '自然偏黄') {
      if (this.perStyle === '韩剧女主角') {
        type(1);
      } else if (this.perStyle === '日系小清新') {
        type(4);
      } else if (this.perStyle === '轻熟OL系') {
        type(7);
      } else if (this.perStyle === '欧美出街范') {
        type(14);
      } else if (this.perStyle === '文艺复古情怀') {
        type(11);
      } else if (this.perStyle === '中性运动风') {
        type(2);
      }
    } else if (this.faceC === '自然红润') {
      if (this.perStyle === '韩剧女主角') {
        type(4);
      } else if (this.perStyle === '日系小清新') {
        type(0);
      } else if (this.perStyle === '轻熟OL系') {
        type(7);
      } else if (this.perStyle === '欧美出街范') {
        type(3);
      } else if (this.perStyle === '文艺复古情怀') {
        type(5);
      } else if (this.perStyle === '中性运动风') {
        type(12);
      }
    }
    this.$refs.result.style.height = window.innerHeight + 'px';
  },
  methods: {
    refresh () {
      let self = this;
      self.$http.post('ip:3000/delete', {id: this.id}, {emulateJSON: true}).then((res) => {
        self.$router.push({path: '/'});
      });
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
