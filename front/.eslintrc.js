module.exports = {
	extends: ["next", "plugin:@tanstack/eslint-plugin-query/recommended", "prettier"],
	plugins: ["unicorn"],
	rules: {
		"no-unused-vars": [
			"error",
			{
				args: "after-used",
				caughtErrors: "none",
				ignoreRestSiblings: true,
				vars: "all"
			}
		],
		"prefer-const": "error",
		"react-hooks/exhaustive-deps": "error",
		"unicorn/filename-case": [
			"error",
			{
				case: "kebabCase"
			}
		]
	}
};
