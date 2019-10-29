var app = angular.module("ToDoApp", []);
app.controller("ToDoController", function ($scope, $http) {
    $http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=0c93a9c9c8864217a32046b67ed17ff1").then(function (response) {
        console.log(response.data);
        $scope.Data = response.data;
    }, function (error) {console.log("something went wrong")});
    $scope.Data = [];

    $http.get("http://localhost:34025/api/GetList").then(function (response) {
        $scope.Data = response.data;
    }, function (error) { console.log("Something went wrong") });

    $scope.amount = 123;

    $scope.AddItem = function () {
        var dataTemp = $scope.InputData;
        $scope.Data.push(dataTemp);
        $http.post("http://localhost:34025/api/UpdateList", $scope.Data).then(function (response) {
            console.log(response.data);
            $scope.Data = response.data;

        });

    }
});

