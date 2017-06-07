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

    <column-group title="培训专栏" link="https://www.baidu.com/" style="background:#f5f5f5;margin-bottom:.32rem;">
      <div class="swiper-container-2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in trainColumn">
            <div class="train_column">
              <img :src="item.imgSrc">
              <div class="train_column_main">
                <p><span>{{item.title}}</span><span>{{item.subsubtime}}</span></p>
                <p>万科大讲堂第{{item.current}}期</p>
                <p>{{item.address}}</p>
                <p>{{item.dateToDate}}</p>
                <div class="train_column_button">查看全部{{item.count}}期</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

  .swiper-container-2 {
    width: 100%;
    .swiper-wrapper {
      .swiper-slide {
        width: 240px;
        .train_column {
          height: 240px;
          background: #fff;
          img {
            width: 240px;
            height: 100px;
          }
        }
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
      ],
      trainColumn: [
        {
          title: '一个人的长征',
          subsubtime: '倒计时2天',
          address: '集团总部·万科国际会议中心',
          dateToDate: '2017.5.20-2017.5.27',
          count: '3',
          current: '1',
          imgSrc: 'static/img/001.jpeg'
        },
        {
          title: '岁月的洗礼',
          subsubtime: '倒计时2天',
          address: '深圳地产·万科国际会议中心',
          dateToDate: '2017.5.27-2017.6.24',
          count: '3',
          current: '1',
          imgSrc: 'static/img/003.jpg'
        },
        {
          title: '一个人的长征',
          subsubtime: '倒计时2天',
          address: '集团总部·万科国际会议中心',
          dateToDate: '2017.5.20-2017.5.27',
          count: '3',
          current: '1',
          imgSrc: 'static/img/001.jpeg'
        },
        {
          title: '岁月的洗礼',
          subsubtime: '倒计时2天',
          address: '深圳地产·万科国际会议中心',
          dateToDate: '2017.5.27-2017.6.24',
          count: '3',
          current: '1',
          imgSrc: 'static/img/003.jpg'
        }
      ]
    }
  },
  mounted() {
    this.fetchHomeInitData();

    let mySwiper_1 = new Swiper('.swiper-container-1', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 10
    })

    let mySwiper_2 = new Swiper('.swiper-container-2', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 15
    })
  },
  methods: {
    fetchHomeInitData() {
      this.$dialog.loading.open('正在加载...');

      setTimeout(() => {
          this.$dialog.loading.close();
      }, 1000);
    }
  }
}
</script>
