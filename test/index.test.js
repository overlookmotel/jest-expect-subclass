/* --------------------
 * jest-expect-subclass module
 * Tests
 * ------------------*/

'use strict';

// Modules
const jestExpectSubclass = require('jest-expect-subclass');

// Init
require('./support/index.js');

// Tests

describe('tests', () => {
	it.skip('all', () => { // eslint-disable-line jest/no-disabled-tests
		expect(jestExpectSubclass).not.toBeUndefined();
	});
});
