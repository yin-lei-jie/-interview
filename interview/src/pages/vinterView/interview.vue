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
                        <picker @columnchange="columnChange" :value="time" :range="[formatDays, formatHours, formatMins]" mode="multiSelector">
                            <view class="picker">
                                面试时间 {{formatTime}}
                            </view>
                        </picker>
                    </p>
                    <p>
                        <view class="title">面试地址</view>
                        <input class="uni-input" name="address" placeholder="请选择面试地址">
                    </p>
                    <span class="header">备注信息</span>
                    <editor class="uni-input" placeholder="备注信息（可选，100字以内）" maxlength="100"></editor>
                </view>
                <section>
                    
                </section>
                <view class="uni-btn-v">
                    <button class="btn" form-type="submit">确定</button>
                </view>
            </form>
        </view>
    </view>
</template>

<script lang="ts">
import Vue from 'vue';
import moment from 'moment';
const days = [0, 1, 2, 3, 4, 5, 6];
const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const mins = ['00', 10, 20, 30, 40, 50];
export default{
    data() {
        return {
            days,
            hours,
            mins,
            time:[0, 0, 0]
        }
    },
     methods: {
        formSubmit: function(e: any) {
            console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
            var formdata = e.detail.value
            uni.showModal({
                content: '表单数据内容：' + JSON.stringify(formdata),
                showCancel: false
            });
        },
        columnChange(e: any) {
            let { column, value } = e.detail;
            this.time[column] = value;
            this.time = [...this.time];
            console.log(this.time, value)
        }
    }, 
    computed: {
        formatDays() {
            return days.map(item => {
                return moment().add(item, 'd').date()+'号'
            })
        },
        formatHours() {
            if(this.time[0] === 0) {
                return hours.filter(item => item > moment().hour()).map(item => item+'点')
            } else {
                return hours.map(item => item+'点')
            }
        },
        formatMins() {
            return mins.map(item => item + '分');
        },
        formatTime() {
            let time = this.time as number[];
            return moment({hour: 0, minute: 0}).add(time[0], 'd').add(time[1], 'h').add(time[2]*10, 'm').format('YYYY-MM-DD HH:mm');
        }
    },
    created(){
        if(this.time[0] === 0) {
            this.time[1] = moment().hour()+1;
        }
    }
}
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
