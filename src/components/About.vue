<template>
    <section class="about section" id="about">
        <h2 class="section__title">{{ $t('about__title') }}</h2>
        <span class="section__subtitle">{{ $t('about__subtitle') }}</span>
        <div class="about__container container grid">
            <img src="@/assets/img/puter.jpg" class="about__img">

            <div class="about__data">
                <p class="about__description">
                    {{ $t('about__description') }}
                </p>

                <div class="about__info">
                    <div>
                        <span class="about__info-title">22</span>
                        <span class="about__info-name">{{ $t('about__info-name1') }}</span>
                    </div>

                    <div>
                        <span class="about__info-title">1+</span>
                        <span class="about__info-name">{{ $t('about__info-name2') }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@media (max-width:768px) {
    .about {
        &__container {
            grid-template-columns: 1fr;
        }

        &__img {
            width: 400px;
            border-radius: 0.5rem;
            justify-self: center;
            align-self: center;
        }

        &__data {
            max-width: 350px;
            margin: auto;
        }

        &__description {
            text-align: center;
            margin-bottom: var(--margin-2-5);
        }

        &__info {
            display: flex;
            justify-content: space-around;
            margin-bottom: var(--margin-2-5);
        }

        &__info-title {
            font-size: var(--h2-font-size);
            font-weight: var(--font-semi-bold);
            color: var(--title-color);
            margin-bottom: var(--margin-0-5);
            display: block;
            text-align: center;
        }

        &__info-name {
            margin-bottom: var(--mb-2);
            font-size: var(--smaller-font-size);
            display: block;
            text-align: center;
        }
    }


}

@media (min-width:768px) {
    .about {
        &__container {
            grid-template-columns: repeat(2, 1fr);
            column-gap: 3rem;
        }

        &__data {
            max-width: 344px;
        }

        &__img {
            width: 350px;
            border-radius: 1rem;
            justify-self: center;
            align-self: center;
        }

        &__description {
            margin-top: var(--margin-1);
            margin-bottom: var(--margin-2-5);
        }

        &__info {
            display: flex;
            margin-bottom: var(--margin-2-5);
            justify-content: space-around;
        }

        &__info-title {
            font-size: var(--h2-font-size);
            font-weight: var(--font-semi-bold);
            color: var(--title-color);
            margin-bottom: var(--margin-0-5);
            display: block;
            text-align: center;
        }

        &__info-name {
            font-size: var(--smaller-font-size);
            display: block;
            text-align: center;
        }
    }


}

@media (min-width:1024px) {
    .about {
        &__container {
            grid-template-columns: repeat(2, 1fr);
            column-gap: 5rem;
        }

        &__data {
            max-width: 350px;
        }

        &__img {
            border-radius: 0.5rem;
            justify-self: center;
            align-self: center;
            width: 350px;
        }

        &__description {
            margin-top: var(--margin-2-5);
            margin-bottom: var(--margin-2-5);
            text-align: initial;
        }

        &__info {
            display: flex;
            margin-bottom: var(--margin-2-5);
            justify-content: space-around;
        }

        &__info-title {
            font-size: var(--h2-font-size);
            font-weight: var(--font-semi-bold);
            color: var(--title-color);
            margin-bottom: var(--margin-0-5);
        }

        &__info-name {
            font-size: var(--smaller-font-size);
            display: block;
            text-align: center;
        }
    }


}
</style>