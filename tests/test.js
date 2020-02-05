const test = require('ava');
const cp = require('child_process');

const n = 'node ./src/index.js';

test('it should let the command run.', t => {
	const command = 'echo "Hello"';
    t.is(cp.execSync(`${n} ${command}`).toString(), 'Hello\n');
});

test('it should keep fancy output.', t => {
    const command = 'echo "\033[0;31mHello"';
    t.is(cp.execSync(`${n} ${command}`).toString(), '\033[0;31mHello\n');
});

test('it should have multiple output.', t => {
    const command = 'echo "Hello" && echo "World"';
    t.is(cp.execSync(`${n} ${command}`).toString(), 'Hello\nWorld\n');
});

test('it should exit with same code.', async t => {
    const run = cp.spawn('node', ['./src/index.js', 'exit', '1']);
    const code = await new Promise((resolve) => {
        run.on('close', (code) => {
            resolve(code);
        });
    });
    t.is(code, 1);
});
