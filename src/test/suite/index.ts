import * as path from 'path';
import * as Mocha from 'mocha';
import * as glob from 'glob';
import * as jest from 'jest';
import * as vscode from 'vscode';
(global as any ).meni = 'meni';
console.log('index.ts cache', Object.keys(require.cache).length);
console.log('index.ts global meni',(global as any).meni);

export async function run(){
	const testsRoot = path.resolve(__dirname, '../../');

  const jestOptions = {
    roots: [testsRoot],
    testMatch: ['**/*.test.js'],
    runInBand:true
  };

  // Add any additional Jest configuration options as needed

  try {
    // Run the tests with Jest
	await jest.runCLI(jestOptions as any,jestOptions.roots);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// export function run(): Promise<void> {
// 	// Create the mocha test
// 	const mocha = new Mocha({
// 		ui: 'tdd',
// 		color: true
// 	});

// 	const testsRoot = path.resolve(__dirname, '..');

// 	return new Promise((c, e) => {
// 		glob('**/**.test.js', { cwd: testsRoot }, (err, files) => {
// 			if (err) {
// 				return e(err);
// 			}

// 			// Add files to the test suite
// 			files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));

// 			try {
// 				// Run the mocha test
// 				mocha.run(failures => {
// 					if (failures > 0) {
// 						e(new Error(`${failures} tests failed.`));
// 					} else {
// 						c();
// 					}
// 				});
// 			} catch (err) {
// 				console.error(err);
// 				e(err);
// 			}
// 		});
// 	});
// }
