/* --------------------
 * jest-expect-subclass module
 * Tests
 * ------------------*/

'use strict';

// Modules
const {printReceived, printExpected} = require('jest-matcher-utils');
require('jest-expect-subclass');

// Tests

describe('expect.toBeSubclassOf()', () => {
	describe('passes if', () => {
		it('receives direct subclass of specified class', () => {
			class Class {}
			class SubClass extends Class {}

			expect(SubClass).toBeSubclassOf(Class);
		});

		it('receives indirect subclass of specified class', () => {
			class Class {}
			class SubClass extends Class {}
			class SubSubClass extends SubClass {}

			expect(SubSubClass).toBeSubclassOf(Class);
		});
	});

	describe('fails if', () => {
		it('receives null', () => {
			class Class {}

			expect(
				() => expect(null).toBeSubclassOf(Class)
			).toThrowWithMessage(
				Error, `expected ${printReceived(null)} to be subclass of ${printExpected(Class)}`
			);
		});

		it('receives a different class from specified class', () => {
			class Class {}
			class OtherClass {}

			expect(
				() => expect(OtherClass).toBeSubclassOf(Class)
			).toThrowWithMessage(
				Error,
				`expected ${printReceived(OtherClass)} to be subclass of ${printExpected(Class)}`
			);
		});

		it('receives instance of specified class', () => {
			class Class {}

			expect(
				() => expect(new Class()).toBeSubclassOf(Class)
			).toThrowWithMessage(
				Error,
				`expected ${printReceived({})} to be subclass of ${printExpected(Class)}`
			);
		});
	});
});

describe('expect.toBeDirectSubclassOf()', () => {
	describe('passes if', () => {
		it('receives direct subclass of specified class', () => {
			class Class {}
			class SubClass extends Class {}

			expect(SubClass).toBeDirectSubclassOf(Class);
		});
	});

	describe('fails if', () => {
		it('receives null', () => {
			class Class {}

			expect(
				() => expect(null).toBeDirectSubclassOf(Class)
			).toThrowWithMessage(
				Error, `expected ${printReceived(null)} to be direct subclass of ${printExpected(Class)}`
			);
		});

		it('receives a different class from specified class', () => {
			class Class {}
			class OtherClass {}

			expect(
				() => expect(OtherClass).toBeDirectSubclassOf(Class)
			).toThrowWithMessage(
				Error,
				`expected ${printReceived(OtherClass)} to be direct subclass of ${printExpected(Class)}`
			);
		});

		it('receives instance of specified class', () => {
			class Class {}

			expect(
				() => expect(new Class()).toBeDirectSubclassOf(Class)
			).toThrowWithMessage(
				Error,
				`expected ${printReceived({})} to be direct subclass of ${printExpected(Class)}`
			);
		});

		it('receives indirect subclass of specified class', () => {
			class Class {}
			class SubClass extends Class {}
			class SubSubClass extends SubClass {}

			expect(
				() => expect(SubSubClass).toBeDirectSubclassOf(Class)
			).toThrowWithMessage(
				Error,
				`expected ${printReceived(SubSubClass)} to be direct subclass of ${printExpected(Class)}`
			);
		});
	});
});
