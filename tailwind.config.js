// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  keyframes: {
    text: {
      "0%, 100%": {
        "background-size": "200% 200%",
        "background-position": "left center",
      },
      "50%": {
        "background-size": "200% 200%",
        "background-position": "right center",
      },
    },
    dotty: {
      "0%": { content: '""' },
      "25%": { content: '"."' },
      "50%": { content: '".."' },
      "75%": { content: '"..."' },
      "100%": { content: '""' },
    },
  },
  
  plugins: [require("daisyui")],
};
