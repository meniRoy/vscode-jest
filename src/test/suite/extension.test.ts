console.log('test cache', Object.keys(require.cache).length);
console.log('global meni',(global as any).meni);

import * as assert from 'assert';
import * as vscode from 'vscode';
// describe('Extension Test Suite', () => {
// 	it('Sample test', async() => {
// 		vscode.window.showInformationMessage('Hello World from yotest!');
// 		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
// 	})
// });

suite('Extension Test Suite', () => {
	test('Sample test', async() => {
		vscode.window.showInformationMessage('Hello World from yotest!');
		await new Promise(res=>setTimeout(res,3000))
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	}).timeout(10000)
});