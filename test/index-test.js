/**
 * Created by stephen on 2016/3/24.
 */

'use strict';

describe('indexCtrl', function () {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        // 注入contorller
        $controller = _$controller_;
    }));
    //
    describe('indexCtrl.add', function () {
        it('输入2和3期望得到结果5', function () {
            var $scope = {};
            //spec body
            var indexCtrl = $controller('indexCtrl', {$scope: $scope});
            expect(indexCtrl).toBeDefined();
            expect($scope.add(2, 3)).toEqual(Number(5));
        });
        it('输入a和3得到结果-1', function () {
            var $scope = {};
            //spec body
            var indexCtrl = $controller('indexCtrl', {$scope: $scope});
            expect(indexCtrl).toBeDefined();
            expect($scope.add('a', 3)).toEqual(Number(-1));
        });
    });
});