<template>
  <div>

    <!--
     <ClientOnly>
      <NuxtPage />
    </ClientOnly>     
    -->
   
      <NuxtPage />
    
      
   
    
      
   
   
  </div>
</template>

<script setup>


  onMounted(()=>{
// Анимация при скролле на страницах
jQuery(document).ready(function () {
    (function () {
        // your page initialization code here
        // the DOM will be available here
        AOS.init({
            duration: 1000,
            offset: 0, // offset (in px) from the original trigger point
            anchorPlacement: 'top-bottom', // define where the AOS animations will be triggered
        });
    })();
});

//

$(function () {
    // Если при регистрации не будет активным чекбокс, не позволять нажать на кнопку 
    $('.popup-form__checkbox').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('popup-form__checkbox--disabled')
        $('.popup-form__buttons--reg').toggleClass('popup-form__buttons--disabled');
    });

    // 

    // Механика для открытия - закрытия ответов вопросов
    $('.faq-list__item').on('click', function (event) {
        if ($(this)[0].classList.contains('faq-list__item--active')) {
            $(this).removeClass('faq-list__item--active');
        } else {
            $('.faq-list__item').removeClass('faq-list__item--active');
            $(this).toggleClass('faq-list__item--active');
        }
    });
    // 

    // Механика для открытия языков 
    $('.lang').on('click', function (event) {
        $('.lang').toggleClass('lang--active');
    });
    // 

    // Механика для переключения табов на странице аккаунт
    $('.account-aside__button').on('click', function (event) {
        $('.account__wrapper--active').removeClass('account__wrapper--active')
        for (let item of ($('.account__wrapper'))) {
            if (item.id == $(this)[0].id) {
                item.classList.add('account__wrapper--active')
            }
        }
        $('.account-aside__button--active').removeClass('account-aside__button--active')
        $(this).addClass('account-aside__button--active')
    });
    //

    // Больше - меньше отзывов 
    $('.testimonials__buttons-btn--more').on('click', function (event) {
        $('.testimonials').toggleClass('testimonials--active');
        $(this).toggleClass('testimonials__buttons-btn--active');
    });
    //

    // Открываем моб меню
    $('.burger').on('click', function (event) {
        $('body').toggleClass('body--active');
    });
    //

    // Механика сообщения о том что нужно login
    $('.products-item__box-link').on('click', function (event) {
        $('.must-logged').addClass('must-logged--active');
        setTimeout(() => {
            $('.must-logged').addClass('must-logged--disabled');
        }, 2000)
        setTimeout(() => {
            $('.must-logged').removeClass('must-logged--active');
        }, 5000)
    });
    // 

    // Popups - код для того что бы открыть попап - закрыть и так же их поочередность 
    $('.must-logged__close').on('click', function (event) {
        $('.must-logged').removeClass('must-logged--active');
        $('.must-logged').removeClass('must-logged--disabled');
    });

    $('.must-logged__btn').on('click', function (event) {
        $('.popup').removeClass('popup--active');
        $('.must-logged').removeClass('must-logged--active');
        $('.popup--login').addClass('popup--active');
        $('body').addClass('body--popup');
    });

    $('.popup__close').on('click', function (event) {
        $('.popup').removeClass('popup--active');
        $('body').removeClass('body--popup');
    });

    $('.popup-btn--close').on('click', function (event) {
        $('.popup').removeClass('popup--active');
        $('body').removeClass('body--popup');
    });

    $('.header__button').on('click', function (event) {
        $('.popup--login').addClass('popup--active');
        $('body').addClass('body--popup');
    });

    $('.popup-form__buttons-btn--reg').on('click', function (event) {
        $('.popup').removeClass('popup--active');
        $('.popup--reg').addClass('popup--active');
        $('body').addClass('body--popup');
    });

    $('.popup__text-btn--log').on('click', function (event) {
        $('.popup').removeClass('popup--active');
        $('.popup--login').addClass('popup--active');
        $('body').addClass('body--popup');
    });

    $('.popup-form__btn--forgot').on('click', function (event) {
        $('.popup').removeClass('popup--active');
        $('.popup--restore-password').addClass('popup--active');
        $('body').addClass('body--popup');
    });

    $('.popup-form__buttons-btn--restore').on('click', function (event) {
        $('.popup').removeClass('popup--active');
        $('.popup--email-sent').addClass('popup--active');
        $('body').addClass('body--popup');
    });

    $('.testimonials__buttons-btn--review').on('click', function (event) {
        $('.popup').removeClass('popup--active');
        $('.popup--review').addClass('popup--active');
        $('body').addClass('body--popup');
    });

    $('.account__top-btn').on('click', function (event) {
        $('.popup').removeClass('popup--active');
        $('.popup--review').addClass('popup--active');
        $('body').addClass('body--popup');
    });

    $('.account-settings-item__box-button--password').on('click', function (event) {
        $('.popup').removeClass('popup--active');
        $('.popup--new-password').addClass('popup--active');
        $('body').addClass('body--popup');
    });

    $('.steps__heading-link').on('click', function (event) {
        $('.popup').removeClass('popup--active');
        $('.popup--reg').addClass('popup--active');
        $('body').addClass('body--popup');
    });
    //
})

