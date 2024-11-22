/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./views/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
	  // Or if using `src` directory:
	  "./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			blackFC: '#000000FC',
    			black1F: '#0303031F',
    			black07: '#070707'
    		},
			fontFamily: {
				sans: ['var(--font-montserrat)', 'sans-serif'],
				geist: ['var(--font-geist-sans)', 'sans-serif'],
				mono: ['var(--font-geist-mono)', 'monospace'],
			},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	},
    	colors: {
    		transparent: 'transparent',
    		primary: '#00A0C1',
    		slate: '#f8fafc',
    		gray: 'rgba(211,211,211,0.7)',
    		disabled: 'rgba(255,255,255, 0.5)',
    		white: '#ffffff',
    		contact: '#82B2BE',
    		input: '#4b5563',
    		error: '#ef4444',
    		black: '#0a0a0a'
    	}
    },
	plugins: [],
  }