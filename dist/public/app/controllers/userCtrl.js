//import * as _angular_ from "angular";
//declare global {
//const angular: typeof _angular_;
//}
var userApp;
(function (userApp) {
    class regCtrl {
        constructor($scope, $http, $timeout) {
            this.scope = $scope;
            this.http = $http;
            this.timeout = $timeout;
        }
        regUser(regData) {
            this.loading = true;
            this.errorMsg = false;
            if (regData.email.includes("@") && regData.password.length >= 8) {
                this.http.post("/api/users", regData).then(function (data) {
                    if (this.data.data.success) {
                        this.loading = false;
                        this.successMsg = this.data.data.message + "...Redirecting";
                        this.timeout(function () {
                            this.location.path("/");
                        }, 1000);
                    }
                    else {
                        this.loading = false;
                        this.errorMsg = this.data.data.message;
                    }
                });
            }
            else {
                this.loading = false;
                this.errorMsg =
                    "Enter correct data ,password should be of 8 characters";
            }
        }
    }
    regCtrl.controllerId = "AdminController";
    userApp.regCtrl = regCtrl;
    angular.module("userApp").controller("regCtrl", regCtrl);
})(userApp || (userApp = {}));
//# sourceMappingURL=userCtrl.js.map