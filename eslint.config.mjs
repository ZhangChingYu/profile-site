import globals from "globals";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect", // 自動檢測 React 版本
      },
    },
    rules: {
      "react/prop-types": "warn", // 檢查未設置 PropTypes 的問題
    },
  },
  pluginReact.configs.flat.recommended,
];