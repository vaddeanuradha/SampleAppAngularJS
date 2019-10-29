var app = angular.module("EmployeesDemo", ["ngRoute"]);
app.controller("EmployeeDemoController",
    function ($scope) {
       

    });
app.controller("HomeController", function ($scope) {


});
app.controller("AboutController", function ($scope) {

});
app.controller("EmployeeListController", function ($scope) {
    $scope.EmployeeList = {}
    $http.get("http://localhost:34025/api/GetList", function (response) {
        $scope.EmployeeList = response.data;

    });
       
    
});
app.controller("EmployeeDetailsController", function($scope,$routeParams) {
    $scope.EmployeeDetailsList = [
        {
            Id: 1,
            Name: "Raj",
            Skill: ".Net",
            Designation:"SE"
        },
        {
            Id: 2,
            Name: "Krish",
            Skill: "C++",
            Designation:"SSE"
        },
        {
            Id: 3,
            Name: "Krishna",
            Skill: "C",
            Designation:"SE"
        },
        {
            Id: 4,
            Name: "Karan",
            Skill: "Oracle",
            Designation:"SSE"
        }
    ];

    var Id = $routeParams.Id;
    $scope.Employee = {};
    for (var i = 0; i < $scope.EmployeeDetailsList.length;i++) {
        if ($scope.EmployeeDetailsList[i].Id == Id) {
            $scope.Employee = $scope.EmployeeDetailsList[i];
        }
    }
});
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $locationProvider.html5Mode(true);
    $routeProvider.when("/Home",
        {
            templateUrl: 'Templates/Home.html',
            controller: 'HomeController'
        })
        .when("/Employees",
            {
                templateUrl: 'Templates/Employees.html',
                controller: 'EmployeeListController'
            })

        .when("/About",
            {
                templateUrl: 'Templates/About.html',
                controller: 'AboutController'
            })
        .when("/Employees/:Id",
            {
                templateUrl: 'Templates/EmployeeDetails.html',
                controller: 'EmployeeDetailsController'
            }).otherwise("/");
});