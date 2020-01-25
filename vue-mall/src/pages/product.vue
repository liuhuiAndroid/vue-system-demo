<template>
    <div class="product">
        <product-param  title="小米9">
            <template v-slot:buy>
                <button class="btn">立即购买</button>
            </template>
        </product-param>
        <div class="h">123</div>
        <div class="h">123</div>
        <div class="h">123</div>
        <div class="h">123</div>
        <div class="h">123</div>
    </div>
</template>

<script>
    import ProductParam from './../components/ProductParam'

    export default {
        name: "product",
        components: {
            ProductParam
        }
    }
</script>

<style scoped lang="scss">
    .product {
        button {
            margin-left: 10px;
        }
        .h{
            height: 150px;
        }
    }
</style>
