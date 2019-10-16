<template>
    <div class="bidzina-amount">
        <div class="bidzina-amount__main">
            <img src="../assets/10.04.2019_Ivanishvili_Interview_Imedi.png" alt="bidzina">
            <h1>asdasd asdasd </h1>
        </div>
        <div class="bidzina-amount__amount">
            {{amount}} $ 
        </div>
    </div>
</template>

<script>
    export default {
        name: "amount",
        props: ['amount']
    }
</script>

<style lang="scss">
    .bidzina-amount {
        &__main {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 32px;
            margin-bottom: 10px;
            font-weight: bold;
            line-height: 1.6em;
            background: white;
            padding: 30px 20px;

            h1 {
                @media screen and (max-width: 425px) {
                    font-size: 18px;
                }
            }

            img {
                border-radius: 50%;
                width: 120px;
                height: 120px;
            }
        }

        &__amount {
            width: 100%;
            color: white;
            background-color: rgb(46, 204, 113);
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            position: fixed;
            top: 0px;
            left: 0;
            overflow: hidden;
            padding: 20px 0;

            @media screen and (max-width: 425px) {
                font-size: 23px;
            }

        }
    }
</style>