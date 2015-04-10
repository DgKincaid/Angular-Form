/**
 * Created by DKINCAID on 4/10/2015.
 */

angularForms.factory('UserService',
    function() {
        return {
            user: {
                firstName: "John",
                lastName: "Jonathan",
                email: "j@gmail.com",
                address: [{
                    addressName: "Home Address",
                    fullName: "Joe",
                    line1: "1 w st",
                    line2: "",
                    city: "Burlington",
                    state: "VT",
                    zip: "05401",
                    country: "US"
                },
                {
                    addressName: "Work Address",
                    fullName: "Jonathan",
                    line1: "25 Grean Drive",
                    line2: "",
                    city: "South Burlington",
                    state: "VT",
                    zip: "05403",
                    country: "US"
                }]
            }
        }
    });