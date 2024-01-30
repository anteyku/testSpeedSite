import { z } from 'zod';
import TelegramBot from 'node-telegram-bot-api';

export default defineEventHandler( async(req) => {

    let formContent = await readBody(req);

    //? Схема валидации контента
    let validate = z.object({
        name: z.string().min(3).max(50),
        email: z.string().email().max(80),
        message: z.string().min(10).max(2000)
      })
   
      
    //? Проверка на правельность валидации полей из клиента
    if(!validate.safeParse(formContent).success){
      console.log(`ВАЛИДАЦИЯ ФОРМЫ ИЗ КЛИЕНТА ПРОШЛА НЕ УСПЕШНО`)
      return;
    } 

    let token = `6740737014:AAHG5I5wNMzlR6o5pJKOgEV3qycsUKy_cpk`;

    const bot = new TelegramBot(token, {polling: false});

    const chatId = `-4032976980`;
    // groupid -4032976980
    bot.sendMessage(chatId, `Имя - ${formContent.name} Email - ${formContent.email} Сообщения - ${formContent.message}`);

    return; // Выход из фунуции
    
})