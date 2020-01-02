<template>
  <yd-timeline>
    <yd-timeline-item>
      <p>【南宁市】您的订单正在配送途中，请您准备签收，感谢您的耐心等待。京东扫码付，单单享立减。</p>
      <p style="margin-top: 10px;">2017-08-18 08:24:18</p>
    </yd-timeline-item>
    <yd-timeline-item>
      <p>【南宁市】您的订单已到达【南宁安吉站】</p>
      <p style="margin-top: 10px;">2017-08-18 07:25:08</p>
    </yd-timeline-item>
    <yd-timeline-item>
      <p>【南宁市】您的订单在京东【南宁分拨中心】发货完成，准备送往京东【南宁安吉站】</p>
      <p style="margin-top: 10px;">2017-08-17 21:44:08</p>
    </yd-timeline-item>
    ......
  </yd-timeline>
</template>

<script>
  // @ is an alias to /src
  import Vue from 'vue';
  import {TimeLine, TimeLineItem} from 'vue-ydui/dist/lib.rem/timeline';
  /* 使用px：import {TimeLine, TimeLineItem} from 'vue-ydui/dist/lib.px/timeline'; */

  Vue.component(TimeLine.name, TimeLine);
  Vue.component(TimeLineItem.name, TimeLineItem);
  Vue.use(Tabbar).use(TabbarItem);

  export default {
    name: "home",
    components: {},
    data() {
      return {
        active: 'classify',
        memuList: [
          {
            url: '/',
            name: 'discovery',
            icon: {
              active: require('@/assets/imgs/faxian.png'),
              inactive: require('@/assets/imgs/faxian_2.png'),
            },
            title: '发现',
          },
          {
            url: '/',
            name: 'classify',
            icon: {
              active: require('@/assets/imgs/fenlei.png'),
              inactive: require('@/assets/imgs/fenlei_2.png'),
            },
            title: '分类',
          },
          {
            url: '/',
            name: 'imageDiscern',
            icon: {
              active: require('@/assets/imgs/saoma.png'),
              inactive: require('@/assets/imgs/saoma.png'),
            },
            title: '',
          },
          {
            url: '/',
            name: 'favorites',
            icon: {
              active: require('@/assets/imgs/shouchangjia.png'),
              inactive: require('@/assets/imgs/shouchangjia_2.png'),
            },
            title: '收藏夹',
          },
          {
            url: '/about',
            name: 'personal',
            icon: {
              active: require('@/assets/imgs/wode.png'),
              inactive: require('@/assets/imgs/wode_2.png'),
            },
            title: '我的',
          },
        ],
      }
    },
    created:() => {
      console.log(1111, require('@/assets/imgs/fenlei.png'));
    },
    methods: {

    }
  };
</script>
