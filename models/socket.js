module.exports = {
    io: null,
    factory: function (server) {
        if (!this.io) {
            this.io = require('socket.io')(server);
        }
        return this.io;
    }
}