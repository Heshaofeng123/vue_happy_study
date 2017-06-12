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

    <column-group title="培训专栏" link="https://www.baidu.com/" style="background:#f5f5f5;margin-bottom:.32rem;margin-top:-.32rem;">
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

    <column-group title="大咖讲师" link="https://github.com">
      <div class="swiper-container-3">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in bigTeacher">
            <div class="big_teacher">
              <img :src="item.imgSrc">
              <div class="big_teacher_main">
                <p class="name">{{item.name}}</p>
                <p class="desc">{{item.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </column-group>

    <column-group title="爱分享" link="https://github.com">
      <column-item v-for="(item, index) in iShare"
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
      ],
      bigTeacher: [
        {
          name: '吴恩达',
          description: '人工智能时代的领航人',
          imgSrc: 'static/img/vanke.jpg'
        },
        {
          name: '马化腾',
          description: '互联网从业者',
          imgSrc: 'static/img/vanke.jpg'
        },
        {
          name: '王健林',
          description: '房地产大鳄',
          imgSrc: 'static/img/vanke.jpg'
        },
        {
          name: '潘石屹',
          description: '我在北京盖房子',
          imgSrc: 'static/img/vanke.jpg'
        }
      ],
      topList: [
        {
          group: '好课榜',
          imgSrc: 'static/img/vanke.jpg',
          top: 'NO.1集团总部',
          category: '精品课程'
        },
        {
          group: '爱学榜',
          imgSrc: 'static/img/vanke.jpg',
          top: 'NO.1深圳地产',
          category: '王牌精品课程'
        },
        {
          group: '贡献榜',
          imgSrc: 'static/img/vanke.jpg',
          top: 'NO.1广州地产',
          category: '全集团内的王牌精品课程'
        }
      ],
      iShare: [
        {
          id: "c0011",
          title: "测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2",
          des: "学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践",
          count: "8",
          points: "9.9",
          src: "static/img/001.jpeg",
          timer: "99:99"
        },
        {
          id: "c0012",
          title: "测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2",
          des: "学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践",
          count: "8",
          points: "9.9",
          src: "static/img/001.jpeg",
          timer: "99:99"
        },
        {
          id: "c0013",
          title: "测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2",
          des: "学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践学会书中的方法技巧并加以实践",
          count: "8",
          points: "9.9",
          src: "static/img/001.jpeg",
          timer: "99:99"
        }
      ]
    }
  },
  methods: {
    fetchHomeInitData() {
      this.$dialog.loading.open('正在加载...');

      setTimeout(() => {
          this.$dialog.loading.close();
      }, 1000);
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

    let mySwiper_3 = new Swiper('.swiper-container-3', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 10
    })
  }
}
</script>
