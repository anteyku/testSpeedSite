<template>
    <div class="help">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="help__title">
                        ЯКУ <span>ДОПОМОГУ</span> МИ НАДАЭМО ?
                    </div>
                </div>
            </div>
            <div class="row help__blocks">
                <div class="col-lg-4">
                    <div class="help__blocks__mini-block">
                        <div class="help__blocks__mini-block__img">
                            <img src="/images/clothes.webp" alt="картинка">
                            <!--
                                <nuxt-img src="/images/clothes.webp" loading="lazy" />
                            -->
                        
                            
                        </div>
                        <div class="help__blocks__mini-block__title">
                            Дитячий одяг
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

    .help{
        margin-top: 198px;
        .help__title{
            font-size: 36px;
            font-family: @inter;
            font-weight: 700;
            text-align: center;
            span{
                color: #0091EA;
            }
        }
        .help__blocks{
            margin-top: 95px;

            .help__blocks__mini-block{
                background: #FFFFFF;
                box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.25);
                border-radius: 5px;
                padding: 32px;
                padding-top: 16px;
                padding-bottom: 16px;
                display: flex;
                align-items: center;

                .help__blocks__mini-block__img{
                    width: 55px;
                    img{
                        width: 100%;
                    }
                }
                .help__blocks__mini-block__title{
                    margin-left: 22px;
                    font-family: @inter;
                    font-size:16px;
                    font-weight: 400;
                }
            }
        }
    }
</style>