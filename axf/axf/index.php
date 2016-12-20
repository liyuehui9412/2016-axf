<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx8380517e6162415f", "7b0df232b9898d938b8cb905279e0da7");
$signPackage = $jssdk->GetSignPackage();
?>

<!DOCTYPE html>
<html>
<head>
	<title>爱鲜蜂闪送超市</title>
	<meta charset="utf-8">
	<meta name = "viewport", content="width=device-width,initial-scale = 1.0,minimum-scale = 1.0,maximum-scale =1.0,user-scalable =no">
	<link rel="stylesheet" type="text/css" href="index.css">
	<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	<script data-main="index.js" type="text/javascript" src="js/require.js"></script>
</head>
<body>
	<!-- <div onclick="get()">获取地理位置</div>
	<div onclick="getp()">获取坐标</div> -->
	<div class="Main">
		<div class="shou"></div>
		<div class="shan"></div>
		<div class="gou"></div>
		<div class="mine"></div>
	</div>
	<footer>
		<a href="#shou">
			<img src="img/bo1.png" alt="首页">
			<p>首页</p>
		</a>
		<a href="#shan">
			<img src="img/bo2.png" class="imgs3" alt="首页">
			<p>闪送超市</p>
		</a>
		<a href="#gou" class="shouYe_gouWuChe">
			<img src="img/3.png" alt="首页">
			<p>购物车</p>
			<span class="gooo"></span>
		</a>
		<a href="#mine">
			<img src="img/4.png" alt="首页">
			<p>我的</p>
		</a>
	</footer>
</body>
<script>
	wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
     'checkJsApi',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
     ]
  });
var latitude = 0,longitude = 0;
function get(){
wx.getLocation({
    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    success: function (res) {
        latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度
        alert(latitude);
        alert(longitude);
    }
});
	
}

function getp(){
wx.openLocation({
    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
    name: '', // 位置名
    address: '', // 地址详情说明
    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
});
}
</script>
</html>