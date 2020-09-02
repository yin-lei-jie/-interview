<template>
    <view>
        <view>
            <form @submit="formSubmit" @reset="formReset">
                <view class="uni-form-item uni-column inter-main">
                    <span class="header">一面而就</span>
                    <p>
                        <view class="title">公司名称</view>
                        <input class="uni-input" name="company" placeholder="请输入公司的名称">
                    </p>
                    <p>
                        <view class="title">公司电话</view>
                        <input class="uni-input" name="phone" placeholder="请输入面试练习人电话">
                    </p>
                    <p>
                        <view class="title">面试时间</view>
                        <input class="uni-input" name="times" placeholder="请输入公司的名称">
                    </p>
                    <p>
                        <view class="title">面试地址</view>
                        <input class="uni-input" name="address" placeholder="请选择面试地址">
                    </p>
                    <span class="header">备注信息</span>
                    <editor class="uni-input" placeholder="备注信息（可选，100字以内）" maxlength="100"></editor>
                </view>
                <view class="uni-btn-v">
                    <button class="btn" form-type="submit">确定</button>
                    <!-- <button type="default" form-type="reset">Reset</button> -->
                </view>
            </form>
        </view>
    </view>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            
        }
    },
     methods: {
        formSubmit: function(e) {
            console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
            var formdata = e.detail.value
            uni.showModal({
                content: '表单数据内容：' + JSON.stringify(formdata),
                showCancel: false
            });
        },
        // formReset: function(e) {
        //     console.log('清空数据')
        // }
    }
})
</script>

<style lang="scss" scoped>
.inter-view{
    height: 100%;
    width: 100%;
}
.header{
    display: block;
    width: 100%;
    height: 80rpx;
    background: #F5F5F5;
    line-height: 80rpx;
    text-indent: 30rpx;
}
.inter-main{
    width: 100%;
    p{
        width: 100%;
        text-indent: 30rpx;
        line-height: 100rpx;
        border-bottom: 3rpx solid #F4F4F4;
        display: flex;
        font-size: 35rpx;
        input{
            margin-top: 25rpx;
        }
    }
}
.btn{
    background: #989998;
    color: #fff;
    outline: none;
    border: 0;
    border-radius: 0;
}
</style>
