<template>
  <!-- 博物馆活动 -->
  <div class="museum">
    <div class="title">
      <h1>
        <span class="tit-span">
          <img
            src="https://img.dpm.org.cn/Public/static/themes/image/public-icon1.png"
          />
        </span>
        <span class="s1">博物馆活动</span>
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
      <li v-for="(museum, index) in museumList" :key="index">
        <p>{{ museum.time }}</p>
        <a href="#"> {{ museum.content }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { reqArticleList } from "../../../../api";
export default {
  name: "ArticleLeft",
  data() {
    return {
      museumList: [],
    };
  },
  mounted() {
    reqArticleList().then((res) => {
      console.log(res);
      this.museumList = res.data[0].museumList;
      console.log(this.museumList);
    });
  },
};
</script>

<style scoped>
* {
  color: #fff;
}
/* title */
.museum {
  background: url(./images/png5.png);
  box-sizing: border-box;
  width: 32%;
  height: 397px;
  padding: 45px 30px;
  margin-top: 30px;
}
.museum .title {
  position: relative;
  color: #fff;
  height: 48px;
  align-items: center;
}
.museum .title h1 {
  width: 208px;
  height: 36px;
}
.museum .title h1 .s1 {
  margin: 0 8px;
  color: #fff;
  font-size: 25px;
  font-weight: normal;
}
.museum .tit-span img {
  height: auto;
  min-width: none;
  vertical-align: top;
  width: 24px;
}
.museum .title .more {
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
.museum .title .more i {
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
.museum .title .more i:hover {
  transform: rotate(-360deg);
  -webkit-transform: rotate(-360deg);
  -moz-transform: rotate(-360deg);
}
/* news */
.museum .news {
  margin-top: 25px;
  overflow: hidden;
}
.museum .news li {
  overflow: hidden;
  padding: 5px 0;
  height: 24px;
  line-height: 24px;
}
.museum .news li p {
  float: right;
  font-family: Arial;
  font-size: 16px;
  color: #fff;
}
.museum .news li a {
  position: relative;
  padding-left: 24px;
}
.museum .news a {
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  max-width: calc(100% - 124px);
  padding-right: 25px;
  box-sizing: border-box;
}
.museum .news a:before {
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