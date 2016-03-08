'use strict';

/* Controllers */

app
    .controller('topCtrl', function ($scope, $log) {
    })
    .controller('func1Ctrl', function ($scope, $log) {
        //SVG
        //
        //draw
        var draw = SVG('drawing').size(320, 240);
        //draw.attr({class:'center-block'});
        //img
        //var img =draw.image('./img/320x240.png');
        //border
        var border=draw.rect(320,240).attr({'fill': 'none','stroke': 'blue','stroke-width': '1px'}).center(320/2,240/2);
        //xy point
        var planet = draw.circle(50*2).attr({ fill: 'blue' }).center(320/2,240/2);
        //xy point.draggable();
        planet.draggable(function(x, y) {
                var x_max=(320-50*2),
                    y_max=(240-50*2);
                if (x>x_max)x=x_max;
                if (y>y_max)y=y_max;
                if (x<0)x=0;
                if (y<0)y=0;
                return {x: x,y: y};
        });

    })
    .controller('func2Ctrl', function ($scope, $log) {
    })
