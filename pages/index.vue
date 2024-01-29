<template>
    <ClientOnly>
        <teleport to="body">
            <vue3-snackbar style="font-family: sans-serif" bottom left :duration="3000"></vue3-snackbar>
        </teleport>
    </ClientOnly>
    <!-- Шапка сайта -->
    <TheHeader/>
    <!-- Слайдер с надписсю - "Миссия нашего фонда"-->
    <ClientOnly>
        <MissionFont/>
    </ClientOnly>
    <!-- Статистика по фонду -->
    <StaticFond/>
    <!-- Яку допомогу ми надаэмо ? -->
    <WayHelp/>
    <!-- Реквизыти для допомоги -->
    <TheRequisites/>
    <!-- Сбор средств на определенные вещи -->
    <TheFundraising/>
    <!-- Страница благодарности -->
    <TheGratitude/>
    <!-- Проекты -->
    <ClientOnly>
        <TheProject/>
    </ClientOnly>
    <!-- Телеграм канал -->
    <TelegramChanel/>
    <!-- Видео звит -->
    <ClientOnly>
        <TheReport/>
    </ClientOnly>
    <!-- Партнеры -->
    <ThePartners/>
    <!-- Обратная связь -->
    <FeedBack/>
    <!-- Як откримати допомогу -->
    <HowHelp/>
    <!-- Наша команда -->
    <OurComand/>
    <!-- Сканеры документов -->
    <ScanDoc/>
    <!-- Наш мерч -->
    <TheMerch/>
    
</template>

<script setup>
    useHead({   
        // Язык страницы
        htmlAttrs: {
             lang: 'ua'
        },
        title: 'Благодійний фонд "У МАТУСІНИХ ДОЛОНЯХ"',
        meta: [
            { name: 'description', content: 'Місія фонду "У МАТУСІНИХ ДОЛОНЯХ" - допомогати з любов`ю матусям з дітьми, які опинилися у складних життєвих обставинах через війну ' },
            { name: 'keywords', content: 'фонд допомоги, фонд допомоги дітям' },
        ],
    })
</script>




