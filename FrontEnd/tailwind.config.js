const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./**/*.html', './**/*.svelte'],
    theme: {
        screens: {
            xs: '480px',
            sm: '600px',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
        },
        container: {
            center: true,
            padding: {
                default: '1rem',
                sm: '2rem',
                md: '6rem',
                lg: '2rem',
            },
        },
        fontFamily: {
            roboto: ['Roboto', ...fontFamily.mono],
        },
        extend: {
            maxWidth: {
                40: '10rem',
                120: '7.5rem',
                640: '40rem',
            },
        },
    },
    variants: {},
    plugins: [],
}
