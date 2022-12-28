<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/images/img/four.jpg"></image>
			</view>
			<view class="top-bar-center">
				<image src="../../static/images/index/火.png"></image>
			</view>
			<view class="top-bar-right">
				<image src="../../static/images/index/add.png"></image>
				<image src="../../static/images/index/search.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		
		.top-bar{
			width: 100%;
			height: 88rpx;
			padding: 0 32rpx;
			box-sizing: border-box;
			background: $uni-bg-color;
			box-shadow:0px 1px 0px 0px rgba(0,0,0,0.1);
			overflow: hidden;
			display: flex;
			.top-bar-left,.top-bar-center,.top-bar-right{
				flex: 1;
				height: 100%;
				display: flex;
				align-items: center;
				image {
					width: 60rpx;
					height: 60rpx;
				}
				&.top-bar-center{
					justify-content: center;
				}
				&.top-bar-right{
					justify-content: end;
					image{
						width: 50rpx;
						height: 50rpx;
						margin-left: 10px;
					}
				}
			}
		}
	}
</style>
