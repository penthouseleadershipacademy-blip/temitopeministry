import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { forest: '#173D32', deep: '#102C25', ivory: '#F8F6EF', gold: '#B69A5B', ink: '#292D29', muted: '#6D756F', line: '#E4E1D7' }, fontFamily: { serif: ['Georgia','Times New Roman','serif'], sans: ['Arial','Helvetica','sans-serif'] }, boxShadow: { soft: '0 12px 40px rgba(23,61,50,.07)' } } }, plugins: [] };
export default config;
