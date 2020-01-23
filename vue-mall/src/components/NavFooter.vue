<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="javascript:;" target="_blank">全栈课程</a>
            <span>|</span>
            <a href="javascript:;" target="_blank">我的小家</a>
            <span>|</span>
            <a href="javascript:;" target="_blank">你的酒馆对我打了烊</a>
            <span>|</span>
            <a href="javascript:;" target="_blank">全家就是你家</a>
        </div>
        <div class="copyright">
            Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavFooter"
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/config.scss';
    .footer{
        height: 234px;
        border-top: 4px solid #FF6600;
        background-color: #333333;
        color: #999999;
        font-size: $fontI;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;
            }
            span{
                margin: 0 10px;
            }
        }
        .copyright{
            margin-top: 13px;
            .domain{
                color: #FF6600;
            }
        }
    }
</style>
