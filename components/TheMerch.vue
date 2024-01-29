<template>
    <div class="merch">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="march__title">
                        НАШ МЕРЧ
                    </div>
                </div>
            </div>
            <div class="row merch__blocs">
                <div class="col-lg-3">
                    <div class="metch__blocs__img">
                        <img src="/images/cloth.png" alt="мерч">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 offset-lg-4">
                    <div class="merch__btn">
                        ЗРОБИТИ ПОКУПКУ
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @roboto: 'Roboto', sans-serif;
    @inter: 'Inter', sans-serif;

    .merch{
        margin-top: 88px;

        .merch__btn{
            text-align: center;
            margin-top: 72px;
            font-family: @inter;
            font-size: 20px;
            font-weight: 700;
            border-style: solid;
            border-width: 2px;
            color:#0091EA;
            padding: 15px;
            cursor: pointer;

            &:hover{
                background-color:#0091EA;
                color: white;
            }
        }

        .merch__blocs{
            margin-top: 83px;
            .metch__blocs__img{
                margin-top: 20px;
                img{
                    width: 100%;
                }
            }
        }
        .march__title{
            text-align: center;
            font-size: 36px;
            font-weight: 700;
            position: relative;

            &:before{
                content: "";
                width: 228px;
                height: 3px;
                background-color:#0091EA;
                position: absolute;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                bottom: -25px;
            }
        }
    }

</style>