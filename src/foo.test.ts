import {
	describe,
	expect,
	test,
} from '@jest/globals';

import { foo } from './main-export.js';

describe('foo', () => {
	test('returns true', () => {
		expect(foo()).toBe(true);
	});
});
