<template>
  <div class="carousel">
    <div class="swiper-container" ref="cur">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in list" :key="item.id">
          <img :src="item.imgUrl" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev rot" slot="button-prev">
        <img
          src="https://img.dpm.org.cn/Public/static/themes/image/ld_prev.png"
        />
      </div>
      <div class="swiper-button-next rat" slot="button-next">
        <img
          src="https://img.dpm.org.cn/Public/static/themes/image/ld_next.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
//引入swiper
import Swiper from "swiper";
import { reqGetBannerList } from "../../../api/index";
export default {
  name: "Carousel",
  data() {
    return {
      // 初始化Swiper
      mySwiper: null,
      list: [],
    };
  },
  methods: {
    initSwiper() {
      this.mySwiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        autoplay: {
          //自动轮播
          delay: 5500,
          disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
    getSwiperDatas() {
      reqGetBannerList().then((res) => {
        this.list = res.data[0].banner;
        this.$nextTick(this.initSwiper);
      });
    },
  },
  mounted() {
    this.getSwiperDatas();
  },
};
</script>

<style>
.carousel {
  width: 100%;
  height: 650px;
  overflow: hidden;
}
.swiper-container {
  position: relative;
  width: 100%;
  height: 650px;
  --swiper-navigation-size: 0;
}

@keyframes imgscale {
  0% {
    transform: scale(1);
  }

  90% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

.swiper-pagination {
  margin-bottom: 20px;
}

.swiper-pagination .swiper-pagination-bullet {
  width: 27px;
  height: 24px;
  background: url(https://img.dpm.org.cn/Public/static/themes/image/bo/dian2.png)
    no-repeat left center;
}

.swiper-pagination .swiper-pagination-bullet-active {
  width: 27px;
  height: 24px;
  background: url(https://img.dpm.org.cn/Public/static/themes/image/bo/dian2.png)
    no-repeat right center;
}

.swiper-slide {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  animation: imgscale 8s infinite;
  animation-fill-mode: forwards;
}

.swiper-container .rot,
.swiper-container .rat {
  position: absolute;
  left: 10;
  top: 45%;
  opacity: 0;
}

.swiper-container .rot img,
.swiper-container .rat img {
  width: 60px;
  height: 60px;
}

.swiper-button-prev {
  margin-left: 10px;
}

.swiper-button-next {
  margin-right: 10px;
}

.swiper-container .rot:hover,
.swiper-container .rat:hover {
  width: 45px;
  height: 45px;
  opacity: 1;
}
</style>