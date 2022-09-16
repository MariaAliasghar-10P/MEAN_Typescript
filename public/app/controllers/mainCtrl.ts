//import * as _angular_ from "angular";
//module Application.Controllers{
namespace userApp {
  export interface ImainCtrl {
    loading: boolean;
    errorMsg: any;
    

    doLogin: (loginData) => void;
  }

  export class mainCtrl implements ImainCtrl {
    public loading: boolean;
    public errorMsg: any;
    

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

    public doLogin(loginData: any): void {
      
      
      this.loading = true;
      this.errorMsg = false;
      this.http.post("/api/authenticate", loginData).then(function (data: any) {
        console.log(this.loading);
        console.log("u8888i");
        if (data.data.success) {
          console.log("ui777");
          this.loading = false;
          this.successMsg = data.data.message + "...Redirecting";
          this.timeout(function () {
            this.location.path("/about");
          }, 1000);
        } else {
          console.log("ui");
          this.loading = false;
          console.log("udcdci");
          this.errorMsg = data.data.message;
        }
      });
    }
  }

  //}
  angular.module("userApp").controller("mainCtrl", mainCtrl);
}
