<template>
    <div class="right-box">
        <!-- 闭馆 -->
        <div class="close">
            <div class="close-notice">
                <div class="close-notice-content">
                    <div class="time">{{closeInfo.time}}</div>
                    <div class="title1">{{closeInfo.title1}}</div>
                    <div class="p">{{closeInfo.p}}<strong>{{closeInfo.strongp}}</strong></div>
                    <div class="time-info">
                        <div class="content" v-if="timeInfo[0]&&timeInfo[1]&&timeInfo[2]">
                            <div class="time-li">
                                <h1>{{timeInfo[0].h1}}</h1>
                                <p>{{timeInfo[0].text}}</p>
                            </div>
                            <span></span>
                            <div class="time-li">
                                <h1>{{timeInfo[1].h1}}</h1>
                                <p>{{timeInfo[1].text}}</p>
                            </div>
                            <span></span>
                            <div class="time-li">
                                <h1>{{timeInfo[2].h1}}</h1>
                                <p>{{timeInfo[2].text}}</p>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
            <div class="close-tel">
                <div class="close-tel-content">
                    <div class="part-one">
                        <div class="con">
                            <div class="order-comp">
                                <a href="###" v-if="orderInfo.ordercomp">
                                    <div class="comp">
                                        <img :src="orderInfo.ordercomp.img">
                                    </div>
                                    <div class="h">{{orderInfo.ordercomp.name}}</div>
                                </a>
                            </div>
                            <div class="order-online"  v-if="orderInfo.orderline">
                                <div class="img">
                                    <div class="online">
                                        <img :src="orderInfo.orderline.img[0]">
                                    </div>
                                    <div class="online">
                                        <img :src="orderInfo.orderline.img[1]">
                                    </div>
                                </div>
                                <div class="h">{{orderInfo.orderline.name}}</div>
                            </div>
                        </div>
                        <div class="con-one">
                            <div class="h">{{telList.title}}</div>
                            <div class="p">{{telList.time}}</div>
                            <div class="tel">
                                <span v-for="(tel,index) in telList.telephone" :key="index">{{tel}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="part-two">
                        <div class="icon" v-for="item in lineList" :key="item.id">
                            <a href="###">
                                <img :src="item.imgUrl">
                                {{item.name}}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 开放公告 -->
        <div class="open">
            <div class="open-content">
                        <div class="title">
                            <h1>
                                <a href="###">
                                    <span class="tit-left"><img :src="title.titleft"></span>
                                    <span class="t1">{{title.t3}}</span>
                                    <span class="t2">{{title.t4}}</span>
                                    <span class="tit-right"><img :src="title.titright"></span>
                                </a>
                            </h1>
                            <a href="###" class="more">
                                更多
                                <i></i>
                            </a>
                        </div>
                        <div class="con-1">
                            <div class="con-1-content" v-for="item in open1List" :key="item.id">
                                <a href="###" :title="item.title">
                                    <em>
                                        <img :src="item.img">
                                    </em>
                                    <span>{{item.title}}</span>
                                </a>
                            </div>
                        </div>
                        <div class="con-2">
                            <ul>
                                <li v-for="item in open2List" :key="item.id">
                                    <p>
                                        <span>{{item.time}}</span> 
                                    </p>
                                    <a href="###" :title="item.name">{{item.name}}</a>
                                </li>
                            </ul>
                        </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'RightSection',
    props:['title','closeInfo','timeInfo','orderInfo','telList','lineList','open1List','open2List'],
 

}
</script>

