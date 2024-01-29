<template>
    <div class="header">
        <div class="header__filter"></div>
        <div class="container header__con">
            <div class="row">
                <div class="col-lg-6 offset-lg-6">
                    <div class="header__adress">
                        Адрес організації -
                        <br/>
                        <span>
                            Київ Степа Руданського 3а Кременчуг Соборна 40/2 ( склад )
                        </span>
                         
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 offset-lg-4">
                    <div class="header__con__logo">
                        
                         
                        
                        <img src="/images/logo.webp"  alt="картинка">
                        <!--
                            <nuxt-img src="/images/logo.webp" loading="lazy" />
                        -->
                            
                    
                        
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-10 offset-lg-1" offset-lg-1>
                    <div class="header__con__title">
                        БЛАГОДІЙНИЙ ФОНД "<span>У МАТУСІНИХ ДОЛОНЯХ</span>" 
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 offset-lg-4">
                    
                        <ClientOnly>
                            <nuxt-link class="header__con__button" to="#requs" exact> ДОПОМОГТИ </nuxt-link>
                        </ClientOnly>
                    
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="less">

    @roboto: 'Roboto', sans-serif;

    .header{
        border-style: solid;
        min-height: 100vh;
        background-size: cover;
        background-position: center;
        background-image: url('~/assets/images/image-header.webp');
        position: relative;

        .header__filter{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 1;
        }

        .header__con{
            position: relative;
            z-index: 10;
            color: white;
            padding-bottom: 105px;
            .header__con__button{
                border-style: solid;
                border-color: red;
                margin-top: 74px;
                text-align: center;
                padding: 14px;
                border-width: 2px;
                border-color: white;
                font-family: @roboto;
                color: #FFEB3B;
                font-size: 19px;
                font-weight: 600;
                cursor: pointer;
                display: block;

                a{
                    color: #FFEB3B;
                }

                &:hover{
                    background-color: #0091EA;
                    color: white;
                    border-color:#0091EA;
                }
            }
            .header__adress{
                font-family: @roboto;
                font-size: 16px;
                margin-top: 23px;
                text-align: right;
                line-height: 25px;

                span{
                    color: #0091EA;
                }
            }
            .header__con__logo{
                margin-top: 91px;

                img{
                    width: 100%;
                }
            }
            .header__con__title{
                text-align: center;
                margin-top: 77px;
                font-family: @roboto;
                font-size: 36px;
                font-weight: 300;
                position: relative;

                &:before{
                    position: absolute;
                    content: "";
                    left: 20%;
                    bottom: -28px;
                    width: 60%;
                    background-color:#0091EA;
                    height: 3px;
                }

                span{
                    font-weight: 600;
                    color: #FFEB3B;
                }
            }
        }
    }
</style>