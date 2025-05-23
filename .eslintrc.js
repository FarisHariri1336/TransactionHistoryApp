module.exports = {
  root: true,
  extends: ["@react-native", "@react-native-community", "airbnb-base", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "prettier", "react", "react-hooks", "react-native"],
  rules: {
    "import/extensions": "off",
    "import/no-default-export": "warn",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-plusplus": "off",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off", // conflict with typescript, use typescript rule instead
    "@typescript-eslint/no-use-before-define": ["error"],
    "object-shorthand": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    quotes: ["error", "double"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "react/require-default-props": ["off"],
    "react/default-props-match-prop-types": ["error"],
    "react/sort-prop-types": ["error"],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-native/no-color-literals": "warn",
    "react-native/no-inline-styles": "warn",
    "react-native/no-raw-text": "error",
    "react-native/no-single-element-style-arrays": "error",
    "react-native/no-unused-styles": "error",
    "react-native/sort-styles": "warn",
    "react-native/split-platform-components": "off",
    "arrow-body-style": "off",
    "no-undef": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off", // temporary
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off", // temporary
    "import/no-extraneous-dependencies": ["off", { devDependencies: true }],
    "react/no-unstable-nested-components": [
      "warn",
      {
        allowAsProps: true, // allow for now
        customValidators: [] /* optional array of validators used for propTypes validation */,
      },
    ],
  },
  overrides: [
    { files: ["./src/store/**/*"], rules: { "default-param-last": "off" } },
    {
      files: ["./sonar-project.js"],
      rules: { "import/newline-after-import": "off" },
    },
    {
      files: ["./jest.*.*"],
      rules: {
        "import/no-default-export": "off",
        "eslint-comments/no-unused-disable": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
