module.exports = {
  apps: [
    /* EFIWEBSOCKET (SOCKETIO) */
    {
      name: "Efiwebsocket (SocketIO) :3000", // Running on PORT 3000
      script: "/var/www/html/node-apps/efiwebsocket/src/app.js",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
