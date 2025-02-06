export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        custom: "rgba(0,0,0,.08)",
      },
      boxShadow: {
        custom: "0px 2px 2px rgba(0,0,0,.04)",
        card: "0px 2px 15px rgba(0,0,0,.1)",
        small: "0 0 0 1px rgba(0,0,0,.08)",
      },
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
        inria: ["Inria", "serif"],
        work: ["Work", "sans"],
        // 'body': 'BlinkMacSystemFont',
        helvetica: 'Helvetica, Arial, sans-serif',
        // 'mono': 'Times New Roman'
      },
      colors: {
        "dark-main": "#1D1D1F",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
