<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar v-model="active"
                active-color = "#2b4c71"
                inactive-color = '#707070'
    >
      <van-tabbar-item v-for = 'memuItem in memuList'
                       :key = 'memuItem.title'
                       replace
                       :name = "memuItem.name"
                       :to="memuItem.url">
        <span>{{memuItem.title}}</span>
        <img slot = "icon"
             slot-scope="props"
             v-bind:src = "props.active ? memuItem.icon.active : memuItem.icon.inactive">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Vue from 'vue';
  import { Tabbar, TabbarItem } from 'vant';

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

<style lang = "scss">
  .van-tabbar-item:nth-child(3){
  img {
    display: block;
    height: 30px;
  }
  }
</style>
