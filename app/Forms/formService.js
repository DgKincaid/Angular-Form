

angularForms.factory('formService',
    function() {
        return {
            patient: {
                name: "Test Patient",
                MRN: "12314123",
                gender: "Female",
                DOB: "12-22-2014",
                SSN: "123-111-1111",
                email: "a@a.com",
                age: "68",
                phone: "333-333-3333",
                allergies: true,
                currentPatient: true
            }
        }
    });