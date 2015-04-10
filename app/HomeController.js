angularForms.controller("homeController",
    function($scope, $location) {
        $scope.showCreatePatientForm = function () {
            $location.path("/updatePatient");
        };

        $scope.showUpdatePatientForm = function (id) {
            $location.path("/updatePatient/" + id);
        };

        $scope.showNewUserForm = function () {
            $location.path("/newUser");
        };

        $scope.showAddressForm = function () {
            $location.path("/addressForm");
        };
    });