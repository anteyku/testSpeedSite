<template>
    <section class="popup popup--restore-password">
        <div class="popup__inner">
            <button class="popup__close" type="button">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.4557 16.1502L10.276 8.97056L17.4557 1.79089C17.6288 1.61778 17.7261 1.383 17.7261 1.13819C17.7261 0.893384 17.6288 0.658601 17.4557 0.485495C17.2826 0.312389 17.0478 0.215138 16.803 0.215138C16.5582 0.215138 16.3234 0.312389 16.1503 0.485495L8.97064 7.66517L1.79097 0.485494C1.61786 0.312388 1.38308 0.215138 1.13827 0.215138C0.893464 0.215138 0.658682 0.312388 0.485576 0.485494C0.397527 0.567101 0.327994 0.666634 0.281663 0.777385C0.235332 0.888135 0.213278 1.00753 0.216989 1.12752C0.2207 1.24752 0.25009 1.36532 0.303177 1.473C0.356264 1.58067 0.431814 1.67572 0.524737 1.75173L7.70441 8.9314L0.485576 16.1502C0.312469 16.3233 0.215218 16.5581 0.215219 16.8029C0.215218 17.0477 0.31247 17.2825 0.485576 17.4556C0.658682 17.6287 0.893463 17.726 1.13827 17.726C1.38308 17.726 1.61786 17.6287 1.79097 17.4556L8.97064 10.276L16.1503 17.4556C16.3234 17.6287 16.5582 17.726 16.803 17.726C17.0478 17.726 17.2826 17.6287 17.4557 17.4556C17.6288 17.2825 17.7261 17.0477 17.7261 16.8029C17.7261 16.5581 17.6288 16.3233 17.4557 16.1502Z"
                        fill="white" />
                </svg>
            </button>
            <h2 class="popup__title">
                Reset password
            </h2>
            <form class="popup__form popup-form" action="#" method="post">
                <div class="popup-form__wrapper">
                    <input class="popup-form__input" type="email" placeholder="Email" required>
                </div>
                <div class="popup-form__buttons">
                    <button class="popup-form__buttons-btn popup-form__buttons-btn--restore btn--green"
                        type="submit">
                        Reset Password
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>