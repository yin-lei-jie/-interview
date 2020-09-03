<script lang="ts">
    import Vue from 'vue';
    import { mapState, mapActions } from 'vuex';
    export default Vue.extend({
        mpType: 'app',
        methods: {
            ...mapActions({
                login: 'user/login'
            })
        },
        onLaunch() {
            console.log('App Launch')
            wx.login({
                // 成功
                success: res => {
                //   console.log(res, '---')
            },
            //   失败
            fail: () => {},
            // 成功或者失败都走这
            complete: res => {
                console.log(res, '----complete')
                if(res.errMsg === 'login:ok') {
                    this.login((res as any).code);
                } else {
                    wx.showToast({
                      title: '获取code失败', //提示的内容,
                      icon: 'none', //图标,
                    });
                }
            }
            });
        },
        onShow() {
            console.log('App Show')
        },
        onHide() {
            console.log('App Hide')
        }
    });
</script>

<style>
    /*每个页面公共css */
    page{
        height: 100%;
    }
    @font-face {
        font-family: 'iconfont';  /* project id 2043306 */
        src: url('//at.alicdn.com/t/font_2043306_vf8wg7djkv9.eot');
        src: url('//at.alicdn.com/t/font_2043306_vf8wg7djkv9.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_2043306_vf8wg7djkv9.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_2043306_vf8wg7djkv9.woff') format('woff'),
        url('//at.alicdn.com/t/font_2043306_vf8wg7djkv9.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_2043306_vf8wg7djkv9.svg#iconfont') format('svg');
    }
    .iconfont {
        font-family: "iconfont" !important;
        font-size: 90rpx;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .icon-location:before {
        content: '\e6bc'
    }
    .icon-wode:before {
        content: '\e613'
    }
</style>
