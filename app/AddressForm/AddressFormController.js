/**
 * Created by DKINCAID on 4/10/2015.
 */

var app = angular.module('angularForms');

var addressController = function(){
    console.log('Address Controller');

    $scope.submitForm = function (){
        $scope.user = angular.copy($scope.tempUser);
        $window.history.back();
    };

    $scope.cancelForm = function (){
        $window.history.back();
    };
};

app.controller('AddressController', [addressController]);