<template>
    <nav class="nav container">
        <a href="#" class="nav__name">周旋</a>
        <div :class="['nav__menu', menuShow ? 'nav__menu__show' : '']">
            <ul class="nav__list grid">
                <li class="nav__item" v-for="item in menuList" :key="item.name">
                    <a :href="item.href" class="nav__link">
                        <i class="alicon nav__icon" :class="[item.icon]"></i>
                        <p>{{ $t(item.name) }}</p>
                    </a>
                </li>
                <li class="nav__item">
                    <div class="nav__link" @click="changeLanguage">
                        <i class="alicon alicon-fanyi1 nav__icon nav__icon--translate" ></i>
                        <a class="nav__link" id="translate">中/en</a>
                    </div>
                </li>
            </ul>
            <i class="alicon alicon-guanbijiantou nav__close nav__icon" @click="menuShow = false"></i>
        </div>
        <div class="nav__btns">
            <i :class="['alicon', theme === 'dark' ? 'alicon-taiyang' : 'alicon-moon', 'nav__theme']" id="theme-button"
                @click="toggleTheme">
            </i>
            <div class="nav__toggle" @click="menuShow = true">
                <i class="alicon alicon-apps"></i>
            </div>
        </div>
    </nav>
</template>

<script>
import { reactive, ref } from 'vue'
import { theme_store } from '@/store/theme_store.js'
import { storeToRefs } from 'pinia'
import { useI18n } from "vue-i18n";

export default {
    setup() {
        const menuList = reactive([
            {
                name: 'home',
                href: '#home',
                icon: 'alicon-zhuye',
            },
            {
                name: 'about',
                href: '#about',
                icon: 'alicon-user',
            },
            {
                name: 'skills',
                href: '#skills',
                icon: 'alicon-yuzhijineng',
            },
            {
                name: 'portfolio',
                href: '#portfolio',
                icon: 'alicon-wodezuopin',
            },
            {
                name: 'blog',
                href: '#',
                icon: 'alicon-zhuanyeyukecheng',
            },
            {
                name: 'contact',
                href: '#contact',
                icon: 'alicon-lianxi',
            },
        ])
        const menuShow = ref(false)

        //i18n
        const { locale } = useI18n()
        function changeLanguage() {
            locale.value = locale.value === 'zh' ? 'en' : 'zh'
            localStorage.setItem('i18n', locale.value)
        }

        //theme
        const store = theme_store()
        const { theme } = storeToRefs(store)
        store.init()
        function toggleTheme() {
            store.toggleTheme()
        }
        window.addEventListener('scroll',()=>{
            menuShow.value = false
        })

        return { menuList, menuShow, changeLanguage, theme, toggleTheme }
    }
}
</script>

<style scoped lang="scss">
@media (max-width:768px) {
    .nav {
        max-width: 768px;
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__name {
            color: var(--title-color);
            font-weight: var(--font-medium);
        }

        &__menu {
            position: fixed;
            bottom: -100%;
            left: 0;
            width: 100%;
            background-color: var(--body-color);
            padding: 2rem 1.5rem 4rem;
            box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
            border-radius: 1.5rem 1.5rem 0 0;
            transition: 0.3s;

            &__show {
                bottom: 0 !important;
            }
        }

        &__list {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            column-gap: 0;
        }

        &__item {
            align-items: center;
        }

        &__link {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: var(--small-font-size);
            color: var(--title-color);
            font-weight: var(--font-medium);
            cursor: pointer;
            text-transform: capitalize;

            &:hover {
                color: var(--first-color);

                svg {
                    fill: var(--first-color);
                }
            }
        }

        &__btns {
            display: flex;
            align-items: center;
        }

        &__toggle {
            color: var(--title-color);
            font-weight: var(--font-medium);
            font-size: 1.1rem;
            cursor: pointer;

            &:hover {
                color: var(--first-color);
            }
        }

        &__close {
            position: absolute;
            right: 1.3rem;
            bottom: 0.5rem;
            cursor: pointer;
            color: var(--first-color);

            &:hover {
                color: var(--first-color-alt);
            }

        }

        &__icon {
            font-size: 1.2rem;
        }

        &__theme {
            font-size: 1.2rem;
            color: var(--title-color);
            margin-right: var(--margin-1);
            cursor: pointer;

            &:hover {
                color: var(--first-color);
            }
        }
    }
}

@media (min-width:768px) {
    .nav {
        max-width: 968px;
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: calc(var(--header-height) + 1.5rem);
        column-gap: 1rem;

        #translate {
            font-size: 0;
        }

        &__name {
            color: var(--title-color);
            font-weight: var(--font-medium);
        }

        &__menu {
            &--show {
                bottom: 0 !important;
                margin-left: auto;
            }
        }

        &__list {
            display: flex;
            column-gap: 2rem;
        }

        &__item {
            align-content: center;
            display: flex;
            flex-wrap: wrap;
        }

        &__link {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: var(--small-font-size);
            color: var(--title-color);
            font-weight: var(--font-medium);
            cursor: pointer;
            text-transform: capitalize;

            &:hover {
                color: var(--first-color);

                svg {
                    fill: var(--first-color);
                }
            }
        }

        &__btns {
            display: flex;
            align-items: center;
        }

        &__toggle {
            display: none;
        }

        &__close {
            display: none;

        }

        &__icon {
            font-size: 1.2rem;

            &--translate {
                display: block !important;
                font-size: 1.5rem;
                display: none;
            }
        }

        &__theme {
            font-size: 1.2rem;
            color: var(--title-color);
            margin-right: var(--margin-1);
            cursor: pointer;
            font-size: 1.4rem;

            &:hover {
                color: var(--first-color);
            }
        }
    }
}

@media (min-width:1024px) {
    .nav {
        max-width: 968px;
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__name {
            color: var(--title-color);
            font-weight: var(--font-medium);
        }

        &__menu {
            &--show {
                bottom: 0 !important;
                margin-left: auto;
            }
        }

        &__list {
            display: flex;
            column-gap: 2rem;
        }


        &__item {
            align-items: center;
            align-content: center;
            display: flex;
            flex-wrap: wrap;
        }

        &__link {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: var(--small-font-size);
            color: var(--title-color);
            font-weight: var(--font-medium);
            cursor: pointer;
            text-transform: capitalize;

            &:hover {
                color: var(--first-color);

                svg {
                    fill: var(--first-color);
                }
            }
        }

        &__btns {
            display: flex;
            align-items: center;
        }

        &__toggle {
            display: none;
        }

        &__close {
            display: none;
        }

        &__icon {
            font-size: 1.2rem;

            &--translate {
                display: block !important;
                font-size: 1.5rem;
                display: none;
            }
        }

        &__theme {
            font-size: 1.2rem;
            color: var(--title-color);
            margin-right: var(--margin-1);
            cursor: pointer;
            font-size: 1.4rem;

            &:hover {
                color: var(--first-color);
            }
        }
    }
}
</style>