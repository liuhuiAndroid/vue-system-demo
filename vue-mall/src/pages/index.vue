<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,index) in item" :key="index">
                                        <a :href="'/#/product/' + sub.id">
                                            <img :src="sub.img" alt="">
                                            {{sub.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 显示器 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">健康 儿童</a>
                        </li>
                    </ul>
                </div>
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href="'/#/product/' + item.id">
                            <img :src="item.img">
                        </a>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">
                <a :href="'/#/product/' + item.id" v-for="(item,index) in adsList" :key="index">
                    <img v-lazy="item.img">
                </a>
            </div>
            <div class="banner">
                <a :href="'/#/product/30'">
                    <img v-lazy="'/imgs/banner-1.png'">
                </a>
            </div>
        </div>
        <div class="product-box">
            <div class="container">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/project/35">
                            <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
                        </a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr,i) in phoneList" :key="i">
                            <div class="item" v-for="(item,j) in arr"  :key="j">
                                <span :class="{'new-pro':j%2==0}">新品</span>
                                <div class="item-img">
                                    <img v-lazy="item.mainImage">
                                </div>
                                <div class="item-info">
                                    <h3>{{item.name}}</h3>
                                    <p>{{item.subtitle}}</p>
                                    <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <modal title="提示" sureText="查看购物车" btnType="1"
               modalType="middle" :showModal="showModal"
                v-on:submit="goToCart"
                v-on:cancel="showModal=false">
            <template v-slot:body>
                <p>商品添加成功！</p>
            </template>
        </modal>
    </div>
</template>

<script>
    import ServiceBar from "./../components/ServiceBar";
    import Modal from "./../components/Modal";
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: "index",
        components: {ServiceBar,swiper, swiperSlide, Modal},
        data(){
            return {
                showModal:false,
                swiperOption:{
                    autoplay: true,
                    loop: true,
                    effect: 'cube',
                    cubeEffect: {
                        slideShadows: true,
                        shadow: true,
                        shadowOffset: 100,
                        shadowScale: 0.6
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                slideList:[
                    {
                        id:'42',
                        img:'/imgs/slider/slide-1.jpg'
                    },
                    {
                        id:'45',
                        img:'/imgs/slider/slide-2.jpg'
                    },
                    {
                        id:'46',
                        img:'/imgs/slider/slide-3.jpg'
                    },
                    {
                        id:'',
                        img:'/imgs/slider/slide-3.jpg'
                    },
                    {
                        id:'',
                        img:'/imgs/slider/slide-3.jpg'
                    }
                ],
                menuList:[
                    [
                        {
                            id: 30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9',
                        },
                        {
                            id: 31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版',
                        },
                        {
                            id: 32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro',
                        },
                        {
                            id: 33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区',
                        }
                    ],
                    [
                        {
                            id: 30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9',
                        },
                        {
                            id: 31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版',
                        },
                        {
                            id: 32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro',
                        },
                        {
                            id: 33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区',
                        }
                    ],
                    [
                        {
                            id: 30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9',
                        },
                        {
                            id: 31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版',
                        },
                        {
                            id: 32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro',
                        },
                        {
                            id: 33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区',
                        }
                    ],
                    [
                        {
                            id: 30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9',
                        },
                        {
                            id: 31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版',
                        },
                        {
                            id: 32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro',
                        },
                        {
                            id: 33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区',
                        }
                    ],
                    [
                        {
                            id: 30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9',
                        },
                        {
                            id: 31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版',
                        },
                        {
                            id: 32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro',
                        },
                        {
                            id: 33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区',
                        }
                    ],
                    [
                        {
                            id: 30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9',
                        },
                        {
                            id: 31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版',
                        },
                        {
                            id: 32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi K20 Pro',
                        },
                        {
                            id: 33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区',
                        }
                    ]
                ],
                adsList:[
                    {
                        id: 33,
                        img: '/imgs/ads/ads-1.png',
                    },
                    {
                        id: 48,
                        img: '/imgs/ads/ads-2.jpg',
                    },
                    {
                        id: 45,
                        img: '/imgs/ads/ads-3.png',
                    },
                    {
                        id: 47,
                        img: '/imgs/ads/ads-4.jpg',
                    }
                ],
                phoneList:[]
            }
        },
        filters:{
            currency(val){
                if(!val){
                    return '0.00';
                }else{
                    return '￥' + val.toFixed(2);
                }
            }
        },
        mounted(){
          this.init();
        },
        methods:{
            init(){
                this.axios.get('products',{
                    params:{
                        categoryId:100012,
                        pageSize: 14
                    }
                }).then((res)=>{
                    res.list = res.list.slice(6,14);
                    this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)]
                })
            },
            addCart(id){
                this.axios.post('/carts',{
                    productId: id,
                    selected: true
                }).then((res)=>{
                    this.showModal = true;
                    this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
                }).catch(()=>{
                    this.showModal = true;
                })
            },
            goToCart(){
                this.$router.push('/cart')
            }
        }
    }
