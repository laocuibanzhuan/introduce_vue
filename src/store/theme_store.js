import { defineStore } from "pinia";

const actions = {
    init() {
        if (localStorage.getItem('theme')) {
            this.theme = localStorage.getItem('theme')
            this.setTheme(localStorage.getItem('theme'))
        } else {
            this.setTheme()
        }
    },
    setTheme(theme = this.theme) {
        document.body.setAttribute('data-theme', theme)
    }, toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', this.theme)
        this.setTheme()
    },
}
const state = () => {
    return {
        theme: 'dark',
    }
}

export const theme_store = defineStore('theme', {
    state,
    actions
}
)