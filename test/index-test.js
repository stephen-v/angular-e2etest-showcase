/**
 * Created by stephen on 2016/3/24.
 */

'use strict';

describe('app', function () {
    beforeEach(module('app'));
    describe('indexCtrl', function () {

        it('add 测试', inject(function ($controller) {
            var $scope = {};
            //spec body
            var indexCtrl = $controller('indexCtrl', {$scope: $scope});
            expect(indexCtrl).toBeDefined();
            expect($scope.add(2, 3)).toEqual(5);
        }));

    });
});