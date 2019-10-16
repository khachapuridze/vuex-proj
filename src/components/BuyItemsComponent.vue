<template>
    <div class="sayideli">
        <div :key="index" v-for="(x,index) in data" class="sayideli__item">
            <img :src="x.img" alt="xe">
            <div class="sayideli__about">
                <h5>{{x.title}}</h5>
                <p>{{x.price}} $</p>
            </div>
            <div :key="index" class="sayideli__buttons">
                <button class="sell" :disabled="x.amount < 1" @click="pricePlus(x.price), x.amount--">
                    Sell
                </button>
                <input type="number" v-model.lazy="x.amount" :disabled="true" >
                <button class="buy" :disabled="((x.amount + 1) * x.price)> amount "
                        @click="priceMinus(x.price),x.amount++">Buy
                </button>
            </div>
        </div>

    </div>
</template>

<script>
    import  { mapMutations } from 'vuex';
    export default {
        name: "BuyItemsComponent.vue",
        props: ['data','amount'],
        methods: {
            ...mapMutations([
                'priceMinus',
                "pricePlus"
            ])
        },

    }
</script>

<style lang="scss">

    .sayideli {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px 10px;

        @media screen and (max-width: 625px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 490px) {
            grid-template-columns: repeat(1, 1fr);
        }

    &__buttons {
         display: flex;
         justify-content: space-between;
        @media screen and (max-width: 490px) {
            justify-content: space-around;
        }

    input {
        font-size: 16px;
        text-align: center;
        color: rgb(51, 51, 51);
        font-family: Roboto, sans-serif;
        width: 35%;
        -webkit-appearance: none;
        padding: 9px 12px;
        border-radius: 3px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(178, 190, 195);
        border-image: initial;
    }

    .sell {
        font-size: 16px;
        cursor: pointer;
        text-align: center;
        background-color: rgb(245, 59, 87);
        color: white;
        font-weight: bold;
        user-select: none;
        touch-action: manipulation;
        padding: 9px 12px;
        border-radius: 3px;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;

    &:disabled {
         color: rgb(51, 51, 51);
         cursor: auto;
         cursor: not-allowed;
         background-color: rgb(241, 242, 246) !important;
         border-width: initial;
         border-style: none;
         border-color: initial;
         border-image: initial;
     }


    }

    .buy {

        font-size: 16px;
        cursor: pointer;
        text-align: center;
        background-color: rgb(5, 196, 107);
        color: white;
        font-weight: bold;
        user-select: none;
        touch-action: manipulation;
        padding: 9px 12px;
        border-radius: 3px;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;

    &:disabled {
         color: rgb(51, 51, 51);
         cursor: auto;
         cursor: not-allowed;
         background-color: rgb(241, 242, 246) !important;
         border-width: initial;
         border-style: none;
         border-color: initial;
         border-image: initial;
     }

    }
    }

    .disabled {

        color: rgb(51, 51, 51);
        cursor: auto;
        cursor: not-allowed;
        background-color: rgb(241, 242, 246) !important;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;

    &:disabled {
         color: rgb(51, 51, 51);
         cursor: auto;
         cursor: not-allowed;
         background-color: rgb(241, 242, 246) !important;
         border-width: initial;
         border-style: none;
         border-color: initial;
         border-image: initial;
     }
    }

    &__item {

         max-width: 100%;
         background-color: white;
         text-align: center;
         font-size: 18px;
         padding: 20px 15px;

    h5 {
        font-size: 22px;

    }

    p {
        font-size: 20px;
        color: rgb(46, 204, 113);
    }

    img {
        width: 100%;
        height: 200px;
    }
    }
    }

</style>