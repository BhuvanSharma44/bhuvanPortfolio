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
    },
  },
  plugins: [],
};
