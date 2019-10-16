<template>
    <div id="app">
        <div class="container">
            <amount-component :amount="amount" />
            <buy-items-component :data="data" :amount="amount" />
        </div>
    </div>
</template>

<script>
    import AmountComponent  from './components/AmountComponent';
    import BuyItemsComponent  from './components/BuyItemsComponent';

    export default {
        name: 'app',
        components: {
            BuyItemsComponent,
            AmountComponent
        },

        computed: {
            data() {
                return this.$store.state.items;
            },
            amount() {
                return this.$store.state.amount;
            }
        }
    }
</script>

<style lang="scss">
    .container {
        max-width: 950px;
        margin-left: auto;
        margin-right: auto;
        color: rgb(51, 51, 51);

    }
    #app {
        background-color: #f1f2f6;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
