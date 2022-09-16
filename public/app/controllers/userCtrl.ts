//import * as _angular_ from "angular";

//declare global {
//const angular: typeof _angular_;
//}
namespace userApp {
  export interface IregCtrl {
    loading: boolean;
    errorMsg: boolean;

    regUser: (regData) => void;
  }

  export class regCtrl implements IregCtrl {
    static controllerId = "AdminController";
    loading: boolean;
    errorMsg: any;

    private scope: ng.IScope;
    private http: ng.IHttpService;
    private location: ng.ILocationProvider;
    private timeout: ng.ITimeoutService;

    constructor(
      $scope: ng.IScope,
      $http: ng.IHttpService,
      $timeout: ng.ITimeoutService
    ) {
      this.scope = $scope;
      this.http = $http;
      this.timeout = $timeout;
    }

    public regUser(regData: any): void {
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
          } else {
            this.loading = false;
            this.errorMsg = this.data.data.message;
          }
        });
      } else {
        this.loading = false;
        this.errorMsg =
          "Enter correct data ,password should be of 8 characters";
      }
    }
  }
  angular.module("userApp").controller("regCtrl", regCtrl);
}
