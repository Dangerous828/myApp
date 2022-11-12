// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "taro/vue3",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-var": ["error"],
    "no-console":
      process.env.NODE_ENV === "production"
        ? ["error", { allow: ["warn", "error"] }]
        : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/multi-word-component-names": "off",
    "no-unused-vars": "off",
    "no-mixed-spaces-and-tabs": ["warn"],
    "no-alert": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "prefer-promise-reject-errors": "error",
    "require-await": "warn",
    "vue/no-unused-refs": "error",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
