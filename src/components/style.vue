<template>
  <div>
    <warp-header :postion="postion"></warp-header>
    <div class='selectWrap' id='personMes'>
      <div class='mark'><span>年龄</span><span>岁</span></div>
      <div class='selectBox clearFix'>
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide class='swiper-slide' v-for="item in age"> {{item}} </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-button-prev swiper-age-prev" slot="button-prev"></div>
            <div class="swiper-button-next swiper-age-next" slot="button-next"></div>
          </swiper>
      </div>
      <div class='mark'><span>身高</span><span>cm</span></div>
      <div class='selectBox clearFix'>
          <swiper :options="heightOption" ref="heightSwiper">
            <!-- slides -->
            <swiper-slide class='swiper-slide' v-for="item in height"> {{item}} </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-button-prev swiper-height-prev" slot="button-prev"></div>
            <div class="swiper-button-next swiper-height-next" slot="button-next"></div>
          </swiper>
      </div>
      <div class='mark'><span>体重</span><span>kg</span></div>
      <div class='selectBox clearFix'>
          <swiper :options="weightOption" ref="weightSwiper">
            <!-- slides -->
            <swiper-slide class='swiper-slide' v-for="item in weight"> {{item}} </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-button-prev swiper-weight-prev" slot="button-prev"></div>
            <div class="swiper-button-next swiper-weight-next" slot="button-next"></div>
          </swiper>
      </div>
      <div class='btnArea'>
      <router-link to="/" class="personPre">&nbsp;上一步</router-link>
      <router-link to="/beauty/face" class="btn next">下一步</router-link>
      </div>   
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css';

const style = {
  option (prevClass, nextClass, index, that) {
    return {
      notNextTick: false,
      direction: 'horizontal',
      prevButton: prevClass,
      nextButton: nextClass,
      mousewheelControl: true,
      centeredSlides: 1,
      slidesPerView: 5,
      initialSlide: index,
      class: prevClass,
      onTransitionEnd (swiper) {
        if (swiper.prevButton[0].className === 'swiper-button-prev swiper-age-prev' ||
          swiper.prevButton[0].className === 'swiper-button-prev swiper-age-prev swiper-button-disabled') {
          that.collectData.age = {index: swiper.activeIndex, value: that.age[swiper.activeIndex]};
        } if (swiper.prevButton[0].className === 'swiper-button-prev swiper-weight-prev' ||
          swiper.prevButton[0].className === 'swiper-button-prev swiper-weight-prev swiper-button-disabled') {
          that.collectData.weight = {index: swiper.activeIndex, value: that.weight[swiper.activeIndex]};
        } if (swiper.prevButton[0].className === 'swiper-button-prev swiper-height-prev' ||
          swiper.prevButton[0].className === 'swiper-button-prev swiper-height-prev swiper-button-disabled') {
          that.collectData.height = {index: swiper.activeIndex, value: that.height[swiper.activeIndex]};
        }
        window.localStorage.setItem('data', JSON.stringify(that.collectData));
      }
    }
  },
  num (startNum, endNum) {
    let arr = [];
    for (let i = startNum; i < endNum + 1; i++) {
      arr.push(i);
    }
    return arr;
  }
}

export default {
  name: 'style',
  props: ['set-data'],
  data () {
    return {
      swiperOption: style.option('.swiper-age-prev', '.swiper-age-next', 6, this),
      heightOption: style.option('.swiper-height-prev', '.swiper-height-next', 6, this),
      weightOption: style.option('.swiper-weight-prev', '.swiper-weight-next', 6, this),
      postion: { width: '20%', index: '1', msg: '您的基础信息？' },
      collectData: this.setData,
      nextData: {type: 'base', url: '/beauty/face', msg: '请选择年龄体重身高！'}
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    // 设置基本信息的数值
    this.age = style.num(16, 50);
    this.height = style.num(100, 200);
    this.weight = style.num(30, 80);
    if (JSON.parse(window.localStorage.getItem('data'))) {
      this.collectData = JSON.parse(window.localStorage.getItem('data'));
    }
    this.swiperOption = style.option('.swiper-age-prev', '.swiper-age-next', this.collectData.age.index || 6, this);
    this.weightOption = style.option('.swiper-weight-prev', '.swiper-weight-next', this.collectData.weight.index || 6, this);
    this.heightOption = style.option('.swiper-height-prev', '.swiper-height-next', this.collectData.height.index || 6, this);
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.swiper-button-next, .swiper-button-prev {
  width: 0;
  height: 0;
  margin-top: -9px;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  background: none;
}
</style>
