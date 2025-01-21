/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Add autoprefixer to process CSS prefixes for better browser compatibility
  },
};

export default config;
