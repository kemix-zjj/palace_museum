<template>
  <div class="item">
    <div class="wrap">
      <div class="tabar">
        <a
          href="javascript:;"
          v-for="(item, index) in typeList"
          :key="index"
          :class="current_type === index ? 'active' : ''"
          @click="change(index)"
          >{{ item.title }}</a
        >
      </div>
      <input id="current_type" type="hidden" value="talks" />
      <!-- 论坛盒子 -->
      <div class="table" v-show="isShowTable">
        <table>
          <tbody>
            <tr v-for="(title, index) in talksList" :key="index">
              <td width="471">
                <a href="###" target="_blank">{{ title.title }}</a>
              </td>
              <td width="270">{{ title.author }}</td>
              <td width="365">{{ title.journal }}</td>
              <td width="152">
                <span>{{ title.time }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 书目盒子 -->
      <div class="table" v-show="!isShowTable">
        <table>
          <tbody>
            <tr v-for="(title, index) in booksList" :key="index">
              <td width="471">
                <a href="###" target="_blank">{{ title.title }}</a>
              </td>
              <td width="270">{{ title.author }}</td>
              <td width="365">{{ title.journal }}</td>
              <td width="152">
                <span>{{ title.time }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { reqTalksList, reqBooksList } from "../../../../api";
export default {
  name: "Item",
  data() {
    return {
      // 论坛数据
      talksList: [],
      // 书目数据
      booksList: [],

      // 论坛和书目的标题
      typeList: [{ title: "故宫明清宫廷论坛" }, { title: "明清宫廷推荐书目" }],
      // 控制论坛和书目显示与隐藏的盒子
      isShowTable: true,
      // 当前点击选项
      current_type: 0,
    };
  },
  mounted() {
    reqTalksList().then((res) => {
      // console.log("talks", talksList);
      this.talksList = res.data[0].talksList;
      // console.log("talks", this.titleList);
    });
    reqBooksList().then((res) => {
      // console.log("books", res);
      this.booksList = res.data[0].booksList;
      // console.log("books", this.booksList);
    });
  },

  methods: {
    //   自定义事件的回调函数 --- 获取当前第几页
    getPageNo(pageNo) {
      this.pageNo = pageNo;
      console.log("hhh", pageNo);
      // 再次发送请求
      // this.getDate1();
      // this.getDate2();
    },
    // 切换论坛和书目盒子
    change(index) {
      this.current_type = index;
      this.isShowTable = !this.isShowTable;
      // console.log(this.titleList);
    },
  },
};
</script>

<style scoped>
.item {
  /* background-color: skyblue; */
  width: 100%;
  /* height: 300px; */
  margin: 30px 0;
}
.item .wrap {
  padding: 62px 0 71px;
  background: url(./images/line1.png) center bottom repeat-x;
  text-align: center;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.tabar {
  text-align: center;
  height: 25px;
  line-height: 25px;
}
.tabar a.active {
  background-position: left -45px;
}
.tabar a {
  background: url(./images/list_dragon4.png) left -7px no-repeat;
  padding-left: 35px;
  display: inline-block;
  height: 100%;
  margin: 0 35px;
  font-size: 20px;
  color: #474747;
}
input,
button,
textarea,
select {
  font: 14px/100% "Microsoft YaHei", Arial, Tahoma, Helvetica, sans-serif;
  outline: 0;
  border: 0;
  background: none;
  color: #707070;
}
.table {
  margin-top: 35px;
}
.table table {
  border-collapse: inherit;
  border-top: 1px solid #e5e5e5;
  text-indent: initial;
  border-spacing: 2px;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.table td {
  height: 76px;
  border-bottom: solid 1px #e5e5e5;
  font-size: 14px;
  color: #474747;
  text-align: left;
}
</style>