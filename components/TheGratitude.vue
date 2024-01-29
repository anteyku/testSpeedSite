<template>
    <div class="grati">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="grati__title">
                        ПОДЯКА <span>ФОНДУ</span> 
                    </div>
                </div>
            </div>
            <div class="row grati__blocks">
                <div class="col-lg-3">
                    <div class="grati__blocks__mini-block">
                        <div class="grati__blocks__mini-block__img" @click="modalImg(`47299.jpg`)">
                            <!--
                                 <nuxt-img src="/images/47299.jpg" loading="lazy" />
                            -->
                            <img src="/images/47299.jpg" alt="модальная картинка">
                        </div>
                        <div class="grati__blocks__mini-block__title">
                            ЗА ДОПОМОГУ
                        </div>
                        <div class="grati__blocks__mini-block__description">
                            Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства приписывается Ричарду Макклинтоку.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <van-overlay :show="show" @click="show = false">
        <div class="wrapper" @click.stop>
            <div class="close" @click="show = false"><van-icon name="cross" size="40" /></div>
          <div class="container">
            <div class="row">
                <div class="col-lg-4 offset-lg-4">
                    <div class="modalImg">
                        <img :src="modalImage" alt="модальная картинка">
                    </div>
                </div>
            </div>
           
                                                        
          </div>
        </div>
      </van-overlay>

</template>

<script>
    export default {
        data(){
            return {
                modalImage: ``
            }
        },
        methods: {
            modalImg(arg){
                this.modalImage = `/images/${arg}`
                this.show = true
            }
        },
        setup() {
            const show = ref(false);
            return { show };
        }
    }
</script>

<style lang="less">
    @roboto: 'Roboto', sans-serif;
    @inter: 'Inter', sans-serif;

    .van-overlay{
        display: flex;
        align-items: center;
       
        .wrapper{
            position: relative;
            .close{
                position: absolute;
                top: -50px;
                right: 10px;
                color: white;
                cursor: pointer;
                &:hover{
                    color: greenyellow;
                }
            }
            .modalImg{
                
                img{
                    width: 100%;
                }
            }

        }
    }



    .grati{
        margin-top: 86px;

        .grati__blocks{
            .grati__blocks__mini-block{
                margin-top: 85px;
                .grati__blocks__mini-block__img{
                    cursor: pointer;
                    img{
                        width: 100%;
                    }
                }
                .grati__blocks__mini-block__title{
                    font-family: @roboto;
                    font-weight: 600;
                    font-size: 16px;
                    padding: 10px;
                }
                .grati__blocks__mini-block__description{
                    font-family: @roboto;
                    font-size: 16px;
                    font-weight: 300;
                    padding-left: 10px;
                    padding-right: 10px;
                }
            }
        }

        .grati__title{
            font-family: @inter;
            text-align: center;
            font-weight: 700;
            font-size: 36px;
            position: relative;

            &:before{
                width: 168px;
                position: absolute;
                height: 3px;
                content: "";
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                background-color: black;
                bottom: -11px;
            }

            span{
                color:#0091EA;
            }
        }
    }
</style>