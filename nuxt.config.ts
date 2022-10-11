import { defineNuxtConfig } from 'nuxt/config';
import eslintPlugin from 'vite-plugin-eslint';
import config from './postcss.config';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    compressPublicAssets: true
  },
  app: {
    head: {
      title: 'Project Title',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Project description metafield'
        }
      ],
      viewport: 'width=device-width, initial-scale=1.0',
      charset: 'utf-8',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  typescript: {
    strict: true
  },
  vite: {
    plugins: [eslintPlugin()]
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/image-edge'
  ],
  build: {
    postcss: {
      postcssOptions: config
    }
  },
  css: ['~/assets/css/tailwind.css'],
  i18n: {
    lazy: false,
    langDir: 'locales',
    locales: [
      {
        code: 'de',
        iso: 'de',
        file: 'de.json',
        name: 'German',
        isCatchallLocale: true
      },
      {
        code: 'en',
        iso: 'en-us',
        file: 'en.json',
        name: 'English'
      }
    ],
    baseUrl: 'https://your-website.com/',
    strategy: 'prefix_and_default',
    defaultLocale: 'de',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    vueI18n: {
      legacy: false,
      locale: 'de'
    }
  },
  image: {
    provider: 'ipx',
    ipx: {
      domains: [
        'http://localhost:3000',
        'http://0.0.0.0:3000',
        'https://your-website.com/'
      ]
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0' // default: localhost
  }
});
