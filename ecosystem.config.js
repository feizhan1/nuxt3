module.exports = {
  apps: [
    {
      name: 'kingblog',
      port: '8080',
      exec_mode: 'cluster',
      instances: '4',
      script: './.output/server/index.mjs',

    },
  ],
}
