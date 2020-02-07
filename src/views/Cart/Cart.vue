<template>
    <div>
        <div class="goods" v-for="(item,index) in cartarr" :key="index">
            {{item.title}}
            <div class="goodright">
                <i class="cubeic-remove" @click="removeCart(index)"></i>
                <span>{{item.cartCount}}</span>
                <i class="cubeic-add" @click="addCart(index)"></i>
            </div>
        </div>
        <cube-button style="margin:10px 0">下单</cube-button>
        <cube-button>清空购物车</cube-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cartarr:[]
        }
    },
    methods:{
        removeCart(index){ //删除商品

        },
        addCart(index){ //增加商品

        }
    }
}
</script>

<style lang="stylus" scoped>
    .goods
        padding 10px
        text-align left 
        .goodright
            float  right
        i
            font-size 18px
</style>