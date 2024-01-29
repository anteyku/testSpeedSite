<template>
    <div class="fundra">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="fundra__title">
                        БЛАГОДlЙНИЙ ЗБlР <span>ДИТЯЧЕ СЕРЦЕ</span> 
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="fundra__desc">
                        Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства приписывается Ричарду Макклинтоку.Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства приписывается Ричарду Макклинтоку.Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства приписывается Ричарду Макклинтоку.Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства приписывается Ричарду Макклинтоку.
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="fundra__count">
                        <img src="/images/atm-card.png" alt="count">
                        <div class="fundra__count__text">
                          <span>Account#</span> UA963005280000026006000021858
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

    .fundra{
        margin-top: 106px;

        .fundra__count{
            margin-top: 56px;
            background: #FFFFFF;
            box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            padding: 24px;
            padding-top: 18px;
            padding-bottom: 18px;
            display: flex;
            align-items: center;

            .fundra__count__text{
                margin-left: 28px;
                font-family: @inter;
                font-weight: 400;
                font-size: 16px;
                word-break: break-all;  /* не поддерживает Opera12.14, значение keep-all не поддерживается IE, Chrome */ 
                overflow-wrap: break-word;

                span{
                    font-weight: 700;
                }
            }

            img{
                width: 57px;
                height: 57px;
            }
        }
        .fundra__desc{
            background: #FFFFFF;
            box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            padding: 18px;
            font-family: @inter;
            font-size: 16px;
            margin-top: 87px;
        }
        .fundra__title{
            text-align: center;
            font-family: @inter;
            font-size: 36px;
            font-weight: 700;
            position: relative;

            &:before{
                content: "";
                width: 228px;
                height: 3px;
                position: absolute;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                background-color: #0091EA;
                bottom: -30px;
            }

            span{
                color: #0091EA;
            }
        }
    }

</style>