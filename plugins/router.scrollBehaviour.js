import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin((nuxtApp) => {
  // eslint-disable-next-line no-param-reassign,@typescript-eslint/no-unused-vars
  nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }

    // eslint-disable-next-line require-await
    const findEl = async (hash, x = 0) => {
      return (
        document.querySelector(hash) ||
        // eslint-disable-next-line consistent-return
        new Promise((resolve) => {
          if (x > 0) {
            // eslint-disable-next-line no-promise-executor-return
            return resolve(document.querySelector('#app'));
          }
          setTimeout(() => {
            resolve(findEl(hash, 1));
          }, 100);
        })
      );
    };

    if (to.hash) {
      const el = await findEl(to.hash);

      if ('scrollBehavior' in document.documentElement.style) {
        // return el.scrollTo({ top: el.offsetTop, behavior: "smooth" });
        return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
      }
      return window.scrollTo(0, el.offsetTop);
    }
    return { left: 0, top: 0, behaviour: 'smooth' };
  };
});
