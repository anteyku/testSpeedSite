<template>
    <div class="requs" id="requs">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="requs__title">
                       <span id="requs">РЕКВІЗИТИ</span> ДЛЯ <span id="help">ДОПОМОГИ</span>
                    </div>
                </div>
            </div>
            <div class="row requs__check">
           
                    <div class="col-lg-3">
                        <div class="requs__check__mini-block">
                            <div class="requs__check__mini-block__title">
                                Beneficiary
                            </div>
                            <div class="requs__check__mini-block__description">
                                CO "CF "MOTHER'S PALMS"Stepana Rudanskogo str., 3a, app. 17. Kyiv, 04112
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="requs__check__mini-block">
                            <div class="requs__check__mini-block__title">
                                Account#
                            </div>
                            <div class="requs__check__mini-block__description">
                                UA963005280000026006000021858
                            </div>
                        </div>
                    </div>      
                    <div class="col-lg-3">
                        <div class="requs__check__mini-block">
                            <div class="requs__check__mini-block__title">
                                Beneficiary’s bank
                            </div>
                            <div class="requs__check__mini-block__description">
                                OTP BANK JSC
                            </div>
                        </div>
                    </div>     
                    
                    <div class="col-lg-3">
                        <div class="requs__check__mini-block">
                            <div class="requs__check__mini-block__title">
                                SWIFT code
                            </div>
                            <div class="requs__check__mini-block__description">
                                OTPVUAUKOINT-STOCK COMPANY OTP BANK (OTP BANK JSC)43 Zhylyanska str., Kyiv-33, Ukraine, 01033
                            </div>
                        </div>
                    </div>                        
                
            </div>
            <div class="row">
                <div class="requs__title-usd">
                    Банки-кореспонденти
                </div>
            </div>
            <div class="row">
                <div class="col-lg-2">
                    <div class="requs__crypto" @click="usd(`PLN`)">PLN</div>
                </div>
                <div class="col-lg-2">
                    <div class="requs__crypto" @click="usd(`GBP`)">GBP</div>
                </div>
                <div class="col-lg-2">
                    <div class="requs__crypto" @click="usd(`USD`)">USD</div>
                </div>
                <div class="col-lg-2">
                    <div class="requs__crypto" @click="usd(`EURO`)">EURO</div>
                </div>
                <div class="col-lg-2">
                    <div class="requs__crypto" @click="usd(`CRYPTO`)">CRYPTO</div>
                </div>       
                <div class="col-lg-2">
                    <div class="requs__crypto" @click="usd(`MONO`)">MONO</div>
                </div>                               
            </div>
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="requs__details-of-orders" @click="usd(`Реквізити для переказів у національній валюті`)">
                        Реквізити для переказів у національній валюті
                    </div>
                </div>
            </div>
        </div>
    </div>

    <van-overlay :show="show" @click="show = false">
        <div class="wrapper" @click.stop>
          <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="wrapper__text-bold">
                        {{ nowUsd[0] }}
                    </div>
                </div>
            </div>
            <div v-for="elem of nowUsd[1]" :key="elem" class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="wrapper__text">
                        {{ elem }}
                    </div>
                </div>
            </div>       
                                                        
          </div>
        </div>
      </van-overlay>
</template>

