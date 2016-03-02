var router = require('koa-router')();//koa-routerのインスタンス
var common = require('koa-common');//sub ap
var koa = require('koa');//socket.io
var join = require('path').join;
var _ = require('lodash');
var config = require('config');
var http = require('http');




///Server listen port
var port = 3000;
//use koa for app
var app = module.exports = koa(); //for nodejs module
//create
var server = http.createServer(app.callback());
//socket.io
var io = require('./models/socket').factory(server);

//paremeters

//init Servo position

///Staticの設定
//app.use(common.favicon());
app.use(common.logger());
app.use(common.static(join(__dirname, 'public')));

//Routerの設定
///routes module
var routes = require('./routes');
/// GET /* for default
router.get('/', routes.get_index);
///for some pages
router.get('/partials/:name',routes.get_partials );



///Routerの登録
app.use(router.routes());


// koa.io Socket.io Communication
///session db
var sess = [];
///connect
io.on('connection', function (socket) {
    // on connect
    sess.push(socket.id);
    console.log('added:' + socket.id);
    console.log('now:' + sess);

    socket.on("data", routes.recv_data);
    
    socket.on('disconnect', function () {
        // on disconnect
        console.log('remove:' + socket.id);
        sess = _.without(sess, socket.id);
        console.log('now:' + sess);
    });
});

//http start
server.listen(port, function () {
    console.log('Server listening at port %d', port);
});