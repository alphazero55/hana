'use strict';

/* Controllers */

app
    .controller('navbarCtrl', function ($scope, $log) {
        //toggle nabvar colloapse
        $scope.collase_toggle=function() {
            var navbar=$('#navbar');
            if(navbar.attr("aria-expanded")=='true')navbar.collapse('hide');
        }
    })
    .controller('topCtrl', function ($scope, $log) {
    })
    .controller('func1Ctrl', function ($scope, $log) {
    })
    .controller('func2Ctrl', function ($scope, $log) {
    })
