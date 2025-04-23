import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			'bk-blue-800': '#003262',
			'bk-blue-500': '#4c6486',
			'bk-blue-300': '#99adc0',
			'bk-blue-100': '#e5eaef',
			'bk-gold-800': '#FDB515',
			'bk-gold-500': '#f4cf84',
			'bk-gold-300': '#f4e3c0',
			'bk-gold-100': '#f7f1e4',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		transitionProperty : {
			  'max-height': 'max-height',
		}
  	}
  },
  plugins: [animate],
} satisfies Config;
