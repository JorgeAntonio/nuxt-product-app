// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
            title: 'Nuxt Product Web App',
            meta: [
                {name: 'description', content: 'Nuxt Product app'},
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Icons'},
            ]
        }
    }
})
