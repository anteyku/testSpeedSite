<template>
    <div class="missions">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="mission__title">МІСІЯ <span>НАШОГО</span> ФОНДУ</div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="mission__description">
                        Допомогати з любов'ю матусям з дітьми, <br/>
                        які опинилися у складних життєвих обставинах через війну
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 we__swiper">

                  
                  <Swiper
                  :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination, SwiperNavigation]"
                  :navigation="true"
                  :pagination="true"
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
                      <LazyVideo message="https://www.youtube.com/watch?v=BfFK1oQaO80"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LazyVideo message="https://www.youtube.com/watch?v=GKz71gKNnjg"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <LazyVideo message="https://www.youtube.com/watch?v=sT9OdSqpdMc"/>
                  </SwiperSlide>
              </Swiper>
                </div>
            </div>
        </div>
    </div>
  
</template>





<script>

import LazyVideo from './LazyVideo.vue';


    export default {
      components: {
        LazyVideo     
      }      
    }


/*
import { loadScript } from "vue-plugin-load-script";
  loadScript("https://cdnjs.cloudflare.com/ajax/libs/lite-youtube-embed/0.2.0/lite-yt-embed.min.js")
    .then((suv) => {
      console.log(suv, `СКРРИПТ УСПЕШНО ПОДКЛЮЧИЛСЯ`)
    })
    .catch((err) => {
      // Failed to fetch script
      console.log(err);
    });
*/


        /*
        useHead({   
        // Язык страницы
        htmlAttrs: {
        lang: 'ru'
        },
        title: 'My LOL',
            meta: [
                { name: 'description', content: 'My amazing site.' }
            ],
            bodyAttrs: {
                class: 'test'
            },
            script: [ { src: 'https://cdnjs.cloudflare.com/ajax/libs/lite-youtube-embed/0.2.0/lite-yt-embed.min.js' } ]
        })
        */

 
</script>


<style lang="less">
    @roboto: 'Roboto', sans-serif;
    @inter: 'Inter', sans-serif;


    .missions{

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
                  background: #fff;
              
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
                  height: 100%;
                  lite-youtube{
                    margin: 0 auto;
                    height: 100%;
                    width: auto;
                  }
                  img{
                    height: 100%;
                    width: auto;
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


        .mission__title{
            font-family: @inter;
            text-align: center;
            width: 100%;
            margin-top: 136px;
            font-weight: 700;
            font-size: 36px;

            span{
                color:#0091EA;
            }
        }
        .mission__description{
            font-family: @inter;
            width: 100%;
            text-align: center;
            font-weight: 300;
            font-size: 20px;
            margin-top: 15px;
        }
    }
</style>