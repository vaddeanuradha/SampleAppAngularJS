/// <reference path="scripts/angular.js" />

var app = angular.module("DirectivesDemo", []);
app.controller("DirectivesController",
    function ($scope) {

    $scope.ShowFirstSet = true;
        $scope.toggleData = function () {
            $scope.ShowFirstSet = !$scope.ShowFirstSet;
    }
    $scope.Submit = function () {
        console.log(data);
    }
    
    $scope.TestData = {
        data: "",
        show: true
    };
});