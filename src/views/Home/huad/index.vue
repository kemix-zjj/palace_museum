<template>
    <div>
        <ul class="flex box-mean">
        <li class="sHoverItem sHoverItem2 l0 " style="position: relative; overflow: hidden;">
            <a href="" target="_blank">
                <div class="img">
                    <!-- l1.jpg -->
                    <img class="i0 lazyload" src="https://img.dpm.org.cn/Uploads/Picture/2020/05/15/s5ebe364fa24bd.jpg">
                </div>
                <div class="cont">
                    <!-- l01.png -->
                    <img alt="" title="" class="moren lazyloaded" data-src="https://img.dpm.org.cn/Uploads/Picture/2016/12/28/s5863704a46b10.png" src="https://img.dpm.org.cn/Uploads/Picture/2016/12/28/s5863704a46b10.png">
                    <div class="mask m2 "></div>
                    <p style="left: 94px;">图书馆</p>
                </div>
            </a>
        </li>
        <li class="sHoverItem sHoverItem2 l1 " style="position: relative; overflow: hidden;">
            <a href="" target="_blank">
                <div class="img">
                    <!-- l2.jpg -->
                    <img class="i0 lazyload" src="https://img.dpm.org.cn/Uploads/Picture/2016/11/23/s5835a58eb4421.jpg">
                </div>
                <div class="cont">
                    <!-- l02.png -->
                    <img alt="" title="" class="moren lazyloaded" src="https://img.dpm.org.cn/Uploads/Picture/2016/12/28/s58636fe246e0a.png">
                    <div class="mask m2 "></div>
                    <p style="left: 92px;">视听馆</p>
                </div>
            </a>
        </li>
        <li class="sHoverItem sHoverItem2 l2 " style="position: relative; overflow: hidden;">
            <a href="" target="_blank">
                <div class="img">
                    <!-- l3.jpg -->
                    <img class="i0 lazyload" src="https://img.dpm.org.cn/Uploads/Picture/2016/11/23/s5835a57aca965.jpg">
                </div>
                <div class="cont">
                    <!-- l03.png -->
                    <img alt="" title="" class="moren lazyloaded" src="https://img.dpm.org.cn/Uploads/Picture/2017/03/06/s58bcfc20c5076.png">
                    <div class="mask m2 "></div>
                    <p style="left: 75px;">数字文物库</p>
                </div>
            </a>
        </li>
        <li class="sHoverItem sHoverItem2 l3 " style="position: relative; overflow: hidden;">
            <a href="" target="_blank">
                <div class="img">
                    <!-- l2.jpg -->
                    <img class="i0 lazyload" src="https://img.dpm.org.cn/Uploads/Picture/2016/11/23/s5835a58eb4421.jpg">
                </div>
                <div class="cont">
                    <!-- l04.png -->
                    <img alt="" title="" class="moren lazyloaded" src="https://img.dpm.org.cn/Uploads/Picture/2017/03/06/s58bcfc33c893d.png">
                    <div class="mask m2 "></div>
                    <p style="left: 85px;">全景故宫</p>
                </div>
            </a>
        </li>
        <li class="sHoverItem sHoverItem2 l4 " style="position: relative; overflow: hidden;">
            <a href="" target="_blank">
                <div class="img">
                    <!-- l3.jpg -->
                    <img class="i0 lazyload" src="https://img.dpm.org.cn/Uploads/Picture/2016/11/23/s5835a57aca965.jpg">
                </div>
                <div class="cont">
                    <!-- l05.png -->
                    <img alt="" title="" class="moren lazyloaded" src="https://img.dpm.org.cn/Uploads/Picture/2017/03/06/s58bcfc4e63ba3.png">
                    <div class="mask m2"></div>
                    <p style="left: 96px;">V故宫</p>
                </div>
            </a>
        </li>
    </ul>
    </div>
</template>

<script >
    // import $ from 'jquery'
    $(function(){
			
			$("li").on("mouseenter mouseleave",function(ev){
				var $w=$(this).outerWidth();//读取元素宽高
				var $h=$(this).outerHeight();
				var $l=$(this).offset().left;//读取偏移量
				var $t=$(this).offset().top;
				var $x=ev.pageX;//获取鼠标相对于浏览器的位置
				var $y=ev.pageY;
				
				var $mask=$(this).find(".mask");
				$mask.css({"width":$w,"height":$h});//设置遮罩层的宽高与父级元素一样
				var $k=$h/$w;//得到元素的对角线斜率
				var $k0=($y-$t-$h/2)/($x-$l-$w/2);//获取鼠标进入时的点与元素中心点的斜率
				var $dir=null;
				if($k0<=$k && $k0>=-$k){//当$k0在正负$k之间时说明是从左右两边进出的
					if($x > $l + $w/2){//当进入的位置大于水平偏移量和宽度的一半时，则是从右侧进出
						$dir="right";
					}else{
						$dir="left";
					}
					
				}else{//判断上下
					if($y > $t+$h/2){//当进入的位置大于垂直偏移量和高度的一半时，则是从下方进出
						$dir="bottom";
					}else{
						$dir="top";
					}
				}
				if(ev.type=="mouseenter"){
					switch($dir){
						case "right"://右侧进入，定位需定到右侧
						$mask.css({"left":$w,"top":-58});
						break;
						case "left"://左侧进入定位需订到左侧
						$mask.css({"left":-$w,"top":-58});
						break;
						case "top":
						$mask.css({"left":0,"top":-$h});
						break;
						case "bottom":
						$mask.css({"left":0,"top":$h});
						break;
					}
					$mask.stop().animate({"left":0,"top": -58},500);
				}
				if(ev.type=="mouseleave"){
					switch($dir){
						case "left":
						$mask.stop().animate({"left":-$w,"top":-58},450);
						break;
						case "right":
						$mask.stop().animate({"left":$w,"top":-58},450);
						break;
						case "top":
						$mask.stop().animate({"left":0,"top":-300},450);
						break;
						case "bottom":
						$mask.stop().animate({"left":0,"top":$h},450);
						break;
				}
				}
			})
			
			
			
		})
	</script>

<style scoped>
    body {
    font-family: 微软雅黑,'Heiti SC',黑体,Arial;
    font-size: 14px;
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
.box-mean {
    width: 1200px;
    height: 210px;
    margin: 0 auto;
}

/* 调每个li元素大小 */
.box-mean li {
    
    position: relative;
    width: 240px;
}

.box-mean li a {
    color: #fff;
}

.box-mean li .cont {
    position: absolute;
    left: 0;
    top: 50%;
    text-align: center;
    width: 100%;
    z-index: 100;
    transform: translateY(-50%);
}
.box-mean li .cont img {
    width: 40%;
}
.box-mean li .cont .moren {
    position: relative;
    top: 0px;
    left: 0px;
    z-index: 99;
}
.box-mean li .cont p {
    position: absolute;
    top: 105px;
    left: 95px;
    z-index: 99;
    font-size: 18px;
}
.mask{
    background: url(https://img.dpm.org.cn/Public/static/themes/image/home_block4_bg2.jpg);
    position: absolute; 
    top: 157px;
    width: 240px;
    height: 212px; 
    z-index: 2; 
    /* display: none; */
}
</style>