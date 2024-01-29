<template>
    <div class="static">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="static__title">
                        РОБОТА <span>НАШОГО ФОНДУ</span>  У ЦИФРАХ
                    </div>
                </div>
            </div>
            <div class="row static__block">
                <div class="col-lg-3">
                    <div class="static__block__mini-block">
                        <div class="static__block__img">
                            <img src="/images/location-marker.webp" alt="картинка">
                            <!--
                                <nuxt-img src="/images/location-marker.webp" loading="lazy" />
                            -->
                                  
                        
                          
                        </div>
                        <div class="static__block__title">
                            2000+
                        </div>
                        <div class="static__block__description">
                            Адресних допомог
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @roboto: 'Roboto', sans-serif;
    @inter: 'Inter', sans-serif;


    .static{
        margin-top: 247px;

        .static__title{
            font-family: @inter;
            font-size: 36px;
            font-weight:700;
            text-align: center;
            span{
                background-color: #FFEB3B;
                color: white;
                padding: 5px;
            }
        }

        .static__block{
            margin-top: 94px;
            .static__block__mini-block{
                background: #FFFFFF;
                box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.25);
                border-radius: 5px;
                border-style: solid;
                border-color: white;
                .static__block__img{
                    width: 60px;
                    margin: 0 auto;
                    margin-top: 21px;
                    margin-bottom: 25px;                    

                    img{
                        width: 100%;
                    }
                }
                .static__block__title{
                    text-align: center;
                    font-family: @inter;
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 17px;
                }
                .static__block__description{
                    font-family: @inter;
                    font-size: 16px;
                    font-weight: 400;
                    text-align: center;
                    margin-bottom: 43px;
                }
            }
        }
    }

</style>