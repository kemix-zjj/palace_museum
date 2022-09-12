<template>
  <div class="content">
        <!-- 闭馆公告 -->
        <div class="notice">
            <div class="center">
                <div class="title"><a href="###">{{titnotice.centertit}}</a></div>
                <div class="con"><a href="###">{{titnotice.centercon}}</a></div>
                <div class="btn"><div class="btn-con">{{titnotice.btn}}</div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="110" height="40" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); left: 0px;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><path fill="none" stroke="#dadada" d="M0,5L5,5L5,0L105,0L105,5L110,5L110,35L105,35L105,40L5,40L5,35L0,35L0,5" stroke-width="2" stroke-dasharray="1000,1000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-width: 2; stroke-dashoffset: 0px; stroke-dasharray: 500, 500;"></path></svg></div>
            </div>
        </div>
        <!-- box_one -->
        <div class="box_one"> 
            <LeftSection :title="title" :con1List="con1List" :con2List="con2List"></LeftSection>
            <RightSection :title="title" :closeInfo="closeInfo" :timeInfo="timeInfo" :orderInfo="orderInfo" :telList="telList" :lineList="lineList" :open1List="open1List" :open2List="open2List"></RightSection>
        </div>
  </div>
</template>

<script>
import { reqGetContentList } from '../../../api'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
export default {
    name:'Content',
    components:{
        LeftSection,
        RightSection
    },
    data() {
        return {
            // 存储闭馆公告信息
            titnotice:'',
            // 存储大标题信息
            title:'',
            // 存储故宫资讯con1内容
            con1List:[],
            // 存储故宫资讯con2的内容
            con2List:[],
            // 存储今日闭馆信息
            closeInfo:'',
            // 存储闭馆时间
            timeInfo:'',
            // 存储订票信息,
            orderInfo:'',
            // 存储客服电话
            telList:[],
            // 存储小图标
            lineList:[],
            // 存储开放公告con1信息
            open1List:[],
            // 存储开放公告con2信息
            open2List:[]

        }
    },
    mounted() {
        reqGetContentList().then((res)=>{
            let data = res.data[0];
            this.titnotice = data.titnotice[0];
            this.title = data.textcontent[0].title[0];
            this.con1List = data.textcontent[0].con1List;
            this.con2List = data.textcontent[0].con2List;
            this.closeInfo = data.closenotice[0].info[0];
            this.timeInfo = data.closenotice[0].timeInfo;
            this.orderInfo = data.orderList[0];
            this.telList = data.telList[0];
            this.lineList = data.lineList;
            this.open1List = data.noticeList[0].con1;
            this.open2List = data.noticeList[0].con2;
            console.log(res)
            console.log(this.open1List)
            console.log(this.open2List)
        })
    },

}
</script>

<style scoped>
.content{
    /* width: 100%; */
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 25px;
    /* background-color: skyblue; */
}
.notice{
    width: 100%;
    /* background-color: rgb(135, 193, 135); */
    padding: 36px 0;
    
}
.center{
    width: 100%;
}
.center .title{
    text-align: center;
    padding: 0 0 5px 0px;
    
}
.center .title a{
    font-size: 30px;
    color: #333;
}
.con {
    max-width: 980px;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 20px ;
}
.con a{
    font-size: 16px;
    color: #333;
}
.btn{
    max-width: 1000px;
    text-align: center;
    margin: 0 auto;
    position: relative;
    /*  */
}
.btn-con{
    position: absolute;
    left: 46.9%;
    top: 20%;
    font-size: 16px;
}
.box_one{
    display: flex;
}
</style>