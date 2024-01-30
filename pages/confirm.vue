<template>
    
    <NuxtSnackbar v-if="miterPopUpVisible == 0" />
    <div class="big-wrapper">
                              <!-- Навигация по сайту -->
                              <TheNavigation/>
     <div class="container">


            <div class="block">
                <div class="block__table">
                    <div class="block__table__top">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="block__table__top__title">
                                    TRANSFER THE EXACT AMOUNT TO THE SPECIFIED ADDRESS
                               
                                </div>
                            </div>
                            <div class="col-lg-10">
                                <div class="block__table__top__crypto">
                                    Crypto: {{ bitcoin }}  <Icon @click="copyText" name="material-symbols:content-copy-outline-sharp" size="25" />
                                </div>
                                <div class="block__table__top__price">
                                    Price: {{ query.price }}
                                </div>
                                <div class="block__table__top__timer">
                                    {{ minutes }}:{{ seconds }}
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <div class="block__table__top__qrcode">
                                    <img class="logo__img" :src="`images/qrcode.png`" alt="logo">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="block__table__bottom">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="block__table__name">Recipient:</div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block__table__message">test.com</div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block__table__name">Product Name:</div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block__table__message"> {{ query.subscriptions }} </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block__table__name">Account number:</div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block__table__message"> #573737</div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block__table__name">Amount to pay: </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block__table__message">  {{ query.price }}</div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block__table__name">Payment method:</div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block__table__message"> {{ query.crypto }} </div>
                            </div>
                             <div class="col-lg-6">
                                <div class="block__table__name">Status:</div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block__table__message">Waiting for payment <img class="logo__img" :src="`images/loading.gif`" alt="logo"> </div>
                            </div>
                        </div>
                        <button type="submit" @click="bem()" class="block__btn">I paid</button>
                    </div>
                  
                </div>
            </div>


     </div>
    </div>





    <footer class="footer" data-aos="fade-up">
        <NuxtSnackbar />
        <div class="container">
            <div class="footer__inner">
                <a class="footer__logo logo" href="index.html">
                    <img class="logo__img" :src="`images/logo.svg`" alt="logo">
                </a>
                <p class="footer__copy">
                    © 2023. Proper Trade. All rights reserved
                </p>
                <a class="footer__link" href="#">
                    Terms and Conditions
                </a>
            </div>
        </div>
    </footer>

    
</template>



<script setup lang="ts">

    /*
        Из за того что сообщения snackbar не вылазило на странице /confirm, а вылазило тогда когда я 
        удалял и добавлял этот тег "NuxtSnackbar" я додумался до костильного решения, изначально при переходе
        на страницу /confirm этого тега нету, но спустя секунду появляеться. Так я решыл проблему с не появлениям сообщения аномальной.
    */
    let miterPopUpVisible = ref(1)
    setTimeout(() => {
        miterPopUpVisible.value--;
    }, 1000);



    const { query } = useRoute();


   


        // price - цена в $ которую нужно перевести в выбраную нами криптовалюту
        // coin  - названия криптовалюты в которую нужно переводить $
        let getActualPrice = async (price:number, coin:string)=>{
            // https://www.coinbase.com/ru/converter/btc/uah      Здесь можно перевести 450$ в BTC и удостовериться в правельности расчетов
            await $fetch('https://api.coinpaprika.com/v1/tickers').then((s)=>{

                for(let elem of s){
                    if(elem.symbol == coin){
                        // s.quotes.USD.price - стоимость 1 BTC в $ которая сегодня была (АКТУАЛЬНО)
                        let calculation = price / elem.quotes.USD.price;               // разщитываю сколько получу BTC за 450$
                        bitcoin.value = calculation + ` ${elem.symbol}`;                   // сохраняю текущею стоимость в переменную
                        console.log(bitcoin.value)
                    }
                }
        
            })
        }
      
        // Изминяю некоторые криптовалюты из списка select на более коректные перед поиском
        function transferCoinValid(price:string, coin:string){
            let coinVal = coin;
            let priceVal = Number(price.slice(0, price.length - 1));
          
            if(coin == `BNB ( Smart Chain )`){
                coinVal = `BNB`
            } else if(coin == `USDT TRC20` || coin == `USDT ERC20` || coin == `USDT BEP20`){
                 coinVal = `USDT`
            }

            getActualPrice(priceVal, coinVal)
        }

       
        transferCoinValid(query.price, query.crypto)
    

    import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

     let bitcoin = ref(``);


    // ТАЙМЕР ОТСЧЕТА ВРЕМЕНИ НАПИСАН CHATGPT
    const totalSeconds = ref(30 * 60); // 30 минут в секундах
    const minutes = ref(Math.floor(totalSeconds.value / 60));
    const seconds = ref(totalSeconds.value % 60);
    const updateTimer = () => {
    if (totalSeconds.value > 0) {
        totalSeconds.value--;
        minutes.value = Math.floor(totalSeconds.value / 60);
        seconds.value = totalSeconds.value % 60;
    }
    };
    const timerInterval = setInterval(updateTimer, 1000);
    onBeforeUnmount(() => {
    clearInterval(timerInterval);
    });




    // Теперь переменная query содержит объект с query-параметрами
   // console.log(query)


 

    const snackbar = useSnackbar();
    function bem(){
    console.log(`Работает`)
    snackbar.add({
                    type: 'error',
                    text: 'Payment not yet detected'
            })
}

    const transferBTC = ref(`${bitcoin}`);

    function copyText(){
        console.log(`Копирования текста`)
        navigator.clipboard.writeText(bitcoin.value);
    }

    onMounted(()=>{
        
        

        useHead({
         css: [ `@/css/bootstrap.min.css`]
      })
    })


