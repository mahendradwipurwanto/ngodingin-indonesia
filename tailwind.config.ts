import type {Config} from 'tailwindcss';
import {fontFamily} from 'tailwindcss/defaultTheme';
import tailwindcss_animate from "tailwindcss-animate";
import plugin from 'tailwindcss/plugin';

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    10: '#bcdffc',
                    20: '#a5d5fb',
                    30: '#8fcafa',
                    40: '#62b5f8',
                    50: '#4caaf7',
                    60: '#35a0f6',
                    70: '#1f95f5',
                    80: '#1c86dd',
                    90: '#1977c4',
                    100: '#1668ac',
                    110: '#104b7b',
                    120: '#0c3c62',
                    130: '#092d49',
                },
                yellow: {
                    10: '#ffecc6',
                    20: '#ffe5b3',
                    30: '#ffdfa0',
                    40: '#ffd279',
                    50: '#ffcb66',
                    60: '#ffc553',
                    70: '#ffbe40',
                    80: '#e6ab3a',
                    90: '#cc9833',
                    100: '#b3852d',
                    110: '#805f20',
                    120: '#664c1a',
                    130: '#4c3913',
                },
                success: {
                    10: '#cbe3d3',
                    20: '#b9d9c5',
                    30: '#a8d0b6',
                    40: '#85bd99',
                    50: '#73b38a',
                    60: '#62aa7c',
                    70: '#50a06d',
                    80: '#489062',
                    90: '#408057',
                    100: '#38704c',
                    110: '#285037',
                    120: '#20402c',
                    130: '#183021',
                },
                danger: {
                    10: '#fdd0d0',
                    20: '#fcc0c0',
                    30: '#fbb0b1',
                    40: '#f99091',
                    50: '#f98181',
                    60: '#f87172',
                    70: '#f76162',
                    80: '#de5758',
                    90: '#c64e4e',
                    100: '#ad4445',
                    110: '#7c3131',
                    120: '#632727',
                    130: '#4a1d1d',
                },
                purple: {
                    10: '#e3cdfa',
                    20: '#d9bdf8',
                    30: '#d0acf6',
                    40: '#bd8bf2',
                    50: '#b47af1',
                    60: '#aa6aef',
                    70: '#a159ed',
                    80: '#9150d5',
                    90: '#8147be',
                    100: '#713ea6',
                    110: '#512d77',
                    120: '#40245f',
                    130: '#301b47',
                },
                gray: {
                    10: '#fcfcfc',
                    20: '#f9f9f9',
                    30: '#f7f7f7',
                    40: '#f5f5f5',
                    50: '#f3f3f3',
                    60: '#f0f0f0',
                    70: '#eeeeee',
                    80: '#d0d0d0',
                    90: '#b3b3b3',
                    100: '#959595',
                    110: '#777777',
                    120: '#686868',
                    130: '#595959',
                },
                dark: {
                    10: '#bebfc3',
                    20: '#a8aaaf',
                    30: '#92959c',
                    40: '#666a74',
                    50: '#515560',
                    60: '#3b3f4c',
                    70: '#252a38',
                    80: '#212632',
                    90: '#1e222d',
                    100: '#1a1d27',
                    110: '#161922',
                    120: '#13151c',
                    130: '#0f1116',
                },
                'red-independence': '#CB1D2A',
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                sans: ['var(--helvetica)', ...fontFamily.sans],
                title: ['var(--pJakartaSans)', ...fontFamily.sans],
            },
        },
        keyframes: {
            animate: {
                '0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%': {
                    color: '#0e3742',
                    boxShadow: 'none',
                },
                '18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%': {
                    color: '#fff',
                    textShadow: '0 0 10px #03bcf4',
                },
            },
        },
        animation: {
            anim: 'animate 5s infinite',
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [
        tailwindcss_animate,
        plugin(({ addUtilities }) => {
            addUtilities({
                '.box-reflect': {
                    '-webkit-box-reflect': 'below 1px linear-gradient(transparent, #0004)',
                },
            });
        }),
    ],
};
export default config;
