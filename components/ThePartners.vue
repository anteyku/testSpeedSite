<template>
    <div class="part">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="part__title">
                        НАШI ПАРТНЕРИ
                    </div>
                </div>
            </div>
            <div class="row part__blocks">
                <div class="col-lg-2">
                    <div class="part__blocks__mini-block">
                        <div class="part__blocks__mini-block__img">
                            <img src="/images/part.webp" alt="partners">
                        </div>
                        <div class="part__blocks__mini-block__title">
                            Криворизька вийськова администрация
                        </div>
                        <div class="part__blocks__mini-block__description">
                            дитячи речи
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

    .part{
        margin-top: 119px;

        .part__blocks{
            margin-top: 99px;
            .part__blocks__mini-block{
                margin-top: 30px;
                .part__blocks__mini-block__img{
                    height: 120px;
                    img{
                        height: 100%;
                        display: block;
                        margin: 0 auto;
                    }
                }
                .part__blocks__mini-block__title{
                    margin-top: 9px;
                    text-align: center;
                    font-family: @roboto;
                    font-size: 16px;
                    color:#0091EA;
                }
                .part__blocks__mini-block__description{
                    text-align: center;
                    margin-top: 8px;
                    font-family: @roboto;
                    font-size: 16px;
                    color: rgb(156, 156, 156);
                }
            }
        }
        .part__title{
            text-align: center;
            font-family: @inter;
            font-size: 36px;
            font-weight: 700;
            position: relative;

            &:before{
                content: "";
                width: 228px;
                position: absolute;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                height: 3px;
                background-color: #0091EA;
                bottom: -37px;
            }

        }
    }
</style>