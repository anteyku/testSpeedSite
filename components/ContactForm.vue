<template>
    <section class="main__contact contact">
        <div class="container">
            <h2 class="contact__title" data-aos="fade-right">
                Have a question?
            </h2>
            <p class="contact-error">
               {{ errors.name }}
            </p>
            <form @submit="onSubmit" class="contact__form contact-form" data-aos="fade-right" novalidate>
                <div class="contact-form__row">
                    <input class="contact-form__row-input" v-bind="name" type="text" placeholder="Name" >
                    <input class="contact-form__row-input" v-bind="email" type="email" placeholder="Email" >
                </div>
                <p class="contact-error">
                    {{ errors.email }}
                 </p>
                <textarea class="contact-form__textarea" v-bind="message" cols="30" rows="10"
                    placeholder="Message" ></textarea>

                    <p class="contact-error">
                        {{ errors.message }}
                     </p>
                <button class="contact-form__button btn--green" type="submit">
                    Send
                </button>
            </form>
        </div>
    </section>

  
</template>

<script setup>

        // Библиотека создающая валидацию кастомных форм
        import { useForm } from 'vee-validate';
        // Подключаю библиотекку для валидации текста
        import { toTypedSchema } from '@vee-validate/zod';
        import { z } from 'zod';

        const snackbar = useSnackbar();

        // Этот помощник представляет собой удобную оболочку вокруг $fetch. Он автоматически добавляет токен CSRF в заголовки.
        const { $csrfFetch } = useNuxtApp()


        let schema = toTypedSchema(
            z.object({
              name: z.string().min(3).max(50),
              email: z.string().email().max(80),
              message: z.string().min(10).max(2000)
            })
        )

        let { errors, values, defineInputBinds,  handleSubmit } = useForm({
            validationSchema: schema
        });

        let name = defineInputBinds('name');
        let email = defineInputBinds('email');
        let message = defineInputBinds('message');

        let onSubmit = handleSubmit( async values => {
                // Форма прошла валидацию
                //console.log(values);

                snackbar.add({
                    type: 'success',
                    text: 'Your question has been sent successfully'
                })

                    // Отправляем запрос на бекенд (в заголовке уже вшит CSRF токен)
                    await $csrfFetch('/api/contactForm', { method: 'POST', body: values}).then((s)=>{
                            console.log(s);
                    })   


        }, errors =>{
            // Если не все поля формы заполнены коректно
                snackbar.add({
                    type: 'error',
                    text: 'Not all form fields are filled out correctly'
                })
    
        })



</script>

<style scoped lang="less">
    .contact-error{
        border-style: solid;
        border-color: red;
        color: red;
        margin-bottom: 20px;
        font-size: 18px;
        line-height: 24px;;
        font-weight: 500;
        font-family: sans-serif;
    }
</style>