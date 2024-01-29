<template>
    <div class="project">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="project__title">
                        ПРОЕКТИ
                    </div>
                </div>
            </div>
            <div class="row project__mini-block">
                <div class="col-lg-12 we__swiper">


                    <Swiper
                    :modules="[SwiperEffectCreative,  SwiperNavigation]"
                    :navigation="true"
                
                    :slides-per-view="1"
                    :loop="true"
                    :effect="'creative'"
                    :autoplay="{
                    delay: 8000,
                    disableOnInteraction: true,
                    }"
                    :creative-effect="{
                    prev: {
                        shadow: false,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                    }"
                    class="swiper"
                >
                    <SwiperSlide>
                        <div class="we__swiper__img">
                            <img src="/images/photo_2022-06-20_13-.jpg" alt="картинка">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      2
                    </SwiperSlide>
                    <SwiperSlide>
                      3
                    </SwiperSlide>
                </Swiper>



                </div>
                <div class="col-lg-12">
                    <div class="project__mini-block__title">
                        Гуманітарна допомога дітям
                    </div>
                    <div class="project__mini-block__description">
                        Текст-заполнитель — это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода
                    </div>
                </div>


            </div>
            <div class="row project__mini-block">
                <div class="col-lg-12 we__swiper">

                    <Swiper
                    :modules="[SwiperEffectCreative,  SwiperNavigation]"
                    :navigation="true"
                    
                    :slides-per-view="1"
                    :loop="true"
                    :effect="'creative'"
                    :autoplay="{
                    delay: 8000,
                    disableOnInteraction: true,
                    }"
                    :creative-effect="{
                    prev: {
                        shadow: false,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                    }"
                    class="swiper"
                >
                    <SwiperSlide>
                        <div class="we__swiper__img">
                            <img src="/images/photo_2022-06-20_13-.jpg" alt="картинка">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      2
                    </SwiperSlide>
                    <SwiperSlide>
                      3
                    </SwiperSlide>
                </Swiper>

                    

                </div>
                <div class="col-lg-12">
                    <div class="project__mini-block__title">
                        Гуманітарна допомога дітям
                    </div>
                    <div class="project__mini-block__description">
                        Текст-заполнитель — это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода
                    </div>
                </div>


            </div>            
        </div>
    </div>
</template>

<script>


</script>

<style lang="less">
    @roboto: 'Roboto', sans-serif;
    @inter: 'Inter', sans-serif;

    .project{
        padding-top: 57px;
        padding-bottom: 57px;
        background-color: black;
        margin-top: 148px;


        .project__mini-block{
            border-bottom-style: solid;
            border-color: #0091EA;
            padding-bottom: 64px;
            .project__mini-block__description{
                font-family:@inter;
                font-size:16px;
                font-weight: 600;
                color: white;
                margin-top: 21px;
            }
            .project__mini-block__title{
                color: white;
                margin-top: 17px;
                font-family: @inter;
                font-weight: 700;
                font-size: 20px;
                
            }
            .we__swiper{
                min-height: 400px;
                margin-top: 50px;
                .swiper {
                    width: 100%;
                    height: 100%;
                    padding: 10px;
    
                    .we__swiper__swiper__video{
                        width: 100%;
                        height: 100%;
                        
    
    
                    }
                  
                    .swiper-slide {
                      text-align: center;
                      font-size: 18px;
                      background: black;
                      color: white;
                  
                      /* Center slide text vertically */
                      display: -webkit-box;
                      display: -ms-flexbox;
                      display: -webkit-flex;
                      display: flex;
                      -webkit-box-pack: center;
                      -ms-flex-pack: center;
                      -webkit-justify-content: center;
                      justify-content: center;
                      -webkit-box-align: center;
                      -ms-flex-align: center;
                      -webkit-align-items: center;
                      align-items: center;
                   //   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    
                   
    
    
                   .we__swiper__img{
                      width: 90%;
                      height: 400px;
                      
                      img{
                        width: auto;
                        height: 100%;
                        margin: 0 auto;
                    
                      }
                    }               
    
                  
                  
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                      }
                  
                  
                    }
                  
                    .swiper-pagination{
                      bottom: 20px;
                    }
                  
                    .swiper {
                      margin-left: auto;
                      margin-right: auto;
                    }
                  
                  }
            }
        }






        .project__title{
            color: white;
            font-family: @inter;
            font-weight: 700;
            font-size: 36px;
            text-align: center;
            position: relative;

            &:before{
                position: absolute;
                width: 351px;
                height: 3px;
                background-color: #0091EA;
                content: "";
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                bottom: -25px;
            }
        }
    }
</style>