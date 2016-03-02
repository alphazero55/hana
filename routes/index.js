var parse = require('co-body'); //parse request body
var views = require('co-views');//for render
/// jadeをテンプレートエンジンとして設定。 set views's directory to /views
var render = views('./views', { map: { html: 'jade' } });


module.exports = {
    get_index: function* (next) {
        this.body = yield render('index.jade', {});
    },
    get_partials: function* (next) {
        this.body = yield render('partials/' + this.params.name + '.jade', {});
    },
}