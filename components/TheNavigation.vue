<template>
    
       <header>
            <div class="header__background">
                <div class="container">
                   <div class="row">
                        <div class="col-lg-2">
                            <div class="navigation__multilingualism">
                                <div class="navigation__multilingualism__arrow">
                                    <select v-model="lang" @change="changeMultilingualism" class="navigation__multilingualism__select">
                                        <option class="navigation__multilingualism__select__option" value="UK">UK</option>
                                        <option class="navigation__multilingualism__select__option" value="EN">EN</option>
                                      </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 offset-lg-1">
                            <div class="header__background__page">
                                <NuxtLink v-if="$route.path == `/`" to="/" class="active">ГОЛОВНА</NuxtLink>
                                <NuxtLink v-else to="/">ГОЛОВНА</NuxtLink>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="header__background__page">
                                <NuxtLink v-if="$route.path == `/doc`" to="/doc" class="active">ДОКУМЕНТИ ТА ЗВІТ</NuxtLink>
                                <NuxtLink v-else to="/doc">ДОКУМЕНТИ ТА ЗВІТ</NuxtLink>
                            </div>                           
                        </div>
                        <div class="col-lg-2">
                            <div class="header__background__page">
                                <NuxtLink v-if="$route.path == `/job`" to="/job" class="active">НАША РОБОТА</NuxtLink>
                                <NuxtLink v-else to="/job">НАША РОБОТА</NuxtLink>
                            </div>                                 
                        </div>
                        <div class="col-lg-2">
                            <div class="header__background__page">
                                <NuxtLink v-if="$route.path == `/contact`" to="/contact" class="active">КОНТАКТИ</NuxtLink>
                                <NuxtLink v-else to="/contact">КОНТАКТИ</NuxtLink>
                            </div>                                
                        </div>
                   </div>
                </div>
            </div>
       </header>
    
</template>

<script>
    export default {
        mounted(){

        },
        data(){
            return {
                lang: `UK`
            }
        },
        methods: {
            changeMultilingualism(){
                console.log(`Смена языка`)
            }
        }   
    }
</script>


<style lang="less">

    @roboto: 'Roboto', sans-serif;

    .header__background{
        background-color: black;
        color: white;
        
        padding-bottom: 20px;
        .navigation__multilingualism{
            margin-top: 24px;

            .navigation__multilingualism__arrow{
              position: relative;
              &:before{
                content: ">";
                top: 9px;
                right: 30%;
                position: absolute;
                transform: rotate(90deg);
                font-family: @roboto;
                font-size: 20px;
                color:#0091EA;
                font-weight: 600;
    
                // Снимаю клик со стрелочки (так как стрелочка не реагирует на select при навидении на нее)
                pointer-events: none;
              }
    
          
              .navigation__multilingualism__select{
                -moz-appearance: none;
                -webkit-appearance: none;
                appearance: none;
                border-style: solid;
                border-color: #BBDEFB;
                background-color: #1976D2;
                color: white;
                padding-left: 14px;
                padding-right: 10px;
                font-family: @roboto;
                font-size: 19px;
                padding-top: 9px;
                padding-bottom: 5px;
                font-weight: 600;
                border-width: 2px;
                cursor: pointer;
                outline-style: none;

                background-color: transparent;
                display: block;
                width: 100%;
                text-align: center;
                border-color:#0091EA;

                .navigation__multilingualism__select__option{
                    color: black;

                    &:focus{
                        color: blue;
                    }
                }

                &:focus{
                  border-color:greenyellow;
                }
    
             
              }
              .navigation__multilingualism__select::-ms-expand{
                display: none;
              }
            }
          }       
   

        


        .header__background__page{
            text-align: center;
            font-family: @roboto;
            font-weight: 500;
            font-size: 19px;
            color: white;
            cursor: pointer;
            margin-top: 24px;
            padding-top: 9px;
            padding-bottom: 5px;

            a{
                &:hover{
                    color:greenyellow;
                }
            }


        }

        .active{
            color: #0091EA;
        }
    }
</style>