</script>

<style lang="scss">
    @import './../assets/scss/base';
    @import './../assets/scss/mixin';
    @import './../assets/scss/config';
    .index{
        .swiper-box{
            .nav-menu{
                position: absolute;
                width: 264px;
                height: 451px;
                z-index: 9;
                padding: 26px 0;
                background-color: #55585A7A;
                box-sizing: border-box;
                .menu-wrap{
                    .menu-item{
                        height: 50px;
                        line-height: 50px;
                        a{
                            position: relative;
                            font-size: 16px;
                            color: #FFFFFF;
                            padding-left: 30px;
                            display: block;
                            &:after{
                                content: ' ';
                                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
                                position: absolute;
                                right: 30px;
                                top: 17.5px;
                            }
                        }
                        &:hover{
                            background-color: $colorA;
                            .children{
                                display: block;
                            }
                        }
                        .children{
                            display: none;
                            width: 962px;
                            height: 451px;
                            background-color: $colorG;
                            position: absolute;
                            top: 0;
                            left: 264px;
                            border: 1px solid $colorH;
                            ul{
                                display: flex;
                                justify-content: space-between;
                                height: 75px;
                                li{
                                    height: 75px;
                                    line-height: 75px;
                                    flex: 1;
                                    padding-left: 23px;
                                }
                                a{
                                    color: #333333;
                                    font-size: 14px;
                                }
                                img{
                                    width: 42px;
                                    height: 35px;
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
                        }
                    }
                }
            }
            .swiper-container {
                height: 451px;
                img{
                    width: 100%;
                    height: 100%;
                }
                .swiper-button-prev{
                    left: 274px;
                }
            }
        }

        .ads-box{
            @include flex();
            margin-top: 14px;
            margin-bottom: 31px;
            a{
                width: 296px;
                height: 167px;
            }
        }
        .banner{
            margin-bottom: 50px;
        }
        .product-box{
            background-color: #F5F5F5;
            padding: 30px 0 50px 0;
            h2{
                font-size: 22px;
                height: 21px;
                line-height: 21px;
                color: #333333;
                margin-bottom: 20px;
            }
            .wrapper{
                display: flex;
                .banner-left{
                    margin-right: 16px;
                    img{
                        width: 224px;
                        height: 619px;
                    }
                }
                .list-box{
                    .list{
                        @include flex();
                        width: 986px;
                        margin-bottom: 14px;
                        &:last-child{
                            margin-bottom: 0px;
                        }
                        .item{
                            width: 236px;
                            height: 302px;
                            background-color: #FFFFFF;
                            text-align: center;
                            span{
                                display: inline-block;
                                width: 67px;
                                height: 24px;
                                font-size: 14px;
                                line-height: 24px;
                                color: #ffffff;
                                &.new-pro{
                                    background-color: #7ECF68;
                                }
                                &.kill-pro{
                                    background-color: #E82626;
                                }
                            }
                            .item-img{
                                img{
                                    width: 100%;
                                    height: 195px;
                                }
                            }
                            .item-info{
                                h3{
                                    color: #333333;
                                    font-size: 14px;
                                    line-height: 14px;
                                    font-weight: bold;
                                }
                                p{
                                    color: #999999;
                                    line-height: 14px;
                                    margin: 6px auto 13px;
                                }
                                .price{
                                    color: #F20A0A;
                                    font-size: $fontJ;
                                    font-weight: bold;
                                    cursor:pointer;
                                    &:after{
                                        @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                                        content: ' ';
                                        margin-left: 5px;
                                        vertical-align: middle;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
