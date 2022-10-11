module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 2,
    'vue/multi-word-component-names': 0,
    'vue/no-multiple-template-root': 0,
    'vue/no-v-html': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never'
      }
    ]
  }
};
