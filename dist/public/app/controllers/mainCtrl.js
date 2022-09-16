//import * as _angular_ from "angular";
//module Application.Controllers{
var userApp;
(function (userApp) {
    class mainCtrl {
        constructor($scope, $http, $timeout) {
            this.scope = $scope;
            this.http = $http;
            this.timeout = $timeout;
        }
        doLogin(loginData) {
            this.loading = true;
            this.errorMsg = false;
            this.http.post("/api/authenticate", loginData).then(function (data) {
                console.log(this.loading);
                console.log("u8888i");
                if (data.data.success) {
                    console.log("ui777");
                    this.loading = false;
                    this.successMsg = data.data.message + "...Redirecting";
                    this.timeout(function () {
                        this.location.path("/about");
                    }, 1000);
                }
                else {
                    console.log("ui");
                    this.loading = false;
                    console.log("udcdci");
                    this.errorMsg = data.data.message;
                }
            });
        }
    }
    userApp.mainCtrl = mainCtrl;
    //}
    angular.module("userApp").controller("mainCtrl", mainCtrl);
})(userApp || (userApp = {}));
//# sourceMappingURL=mainCtrl.js.map