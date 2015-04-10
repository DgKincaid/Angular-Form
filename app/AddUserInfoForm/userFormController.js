/**
 * Created by DKINCAID on 4/9/2015.
 */

var app = angular.module('angularForms');

var userFormController = function($scope, $window, userFormService){
    console.log('userFormController hello world');

    $scope.user = userFormService.user;

    $scope.tempUser = angular.copy($scope.user);
    
    $scope.submitForm = function (){
        $scope.user = angular.copy($scope.tempUser);
        $window.history.back();
    };

    $scope.cancelForm = function (){
        $window.history.back();
    };

    console.log($scope.user);
    console.log($scope.tempUser);
};

app.controller("UserFormController", ['$scope', '$window', 'userFormService', userFormController]);