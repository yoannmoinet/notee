#!/usr/bin/env node
const cp = require('child_process');
const nn = require('node-notifier');

const command = process.argv;
const commandMain = command[2];
const commandArgs = command.splice(3);

const end = (code) => {
    let symbol = '✅';
    let status = 'succeed';

    if (code !== 0) {
        symbol = '💥';
        status = 'failed';
    }

    nn.notify({
        title: `${symbol} Command ${status}.`,
        message: `${commandMain} ${commandArgs.join(' ')}`
    });

    process.exit(code);
};

const run = cp.spawn(commandMain, commandArgs, { stdio: [ 0, 1, 2 ] });
run.on('close', end);
