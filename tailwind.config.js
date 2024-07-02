/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*"],
  theme: {
    extend: {
      fontFamily: {
        primaryBold: ["Bold"],
        primaryLight: ["Light"],
        primaryMedium: ["Medium"],
        primaryRegular: ["Regular"],
        primarysBold: ["sBold"],
        primarysemiBold: ["semiBold"],
        primaryThin: ["Thin"],
      },
      colors: {
        primary: "#64FFDA",
        secondary: "#CCD6F6",
      },
      cursor: {
        fancy: "url(../img/cursor/c32.png),auto",
        fancyLink: "url(../img/cursor/f32.png),auto",
      },
    },
  },
  plugins: [],
};
