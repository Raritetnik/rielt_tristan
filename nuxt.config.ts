// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/image", 'nuxt-delay-hydration', "@nuxt-modules/compression", "@averjs/nuxt-compression"],

    nitro: {
        compressPublicAssets: true,
        prerender: {
            routes: ['/sitemap.xml']
        }
    },

    delayHydration: {
        mode: 'init',
        // enables nuxt-delay-hydration in dev mode for testing
        debug: process.env.NODE_ENV === 'development'
    },
    app: {
        //pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            htmlAttrs: {
                lang: 'fr',
            },
        }
    },
})