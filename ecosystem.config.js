module.exports = {
  apps: [
    {
      name: 'next-app',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 3000,
        NODE_ENV: 'production'
      }
    }
  ]
}