// Создание механики рейтинга ( звезд )
if (document.querySelectorAll('.star-rating')) {
    const stars = document.querySelectorAll('.star-rating input[type="radio"]');

    function handleStarHover(event) {
        const hoveredStarIndex = Array.from(stars).indexOf(event.target);

        stars.forEach((star, index) => {
            if (index <= hoveredStarIndex) {
                star.checked = true;
            } else {
                star.checked = false;
            }
        });
    }

    stars.forEach((star) => {
        star.addEventListener('mouseover', handleStarHover);
    });
}
//

//  Форма отправки данных, ниже закоменчен код который поможет в отправке данных
document.querySelector(".popup-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
    // // Получаем данные из формы
    // const formData = new FormData(this);

    // // Определяем URL вашего сервера (BA.php)
    // const serverEndpoint = 'BA.php';

    // // Создаем объект XMLHttpRequest
    // const xhr = new XMLHttpRequest();

    // // Настраиваем запрос
    // xhr.open('POST', serverEndpoint, true);

    // // Настраиваем обработчик события завершения запроса
    // xhr.onload = function() {
    //     if (xhr.status >= 200 && xhr.status < 300) {
    //         // Успешный запрос
    //         console.log('Успешный запрос:', xhr.responseText);
    //         // Дополнительная обработка ответа может потребоваться
    //     } else {
    //         // Ошибка запроса
    //         console.error('Ошибка запроса:', xhr.status, xhr.statusText);
    //     }
    // };

    // // Обработка ошибок
    // xhr.onerror = function() {
    //     console.error('Произошла ошибка при отправке запроса.');
    // };

    // // Отправляем данные формы на сервер
    // xhr.send(formData);
});
//


// Слайдер
if (document.querySelector('.testimonials-swiper')) {
    new Swiper('.testimonials-swiper', {
        slidesPerView: 4.2,
        loop: true,
        initialSlide: 0,
        centeredSlides: true,
        speed: 1000,
        spaceBetween: 15,
        autoplay: {
            delay: 1000, // Delay between slides in milliseconds (3 seconds in this example)
            disableOnInteraction: false, // Autoplay continues even when the user interacts with the slider
        },
        navigation: {
            prevEl: '.testimonials-swiper__prev',
            nextEl: '.testimonials-swiper__next',
        },
        pagination: {
            el: '.recalls-swiper__pagination',
            type: 'bullets',
        },
        breakpoints: {
            301: {
                slidesPerView: 1.2,
                loop: true,
                initialSlide: 0,
                centeredSlides: true,
                speed: 1000,
                spaceBetween: 15,
            },
            551: {
                slidesPerView: 2.2,
                loop: true,
                initialSlide: 0,
                centeredSlides: true,
                speed: 1000,
                spaceBetween: 15,
            },
            751: {
                slidesPerView: 3.2,
                loop: true,
                initialSlide: 0,
                centeredSlides: true,
                speed: 1000,
                spaceBetween: 15,
            },
            1351: {
                slidesPerView: 4.2,
                loop: true,
                initialSlide: 0,
                centeredSlides: true,
                speed: 1000,
                spaceBetween: 15,
            },
        }
    });
}
// 

// Слайдер
if (document.querySelector('.partners-swiper')) {
    new Swiper('.partners-swiper', {
        slidesPerView: 4.6,
        loop: true,
        initialSlide: 2,
        centeredSlides: true,
        speed: 1000,
        spaceBetween: 0,
        autoplay: {
            delay: 1000, // Delay between slides in milliseconds (3 seconds in this example)
            disableOnInteraction: false, // Autoplay continues even when the user interacts with the slider
        },
        // navigation: {
        //     prevEl: '.catalog-first-swiper-button-prev',
        //     nextEl: '.catalog-first-swiper-button-next',
        // },
        // pagination: {
        //     el: '.recalls-swiper__pagination',
        //     type: 'bullets',
        // },
        breakpoints: {
            301: {
                slidesPerView: 1.2,
                loop: true,
                initialSlide: 2,
                centeredSlides: true,
                speed: 1000,
                spaceBetween: 0,
            },
            551: {
                slidesPerView: 2.2,
                loop: true,
                initialSlide: 2,
                centeredSlides: true,
                speed: 1000,
                spaceBetween: 0,
            },
            751: {
                slidesPerView: 3.2,
                loop: true,
                initialSlide: 2,
                centeredSlides: true,
                speed: 1000,
                spaceBetween: 0,
            },
            1351: {
                slidesPerView: 4.6,
                loop: true,
                initialSlide: 2,
                centeredSlides: true,
                speed: 1000,
                spaceBetween: 0,
            },
        }
    });
}
// 

if (document.querySelector('.testimonials-swiper')) {
    // Функция для установки высоты слайдера равной высоте самого высокого слайда
    function setSwiperHeight() {
        const swiperContainer = document.querySelector('.testimonials-swiper');
        const swiperSlides = swiperContainer.querySelectorAll('.swiper-slide');

        let maxHeight = 0;

        swiperSlides.forEach(slide => {
            const slideHeight = slide.offsetHeight;
            if (slideHeight > maxHeight) {
                maxHeight = slideHeight;
            }
        });

        swiperSlides.forEach(slide => {
            slide.style.height = `${maxHeight}px`;
        });
    }

    // Установка высоты слайдера при загрузке страницы
    window.addEventListener('load', setSwiperHeight);

    // Установка высоты слайдера при изменении размера окна
    window.addEventListener('resize', setSwiperHeight);
}


// Кастомные селекты
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
// 
  })

</script>