<script>
    import { ref } from 'vue';

    export default {
        data(){
            return {
                mesUsd: [
                    {
                        name: `PLN`,
                        mes: [`Bank name: PKO Bank Polski SA.`, `City: Warsaw`, `Country: Poland`, `Account No: PL 36 1020 0016 1201 1100 0000 1608`, `SWIFT code: BPKOPLPW`] 
                    },
                    {
                        name: `GBP`,
                        mes: [`Bank name: Lloyds bank.`, `City: London`, `Country: UK`, `Account No: 01040783`, `SWIFT code: LOYDGB2L`] 
                    },
                    {
                        name: `USD`,
                        mes: [`1) Bank name: Deutsche Bank Trust Company Americas.`, `City: New York`, `Country: USA`, `Account No: 04448427`, `SWIFT code: BKTRUS33`, `2) Bank name: Raiffeisen Bank International AG`, `City: Vienna`, `Country: Austria`, `Account No: 70-55.033.401`, `SWIFT code: RZBAATWW`] 
                    },
                    {
                        name: `EURO`,
                        mes: [`1) Bank name: Deutsche Bank AG`, `City: Frankfurt/Main`, `Country: Germany`, `Account No: 100 9474974 0000`, `SWIFT code: DEUTDEFF`, `2) Bank name: Commerzbank AG`, `City: Frankfurt/Main`, `Country: Germany`, `Account No: 400 8880064 01`, `SWIFT code: COBADEFF`] 
                    },
                    {
                        name: `Реквізити для переказів у національній валюті`,
                        mes: [`Одержувач: БЛАГОДІЙНА ОРГАНІЗАЦІЯ "БЛАГОДІЙНИЙ ФОНД "У МАТУСИНИХ ДОЛОНЯХ"`, `Код Одержувача (ЕГРПОУ) 44892577`, `Банк Одержувача: АТ «ОТП Банк» в м. Київ`, `МФО: 300528`, `Рахунок № UA963005280000026006000021858`] 
                    }                                                                                               
                ],
                nowUsd: []
            }
        },
        methods: {
            usd(arg){
                console.log(arg);

                this.nowUsd = [];
                for(let elem of this.mesUsd){
                    if(elem.name == arg){   
                        this.nowUsd.push(elem.name);
                        this.nowUsd.push(elem.mes);
                        console.log(this.nowUsd)
                    }
                }

                this.show = true
            }
        },
        setup() {
            const show = ref(false);
            return { show };
        },
    };
</script>

<style lang="less">
    @roboto: 'Roboto', sans-serif;
    @inter: 'Inter', sans-serif;
    .van-overlay{
        display: flex;
        align-items: center;
        .wrapper{
            width: 90%;
            margin: 0 auto;

            .wrapper__text-bold{
                border-bottom-style: solid;
                border-color: #0091EA;;
                border-width: 3px;
                color: white;
                text-align: center;
                font-family: @inter;
                font-size: 20px;
                font-weight: 600;
                padding-bottom: 10px;
            }
            .wrapper__text{
                border-bottom-style: solid;
                border-color: #0091EA;;
                border-width: 3px;
                color: white;
                text-align: center;
                font-family: @inter;
                font-size: 16px;
                font-weight: 500;
                padding-bottom: 10px;  
                margin-top: 16px;             
            }
        }
    }

    .requs{
        margin-top: 201px;
        background-color: black;
        padding-top: 180px;
        padding-bottom: 231px;

        .requs__details-of-orders{
            border-style: solid;
            border-color: #0091EA;
            border-width: 1px;
            margin-top: 42px;
            color: white;
            text-align: center;
            font-family: @roboto;
            font-size: 19px;
            font-weight: 600;
            padding: 10px;
            cursor: pointer;

            &:hover{
                background-color: #0091EA;
            }
        }

        .requs__crypto{
            border-style: solid;
            border-color: white;
            border-width: 1px;
            margin-top: 40px;
            font-family: @roboto;
            font-size: 19px;
            color: #FFEB3B;
            text-align: center;
            padding: 10px;
            cursor: pointer;
            font-weight: 600;

            &:hover{
                background-color: white;
                color: black;
            }
        }

        .requs__title-usd{
            color: white;
            text-align: center;
            font-family: @inter;
            font-size: 20px;
            font-weight: 700;
            margin-top: 49px;
            position: relative;

            &:before{
                content: "";
                position: absolute;
                bottom: -14px;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                width: 40px;
                height: 3px;
                background-color: #FFEB3B;
            }
        }

        .requs__title{
            color: white;
            text-align: center;
            font-size: 36px;
            font-weight: 700;
            font-family: @inter;

            #requs{
                color:#0091EA;
            }

            #help{
                color: #FFEB3B;
            }
        }
        .requs__check{
            
          

            .requs__check__mini-block{
                margin-top: 64px;

                .requs__check__mini-block__title{
                    color: white;
                    text-align: center;
                    font-family: @inter;
                    font-size: 20px;
                    font-weight: 700;
                    position: relative;

                    &:before{
                        width: 40px;
                        height: 3px;
                        background-color: #0091EA;
                        content: "";
                        position: absolute;
                        margin-left: auto;
                        margin-right: auto;
                        left: 0;
                        right: 0;
                        bottom: -13px;                        
                    }
                }
                .requs__check__mini-block__description{
                    margin-top: 26px;
                    color: white;
                    text-align: center;
                    font-size: 16px;
                    font-family: @inter;
                    font-weight: 400;
                    line-height: 21px;
                }

            }
        }
    }
</style>