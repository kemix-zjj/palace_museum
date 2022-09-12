<template>
  <div class="journal">
    <div class="top">
      <div class="img">
        <img
          src="https://img.dpm.org.cn/Uploads/Picture/2022/05/31/s6295caf8592c4.png"
          class="i"
        />
      </div>
      <div class="box">
        <div class="list">
          <li v-for="(journalListTop, index) in journalList_top" :key="index">
            <a href="#"> {{ journalListTop.content }} </a>
          </li>
        </div>
        <div class="bot"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="img">
        <img
          src="https://img.dpm.org.cn/Uploads/Picture/2022/04/20/s625f79d6e79b9.png"
        />
      </div>
      <div class="box">
        <div class="list">
          <li
            v-for="(journalListBottom, index) in journalList_bottom"
            :key="index"
          >
            <a href="#"> {{ journalListBottom.content }} </a>
          </li>
        </div>
        <div class="bot">
          <div class="b"></div>
          <div class="b"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqArticleList } from "../../../../api";
export default {
  name: "ArticleRight",
  data() {
    return {
      journalList_top: [],
      journalList_bottom: [],
    };
  },
  mounted() {
    reqArticleList().then((res) => {
      console.log(res);
      this.journalList_top = res.data[2].journalList_top;
      this.journalList_bottom = res.data[2].journalList_bottom;
      console.log(this.journalList_top);
      console.log(this.journalList_bottom);
    });
  },
};
</script>

<style scoped>
img {
  border: 0;
  outline: 0;
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
}
.journal {
  margin-left: 2px;
  box-sizing: border-box;
  width: 33%;
  height: 397px;
  margin-top: 30px;
}
.journal .top {
  display: flex;
  background-image: url(https://img.dpm.org.cn/Uploads/Picture/2022/05/31/s6295cae7a0b5a.jpg);
  height: 198px;
  width: 100%;
  background-size: cover;
  position: relative;
}
.journal .bottom {
  display: flex;
  background-image: url(https://img.dpm.org.cn/Uploads/Picture/2022/04/20/s625f79d6e943e.jpg);
  height: 198px;
  width: 100%;
  margin-top: 1px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.journal .img {
  width: 154px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.journal .img img {
  width: 130px;
  height: auto;
  display: block;
}
.journal .box {
  width: calc(100% - 154px);
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  box-sizing: border-box;
  padding: 15px 30px 0 10px;
  margin-left: auto;
}
.journal .box .list a {
  position: relative;
  padding-left: 22px;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  max-width: 100%;
  padding-right: 0;
  box-sizing: border-box;
}
.journal .box .list a:before {
  content: "";
  position: absolute;
  left: 8px;
  top: 8px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #fff;
}
.journal .box .bot {
  text-align: right;
  margin-top: 5px;
}
</style>