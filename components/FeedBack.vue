<template>
    <div class="feedback">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="feedback__title">
                        ЗВОРОТНIЙ <span>ЗВ'ЯЗОК</span> 
                    </div>
                </div>
            </div>
            <div class="row feedback__form">
                <van-form @submit="onSubmit">
                    <van-cell-group inset>
                      <van-field
                        v-model="username"
                        name="OurAccept"
                        label="Ваш запрос"
                        placeholder="Заголовок вашого звернення"
                        :rules="[{ required: true, message: 'Потрібно ввести імя користувача' }]"
                      />
                      <van-field
                        v-model="password"
                        type="text"
                        name="name"
                        label="Ім'я"
                        placeholder="Введіть ім'я"
                        :rules="[{ required: true, message: 'Необхідно ввести пароль' }]"
                      />
                      <van-field
                        v-model="surname"
                        type="text"
                        name="surname"
                        label="Прізвище"
                        placeholder="Ваше прізвище"
                        :rules="[{ required: true, message: 'Необхідно ввести прізвище' }]"
                      />  
                      <van-field
                        v-model="description"
                        type="text"
                        name="description"
                        label="Опис"
                        placeholder="Ваш опис"
                        :rules="[{ required: true, message: 'Необхідно ввести опис' }]"
                      />  
                      <van-field
                        v-model="email"
                        type="text"
                        name="email"
                        label="Email"
                        placeholder="Ваш email"
                        :rules="[{ required: true, message: 'Необхідно ввести email' }]"
                      />                                                                  
                    </van-cell-group>
                    <div style="margin: 16px;">
                      <van-button block type="primary" native-type="submit">
                        Відправити
                      </van-button>
                    </div>
                  </van-form>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { ref } from 'vue';

    const username = ref('');
    const password = ref('');
    const surname = ref(``);
    const description = ref(``);
    const email = ref(``);

    
    

    let onSubmit = async(arg)=>{
                console.log(arg)
                let data = arg;


                // Отправка данных из формы на сервер
                await $fetch('/api/feedback', { method: 'POST', body: data }).then((s)=>{
                  console.log(s);
                })
    }



    
</script>

<style lang="less">

    @roboto: 'Roboto', sans-serif;
    @inter: 'Inter', sans-serif;

    .feedback{
        margin-top: 87px;

        .feedback__form{
            margin-top: 58px;
        }
        .feedback__title{
            text-align: center;
            font-family: @inter;
            font-size: 36px;
            font-weight: 700;
            position: relative;

            &:before{
                position: absolute;
                content: "";
                width: 228px;
                height: 3px;
                background-color:#0091EA;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                bottom: -31px;
            }

            span{
                color:#0091EA;
            }
        }
    }

</style>