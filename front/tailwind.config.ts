import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {},
	plugins: [require("@tailwindcss/container-queries")]
};

export default config;
