import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "components/**/*.{vue,js}",
    "pages/**/*.vue",
    "layouts/**/*.vue",
    "utils/**/*.{js,ts}",
  ],
};
