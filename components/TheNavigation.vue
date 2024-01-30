<template>
    <NuxtSnackbar />
    <header class="header" data-aos="fade-down">
        <div class="container">
            <div class="header__inner">
                <a class="header__logo logo" href="/">
                    <img class="logo__img" src="images/logo.svg" alt="logo">
                </a>
                <div class="header__wrapper">
                    <nav class="header__menu menu">
                        <ul class="menu__list">
                            <li class="menu__list-item">
                                <a class="menu__list-link" href="/about">
                                    About Us
                                </a>
                            </li>
                            <li class="menu__list-item">
                                <a class="menu__list-link" href="/products">
                                    Subscriptions
                                </a>
                            </li>
                            <li class="menu__list-item">
                                <a class="menu__list-link" href="/terms">
                                    Reviews
                                </a>
                            </li>
                            <li class="menu__list-item">
                                <a class="menu__list-link" href="/faq">
                                    FAQ
                                </a>
                            </li>
                            <li class="menu__list-item">
                                <a class="menu__list-link" href="/contacts">
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </nav>
      
                    <button class="header__button btn" type="button">
                        Sign In
                    </button>
                </div>
                <button class="header__burger burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
</template>