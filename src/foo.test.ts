import {
	describe,
	expect,
	test,
} from '@jest/globals';

import { foo } from './main-export';

describe('foo', () => {
	test('returns true', () => {
		expect(foo()).toBe(true);
	});
});
