const { colors } = require('laravel-mix/src/Log');
const { primary } = require('laravel-mix/src/Mix');

module.exports = {
    content: [
        './train-schedule/**/*.html',
        './tourist-spot/**/*.html',
        './emergency/**/*.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'serif'],
            },
            colors: {
                primary:{
                    dark:'#0E121B',
                    default:'#525866',
                    light:'#F2F5F8',
                    gray:'#F5F7FA',
                    gray1:'#CACFD8',
                    gray2:'#E1E4EA',
                    green:'#049D48',
                    green2:'#E0FAEC',
                    green3:'#1FC16B',
                    red:'#FB3748',
                },
            },
        },
    },
    plugins: [
        // This plugin allows you to create custom Tailwind groups.
        // e.g. if you use ['custom'], you could use it as follows:
        //      In the parent: group-custom
        //      In the child:  group-custom-hover:
        require('tailwindcss-labeled-groups')([
            'custom', '1', /* RENAME ME! */ 
        ])
    ]
}