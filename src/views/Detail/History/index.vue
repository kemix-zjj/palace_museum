<template>
  <div>
      <div class="position">
            <div class="pos-con" v-if="link[0]&&link[1]">
                <a> <router-link to="/">{{link[0].title}}</router-link></a> » <a href="###">{{link[1].title}}</a>» <a><router-link to="/detail">{{link[2].title}}</router-link></a>    
            </div>
      </div>
      <div class="container" v-if="iconsList[0]&&iconsList[1]">
          <div class="title">
                <h1>
                    <a href="###">
                        <span class="tit-left"><img :src="iconsList[1].left"></span>
                        <span class="t1">{{titleList[0].name}}</span>
                        <span class="tit-right"><img :src="iconsList[1].right"></span>
                    </a>
                </h1>
                <p>{{textList[0].text}}</p>
          </div>
          <div class="box">
              <div class="box1">
                  <div class="history-1eft1">
                        <h3>
                            <a href="###">
                                <span class="tit-left"><img :src="iconsList[0].left"></span>
                                <span class="t1">{{titleList[1].name}}</span>
                                <span class="tit-right"><img :src="iconsList[0].right"></span>
                            </a>
                        </h3>
                        <p>{{textList[1].text}}</p>
                        <a href="###" class="more">
                            更多
                            <i></i>
                        </a>
                  </div>
                  <div class="history-right1">
                      <img src="https://img.dpm.org.cn/Uploads/Picture/2016/08/07/s57a6808b6c997.jpg">
                  </div>
              </div>
              <div class="box2">
                  <div class="history-1eft2">
                        <h3>
                            <a href="###">
                                <span class="tit-left"><img :src="iconsList[0].left"></span>
                                <span class="t1">{{titleList[2].name}}</span>
                                <span class="tit-right"><img :src="iconsList[0].right"></span>
                            </a>
                        </h3>
                        <p>{{textList[2].text}}</p>
                        <a href="###" class="more">
                            更多
                            <i></i>
                        </a>
                  </div>
                  <div class="history-right2">  
                        <h3>
                            <a href="###">
                                <span class="tit-left"><img :src="iconsList[1].left"></span>
                                <span class="t1">{{titleList[3].name}}</span>
                                <span class="tit-right"><img :src="iconsList[1].right"></span>
                            </a>
                        </h3>
                        <p>{{textList[3].text}}</p>
                        <a href="###" class="more">
                            更多
                            <i>
                                <img src="https://img.dpm.org.cn/Public/static/themes/image/bo/more2.png">
                            </i>
                        </a>
                  </div>
              </div>
              <div class="box3">
                  <div class="history-1eft3">
                        <h3>
                            <a href="###">
                                <span class="tit-left"><img :src="iconsList[1].left"></span>
                                <span class="t1">{{titleList[4].name}}</span>
                                <span class="tit-right"><img :src="iconsList[1].right"></span>
                            </a>
                        </h3>
                        <p>{{textList[4].text}}</p>
                        <a href="###" class="more">
                            更多
                            <i>
                                <img src="https://img.dpm.org.cn/Public/static/themes/image/bo/more2.png">
                            </i>
                        </a>
                  </div>
                  <div class="history-right3">
                        <h3>
                            <a href="###">
                                <span class="tit-left"><img :src="iconsList[0].left"></span>
                                <span class="t1">{{titleList[5].name}}</span>
                                <span class="tit-right"><img :src="iconsList[0].right"></span>
                            </a>
                        </h3>
                        <p>{{textList[5].text}}</p>
                        <a href="###" class="more">
                            更多
                            <i></i>
                        </a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {reqGetHistoryList} from '../../../api/index'
export default {
    name:'History',
    data() {
        return {
            // 头部标签链接
            link: [],
            // 图标
            iconsList:[],
            // 小标题
            titleList:[],
            // 文本内容
            textList:[]
        }
    },
    mounted() {
        reqGetHistoryList().then((res)=>{
            this.link = res.data[0].link;
            this.iconsList = res.data[1].iconImg;
            this.titleList = res.data[2].miniTitle;
            this.textList = res.data[3].content;
            
        })
    },
}
</script>

<style scoped>
.position{
    max-width: 1200px;
    margin: 0 auto;
    height: 70px;
    line-height: 50px;
}
.position a{
    margin: 0 10px;
    color: #707070;    
}
.position a:first-child{
    margin-left: 0;
    margin-right: 5px;
}
.container{
    max-width: 1200px;
    margin: 0 auto;
}
.title{
    width: 100%;
    text-align: center;
}