<style scoped>
.right-box{
    width: 40%;
    height: 850px;
}
.close{
    width: 100%;
    height: 60%;
}
.close-notice{
    width: 100%;
    height: 45%;
    padding-top: 25px;
    background: url(https://img.dpm.org.cn/Public/static/themes/image/png5.png);
}
.close-tel{
    width: 100%;
    height: 45%;
    padding-top: 25px;
    background: url(https://img.dpm.org.cn/Public/static/themes/image/png6.png);
}
.close-notice-content{
    width: calc(100% - 50px);
    height: calc(100% - 25px);
    margin-left: 25px;;
}

.close-tel-content{
    width: calc(100% - 50px);
    height:100%;
    margin-left: 25px;
}
.time{
    color: #8fb6d9;
    text-align: center;
    font-size: 20px;
    font-family: Arial;
}
.time-li h1{
    color: #fff;
    font-size: 32px;
    font-weight: normal;
    font-family: Impact, Arial;
    margin-bottom: 10px;
}
.time-li p{
    color: #8fb6d9;
    text-align: center;
    font-size: 14px;
}
.title1{
    font-size: 38px;
    text-align: center;
    color: #fff;
}
.close-notice-content .p{
    text-align: center;
    margin-top: 10px;
    line-height: 20px;
    color: #fff;
    font-size: 14px;
}
.close-notice-content .p strong{
    display: block;
    font-weight: bold;
    color: #eed49b;
}
.time-info{
    width: 100%;
}
.time-info .content{
    display: flex;
    padding-left: 16px;
    text-align: center;
    margin-top: 10px;
}
.time-info .content span{
    background: url(https://img.dpm.org.cn/Public/static/themes/image/png7a.png) center center no-repeat;
    width: 31px;
    height: 6px;
    margin: 0 25px;
    margin-top: 18px;
}
.part-one{
    width: 100%;
    height: 60%;
    display: flex;
    margin-bottom: 10px;
}
.part-one .con{
    width:55%;
    display: flex;   
}
.part-one .con .h{
    color: #fff;
    text-align:center;
    padding-top: 8px;
}
.comp{
    padding-top: 20px;
}
.order-online .online{
    padding-top: 18px;
}
.part-one .con img{
    width: 76px;
}
.img{
    width: 160px;
    display: flex;
}
.order-online .online{
    padding-left: 7px;
}
.order-online .online img{
    width: 76px;
}

.part-one .con-one{
    width: 45%;
    padding-left: 15px;
}
.con-one .h{
    font-size: 20px;
    line-height: 1;
    color: #fff;
    margin-bottom: 5px;
}
.con-one .p{
    color: #a3c9ea;
}
.con-one .tel{
    display: flex;
    
    margin-top: 10px;
    flex-wrap: wrap;
    margin-right: -20px;
}
.con-one .tel span{
    color: #fff;
    display: block;
    width: 50%;
    font-size: 13px;
    margin-bottom: 2px;
    white-space: nowrap;
}
.line{
    border-top: 1px solid #1c2e3d;
    border-bottom: 1px solid #487398;
    margin: 0 -25px 0;
}

.part-two{
    display: flex;
    align-items: center;
    
}
.part-two .icon{
    width: 25%;
    padding-top: 6%;   
}
.part-two .icon a{
    width: 100%;
    color: #fff;
}
.part-two .icon img{
    width: 28px;
    
    margin-left: 10px;
    vertical-align: middle;
    line-height: 28px;
}
/* 开放公告样式 */
.open{
    width: 100%;
    height: calc(40% - 50px);
    margin-top: 25px;
    padding-top: 25px;
    background: url(https://img.dpm.org.cn/Public/static/themes/image/png8.png);
}
.open-content{
    width: calc(100% - 50px);
    height: calc(100% - 25px);
    margin-left: 25px;
}
.title h1{
    background: url(https://img.dpm.org.cn/Public/static/themes/image/title_dot.png) no-repeat center center;
    font-size: 0;
    display: inline-block; 
    line-height: 0;
    padding-top: 5px;
}
.title h1 span{
    color: #fff;
    vertical-align: middle;
    display: inline-block;  
}
.title h1 .t1{
    margin-right: 0;
    margin: 0 48px 0 0;
}

.title h1 span{
    font-size:28px;
    font-weight: 500;
}
.tit-left img,.tit-right img{
    width: 24px;
}
.tit-left img{
    margin-right: 10px;
}
.tit-right img{
    margin-left: 10px;
}
.title{
    position: relative;
}
.more{
    font-family: fzfysjt;
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    line-height: 1;
    width: 1em;
    padding: 10px 17px;

}
.more i{
    position: absolute;
    left: 0;
    top: 0;
    background: url(https://img.dpm.org.cn/Public/static/themes/image/more.png) no-repeat;
    width: 48px;
    height: 100%;
}
.more i:hover{
    transform: rotate(-180deg);
    transition: all 1s;
}
.con-1{
    color: #fff;
    width: 100%;
    margin-top: 15px;
}
.con-1-content em{
    width: 19px;
    height: 13px;
    display: block;
}
.con-1-content em img{
    width: 19px;
    height: 16px;
    padding-top: 15px;
    display: block;
}
.con-1-content span{
    width: 95%;
    color: #fff;
    display: block;
    margin-left: 25px;
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.con-2{
    width: 100%;
}
.con-2 ul{
    width: 100%;
}

.con-2 ul li{
    padding-left: 5px;
    color: #fff;
    font-size: 12px;
    margin: 15px 0;
    position: relative;
    overflow: hidden;
    /* 显示小圆点 */
    list-style-position: inside;
}

.con-2 ul li p{
    color: #fff;
    float: right;
}
.con-2 ul li p span{
    color: #fff;
    font-size: 14px;
}
.con-2 ul li a{
    max-width: 75%;
    display: block;
    color: #fff;
    line-height: 22px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    top: 0;
    text-indent: 12px;
}

</style>