import * as assert from 'assert';
import {jest} from '@jest/globals'
jest.setTimeout(1000*10)
describe('Extension Test Suite', () => {
	it('Sample test', async() => {
		await(global as any ).vsc.window.showInformationMessage('Hello World from yotest!');
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	})
});

// suite('Extension Test Suite', () => {
// 	test('Sample test', async() => {
// 		console.log('resolve vscode',typeof (await import('vscode')).window)
// 		await vscode.window.showInformationMessage('Hello World from yotest!');
// 		// await new Promise(res=>setTimeout(res,3000))
// 		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
// 	}).timeout(10000)
// });