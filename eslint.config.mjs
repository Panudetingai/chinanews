import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/ban-types": "off", // This will allow empty object types {}
      "@typescript-eslint/no-empty-interface": "off",
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/no-unescaped-entities": "off",
      "no-console": "off",
      "@typescript-eslint/": "off",
      "react/": "off",
      "import/": "off",
      "jsx-a11y/": "off",
      "*": "off"
    },
    parserOptions: {
      project: null // This will disable TypeScript strict checks
    }
  }
];

export default eslintConfig;
