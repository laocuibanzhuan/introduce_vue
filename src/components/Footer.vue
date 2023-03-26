<template>
    <footer class="footer">
        <div class="footer__bg">
            <div class="footer__container container grid">
                <div>
                    <h1 class="footer__title">周旋</h1>
                    <span class="footer__subtitle">{{ $t('home__subtitle') }}</span>
                </div>
                <ul class="footer__links">
                    <li>
                        <a href="#skills" class="footer__link">{{ $t('skills') }}</a>
                    </li>
                    <li>
                        <a href="#portfolio" class="footer__link">{{ $t('portfolio') }}</a>
                    </li>
                    <li>
                        <a href="#contact" class="footer__link">{{ $t('contact') }}</a>
                    </li>
                </ul>
                <div class="footer__socials">
                    <a href="https://gitee.com/laocuibanzhuan" target="_blank">
                        <i class="alicon alicon-gitee footer__social"></i>
                    </a>
                    <a href="http://github.com/laocuibanzhuan" target="_blank">
                        <i class="alicon alicon-github footer__social"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@media (max-width:768px) {
    .footer {
        padding-top: 2rem;

        &__container {
            row-gap: 3.5rem;
        }

        &__bg {
            background-color: var(--first-color-second);
            padding: 2rem 0 3rem;
        }

        &__title {
            font-size: var(--h1-font-size);
            margin-bottom: var(--mb-0-25);
        }

        &__subtitle {
            font-size: var(--small-font-size);
        }

        &__links {
            display: flex;
            flex-direction: column;
            row-gap: 1.5rem;
            margin-left: var(--margin-2);
        }

        &__link:hover {
            color: var(--first-color-lighter);
        }

        &__socials {
            margin-left: var(--margin-2);
        }

        &__social {
            font-size: 1.35rem;
            margin-right: var(--margin-1-5);

        }

        &__social:hover {
            color: var(--first-color-lighter);
        }

        &__copy {
            font-size: var(--smaller-font-size);
            text-align: center;
            color: var(--text-color-light);
            margin-top: var(--mb-3);
        }

        &__title,
        &__subtitle,
        &__link,
        &__social {
            color: #fff;
            fill: #fff;
        }
    }

}

@media (min-width:768px) {
    .footer {
        padding-top: 2rem;

        &__container {
            row-gap: 3.5rem;
            grid-template-columns: repeat(3, 1fr);
            padding: 0 1rem;
        }


        &__bg {
            background-color: var(--first-color-second);
            padding: 3rem 0 3.5rem;
        }

        &__title {
            font-size: var(--h1-font-size);
            margin-bottom: var(--margin-0-25);
        }

        &__subtitle {
            font-size: var(--small-font-size);
        }

        &__links {
            display: flex;
            row-gap: 1.5rem;
            flex-direction: row;
            column-gap: 2rem;

        }

        &__link:hover {
            color: var(--first-color-lighter);
        }

        &__social {
            font-size: 1.35rem;
            margin-right: var(--margin-1-5);
            justify-self: flex-end;
        }

        &__socials {
            justify-self: flex-end;
        }

        &__social:hover {
            color: var(--first-color-lighter);
        }

        &__copy {
            font-size: var(--smaller-font-size);
            text-align: center;
            color: var(--text-color-light);
            margin-top: 4.5rem;
        }

        &__title,
        &__subtitle,
        &__link,
        &__social {
            color: #fff;
            fill: #fff;
        }

    }
}


@media (min-width:1024px) {
    .footer {
        padding-top: 2rem;

        &__container {
            grid-template-columns: repeat(3, 1fr);
            row-gap: 3.5rem;
            padding: 0;
        }


        &__bg {
            background-color: var(--first-color-second);
            padding: 3rem 0 3.5rem;
        }

        &__title {
            font-size: var(--h1-font-size);
            margin-bottom: var(--margin-0-25);
        }

        &__subtitle {
            font-size: var(--small-font-size);
        }

        &__links {
            display: flex;
            row-gap: 1.5rem;
            flex-direction: row;
            column-gap: 2rem;

        }

        &__link:hover {
            color: var(--first-color-lighter);
        }

        &__social {
            font-size: 1.35rem;
            margin-right: var(--margin-1-5);
            justify-self: flex-end;

        }

        &__socials {
            justify-self: flex-end;

        }

        &__social:hover {
            color: var(--first-color-lighter);
        }

        &__copy {
            font-size: var(--smaller-font-size);
            text-align: center;
            color: var(--text-color-light);
            margin-top: 4.5rem;

        }

        &__title,
        &__subtitle,
        &__link,
        &__social {
            color: #fff;
            fill: #fff;

        }
    }
}
</style>