module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange: { "300_ce": "#e58e50ce" },
        black: { 900: "#000000" },
        gray: { "900_02": "#152235", "900_01": "#191818", "900_03": "#152230" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        xs: "3.6px 8.39px  1px 7.79px #000000",
        sm: "0px 30.57px  23px 0px #0000003f",
        md: "0px 5.95px  23px 5.95px #0000003f",
        lg: "0px 8.99px  23px 13.79px #0000003f",
      },
      fontFamily: { inriaserif: "Inria Serif", inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #e54c91,#f48b7b,#f7ad50)",
        gradient1: "radial-gradient(184deg, #e54b9063,#f48a7b3d,#f48b7b)",
        gradient2: "linear-gradient(134deg, #e54c91c6,#e54c91c6,#e88a7ce8,#e54c91c6)",
        gradient3: "linear-gradient(90deg, #f7ad50,#eb4335)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