.title h1 span{
    color: #fff;
    vertical-align: middle;
    display: inline-block;  
}
.title h1 span img{
    height: 32px;
    width: 22px;
    margin-top: 5px;
}
.title h1 a .t1{
    color: #474747;
}
.t1{
    width: 104px;
    text-align: center;
    font-size: 26px;
    font-weight: normal;
    color: #333;
    padding:0 10px;
    vertical-align: middle;
}
.title p{
    width: 74%;
    color: #474747;
    margin: 0 auto;
    text-indent: 2em;
    margin-top: 20px;
    text-align: left;
    line-height: 1.5;
}
.box{
    width: 100%;
    background-color: pink;
    height: 1125px;
    margin-top: 43px;
}
.box1,.box2,.box3{
    width: 100%;
    height: 375px;
    background-color: darkgray;
    overflow: hidden;
    position: relative;
}
/* 大标题样式 */
.history-1eft1{
    width: 800px;
    height: 375px;
    background: url(https://img.dpm.org.cn/Public/static/themes/image/bo/bg7.png) center center repeat;
    float: left;
    
}
.history-1eft1 h3,.history-1eft2 h3,.history-right3 h3,.history-right2 h3,.history-1eft3 h3{
    margin-left: 70px;
    margin-top: 50px;
}
.history-1eft1 h3 span,.history-1eft2 h3 span,.history-right3 h3 span,.history-right2 h3 span,.history-1eft3 h3 span{
    vertical-align: middle;
    display: inline-block;  
    font-size:26px;
    font-weight: 500;
}
.history-1eft1 h3 span,.history-1eft2 h3 span,.history-right3 h3 span{
    color: #fff;
}
.tit-left img,.tit-right img{
    height: 32px;
    width: 22px;
    margin-top: 10px;
}
.history-1eft1 p,.history-1eft2 p,.history-right3 p,.history-right2 p,.history-1eft3 p{
    max-width: 80%;
    text-indent: 2em;
    line-height: 1.5;
    margin-top: 15px;
    margin-left: 42px;
}
.history-1eft1 p,.history-1eft2 p,.history-right3 p{
    max-width: 91%;
    color: #fff;
}
/* 更多旋转图标样式 */
.history-1eft1 .more,.history-1eft2 .more,.history-right3 .more,.history-right2 .more,.history-1eft3 .more{
    font-family: fzfysjt;
    position: absolute;
    line-height: 1;
    width: 1em;
    padding: 10px 17px;
}
.history-1eft1 .more,.history-1eft2 .more,.history-right3 .more{
    color: #fff;
}
.history-1eft1 .more{
    margin: 90px 45px;
}
.history-1eft2 .more{
    margin: 50px 45px;
}
.history-right3 .more{
    margin: 70px 45px;
}
.history-right2 .more,.history-1eft3 .more{
    color: #333;
}
.history-1eft1 .more i,.history-1eft2 .more i,.history-right3 .more i,.history-right2 .more i,.history-1eft3 .more i{
    position: absolute;
    left: 0;
    top: 0;   
    width: 48px;
    height: 100%;
}
.history-1eft1 .more i,.history-1eft2 .more i,.history-right3 .more i{
    background: url(https://img.dpm.org.cn/Public/static/themes/image/more.png) center center no-repeat;
}
.history-right2 .more{
    margin: 30px 45px;
}
.history-1eft3 .more{
    margin: 48px 45px;
}
.history-right2 .more i img,.history-1eft3 .more i img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    
}
.more i:hover{
    transform: rotate(-180deg);
    transition: all 1s;
}
.history-right1{
    width: 400px;
    height: 375px;   
    float: left;
}
.history-right1 img{
    width: 100%;
    height: 100%;
}
.history-1eft2{
    width: 800px;
    height: 375px;
    background: url(https://img.dpm.org.cn/Uploads/Picture/2016/08/07/s57a681d46141d.jpg) center center repeat;
    float: left;
}
.history-right2{
    width: 400px;
    height: 375px;
    float: left;
    background-color: #f4f4f4;
}
.history-1eft3{
    width: 400px;
    height: 375px;
    float: left;
    background-color: #f4f4f4;
}
.history-right3{
    width: 800px;
    height: 375px;
    background: url(https://img.dpm.org.cn/Uploads/Picture/2016/08/07/s57a68229a09c4.jpg) center center repeat;
    float: left;
}

</style>