</script>


<style scoped lang="less">

    // Подключаю bootstrap сетку
    @import url("~/css/bootstrap-grid.min.css");



*{
    border-width: 3px;
    color: black;
    font-family: sans-serif;
}


.block{
    width: 100%;
    margin-top: 143px;
    position: relative;
    z-index: 20;


    
  .block__table{
    padding-top: 36px;
    padding-bottom: 34px;
    padding-left: 44px;
    padding-right: 44px;
    background-color: white;
    border-radius: 5px;
    .block__table__bottom{
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.5);
        border-width: 2px;
        padding-top: 10px;
        margin-top: 15px;

        .block__btn{
            width: 100%;
            background-color: #5CAA7C;
            text-align: center;
            color: white;
            padding-top: 23px;
            padding-bottom: 20px;
            margin-top: 33px;
            font-size: 18px;
            cursor: pointer;
            transition-duration: 300ms;
            &:hover{
                background-color: black;
            }
        }

        .block__table__name{
            font-family: sans-serif;
            font-size: 18px;
            margin-top: 10px;
            padding-left: 24px;
            padding-right: 24px;
        }
        .block__table__message{
            font-family: sans-serif;
            font-size: 18px;
            text-align: right; 
            margin-top: 10px;
            position: relative;
            overflow: hidden;
            padding-left: 24px;
            padding-right: 24px;

            img{
                width: 20px;
                margin-left: 5px;
            }
        }
    }
    .block__table__top{
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.5);
        border-width: 2px;
        padding: 16px;
        padding-left: 24px;
        padding-right: 24px;
        .block__table__top__qrcode{
            img{
                width: 100%;
            }
        }
        .block__table__top__title{
            font-family: sans-serif;
            text-align: center;
            font-size: 19px;
            font-weight: bold;
        }
        .block__table__top__crypto{
            margin-top: 29px;
            font-family: sans-serif;
            font-size: 18px;
            font-weight: 300;
            .icon{
                color: rgba(0, 0, 0, 0.521);
                margin-left: 10px;
                cursor: pointer;

                &:hover{
                    color: black;
                }
            }
        }
        .block__table__top__price{
            margin-top: 8px;
            font-family: sans-serif;
            font-size: 18px;
            font-weight: 300;  
        }
        .block__table__top__timer{
            font-size: 48px;
            font-family: sans-serif;
            color: #52A473;
            margin-top: 20px;
        }
    }
  }
}

footer{
    margin-top: 200px;
    color: white;

    .footer__inner{
        .footer__copy{
            color: white;
        }
        .footer__link{
            color: white;
        }
    }
}
   

</style>









