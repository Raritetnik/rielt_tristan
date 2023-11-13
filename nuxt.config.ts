// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    serverMiddleware: [
        {path: '/api', handler: '~/server.js'},
    ],
    server: {
        port: 3000, // или любой другой порт по вашему выбору
    },

    modules: ["@nuxtjs/tailwindcss"]
})