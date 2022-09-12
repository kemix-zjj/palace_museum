<template>
  <!-- 学术研究 -->
  <div class="academic">
    <div class="title">
      <h1>
        <span class="tit-span">
          <img
            src="https://img.dpm.org.cn/Public/static/themes/image/public-icon1.png"
          />
        </span>
        <span class="s1">学术研究</span>
        <span class="tit-span">
          <img
            src="https://img.dpm.org.cn/Public/static/themes/image/public-icon2.png"
          />
        </span>
      </h1>
      <a class="more" href="#">
        更多
        <i></i>
      </a>
    </div>
    <ul class="news">
      <li v-for="(academic, index) in academicList" :key="index">
        <p>{{ academic.time }}</p>
        <a href="#"> {{ academic.content }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { reqArticleList } from "../../../../api";
export default {
  name: "ArticleCenter",
  data() {
    return {
      academicList: [],
    };
  },
  mounted() {
    reqArticleList().then((res) => {
      this.academicList = res.data[1].academicList;
    });
  },
};
</script>

<style scoped>
.academic {
  background: url(./images/home_block1_news_bg.jpg);
  margin-left: 23px;
  box-sizing: border-box;
  width: 33%;
  height: 397px;
  padding: 45px 30px;
  margin-top: 30px;
}
.academic .title {
  position: relative;
  color: #fff;
  height: 48px;
  align-items: center;
}
.academic .title h1 {
  width: 208px;
  height: 36px;
}
.academic .title h1 .s1 {
  margin: 0 8px;
  color: #fff;
  font-size: 25px;
  font-weight: normal;
}
.academic .tit-span img {
  height: auto;
  min-width: none;
  vertical-align: top;
  width: 24px;
}

.academic .title .more {
  font-family: fzfysjt;
  position: absolute;
  right: 0;
  top: -6px;
  color: #fff;
  line-height: 1;
  font-size: 14px;
  width: 1em;
  padding: 10px 17px;
}
.academic .title .more i {
  position: absolute;
  left: 0;
  top: 0;
  background: url(https://img.dpm.org.cn/Public/static/themes/image/more.png)
    no-repeat;
  width: 48px;
  height: 100%;
  transition: 1s ease all;
  -webkit-transition: 1s ease all;
  -moz-transition: 1s ease all;
}
.academic .title .more i:hover {
  transform: rotate(-360deg);
  -webkit-transform: rotate(-360deg);
  -moz-transform: rotate(-360deg);
}
/* news */
.academic .news {
  margin-top: 25px;
  overflow: hidden;
}
.academic .news li {
  overflow: hidden;
  padding: 5px 0;
  height: 24px;
  line-height: 24px;
}
.academic .news li p {
  float: right;
  font-family: Arial;
  font-size: 16px;
  color: #fff;
}
.academic .news li a {
  position: relative;
  padding-left: 24px;
}
.academic .news a {
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  max-width: calc(100% - 124px);
  padding-right: 25px;
  box-sizing: border-box;
}
.academic .news a:before {
  content: "";
  position: absolute;
  left: 8px;
  top: 12px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #fff;
}
</style>