
var angularForms = angular.module('angularForms', ['ngRoute']);

angularForms.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/home.html",
            controller: "homeController"
        })
        .when("/updatePatient", {
            templateUrl: "app/Forms/template.html",
            controller: "formController"
        })
        .when("/newUser", {
            templateUrl: "app/AddUserInfoForm/userInfoTemplate.html",
            controller: "UserFormController"
        })
        .when("/addressForm", {
            templateUrl: "app/AddressForm/addressTemplate.html",
            controller: "AddressController"
        })
        .otherwise({redirectTo: "/home"});
});