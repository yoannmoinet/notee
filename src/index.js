#!/usr/bin/env node
const cp = require('child_process');
const nn = require('node-notifier');

const command = process.argv;
const commandMain = command[2];
const commandArgs = command.splice(3);

const end = (code) => {
    nn.notify({
        title: 'Command done.',
        message: `${commandMain} ${commandArgs.join(' ')}`
    });
    process.exit(code);
};

const main = () => {
    const run = cp.spawn(commandMain, commandArgs);
    console.log('Run', commandMain, commandArgs);
    run.stdout.on('data', (data) => {
        process.stdout.write(data.toString());
    });
    run.stderr.on('data', (data) => {
        process.stderr.write(data.toString());
    });
    run.on('error', (error) => {
        process.stderr.write(error);
        end(1);
    });
    run.on('close', end);
};

main();
