/// <reference path="scripts/angular.js" />
/// <reference path="scripts/angular-route.js" />

var app = angular.module("RoutingDemo", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider
) {
    $locationProvider.hashPrefix("");
    $locationProvider.html5Mode(true);
    $routeProvider
        .when("/sample1",
            {
                templateUrl: "/Templates/sample1.html",
                controller: "sample1Controller"
            })
        .when("/sample2",
            {
                templateUrl: "/Templates/sample2.html",
                controller: "sample2Controller"
            })
        .when("/sample3",
            {
                templateUrl: "/Templates/sample3.html",
                controller: "sample3Controller"
        })
        .when("/sample/:sampleId", {
            templateUrl: "/Templates/sample.html",
            controller:"sampleController"
        });

});

app.controller("RoutingController",
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
app.controller("sample1Controller", function ($scope) {

});
app.controller("sample2Controller", function ($scope) {

});
app.controller("sample3Controller", function ($scope) {

});
app.controller("sampleController", function ($scope, $routeParams) {
    $scope.name = $routeParams.sampleId;

});