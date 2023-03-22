# Twitter Bio Generator App

This app was designed with Next.js, TailwindCss, API, and the completion help at ChatGPT.
This app is designed to generate a Twitter Bio for new or existing twitter users.

# Junyoung Son

## Next.js

npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app

## TailwindCSS

npx create-next-app@latest my-project --typescript --eslint
cd my-project

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

@tailwind base;
@tailwind components;
@tailwind utilities;

npm run dev

