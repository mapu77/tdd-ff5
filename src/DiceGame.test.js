import { sum, score } from './DiceGame.js';

describe('DiceGame', () => {
	test('dummy test', () => {
		expect(sum(1, 1)).toEqual(2);
	});
	
	xtest('no repeted value scores 0 points', () => {
		const actualScore = score([1,2,3,4,5,6]);
		expect(actualScore).toEqual(0);
	});
});
