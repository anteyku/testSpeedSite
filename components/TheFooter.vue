<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <a href="https://magnumopus.space/" target="_new"  class="footer__title">
                        Created by magnumopus.space
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @roboto: 'Roboto', sans-serif;
    @inter: 'Inter', sans-serif;

    .footer{
       margin-top: 226px;
        background-color: black;
        .footer__title{
            color: rgba(255, 255, 255, 0.56);
            text-align: center;
            padding-top: 35px;
            padding-bottom: 35px;
            font-family: @inter;
            font-size: 17px;
            font-weight: 400;
            display: block;
        }
    }
</style>