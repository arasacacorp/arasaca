const { spawn } = require('child_process');
const path = require('path');

const projectDir = '/home/z/my-project';
const maxRestarts = 50;
let restarts = 0;

function startServer() {
  if (restarts >= maxRestarts) {
    console.log(`Max restarts (${maxRestarts}) reached. Stopping.`);
    process.exit(1);
  }

  restarts++;
  console.log(`\n[${new Date().toISOString()}] Starting dev server (attempt ${restarts})...`);

  const child = spawn('./node_modules/.bin/next', ['dev', '-p', '3000'], {
    cwd: projectDir,
    stdio: 'inherit',
    detached: false,
  });

  child.on('exit', (code, signal) => {
    console.log(`\n[${new Date().toISOString()}] Server exited with code=${code} signal=${signal}`);
    console.log('Restarting in 3 seconds...');
    setTimeout(startServer, 3000);
  });

  child.on('error', (err) => {
    console.error('Failed to start server:', err);
    setTimeout(startServer, 3000);
  });

  process.on('SIGTERM', () => {
    console.log('Received SIGTERM, killing server...');
    child.kill('SIGTERM');
    process.exit(0);
  });

  process.on('SIGINT', () => {
    console.log('Received SIGINT, killing server...');
    child.kill('SIGINT');
    process.exit(0);
  });
}

startServer();
