/* --------------------
 * jest-expect-subclass module
 * Tests ESLint config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	extends: [
		'@overlookmotel/eslint-config-jest'
	],
	rules: {
		'import/no-unresolved': ['error', {ignore: ['^jest-expect-subclass$']}],
		'node/no-missing-require': ['error', {allowModules: ['jest-expect-subclass']}]
	}
};
