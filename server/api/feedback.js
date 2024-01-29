import { z } from "zod";
import nodemailer from "nodemailer"


//! POST ЗАПРОС ДЛЯ ПОЛУЧЕНИЯ ДАННЫХ ИЗ ФОРМЫ И ОТПРАВКИ НА ПОЧТУ
export default defineEventHandler( async(req) => {
  
    let body = await readBody(req)

    const User = z.object({
      OurAccept: z.string().min(10).max(500),
      name: z.string().min(2).max(100),
      surname: z.string().min(2).max(100),
      description: z.string().min(10).max(500),
      email: z.string().min(5).max(100).email()
    });

    // Проверяю правильность написания всех полей из клиентской формы
    let check = User.safeParse(body).success

    if(!check){
      console.log(`Не все поля введены коректно`)
      return {
        text: `Не всі поля у формі введені коректно`,
        succes: false
      }
    }

    // Настраиваем почту с которой отправлять будем письмо
    let transporter = nodemailer.createTransport({
      service: `gmail`,
      auth: {
        user: `1nonamehack@gmail.com`,
        pass: `zjbrdckxwpgpevsa`
      }
    })

      function sendForm(email){
        return {
          from: `1nonamehack@gmail.com`,
          to: email,
          subject: `ЗВОРОТНIЙ ЗВ'ЯЗОК (ФОРМА)`,
          html: `
           Ваш запрос: ${body.OurAccept} <br/>
           Ім'я: ${body.name} <br/>
           Прізвище: ${body.surname} <br/>
           Опис: ${body.description} <br/>
           Email: ${body.email}
          `          
        }
      }
    
    // Отправка email письма на почту
    await transporter.sendMail(sendForm(body.email));  

    

    
    console.log(`Успешная отправка формы`)

   

  // console.log(body);   


      return {
        text: `Успішне відправлення форми`,
        succes: true
      }
    })