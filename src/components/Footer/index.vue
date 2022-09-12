<template>
  <div class="footer">
    <!-- 其他方 -->
    <div class="dd">
      <div
        class="sud-mods"
        v-for="(item, index) in imgList"
        :key="index"
        @mouseout="leaveShow(index)"
        @mouseover="enterShow(index)"
      >
        <div class="icon">
          <img :src="item.img" />
        </div>
        <span>{{ item.title }}</span>
        <!-- 过渡动画 -->
        <transition-group name="sort">
          <!-- 蒙版 -->
          <div
            class="suds-pop"
            v-show="item.isShow"
            key="index"
            style="z-index: 999"
          >
            <div class="img">
              <img :src="item.imgUrl" />
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <!-- 访问量 -->
    <div class="num">
      网站访问量
      <div class="inner">
        <i>1</i><i>7</i><i>6</i><i>9</i><i>8</i><i>8</i><i>1</i><i>2</i>
      </div>
    </div>
    <!-- 详情 -->
    <div class="nav_foot">
      <a href="#">网站地图</a>&nbsp;&nbsp; <a href="#">相关链接</a>&nbsp;&nbsp;
      <a href="#">影像授权</a>&nbsp;&nbsp; <a href="#">隐私政策</a>&nbsp;&nbsp;
      <a href="#">版权声明</a>&nbsp;&nbsp; <a href="#">留言板</a>&nbsp;&nbsp;
      <a href="#">联系我们</a>&nbsp;&nbsp; <a href="#">关于我们</a>&nbsp;&nbsp;
    </div>
    <!-- 版权 -->
    <div class="copyright">
      网站维护：故宫博物馆数字与信息部 &nbsp; &nbsp; 联系方式：gugong@dpm.org.cn
    </div>
    <!-- 备案 -->
    <div class="records">
      <a href="#">
        <img src="https://img.dpm.org.cn/Public/static/ico.png" />
        <p>&nbsp;京公网安备 11010102004165号</p>
      </a>
      &nbsp;
      <a href="#"> <p>京ICP备05067311号-1</p></a>
      <br />
      © 2001- 现在 故宫博物院 &nbsp;
      <a href="#">网站建设:</a>
      <a href="#">北京分形科技</a>
    </div>
  </div>
</template>

<script>
import { reqFooterList } from "../../api";
export default {
  name: "Footer",
  data() {
    return {
      // 第三方链接数据
      imgList: [
        {
          id: "",
          title: "",
          img: "",
          imgUrl: "",
          // 存储显示与隐藏
          isShow: "false",
        },
      ],
    };
  },
  mounted() {
    reqFooterList().then((res) => {
      this.imgList = res.data[0].imgList;
      // console.log(this.imgList);
    });
  },
  methods: {
    // 鼠标移入，显示
    enterShow(index) {
      // console.log(this.imgList[index].isShow);
      this.imgList[index].isShow = true;
    },
    // 鼠标移出，隐藏
    leaveShow(index) {
      this.imgList[index].isShow = false;
    },
  },
};
</script>

<style scoped>
/*  */
* {
  color: #b4b3b8;
}
.footer {
  position: relative;
  background-color: #272727;
  padding: 30px 0 27px;
  min-height: 341px;
  box-sizing: border-box;
  line-height: 1.6;
  margin-top: 20px;
}
.footer .dd {
  text-align: center;
}
.footer .dd .sud-mods {
  position: relative;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 25px;
  margin-top: 0;
  width: 100px;
}
.footer .dd .sud-mods .icon {
  width: 48px;
  height: 48px;
  background-color: #474747;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 6px;
}
.footer .dd .sud-mods img {
  border: 0;
  outline: 0;
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
}
/* 蒙版*/
.footer .suds-pop {
  position: relative;
}
.footer .suds-pop .img {
  position: absolute;
  top: -240px;
  left: -30px;
  width: 153px;
  height: 153px;
}

/*  */
.footer .num {
  text-align: center;
}
.footer .num .inner {
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
}
.footer .num .inner i {
  display: inline-block;
  width: 20px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background-color: #404040;
  margin: 0 3px;
  font-style: normal;
}
/*  */
.footer .nav_foot {
  margin-top: 20px;
  text-align: center;
  color: #fff;
  font-weight: bold;
}
.footer .nav_foot a {
  display: inline-block;
  line-height: 22px;
}
/*  */
.footer .copyright {
  text-transform: inherit;
  text-align: center;
  font-weight: 350;
}
.footer .records {
  text-align: center;

  width: 100%;
}
.footer .records a {
  display: inline-block;
  text-decoration: none !important;
}
.footer .records a img,
p {
  float: left;
}

/* 过渡动画样式 */
/* 过渡动画开始的状态（进入） */
.sort-enter {
  transform: translateY(10px);
}
/* 过渡动画的结束状态（进入） */
.sort-enter-to {
  transform: translateY(0px);
}
/* 定义动画的时间、速率 */
.sort-enter-active {
  transition: all 0.2s linear;
}
/* 过渡动画的开始状态(离开) */
.sort-leave {
  transform: translateY(0px);
}
/* 过渡动画的开始状态(离开) */
.sort-leave-to {
  transform: translateY(10px);
}
/* 定义动画的时间、速率 */
.sort-leave-active {
  transition: all 0.2s linear;
}
</style>