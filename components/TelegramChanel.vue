<template>
    <div class="telegram">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="telegram__title">
                        УCl ЗВlТИ ПРО НАШУ ДIЯЛЬНICТЬ МИ ПУБЛIКУЭМО
                        В <span>ТЕЛЕГРАМ-КАНАЛI</span> 
                        В РЕЖИМI РЕАЛЬНОГО ЧАСУ
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <div class="telegram__btn">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="telegram__btn__align">
                                    <span>
                                        ПРИЄДНАТИСЯ
                                    </span>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <img src="/images/telegram.png" alt="модальная картинка">
                            </div>
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

    .telegram{
        margin-top: 126px;


        .telegram__btn{
            border-style: solid;
            margin-top: 77px;
            font-family: @inter;
            font-size: 36px;
            font-weight: 700;
            background-color:  #0091EA;
            color: white;
            cursor: pointer;
            padding: 12px;
            padding-left: 32px;
            padding-right: 33px;

            &:hover{
                color: greenyellow;
            }


            .telegram__btn__align{
                height: 100%;
                display: flex;
                align-items: center;

        
            }

            img{
                width: 60px;
                height: 60px;
                margin: 0 auto;
                display: block;
            }
        }
        
        .telegram__title{
            font-family: @inter;
            font-weight: 700;
            font-size: 36px;
            position: relative;

            &:before{
                position: absolute;
                content: "";
                left: 0;
                bottom: -29px;
                width: 228px;
                height: 3px;
                background-color: black;
            }
         
            span{
                color:#0091EA;
            }
        }
    }
</style>