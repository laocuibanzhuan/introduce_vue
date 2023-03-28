<template>
    <section class="home section" id="home">
        <div class="home__container container grid">
            <div class="home__content grid">
                <div class="home__social">
                    <a href="https://gitee.com/laocuibanzhuan" target="_blank">
                        <i class="alicon alicon-gitee home__icon"></i>
                    </a>
                    <a href="http://github.com/laocuibanzhuan" target="_blank">
                        <i class="alicon alicon-github home__icon"></i>
                    </a>
                </div>
                <div class="home__data">
                    <h1 class="home__title">{{ titleTextArr.join('') }}<span class="home__columeline">|</span></h1>
                    <h3 class="home__subtitle">
                        {{ $t("home__subtitle") }}
                    </h3>
                    <p class="home__description">
                        {{ $t("home__description") }}
                    </p>
                    <a href="#contact" class="button button-flex">
                        <span>{{ $t("home__contact") }}</span>
                        <i class="alicon alicon-zhixiangyou button__icon"></i>
                    </a>
                </div>
                <div class="home__video" id="home__video">
                    <video src="@/assets/video/video.mp4" controls autoplay></video>
                </div>
            </div>
            <div class="home__scroll">
                <a href="#about" class="button--flex">
                    <span>{{ $t("home__scroll-name") }}</span>
                    <i class="alicon alicon-arrow-down home__arrow"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import { reactive, getCurrentInstance } from 'vue'
export default {
    setup() {
        const {
            appContext: {
                config: { globalProperties },
            },
        } = getCurrentInstance()
        const titleText = globalProperties.$t('home__title')
        const titleTextArr = reactive([])
        const writeText = (text, type) => {
            for (let i = 0; i < text.length; i++) {
                setTimeout(() => {
                    if (type === 'write') {
                        titleTextArr.push(text[i])
                    } else {
                        titleTextArr.pop()
                    }
                    if (i === titleText.length - 1) {
                        setTimeout(() => {
                            writeText(text, type === 'write' ? 'wipe' : 'write')
                        }, 2000)
                    }
                }, i * 500)
            }
        }
        writeText(titleText, 'write')
        return { titleTextArr }
    }
}
</script>

<style scoped lang="scss">
@keyframes mydeamon {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@media (max-width:768px) {
    .home {
        &__container {
            gap: 1rem;
        }

        &__content {
            margin-bottom: var(--margin-3);
            grid-template-columns: 1fr 6fr;
            align-items: center;
        }

        &__social {
            margin: auto;
            display: grid;
            grid-template-columns: max-content;
            row-gap: 1rem;
        }

        &__icon {
            font-size: 1.3rem;
            color: var(--first-color);

            &:hover {
                color: var(--first-color-alt);
            }
        }

        &__blob {
            width: 200px;
            fill: var(--first-color);
        }

        &__video {
            margin: auto;
            height: 200px;
            grid-column: 1/3;

            video {
                width: min(80vw, 400px);
                object-fit: fill;
            }
        }

        &__columeline {
            animation: mydeamon 2s infinite;
        }

        &__title {
            font-size: var(--big-font-size);
            margin: 0.4rem 0;
        }

        &__subtitle {
            font-size: var(--h3-font-size);
            color: var(--text-color);
            font-weight: var(--font-medium);
            margin-bottom: var(--margin-0-75);
        }

        &__description {
            margin-bottom: var(--margin-2);
        }

        &__scroll {
            text-align: center;

            a {
                flex-direction: column;
            }

            color: var(--first-color);
            transition: 0.3s;

            span {
                font-size: var(--small-font-size);
                color: var(--title-color);
                font-weight: var(--font-medium);
            }

            &:hover {
                transform: translateY(0.25rem);
            }
        }

        &__arrow {
            font-size: 2rem;
            font-weight: 1000;
        }
    }
}

@media (min-width:768px) {
    .home {
        &__container {
            gap: 1rem;
        }

        &__content {
            margin-bottom: var(--margin-3);
            grid-template-columns: max-content 2fr 3fr;
            align-items: center;
            padding-top: 5.5rem;
            column-gap: 0.5rem;
        }

        &__social {
            display: grid;
            grid-template-columns: max-content;
            row-gap: 1rem;
        }

        &__icon {
            font-size: 1.3rem;
            color: var(--first-color);

            &:hover {
                color: var(--first-color-alt);
            }
        }

        &__blob {
            width: 200px;
            fill: var(--first-color);
        }

        &__video {
            height: 240px;

            video {
                height: 100%;
                max-width: 460px;
                object-fit: fill;
            }
        }

        &__data {
            width: 240px;
        }

        &__columeline {
            animation: mydeamon 1s infinite;
        }


        &__title {
            font-size: var(--big-font-size);
            margin: 0.4rem 0;
        }

        &__subtitle {
            font-size: var(--h3-font-size);
            color: var(--text-color);
            font-weight: var(--font-medium);
            margin-bottom: var(--margin-0-75);
        }

        &__description {
            margin-bottom: var(--margin-2);
        }

        &__scroll {
            text-align: center;

            a {
                flex-direction: column;
            }

            color: var(--first-color);
            transition: 0.3s;

            span {
                font-size: var(--small-font-size);
                color: var(--title-color);
                font-weight: var(--font-medium);
            }

            &:hover {
                transform: translateY(0.25rem);
            }
        }

        &__arrow {
            font-size: 2rem;
            font-weight: 1000;
        }
    }
}

@media (min-width:1024px) {
    .home {
        &__container {
            gap: 1rem;
        }

        &__content {
            margin-bottom: var(--margin-3);
            grid-template-columns: max-content 1fr 2fr;
            align-items: center;
            padding-top: 5.5rem;
            column-gap: 2rem;
        }

        &__social {
            display: grid;
            grid-template-columns: 50px;
            row-gap: 1rem;
        }

        &__icon {
            font-size: 1.3rem;
            color: var(--first-color);

            &:hover {
                color: var(--first-color-alt);
            }
        }

        &__blob {
            width: 200px;
            fill: var(--first-color);
        }

        &__video {
            height: 300px;

            video {
                height: 100%;
                object-fit: fill;
            }
        }

        &__data {
            width: 252px;
        }

        &__columeline {
            animation: mydeamon 1s infinite;
        }


        &__title {
            font-size: var(--big-font-size);
            margin: 0.4rem 0;
        }

        &__subtitle {
            font-size: var(--h3-font-size);
            color: var(--text-color);
            font-weight: var(--font-medium);
            margin-bottom: var(--margin-0-75);
        }

        &__description {
            margin-bottom: var(--margin-2);
        }

        &__scroll {
            text-align: center;

            a {
                flex-direction: column;
            }

            color: var(--first-color);
            transition: 0.3s;

            span {
                font-size: var(--small-font-size);
                color: var(--title-color);
                font-weight: var(--font-medium);
            }

            &:hover {
                transform: translateY(0.25rem);
            }
        }

        &__arrow {
            font-size: 2rem;
            font-weight: 1000;
        }
    }

}
</style>