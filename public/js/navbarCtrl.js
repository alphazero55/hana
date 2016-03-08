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
