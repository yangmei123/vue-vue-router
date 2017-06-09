import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import style from '@/components/style';
import beauty from '@/components/warp';
import face from '@/components/face';
import faceColor from '@/components/face-color';
import skin from '@/components/skin';
import gstyle from '@/components/gstyle';
import result from '@/components/result';

Vue.use(Router);
export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index,
    meta: {
      title: '首页'
    }
  }, {
    path: '/result/:type',
    name: 'result',
    component: result,
    meta: {
      title: '结果'
    }
  }, {
    path: '/beauty',
    component: beauty,
    meta: {
      title: '父级router'
    },
    children: [{
      path: '/',
      component: style,
      meta: {
        title: '默认年龄身高体重'
      }
    }, {
      path: 'face',
      component: face,
      meta: {
        title: '脸型'
      }
    }, {
      path: 'style',
      component: style,
      meta: {
        title: '年龄身高体重'
      }
    }, {
      path: 'faceColor',
      component: faceColor,
      meta: {
        title: '肤质'
      }
    }, {
      path: 'skin',
      component: skin,
      meta: {
        title: '肤色'
      }
    }, {
      path: 'gstyle',
      component: gstyle,
      meta: {
        title: '风格'
      }
    }]
  }]
})
