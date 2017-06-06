<template>
  <section class="lexue-doc home">

    <yd-slider autoplay="3000" class="banner">
        <yd-slider-item v-for="(item, index) in bannerList" @click.native="detailsGo(item.id)">
          <img :src="item.src">
        </yd-slider-item>
    </yd-slider>

    <div class="swiper-container-1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">企业文化</div>
        <div class="swiper-slide">领导力</div>
        <div class="swiper-slide">专业力</div>
        <div class="swiper-slide">执行力</div>
      </div>
    </div>

    <column-group title="乐学习·推荐" link="https://www.baidu.com/">
      <column-item v-for="(item, index) in columnList" @click.native="detailsGo(item.id)"
        :title="item.title"
        :des="item.des"
        :count="item.count"
        :points="item.points"
        :src="item.src"
        :timer="item.timer">
      </column-item>
    </column-group>

    <column-group title="乐学习·热门" link="https://www.baidu.com/">
      <column-item v-for="(item, index) in columnList2" @click.native="detailsGo(item.id)"
        :title="item.title"
        :des="item.des"
        :count="item.count"
        :points="item.points"
        :src="item.src"
        :timer="item.timer">
      </column-item>
    </column-group>

  </section>
</template>

<style lang="less">
  @import "./index.less";

  .swiper-container-1 {
    width: 100%;
    height: 90px;
    .swiper-wrapper {
      padding-top: 15px;
      .swiper-slide {
        width: 28%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: #888800;
        border-radius: 3px;
        color: #fff;
      }
    }
  }
</style>

<script type="text/babel">
import {ColumnGroup, ColumnItem} from '@/components/original/Column'
import Swiper from '@/../static/js/swiper.min.js'
require('@/../static/css/swiper.min.css')

export default {
  components: {
    ColumnGroup, ColumnItem
  },
  data() {
    return {
      bannerList: [
        {
          id: "b001",
          src: "static/img/001.jpeg",
        },
        {
          id: "b002",
          src: "static/img/002.jpeg",
        },
        {
          id: "b003",
          src: "static/img/003.jpg",
        }
      ],
      columnList: [
        {
          id: "c0001",
          title: "测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1",
          des: "学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践",
          count: "8",
          points: "9.9",
          src: "static/img/vanke.jpg",
          timer: "99:99"
        },
        {
          id: "c0002",
          title: "测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1",
          des: "学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践",
          count: "8",
          points: "9.9",
          src: "static/img/vanke.jpg",
          timer: "99:99"
        },
        {
          id: "c0003",
          title: "测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1",
          des: "学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践",
          count: "8",
          points: "9.9",
          src: "static/img/vanke.jpg",
          timer: "99:99"
        }
      ],
      columnList2: [
        {
          id: "c0011",
          title: "测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2",
          des: "学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践",
          count: "8",
          points: "9.9",
          src: "static/img/vanke-2.jpg",
          timer: "99:99"
        },
        {
          id: "c0012",
          title: "测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2",
          des: "学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践",
          count: "8",
          points: "9.9",
          src: "static/img/vanke-2.jpg",
          timer: "99:99"
        },
        {
          id: "c0013",
          title: "测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2",
          des: "学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践",
          count: "8",
          points: "9.9",
          src: "static/img/vanke-2.jpg",
          timer: "99:99"
        }
      ]
    }
  },
  mounted() {
    this.fetchHomeInitData();

    var mySwiper_1 = new Swiper('.swiper-container-1', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 10
    })
  },
  methods: {
    fetchHomeInitData() {
      this.$dialog.loading.open('正在加载...');

      setTimeout(() => {
          this.$dialog.loading.close();
      }, 2000);
    }
  }
}
</script>
