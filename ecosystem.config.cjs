module.exports = {
  apps: [
    {
      name: 'juice-shop',
      script: 'npm',
      args: 'run dev',
      cwd: __dirname,
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      }
    }
  ]
}
