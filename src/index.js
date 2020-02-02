#!/usr/bin/env node
const command = require('yargs').argv._;
const cp = require('child_process');
const nn = require('node-notifier');

const commandMain = command[0];
const commandArgs = command.splice(1);

const end = (code) => {
    nn.notify({
        title: 'Command done.',
        message: `${commandMain} ${commandArgs.join(' ')}`
    });
    process.exit(code);
};

const main = () => {
    const run = cp.spawn(commandMain, commandArgs);

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
