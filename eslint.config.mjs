import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import vitestGlobals from "eslint-plugin-vitest-globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...compat.extends(
		"@rocketseat/eslint-config/node",
		"plugin:vitest-globals/recommended",
	),
	{
		plugins: {
			"@typescript-eslint": typescriptEslint,
			"vitest-globals": vitestGlobals,
		},

		languageOptions: {
			globals: {
				...vitestGlobals.environments.env.globals,
			},

			parser: tsParser,
		},

		rules: {
			"no-useless-constructor": "off",
		},
	},
];
