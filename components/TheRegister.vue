<template>
    <section class="popup popup--reg">
        <div class="popup__inner">
            <button class="popup__close" type="button">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.4557 16.1502L10.276 8.97056L17.4557 1.79089C17.6288 1.61778 17.7261 1.383 17.7261 1.13819C17.7261 0.893384 17.6288 0.658601 17.4557 0.485495C17.2826 0.312389 17.0478 0.215138 16.803 0.215138C16.5582 0.215138 16.3234 0.312389 16.1503 0.485495L8.97064 7.66517L1.79097 0.485494C1.61786 0.312388 1.38308 0.215138 1.13827 0.215138C0.893464 0.215138 0.658682 0.312388 0.485576 0.485494C0.397527 0.567101 0.327994 0.666634 0.281663 0.777385C0.235332 0.888135 0.213278 1.00753 0.216989 1.12752C0.2207 1.24752 0.25009 1.36532 0.303177 1.473C0.356264 1.58067 0.431814 1.67572 0.524737 1.75173L7.70441 8.9314L0.485576 16.1502C0.312469 16.3233 0.215218 16.5581 0.215219 16.8029C0.215218 17.0477 0.31247 17.2825 0.485576 17.4556C0.658682 17.6287 0.893463 17.726 1.13827 17.726C1.38308 17.726 1.61786 17.6287 1.79097 17.4556L8.97064 10.276L16.1503 17.4556C16.3234 17.6287 16.5582 17.726 16.803 17.726C17.0478 17.726 17.2826 17.6287 17.4557 17.4556C17.6288 17.2825 17.7261 17.0477 17.7261 16.8029C17.7261 16.5581 17.6288 16.3233 17.4557 16.1502Z"
                        fill="white" />
                </svg>
            </button>
            <h2 class="popup__title">
                Registration
            </h2>
            <form @submit.prevent="onSubmit" class="popup__form popup-form" >
                <div class="popup-form__wrapper">
                    <p class="contact-error">
                        {{ errors.name }}
                     </p>
                    <input v-bind="name" class="popup-form__input" type="text" placeholder="Name" >
                    <p class="contact-error">
                        {{ errors.email }}
                     </p>
                    <input v-bind="email" class="popup-form__input" type="email" placeholder="Email" >
                    <p class="contact-error">
                        {{ errors.password }}
                     </p>
                    <input v-bind="password" class="popup-form__input" :type="pass" placeholder="Password" >
                    <p class="contact-error">
                        {{ errors.repeatPassword }}
                     </p>
                    <input v-bind="repeatPassword" class="popup-form__input" :type="pass" placeholder="Confirm your password" >
                    <div class="seePassword">
                        <Icon @click="seePassword" :class="{see: passActive}" name="material-symbols:disabled-visible" size="30" />
                    </div>
                    <div class="popup-form__checkbox">
                        <label class="container">
                            I agree with
                            <a href="#">
                                Terms & Conditions
                            </a>
                            <input type="checkbox" checked="checked">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="popup-form__buttons popup-form__buttons--reg">
                    <button class="popup-form__buttons-btn popup-btn--close btn--green" type="submit">
                        Register
                    </button>
                </div>
            </form>
            <p class="popup__text">
                Have an account? 
                <button class="popup__text-btn popup__text-btn--log" type="button">
                    Log in
                </button>
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
    
    // Тип поля password
    let pass = ref(`password`)

    // Смена цвета в иконки глаза
    let passActive = ref(false)

    function seePassword(){
        if(pass.value !== `password`){
            pass.value = `password`
            passActive.value = false;
            return;
        }
        pass.value = `text`;
        passActive.value = true;
    }


        // Библиотека создающая валидацию кастомных форм
        import { useForm } from 'vee-validate';
        // Подключаю библиотекку для валидации текста
        import { toTypedSchema } from '@vee-validate/zod';
        import { z } from 'zod';

        let schema = toTypedSchema(
            z.object({
              name: z.string().min(3).max(80),
              email: z.string().email().max(80),
              password: z.string().min(5).max(100),
              repeatPassword: z.string()
            }).refine((data) => data.password == data.repeatPassword, {
                message: "Passwords don't match",
                path: ["repeatPassword"]
            })
        )

        let { errors, values, defineInputBinds,  handleSubmit } = useForm({
            validationSchema: schema
        });


        let name = defineInputBinds('name');
        let email = defineInputBinds('email');
        let password = defineInputBinds('password');
        let repeatPassword = defineInputBinds('repeatPassword');

        const snackbar = useSnackbar();

        // Этот помощник представляет собой удобную оболочку вокруг $fetch. Он автоматически добавляет токен CSRF в заголовки.
        const { $csrfFetch } = useNuxtApp()

       
        let onSubmit = handleSubmit( async values =>{
            console.log(`ВАЛИДАЦИЯ ПРОШЛА УСПЕШНО`)


            snackbar.add({
                    type: 'success',
                    text: 'Register'
                })

                    // Отправляем запрос на бекенд (в заголовке уже вшит CSRF токен)
                    await $csrfFetch('/api/regForm', { method: 'POST', body: values}).then((s)=>{
                            console.log(s);
                    })   
            


        }, errors =>{
                console.log(errors);
                // Если не все поля формы заполнены коректно
                snackbar.add({
                        type: 'error',
                        text: 'Not all form fields are filled out correctly'
                })
        })

    
</script>


<style lang="less" scoped>
        .popup-form__wrapper{
            position: relative;
            .seePassword{
                width: 40px;
                height: 40px;
                position: absolute;
                bottom: 110px;
                right: -40px; 
                display: flex;
                align-items: center;
                justify-content: center;
                .icon{
                    color: white;
                    cursor: pointer;
                }
                .see{
                    color: rgb(0, 255, 0);
                }
            }
        }

        .contact-error{
            border-style: solid;
            border-color: red;
            color: red;
            font-size: 18px;
            line-height: 24px;;
            font-weight: 500;
            font-family: sans-serif;
        }
</style>