module.exports = {
  apps: [
    {
      name: 'juice-shop',
      script: 'build/app.js',
      cwd: __dirname,
      interpreter: 'node',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      }
    }
  ]
}
