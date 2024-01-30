<template>
    <NuxtSnackbar />
    <div class="big-wrapper">

            <!-- Навигация по сайту -->
            <TheNavigation/>

            
        <div class="wrapper">
            <main class="main">
                <section class="main__products products">
                    <div class="container">
                        <h1 class="products__title title" data-aos="fade-down">
                            Subscriptions
                        </h1>
                        <div class="products__inner">
                            <div class="products__item products-item" data-aos="fade-right" >
                                <div class="products-item__heading">
                                    <h3 class="products-item__heading-title">
                                        Subscription for 3 months
                                    </h3>
                                    <p class="products-item__heading-text">
                                        Don’t waste your time making money off it!
                                    </p>
                                </div>
                                <ul class="products-item__list">
                                    <li class="products-item__list-item products-item__list-item--disabled">
                                        Unlimited automatic bot transactions
                                    </li>
                                    <li class="products-item__list-item products-item__list-item--disabled">
                                        Unlimited history testing
                                    </li>
                                    <li class="products-item__list-item products-item__list-item--disabled">
                                        Portfolio tracking
                                    </li>
                                    <li class="products-item__list-item products-item__list-item--disabled">
                                        Market screener
                                    </li>
                                    <li class="products-item__list-item products-item__list-item--disabled">
                                        API access
                                    </li>
                                </ul>
                                <div class="products-item__box">
                                    <p class="products-item__box-price">
                                        450$
                                    </p>
                                    <div @click="openProduct({tarif: `Subscription for 3 months`, price: `450$`})" class="products-item__box-link btn">
                                        Buy
                                    </div>
                                </div>
                            </div>
                            <div class="products__item products-item" data-aos="fade-left">
                                <div class="products-item__heading">
                                    <h3 class="products-item__heading-title">
                                        Subscription for 6 months
                                    </h3>
                                    <p class="products-item__heading-text">
                                        Maximum profit, minimum effort!
                                    </p>
                                </div>
                                <ul class="products-item__list">
                                    <li class="products-item__list-item products-item__list-item--disabled">
                                        Unlimited automatic bot transactions
                                    </li>
                                    <li class="products-item__list-item products-item__list-item--disabled">
                                        Unlimited history testing
                                    </li>
                                    <li class="products-item__list-item">
                                        Portfolio tracking
                                    </li>
                                    <li class="products-item__list-item">
                                        Market screener
                                    </li>
                                    <li class="products-item__list-item">
                                        API access
                                    </li>
                                </ul>
                                <div class="products-item__box">
                                    <p class="products-item__box-price">
                                        850$
                                    </p>
                                    <div @click="openProduct({tarif: `Subscription for 6 months`, price: `850$`})" class="products-item__box-link btn" >
                                        Buy
                                    </div>
                                </div>
                            </div>
                            <div class="products__item products-item" data-aos="fade-right">
                                <div class="products-item__heading">
                                    <h3 class="products-item__heading-title">
                                        Subscription for 12 months
                                    </h3>
                                    <p class="products-item__heading-text">
                                        Stay one step ahead of the market!
                                    </p>
                                </div>
                                <ul class="products-item__list">
                                    <li class="products-item__list-item">
                                        Unlimited automatic bot transactions
                                    </li>
                                    <li class="products-item__list-item">
                                        Unlimited history testing
                                    </li>
                                    <li class="products-item__list-item">
                                        Portfolio tracking
                                    </li>
                                    <li class="products-item__list-item">
                                        Market screener
                                    </li>
                                    <li class="products-item__list-item">
                                        API access
                                    </li>
                                </ul>
                                <div class="products-item__box">
                                    <p class="products-item__box-price">
                                        1 250$
                                    </p>
                                    <div @click="openProduct({tarif: `Subscription for 12 months`, price: `1250$`})" class="products-item__box-link btn">
                                        Buy
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="main__video video">
                    <h2 class="video__title title" data-aos="fade-down">
                        About product
                    </h2>
                    <div class="container">
                        <div class="video__inner" data-aos="zoom-in">
                            <video class="video__screen" :src="`videos/video.mp4`" controls muted></video>
                        </div>
                    </div>
                </section>
                <section class="main__about-section about-section">
                    <h2 class="about-section__title title" data-aos="fade-down">
                        About product
                    </h2>
                    <div class="container">
                        <div class="about-section__inner" data-aos="zoom-in">
                            <img class="about-section__img" :src="`images/about-section-img.jpg`" alt="img">
                        </div>
                    </div>
                </section>
            </main>

            <TheLogin/>
            <TheRegister/>
            <RestorePassword/>
            
            <section class="popup popup--order" :class="{visible: orderActve}">
                <div class="popup__inner">
                    <button @click="closeOrder()" class="popup__close" type="button">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.4557 16.1502L10.276 8.97056L17.4557 1.79089C17.6288 1.61778 17.7261 1.383 17.7261 1.13819C17.7261 0.893384 17.6288 0.658601 17.4557 0.485495C17.2826 0.312389 17.0478 0.215138 16.803 0.215138C16.5582 0.215138 16.3234 0.312389 16.1503 0.485495L8.97064 7.66517L1.79097 0.485494C1.61786 0.312388 1.38308 0.215138 1.13827 0.215138C0.893464 0.215138 0.658682 0.312388 0.485576 0.485494C0.397527 0.567101 0.327994 0.666634 0.281663 0.777385C0.235332 0.888135 0.213278 1.00753 0.216989 1.12752C0.2207 1.24752 0.25009 1.36532 0.303177 1.473C0.356264 1.58067 0.431814 1.67572 0.524737 1.75173L7.70441 8.9314L0.485576 16.1502C0.312469 16.3233 0.215218 16.5581 0.215219 16.8029C0.215218 17.0477 0.31247 17.2825 0.485576 17.4556C0.658682 17.6287 0.893463 17.726 1.13827 17.726C1.38308 17.726 1.61786 17.6287 1.79097 17.4556L8.97064 10.276L16.1503 17.4556C16.3234 17.6287 16.5582 17.726 16.803 17.726C17.0478 17.726 17.2826 17.6287 17.4557 17.4556C17.6288 17.2825 17.7261 17.0477 17.7261 16.8029C17.7261 16.5581 17.6288 16.3233 17.4557 16.1502Z"
                                fill="white" />
                        </svg>
                    </button>
                    <h2 class="popup__title">
                        Subscribe
                    </h2>
                    <div class="popup__info popup-info">
                        <div class="popup-info__box">
                            <p class="popup-info__box-text">
                                Subscription
                            </p>
                            <p class="popup-info__box-subtext">
                                {{ orderDate.tarif }}
                            </p>
                        </div>
                        <div class="popup-info__box">
                            <p class="popup-info__box-text">
                                Price
                            </p>
                            <p class="popup-info__box-subtext">
                                {{ orderDate.price }}
                            </p>
                        </div>
                    </div>
                    <form class="popup__form popup-form" action="#" method="post">
                        <div class="popup-form__wrapper">
                            <input v-model="inputEmail" class="popup-form__input" type="email" placeholder="Email" >
                            <div class="popup-form__custom-select custom-select">
                                <select id="palubma">
                                    <option value="0" selected>Cryptocurrency</option>
                                    <option value="BTC">BTC</option>
                                    <option value="LTC">LTC</option>
                                    <option value="ETH">ETH</option>
                                    <option value="BNB ( Smart Chain )">BNB ( Smart Chain )</option>
                                    <option value="USDT TRC20">USDT TRC20</option>
                                    <option value="USDT ERC20">USDT ERC20</option>
                                    <option value="USDT BEP20">USDT BEP20</option>
                                    <option value="XRP">XRP</option>
                                    <option value="TRX">TRX</option>
                                </select>
                            </div>
                        </div>
                        <div class="popup-form__buttons">
                            
                                 <NuxtLink class="popup-form__buttons-btn popup-btn--close btn--green"  :to="queryParam"> Confirm</NuxtLink>

                        </div>

                      
                    </form>
                </div>
            </section>



    
         
            <section class="popup popup--email-sent">
                <div class="popup__inner">
                    <button class="popup__close" type="button">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.4557 16.1502L10.276 8.97056L17.4557 1.79089C17.6288 1.61778 17.7261 1.383 17.7261 1.13819C17.7261 0.893384 17.6288 0.658601 17.4557 0.485495C17.2826 0.312389 17.0478 0.215138 16.803 0.215138C16.5582 0.215138 16.3234 0.312389 16.1503 0.485495L8.97064 7.66517L1.79097 0.485494C1.61786 0.312388 1.38308 0.215138 1.13827 0.215138C0.893464 0.215138 0.658682 0.312388 0.485576 0.485494C0.397527 0.567101 0.327994 0.666634 0.281663 0.777385C0.235332 0.888135 0.213278 1.00753 0.216989 1.12752C0.2207 1.24752 0.25009 1.36532 0.303177 1.473C0.356264 1.58067 0.431814 1.67572 0.524737 1.75173L7.70441 8.9314L0.485576 16.1502C0.312469 16.3233 0.215218 16.5581 0.215219 16.8029C0.215218 17.0477 0.31247 17.2825 0.485576 17.4556C0.658682 17.6287 0.893463 17.726 1.13827 17.726C1.38308 17.726 1.61786 17.6287 1.79097 17.4556L8.97064 10.276L16.1503 17.4556C16.3234 17.6287 16.5582 17.726 16.803 17.726C17.0478 17.726 17.2826 17.6287 17.4557 17.4556C17.6288 17.2825 17.7261 17.0477 17.7261 16.8029C17.7261 16.5581 17.6288 16.3233 17.4557 16.1502Z"
                                fill="white" />
                        </svg>
                    </button>
                    <p class="popup__message">
                        An email has been sent to you to reset your password.
                    </p>
                    <button class="popup__btn popup-btn--close btn--green" type="button">
                        Good, thank you!
                    </button>
                </div>
            </section>
            <div class="must-logged">
                <p class="must-logged__text">
                    You must register to subscribe 
                </p>
                <button class="must-logged__btn" type="button">
                    Log In
                </button>
                <button class="must-logged__close" type="button">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.4557 16.1502L10.276 8.97056L17.4557 1.79089C17.6288 1.61778 17.7261 1.383 17.7261 1.13819C17.7261 0.893384 17.6288 0.658601 17.4557 0.485495C17.2826 0.312389 17.0478 0.215138 16.803 0.215138C16.5582 0.215138 16.3234 0.312389 16.1503 0.485495L8.97064 7.66517L1.79097 0.485494C1.61786 0.312388 1.38308 0.215138 1.13827 0.215138C0.893464 0.215138 0.658682 0.312388 0.485576 0.485494C0.397527 0.567101 0.327994 0.666634 0.281663 0.777385C0.235332 0.888135 0.213278 1.00753 0.216989 1.12752C0.2207 1.24752 0.25009 1.36532 0.303177 1.473C0.356264 1.58067 0.431814 1.67572 0.524737 1.75173L7.70441 8.9314L0.485576 16.1502C0.312469 16.3233 0.215218 16.5581 0.215219 16.8029C0.215218 17.0477 0.31247 17.2825 0.485576 17.4556C0.658682 17.6287 0.893463 17.726 1.13827 17.726C1.38308 17.726 1.61786 17.6287 1.79097 17.4556L8.97064 10.276L16.1503 17.4556C16.3234 17.6287 16.5582 17.726 16.803 17.726C17.0478 17.726 17.2826 17.6287 17.4557 17.4556C17.6288 17.2825 17.7261 17.0477 17.7261 16.8029C17.7261 16.5581 17.6288 16.3233 17.4557 16.1502Z"
                            fill="#339C5D" />
                    </svg>
                </button>
            </div>
            <footer class="footer" data-aos="fade-up">
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
        </div>
    </div>
