export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
        inria: ["Inria", "serif"],
        work: ["Work", "sans"],
        // 'body': 'BlinkMacSystemFont',
        helvetica: 'Helvetica, Arial, sans-serif',
        // 'mono': 'Times New Roman'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
