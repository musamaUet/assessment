const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modals/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", "class"],
  theme: {
  	extend: {
  		colors: {
  			gray: {
  				'200': '#131313',
  				'300': '#1A1A1A',
  				'400': '#333333',
  				'500': '#4D4D4D',
  				'600': '#666666',
  				'700': '#808080',
  				'800': '#999999',
  				'900': '#B2B2B2'
  			},
  			primary: {
  				'10': '#E9F1F9',
  				'20': '#D3E1F2',
  				'30': '#BED3EC',
  				'40': '#A7C3E5',
  				'50': '#92B5DF',
  				'100': '#236ABD',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			success: '#198754',
  			danger: '#dc3545',
  			warning: '#ffc107',
  			info: '#0dcaf0',
  			light: '#f8f9fa',
  			dark: {
  				'3': '#F8F8F8',
  				'5': '#F3F3F3',
  				'8': '#EDEDED',
  				'10': '#E9E9E9',
  				'15': '#DDDDDD',
  				'20': '#D2D2D2',
  				'25': '#C6C6C6',
  				'30': '#BBBCBC',
  				'35': '#B0B0B0',
  				'40': '#A4A5A5',
  				'45': '#999999',
  				'50': '#8E8F8F',
  				'55': '#828383',
  				'60': '#777878',
  				'70': '#606262',
  				'80': '#494B4B',
  				'90': '#333435',
  				'100': '#1C1D1E'
  			},
  			blackRussian: '#101217',
  			blackRussian2: '#1E2129',
  			blackRussian3: '#282A2F',
  			blackRussian4: '#14161C',
  			blackRussian5: '#22252D',
  			aluminium: '#88898B',
  			ebony: '#2B2E36',
  			mandy: '#E24F62',
  			cornflowerBlue: '#5989FD',
  			greyChateau: '#9FA0A2',
  			vulcan: '#35383F',
  			tuna: '#4B4D54',
  			stormGrey: '#787A7F',
  			atlantis: '#393C43',
  			linkWater: '#CFD0D1',
  			whiteSmoke: '#F2F2F2',
  			atlantis1: '#86A7FF1B',
  			spindle: '#BCBDBF',
  			ebony2: '#282B31',
  			mediumTurquoise: '#30C5D2',
  			ghost: '#B8B8BA',
  			ebony3: '#2D3037',
  			blackPearl: '#1F2021',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			primary: 'Neue Machina, sans-serif',
  			secondary: 'Inter, sans-serif',
  			console: 'Consolas, monospace',
  			Outfit: [
  				'Outfit", sans-serif'
  			],
  			Manrope: 'Manrope',
  			display: [
  				'var(--font-lobster)',
                    ...fontFamily.sans
                ]
  		},
  		fontSize: {
  			'12': '12px',
  			'14': '14px',
  			'16': '16px',
  			'18': '18px',
  			'20': '20px',
  			'22': '22px',
  			'24': '24px',
  			'26': '26px',
  			'28': '28px',
  			'30': '30px',
  			'32': '32px',
  			'34': '34px',
  			'36': '36px',
  			'38': '38px',
  			'40': '40px',
  			'42': '42px',
  			'44': '44px',
  			'46': '46px',
  			'48': '48px',
  			'50': '50px',
  			'52': '52px',
  			'54': '54px',
  			'56': '56px',
  			'58': '58px',
  			'60': '60px',
  			'64': '64px',
  			'66': '66px',
  			'68': '68px',
  			'70': '70px',
  			'72': '72px',
  			'74': '74px',
  			'76': '76px',
  			'78': '78px',
  			'80': '80px',
  			'82': '82px',
  			'84': '84px',
  			'86': '86px',
  			'88': '88px',
  			'90': '90px'
  		},
  		lineHeight: {
  			'100': '100%',
  			'110': '110%',
  			'120': '120%',
  			'125': '125%',
  			'130': '130%',
  			'135': '135%',
  			'140': '140%',
  			'145': '145%',
  			'150': '150%',
  			'155': '155%',
  			'160': '160%'
  		},
  		letterSpacing: {
  			tight: '-0.01em',
  			tighter: '-0.02em',
  			tightest: '-0.03em'
  		},
  		spacing: {
  			xxs: '4px',
  			xs: '8px',
  			sm: '16px',
  			md: '24px',
  			lg: '32px',
  			xl: '40px',
  			xxl: '48px',
  			'56px': '56px',
  			'64px': '64px',
  			'72px': '72px',
  			'80px': '80px',
  			'88px': '88px',
  			'96px': '96px',
  			'100px': '100px',
  			'120px': '120px',
  			'140px': '140px',
  			'150px': '150px',
  			'160px': '160px',
  			'200px': '200px'
  		},
  		borderRadius: {
  			'2': '2px',
  			'4': '4px',
  			'6': '6px',
  			'8': '8px',
  			'10': '10px',
  			'12': '12px',
  			'14': '14px',
  			'16': '16px',
  			'24': '24px',
  			'40': '40px',
  			DEFAULT: '8px',
  			none: '0',
  			full: '50%',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		zIndex: {
  			'1': '1',
  			'2': '2',
  			'3': '3',
  			'4': '4',
  			'5': '5',
  			'10': '10',
  			'20': '20',
  			'40': '40',
  			'100': '100',
  			'110': '110',
  			'120': '120'
  		},
  		screens: {
  			'3xl': {
  				min: '99.125rem'
  			},
  			desktop: '85.188rem',
  			mdx1: {
  				max: '850px'
  			},
  			lgx1: '991px',
  			mdx2: {
  				min: '768px',
  				max: '1020px'
  			},
  			mdx3: {
  				min: '640px',
  				max: '991px'
  			},
  			xs: {
  				min: '0px',
  				max: '520px'
  			},
  			xs2: {
  				min: '0px',
  				max: '399px'
  			}
  		},
  		maxWidth: {
  			desktop: '85.188rem',
  			'3xl': '99.125rem'
  		}
  	},
  	display: {
  		'webkit-box': '-webkit-box'
  	}
  },
  variants: {
    extend: {
      backgroundColor: ["dark", "autofill"],
      textColor: ["dark", "autofill"],
      boxShadow: ["dark", "autofill"],
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    require("tailwindcss"),
    require("autoprefixer"),
      require("tailwindcss-animate")
],
};

module.exports = config;