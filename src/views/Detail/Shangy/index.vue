<template>
  <div>
    <div class="bottom_bo">
      <!-- 小标题 -->
      <h1 class="title2">
        <span class="tit-span">
          <!-- public-icon3.png -->
          <img
            src="https://img.dpm.org.cn/Public/static/themes/image/public-icon3.png"
            alt=""
          />
        </span>
        <span style="font-size: 26px;">邀请您走进这片曾经神秘的领地</span>
        <span class="tit-span">
          <!-- public-icon4.png -->
          <img
            src="https://img.dpm.org.cn/Public/static/themes/image/public-icon4.png"
          />
        </span>
      </h1>
      <!-- 图标 -->
      <div class="box">
        <!-- tt1.png -->
        <div
          class="div"
          style="
            background: url(https://img.dpm.org.cn/Uploads/Picture/2017/09/06/s59afc3534fa06.png)
              center center repeat;
          "
        >
          <a href="" target="_blank">
            <span class="box3">
              <!-- tt01.png -->
              <img
                alt=""
                title=""
                src="https://img.dpm.org.cn/Uploads/Picture/2017/09/06/s59afc35d1fd0a.png"
              />
              <h3>建筑</h3>
              <h4></h4>
            </span>
          </a>
        </div>
        <!-- tt2.jpg -->
        <div
          class="div"
          style="
            background: url(https://img.dpm.org.cn/Uploads/Picture/2017/09/06/s59afc39bca2e7.jpg)
              center center repeat;
          "
        >
          <a href="/explore/collections.html">
            <span class="box3">
              <!-- tt02.png -->
              <img
                alt=""
                title=""
                src="https://img.dpm.org.cn/Uploads/Picture/2017/09/06/s59afc67bb9797.png"
              />
              <h3>藏品</h3>
              <h4></h4>
            </span>
          </a>
        </div>
        <!-- tt3.jpg -->
        <div
          class="div"
          style="
            background: url(https://img.dpm.org.cn/Uploads/Picture/2017/09/06/s59afc3de04999.jpg)
              center center repeat;
          "
        >
          <a href="/explore/ancients.html">
            <span class="box3">
              <!-- tt03.png -->
              <img
                alt=""
                title=""
                src="https://img.dpm.org.cn/Uploads/Picture/2017/09/06/s59afc3a7b3450.png"
              />
              <h3>古籍</h3>
              <h4></h4>
            </span>
          </a>
        </div>
        <!-- tt4.jpg -->
        <div
          class="div"
          style="
            background: url(https://img.dpm.org.cn/Uploads/Picture/2017/09/06/s59afc45cb34e8.jpg)
              center center repeat;
          "
        >
          <a href="/explore/protects.html">
            <span class="box3">
              <!-- tt04.png -->
              <img
                alt=""
                title=""
                src="https://img.dpm.org.cn/Uploads/Picture/2017/09/06/s59afc4829533f.png"
              />
              <h3>文物医院</h3>
              <h4></h4>
            </span>
          </a>
        </div>
        <!-- tt5.jpg -->
        <div
          class="div"
          style="
            background: url(https://img.dpm.org.cn/Uploads/Picture/2017/09/06/s59afc4a666ea1.jpg)
              center center repeat;
          "
        >
          <a href="/explore/cultures.html">
            <span class="box3">
              <!-- tt05.png -->
              <img
                alt=""
                title=""
                src="https://img.dpm.org.cn/Uploads/Picture/2017/09/06/s59afc4b22fa42.png"
              />
              <h3>文化专题</h3>
              <h4></h4>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
body {
  font-family: 微软雅黑, "Heiti SC", 黑体, Arial;
  font-size: 14px;
  /* margin-top: 25px; */
}
a {
  text-decoration: none !important;
}
.flex {
  display: flex;
}
img {
  border: 0;
  outline: 0;
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
}

.bottom_bo {
  width: 1200px;
  height: 290px;
  margin: auto;
  margin-top: 25px;
}
h1 {
  margin-bottom: 30px;
  font-weight: normal;
}
.title2 {
  text-align: center;
  font-size: 26px;
  color: #474747;
  line-height: 1;
}
.tit-span {
  width: 22px;
  position: relative;
  z-index: 999;
  top: -2px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0px;
  line-height: 1;
}

.box .div {
  float: left;
  width: 20%;
  height: 224px;
  display: table;
}

.box .div .box3 {
  position: relative;
}

.box .div a {
  display: table-cell;
  height: 100%;
  text-align: center;
  vertical-align: middle;
}
.box .div h3 {
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.2;
  margin-top: 8px;
}
.box .div span img {
  width: 126px;
}
.box .div h4 {
  color: #fff;
  font-size: 14px;
  line-height: 1.2;
  margin-top: 5px;
}

/* 图片上移 */
.box .div span {
  position: absolute;
  top: 17px;
  margin: 0 auto;
}
.box .div:hover span {
  top: 5px;
  transition: 250ms;
}
span {
  top: 110px;
  transition: all 0.2s ease 0s;
}
</style>