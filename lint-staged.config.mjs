export default {
  "*.{js,jsx,ts,tsx,json,css,md}": ["pnpm lint:fix --", "pnpm format:fix --"],
  ".github/workflows/*.{yml,yaml}": ["actionlint"],
};
