<template>  
    <div class="how">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="how__title">
                        ЯК <span>ОТРИМАТИ ДОПОМОГУ?</span> 
                    </div>
                </div>
            </div>
            <div class="row how__blocks">
                <div class="col-lg-12">
                    <div class="how__blocks__mini-block">
                        Приймаємо заявки на допомогу від жінок з дітьми, які постраждали від війни в Україні.
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="how__blocks__mini-block">
                        Ми допомагаємо матусям з дітками, які перебувають у гарячих точках під обстрілами, а також тим, хто був змушений покинути свої домівки та сховатися від війни в інших регіонах України.
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="how__blocks__mini-block">
                        Ми приймаємо заявки на допомогу в наступних сферах:
                        - Пелюшки та засоби гігієни
                        - Ліки для діток і матусь
                        - Дитяче харчування
                        - Продуктові набори для матусь та діток
                        - Іграшки, солодощі, навчальні та розвиваючі матеріали для діток
                    </div>
                </div>                
            </div>
            <div class="row how__buttons">
                <div class="col-lg-6">
                    <div class="how__buttons__btn">
                        Заповнити загальну заявку на допомогу
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="how__buttons__btn">
                        Заповнити заявку на допомогу саме одягом
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @roboto: 'Roboto', sans-serif;
    @inter: 'Inter', sans-serif;

    .how{
        margin-top: 121px;

        .how__buttons{
            .how__buttons__btn{
                margin-top: 48px;
                font-family: @inter;
                font-size: 20px;
                font-weight: 700;
                color: #0091EA;
                text-align: center;
                border-style: solid;
                border-width: 2px;
                padding: 15px;
                cursor: pointer;

                &:hover{
                    background-color:#0091EA;
                    color: white;
                }
            }
        }

        .how__blocks{
            margin-top: 81px;
            .how__blocks__mini-block{
                margin-top: 20px;
                font-family: @inter;
                font-size: 16px;
                font-weight: 400;
                box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.25);
                border-radius: 5px;
                padding-left: 18px;
                padding-top: 14px;
                padding-bottom: 14px;
                padding-right: 18px;
            }
        }
        .how__title{
            text-align: center;
            font-family: @inter;
            font-size: 36px;
            font-weight: 700;
            position: relative;

            &:before{
                content: "";
                width: 228px;
                height: 3px;
                background-color: #0091EA;
                position: absolute;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                bottom: -36px;
            }

            span{
                background-color: #FFEB3B;
                color: white;
                padding: 5px;
            }
        }
    }
</style>