</template>

<script setup lang="ts">

        import { ref, watch, onBeforeUnmount, watchEffect } from 'vue'

        // Переключатель модульного окна цены
       let orderActve = ref(false);
       // Реактивные данные в модульном окне покупки
       let orderDate = ref({
        tarif: `Subscription for 3 months`,
        price: `300$`
       });

       // Открытия окна подробностей о заказе при выборе тарифа
       function openProduct(arg:{tarif:string, price:string}):void{
        // Установка реактивных данных выбраного тарифа для модульного окна
        orderDate.value.tarif = arg.tarif;
        orderDate.value.price = arg.price;
        orderActve.value = true; // Открываю модульное окно

        // Устанавливаю выбранный тариф и цену в query параметр ссылки
        queryParam.value.query.price = arg.price;
        queryParam.value.query.subscriptions = arg.tarif;
       }

       // Закрытия модульного окна с подробностями о выбранном тарифе
       function closeOrder():void{
        orderActve.value = false; // Закрываю модульное окно
       }



       let queryParam = ref({path: '/confirm', query: { email: 'test@gmail.com', crypto: 'BTC 3535674752324246', subscriptions: `Subscription for 6 months`, price: `400$` }}) 
        

       
       let inputEmail = ref()
       
       // Отслежываю изминения input поля
       watch(inputEmail, (arg)=>{
         queryParam.value.query.email = arg;
       })

       onMounted(()=>{
        const clickHandler = () => {
            const kk:any = document.querySelector(`#palubma`) as HTMLElement | null;
            if (kk) {
            console.log(kk.value);
            queryParam.value.query.crypto = kk.value;
            }
        };

        // Используем watchEffect для автоматического добавления и удаления обработчика событий
        watchEffect((onInvalidate) => {
            const bb = document.querySelector(`.select-items`) as HTMLElement | null;

            if (bb) {
            bb.addEventListener('click', clickHandler);
            onInvalidate(() => {
                // Удаляем обработчик событий перед уничтожением компонента
                bb.removeEventListener('click', clickHandler);
            });
            }
        });

       })
     
    



</script>

<style lang="less" scoped>
    // Окно выбора покупки
    .popup--order{
        

        .popup__inner{
            .popup__form{
                .popup-form__wrapper{
                    .custom-select{
                        select{
                         
                        }
                       
                    }
                }
            }
        }
    }
    .visible{
        display: flex;
    }
</style>