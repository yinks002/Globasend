// This tells TypeScript that importing a .css file is allowed
declare module '*.css';

// This tells TypeScript what to do with .module.css files
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}