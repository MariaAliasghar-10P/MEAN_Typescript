var userApp;
(function (userApp) {
    "use strict";
    function routes($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/", {
            templateUrl: "app/views/pages/home.html",
        })
            .when("/about", {
            templateUrl: "app/views/pages/about.html",
        })
            .when("/register", {
            templateUrl: "app/views/pages/users/register.html",
            controller: "regCtrl",
            controllerAs: "register",
        })
            .when("/login", {
            templateUrl: "app/views/pages/users/login.html",
        })
            .otherwise({
            redirectTo: "/",
        });
    }
    userApp.routes = routes;
    angular.module("userApp").config(routes);
})(userApp || (userApp = {}));
// angular.module("appRoutes", ["ngRoute"]).config([
//   "$routeProvider:ng.route.IRouteProvider",
//   "$locationProvider:ng.ILocationProvider",
//   function (
//     $routeProvider: ng.route.IRouteProvider,
//     $locationProvider: ng.ILocationProvider
//   ) {
//     $locationProvider.html5Mode(true);
//     $routeProvider
//       .when("/", {
//         templateUrl: "app/views/pages/home.html",
//       })
//       .when("/about", {
//         templateUrl: "app/views/pages/about.html",
//       })
//       .when("/register", {
//         templateUrl: "app/views/pages/users/register.html",
//         controller: "regCtrl",
//         controllerAs: "register",
//       })
//       .when("/login", {
//         templateUrl: "app/views/pages/users/login.html",
//       })
//       .otherwise({
//         redirectTo: "/",
//       });
//   },
// ]);
//# sourceMappingURL=routes.js.map