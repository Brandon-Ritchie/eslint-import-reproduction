import eslintJSPlugin from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import { configs as tsEslintConfigs } from "typescript-eslint";

const config = [
    eslintJSPlugin.configs.recommended,
    ...tsEslintConfigs.strict,
    {
        rules: {
            "@typescript-eslint/no-deprecated": "error",
        },
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    importPlugin.flatConfigs.recommended,
    {
        rules: {
            "import/first": "error",
            "import/no-amd": "error",
            "import/no-anonymous-default-export": "error",
        },
        settings: {
            "import/parsers": {
                "@typescript-eslint/parser": [".ts", ".tsx"],
            },
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: "./tsconfig.json",
                },
            },
        },
    },
];

export default config;
