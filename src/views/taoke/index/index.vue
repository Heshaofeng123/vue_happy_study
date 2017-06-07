<template>
  <section class="lexue-doc home">

    <yd-slider autoplay="3000" class="banner">
        <yd-slider-item v-for="(item, index) in bannerList" @click.native="detailsGo(item.id)">
          <img :src="item.src">
        </yd-slider-item>
    </yd-slider>

    <div class="first_swiper">
      <div class="swiper-container-1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">企业文化</div>
          <div class="swiper-slide">领导力</div>
          <div class="swiper-slide">专业力</div>
          <div class="swiper-slide">执行力</div>
        </div>
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
                <p><span class="train_column_title">{{item.title}}</span><span class="train_column_subsubtime">{{item.subsubtime}}</span></p>
                <p>万科大讲堂第{{item.current}}期</p>
                <p class="address">{{item.address}}</p>
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

  .first_swiper {
    width: 100%;
    height: 1.5rem;
    padding-left: .25rem;
    padding-right: .25rem;
    .swiper-container-1 {
      width: 100%;
      height: 1rem;
      .swiper-wrapper {
        padding-top: .25rem;
        .swiper-slide {
          width: 2rem;
          height: 1rem;
          line-height: 1rem;
          text-align: center;
          background: #888800;
          border-radius: .03rem !important;
          color: #fff;
        }
      }
    }
  }

  .swiper-container-2 {
    width: 100%;
    .swiper-wrapper {
      .swiper-slide {
        width: 4.8rem;
        border-radius: .08rem!important;
        .train_column {
          height: 4.8rem;
          background: #fff;
          img {
            width: 4.8rem;
            height: 1.76rem;
          }
          .train_column_main {
            p {
              font-size: .24rem;
              color: #666;
              margin-top: .2rem;
              margin-left: .2rem;
              clear: both;
              overflow: hidden;
            }
            .train_column_title {
              float: left;
              font-size: .3rem;
              color: #000;
            }
            .train_column_subsubtime {
              float: right;
              font-size: .24rem;
              margin-right: .2rem;
            }
            .address {
              color: #000;
            }
            .train_column_button {
              width: 80%;
              height: 0.6rem;
              line-height: 0.6rem;
              border: 1px solid #0066CC;
              overflow: hidden;
              margin: 0 auto;
              text-align: center;
              border-radius: .05rem;
              font-size: .28rem;
              color: #0066CC;
              font-weight: bold;
              margin-top: .2rem;
            }
          }
        }
      }
    }
  }
</style>

<script type="text/babel">
import {ColumnGroup, ColumnItem} from '@/components/original/Taoke/Column'
import Swiper from '@/../static/js/swiper.min.js'
require('@/../static/css/swiper.min.css')

export default {
  components: {
    ColumnGroup,
    ColumnItem,
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
