# Notee
Be notified at the end of long running commands.

## How to install

```bash
yarn global add notee
# or
npm install -g notee
```

## How to use

Simply prefix your commands with `n` to get a notification once it completes.

```bash
n git clone git@github.com:yoannmoinet/notee.git
```

## Wishlist

Stuff that I don't know how to implement but would love to see in Notee.

- [ ] waiting for input

Being able to detect when the child process is waiting for an input, we could
proxy this input to the notification.
- [ ] out of focus

If we could detect when the terminal is out of focus, we could choose to show
or not the notification.
