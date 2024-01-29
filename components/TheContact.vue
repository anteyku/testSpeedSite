<template>
    <div class="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="contact__title">
                        ЗВОРОТНIЙ <span>ЗВ'ЯЗОК</span> 
                    </div>
                </div>
            </div>
            <div class="row contact__blocks">
                <div class="col-lg-3">
                    <div class="contact__blocks__mini-block">
                        <div class="contact__blocks__mini-block__img">
                            <img src="/images/phone-call.png" alt="">
                        </div>
                        <div class="contact__blocks__mini-block__title">
                            ОТРИМАТИ ДОПОМОГУ
                        </div>
                        <div class="contact__blocks__mini-block__desc">
                            +38 050 281 20 49
                        </div>
                        <div class="contact__blocks__mini-block__desc">
                            +38 050 281 20 43
                        </div>                        
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="contact__blocks__mini-block">
                        <div class="contact__blocks__mini-block__img">
                            <img src="/images/phone-call.png" alt="">
                        </div>
                        <div class="contact__blocks__mini-block__title">
                            ЯКЩО ВИ ХОЧЕТЕ ДОМОПОГТИ ЯК ДОНОР
                        </div>
                        <div class="contact__blocks__mini-block__desc">
                            +380 50 601 5105
                        </div>
                        <div class="contact__blocks__mini-block__desc">
                            +380 66 640 0192
                        </div>         
                        <div class="contact__blocks__mini-block__desc">
                            +380 68 163 6100(Telegram)
                        </div>                                         
                    </div>
                </div>          
                <div class="col-lg-3">
                    <div class="contact__blocks__mini-block">
                        <div class="contact__blocks__mini-block__img">
                            <img src="/images/instagra.png" alt="">
                        </div>
                        <div class="contact__blocks__mini-block__title">
                            INSTAGRAM
                        </div>
                        <div class="contact__blocks__mini-block__desc">
                            @charityfoundation_ua
                        </div>                                      
                    </div>
                </div>   
                <div class="col-lg-3">
                    <div class="contact__blocks__mini-block">
                        <div class="contact__blocks__mini-block__img">
                            <img src="/images/mail.png" alt="">
                        </div>
                        <div class="contact__blocks__mini-block__title">
                            GMAIL
                        </div>
                        <div class="contact__blocks__mini-block__desc">
                            co.mothers.palms@gmail.com
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


    .contact{
        margin-top: 109px;
        text-align: center;

        .contact__blocks{
            margin-top: 123px;
            margin-bottom: 300px;
            .contact__blocks__mini-block{
                margin-top: 20px;
                .contact__blocks__mini-block__desc{
                    margin-top: 17px;
                    font-family: @inter;
                    font-weight: 400;
                    font-size: 16px;
                }
                .contact__blocks__mini-block__title{
                    font-family: @inter;
                    font-size: 16px;
                    font-weight: 700;
                    margin-top: 16px;
                    width: 100%;
                }
                .contact__blocks__mini-block__img{
                    img{
                        width: 66px;
                        height: 66px;
                    }
                }
            }
        }
        .contact__title{
            font-family: @inter;
            font-size: 37px;
            font-weight: 700;
            position: relative;

            &:before{
                content: "";
                width:228px;
                height:3px;
                background-color:#0091EA;
                position: absolute;
                left:0;
                right:0;
                margin-left: auto;
                margin-right: auto;
                bottom: -30px;
            }

            span{
                color:#0091EA;
            }
        }
    }

</style>