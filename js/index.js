/**
 * Created by stephen on 2016/3/24.
 */

(function (angular) {
    angular.module('app', []).
    controller('indexCtrl', function ($scope) {
        $scope.add = function (a, b) {
            a = Number(a);
            b = Number(b);
            if (a && b && !isNaN(a) && !isNaN(b))
                return a + b;
            return -1;
        }
    });
})(window.angular);