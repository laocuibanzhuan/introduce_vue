<template>
    <section class="portfolio section" id="portfolio">
        <h2 class="section__title">{{ $t('portfolio__title') }}</h2>
        <span class="section__subtitle">{{ $t('portfolio__subtitle') }}</span>

        <div class="portfolio__container container swiper-container">
            <swiper class="swiper" :modules="modules" :slides-per-view="1" :space-between="3" :loop="true" navigation>
                <swiper-slide v-for="(item, index) in portfolioList" :key="index">
                    <div class="portfolio__content grid swiper-slide">
                        <img :src="item.img" alt="" class="portfolio__img" />
                        <div class="portfolio_">
                            <h3 class="portfolio__title" i18n="portfolio1__title">
                                {{ $t(item.title) }}
                            </h3>
                            <p class="portfolio__description" i18n="portfolio1__description">
                                {{ $t(item.describe) }}
                            </p>
                            <a :href="item.url" target="_blank" class="button button__flex button__small portfolio__button">
                                Demo
                                <i class="alicon alicon-zhixiangyou button__icon"></i>
                            </a>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
import { reactive } from 'vue'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const portfolioList = reactive([
            {
                url: 'https://github.com/laocuibanzhuan/shangpinhui',
                title: 'portfolio1__title',
                describe: 'portfolio1__description',
                img: 'src/assets/img/qiantai.png'
            },
            {
                url: 'https://github.com/laocuibanzhuan/back-stage-management',
                title: 'portfolio2__title',
                describe: 'portfolio2__description',
                img: 'src/assets/img/houtai.png'
            }
        ])
        return { portfolioList, modules: [Navigation], }
    }
}
</script>

<style scoped lang="scss">
::v-deep .swiper-button-next:after,
::v-deep .swiper-button-prev:after {
    font-size: 1.5rem;
    color: var(--first-color);
}

::v-deep .swiper-pagination-bullet-active {
    background-color: var(--first-color);
}

@media (max-width:768px) {
    .portfolio {
        &_ {
            margin: auto;
        }

        &__container {
            overflow: initial;
        }

        &__content {
            padding: 0 1.5rem;
            margin: auto;
        }

        &__img {
            width: 265px;
            border-radius: 0.5rem;
            justify-self: center;
        }

        &__title {
            text-align: center;
            font-size: var(--h3-font-size);
            margin-bottom: var(--margin-0-5);
        }

        &__description {
            margin-bottom: var(--margin-0-75);
        }

        &__button:hover .button__icon {
            transform: translateX(0.25rem);
        }
    }
}

@media (min-width:768px) {
    .portfolio {
        &__container {
            overflow: initial;
        }

        &__content {
            padding: 0 1.5rem;
            align-items: center;
            grid-template-columns: 3fr 2fr;
        }

        &__img {
            width: 320px;
            border-radius: 0.5rem;
            justify-self: center;
        }

        &__title {
            font-size: var(--h3-font-size);
            margin-bottom: var(--margin-0-5);
        }

        &__description {
            margin-bottom: var(--margin-0-75);
        }

        &__button:hover .button__icon {
            transform: translateX(0.25rem);
        }
    }
}

@media (min-width:1024px) {
    .portfolio {
        &__container {
            overflow: initial;
        }

        &__content {
            padding: 0 1.5rem;
            column-gap: 5rem;
        }

        &__img {
            width: 320px;
            border-radius: 0.5rem;
            justify-self: center;
        }

        &__title {
            font-size: var(--h3-font-size);
            margin-bottom: var(--margin-0-5);
        }

        &__description {
            margin-bottom: var(--margin-0-75);
        }

        &__button:hover .button__icon {
            transform: translateX(0.25rem);
        }
    }

}
</style>