

angularForms.controller('formController',
    function formController($scope, $window, formService) {
        $scope.patient = formService.patient;
        $scope.patient.DOB = new Date(Date.parse($scope.patient.DOB));

        $scope.tempPatient = angular.copy($scope.patient);

        $scope.gender = [
            "Male",
            "Female"
        ];

        $scope.submitForm = function() {
            $scope.patient = angular.copy($scope.tempPatient);
            $window.history.back();
        };
        $scope.cancelForm = function () {
            $window.history.back();
        };
    });