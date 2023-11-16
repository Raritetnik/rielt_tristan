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
        port: 3020,
    },

    modules: ["@nuxtjs/tailwindcss", "@nuxt/image", 'nuxt-delay-hydration', "@nuxt-modules/compression", "@averjs/nuxt-compression"],

    nitro: {
        compressPublicAssets: true,
    },

    delayHydration: {
        mode: 'init',
        // enables nuxt-delay-hydration in dev mode for testing
        debug: process.env.NODE_ENV === 'development'
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'fr',
            },
        }
    }
})