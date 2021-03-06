
/*JS for input fields*/
var app = angular.module("myModule",["ngMaterial"]);
app.controller("myController",function(){

});

/*DropDown JS*/
angular.module('myModule', ['ngMaterial'])
    .controller('AppCtrl', function($scope) {
    });

/*Button*/




/*main Grid JS*/
angular
    .module('myModule', ['ngMaterial'])
    .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildToggler(navID) {
            return function() {
                return $mdSidenav(navID).toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        }
    })
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    })
    .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };
    });



