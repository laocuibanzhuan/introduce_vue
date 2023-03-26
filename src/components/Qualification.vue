<template>
    <section class="qualification section">
        <h2 class="section__title">
            {{ $t("qualification__title") }}
        </h2>
        <span class="section__subtitle">{{ $t("qualification__subtitle") }}</span>
        <div class="container">
            <div class="qualification__tabs">
                <div :class="[curSeleced === 'education' ? 'qualification__button--active' : '']"
                    class="qualification__button button--flex" @click="curSeleced = 'education'">
                    <i class="alicon alicon-graduation qualification__icon"></i>
                    <span>{{ $t("education") }}</span>
                </div>

                <div :class="[curSeleced === 'work' ? 'qualification__button--active' : '']"
                    class="qualification__button button--flex" @click="curSeleced = 'work'">
                    <i class="alicon alicon-brief-bag qualification__icon"></i>
                    <span>{{ $t("work") }}</span>
                </div>
            </div>
            <div class="qualification__sections">
                <div id="education" v-show="curSeleced === 'education'">
                    <QualificationItem :list="educationList"></QualificationItem>
                </div>
                <div class="qualification__content" v-show="curSeleced === 'work'">
                    <QualificationItem :list="workList"></QualificationItem>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import QualificationItem from './QualificationItem.vue';
import { ref, reactive } from 'vue'
export default {
    components: {
        QualificationItem
    },
    setup() {
        let curSeleced = ref('education')


        const educationList = reactive([
            {
                title: 'qualification1__title',
                describe: 'qualification1__describe',
                time: '2020-2024'
            },
            {
                title: 'qualification2__title',
                describe: 'qualification2__describe',
                time: '2021-至今'
            }
        ])
        const workList = reactive([
            {
                title: 'qualification3__title',
                describe: 'qualification3__describe',
                time: '2021-至今'
            }
        ])
        return { curSeleced, educationList, workList }
    }
}
</script>

<style scoped lang="scss">
@media (max-width:768px) {
    .qualification {
        &__tabs {
            display: flex;
            margin-bottom: var(--margin-2);
            justify-content: space-evenly;
        }

        &__button {
            font-size: var(--h3-font-size);
            font-weight: var(--font-medium);
            cursor: pointer;

            &:hover {
                color: var(--first-color);
            }

            &--active {
                color: var(--first-color);
            }
        }

        &__icon {
            font-size: 1.8rem;
            margin-right: var(--margin-0-25);
        }

        &__sections {
            width: 500px;
            margin: auto;
        }
    }
}

@media (min-width:768px) {
    .qualification {
        &__tabs {
            display: flex;
            margin-bottom: var(--margin-2);
            justify-content: center;
        }

        &__button {
            font-size: var(--h3-font-size);
            font-weight: var(--font-medium);
            cursor: pointer;

            &:hover {
                color: var(--first-color);
            }

            &--active {
                color: var(--first-color);
            }

            margin: 0 var(--margin-1);
        }

        &__icon {
            font-size: 1.8rem;
            margin-right: var(--margin-0-25);
        }

        &__sections {
            width: 500px;
            margin: auto;
        }
    }
}

@media (min-width:1024px) {
    .qualification {
        &__tabs {
            display: flex;
            margin-bottom: var(--margin-2);
            justify-content: center;
        }

        &__button {
            font-size: var(--h3-font-size);
            font-weight: var(--font-medium);
            cursor: pointer;

            &:hover {
                color: var(--first-color);
            }

            &--active {
                color: var(--first-color);
            }

            margin: 0 var(--margin-1);
        }

        &__icon {
            font-size: 1.8rem;
            margin-right: var(--margin-0-25);
        }

        &__sections {
            width: 500px;
            margin: auto;
        }
    }
}
</style>