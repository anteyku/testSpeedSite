import { z } from 'zod';

export default defineEventHandler( async(req) => {

    let formContent = await readBody(req);

      //? Схема валидации контента
      let validate = z.object({
        email: z.string().email().max(80),
        password: z.string().min(5).max(100)
      })


    //? Проверка на правельность валидации полей из клиента
    if(!validate.safeParse(formContent).success){
        console.log(`ВАЛИДАЦИЯ ФОРМЫ ИЗ КЛИЕНТА ПРОШЛА НЕ УСПЕШНО`)
        return;
      } 


      console.log(`Пришел запрос на АВТОРИЗАЦИЮ`)
      
      return `УСПЕШНАЯ ВАЛИДАЦИЯ ЛОГИНА`
   
    
})