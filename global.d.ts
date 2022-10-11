/*
    Shorthand ambient modules
    https://www.typescriptlang.org/docs/handbook/modules.html#shorthand-ambient-modules
 */

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
