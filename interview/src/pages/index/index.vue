<template>
	<div class="container">
		<map :longitude="longitude" :latitude="latitude" :show-location="showLocatiion">
		</map>
		<div class="footer">
			<span>
				<navigator>
					<icon class="iconfont icon-location"></icon>
				</navigator>
			</span>
			<span class="my">
				<navigator url="../my/my">
					<icon class="iconfont icon-wode"></icon>
				</navigator>
			</span>
		</div>
		<navigator url="../vinterView/interview">
			<button>添加面试</button>
		</navigator>
	</div>
</template>

<script lang="ts">
    import Vue from 'vue';
	export default Vue.extend({
		data() {
			return {
				longitude: 116.41,
				latitude: 39.9,
				showLocatiion: true
			}
		},
		onLoad() {

		},
		onShow() {
			this.getLocation();
		},
		methods: {
			// 地图定位
			getLocation() {
				wx.getLocation({
					type: 'gcj02', //默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
					// altitude: false,
					success: (res) => {
						this.longitude = res.longitude;
						this.latitude = res.latitude;
					},
					fail: () => {
						console.log("getLocation failed")
					},
					complete: () => {}
				});
				  
			},
			// 点击我的
			goToMy() {
				console.log(111)
			},
			btn() {
				console.log(111)
			}
		}
	});
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
map {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 100rpx;
}
.footer{
	width: 100%;
	height: 80rpx;
	position: fixed;
	bottom: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 9999;
	span{
		display: block;
		color: #197CBF;
	// 	padding: 10rpx;
	// 	width: 100rpx;
	// 	height: 50rpx;
	}
	.my{
		position: fixed;
		bottom: 100rpx;
		right: 0;
	}
}
button {
	width: 100%;
	height: 100rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	background: #000;
	color: #fff;
	border: 0;
	outline: none;
	border-radius: 0;
}
</style>
