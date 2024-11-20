import readline from 'node:readline';

readline.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {

  console.log(str, key)

  if (key.sequence === '\x03' && key.ctrl === true) {
    process.exit()
  }
});
