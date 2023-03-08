/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        colors: {
            // Primary
            orange: 'hsl(26, 100%, 55%)',
            PaleOrange: 'hsl(25, 100%, 94%)',
            // Neutral
            VeryDarkBlue: 'hsl(220, 13%, 13%)',
            DarkGrayishBlue: 'hsl(219, 9%, 45%)',
            GrayishBlue: 'hsl(220, 14%, 75%)',
            LightGrayishBlue: 'hsl(206, 94%, 87%)',
            white: 'hsl(0, 0%, 100%)',
            black: 'hsl(0, 0%, 0%)',
            lightBlack: 'hsl(0, 0%, 75%)',
        },
        variants: {
            fill: ['hover', 'focus'],
        },
    },
    plugins: [],
}
