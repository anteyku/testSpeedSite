<template>
    <div class="comand">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="comand__title">
                        НАША КОМАНДА
                    </div>
                </div>
            </div>
            <div class="row comand__block">
                <div class="col-lg-3">
                    <div class="comand__block__mini-block">
                        <div class="comand__block__mini-block__img">
                            <img src="/images/malchik-samoliot-leto-mir.jpg" alt="картинки">
                        </div>
                        <div class="comand__block__mini-block__title">
                            Марина Енько
                        </div>
                        <div class="comand__block__mini-block__description">
                            <ol>
                                <li>Співзасновниця фонду</li>
                                <li>Маркетолог</li>
                                <li>Спікер</li>
                                <li>Співзасновниця рекламного PR-агентства.</li>
                            </ol>
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

    .comand{
        background-color: black;
        padding-top: 61px;
        margin-top: 146px;
        padding-bottom: 120px;

        .comand__block{
            margin-top: 44px;
            .comand__block__mini-block{
                margin-top: 44px;
                .comand__block__mini-block__img{
                    width: 200px;
                    height: 200px;
                    border-radius: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    margin: 0 auto;
                    img{
                        height: 100%;
                    }
                }
                .comand__block__mini-block__title{
                    font-family: @inter;
                    color: white;
                    text-align: center;
                    margin-top: 20px;
                    font-size: 20px;
                    font-weight: 700;
                }
                .comand__block__mini-block__description{
                    color: white;
                    width: 80%;
                    margin: 0 auto;
                    margin-top: 22px;

                    ol{
                        list-style-type: disc ;
                        
                        li{
                            font-family: @inter;
                            font-weight: 400;
                            font-size: 16px;
                        }
                    }
                }
            }
        }

        .comand__title{
            color: white;
            text-align: center;
            font-size: 36px;
            font-family: @inter;
            font-weight: 700;
            position: relative;

            &:before{
                position: absolute;
                content: "";
                width: 228px;
                height: 3px;
                background-color: white;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                bottom: -25px;
            }
        }
    }

</style>