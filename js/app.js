angular.module("blog-modules", ["blog-modules.controllers","ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
      .when("/",
      {
        templateUrl: "views/home.html",
        controller: "homeController"
      })
      .when("/listview", {
        templateUrl: "views/listview.html",
        controller: "listviewController"
      })
      .when("/createPost", {
        templateUrl: "views/createPost.html",
        controller: "listviewController"
      })
      .when("/notFound",
      {
        templateUrl: "views/notFound.html",
        controller: "homeController"
      })
      .otherwise({
        redirectTo: "/notFound"
      });
  });
angular.module("tiy-ng-modules.controllers", []);
angular.module("tiy-ng-modules.services", []);

function MainController($scope) {

  $scope.posts = [
  {title: "Blog 1", author: "Brad", content: "Lorem ipsum dolor sit amet blah"},
  {title: "Blog 2", author: "Bradly", content: "Lorem ipsum dolor sit amet blah blah"},
  {title: "Blog 3", author: "Braditive", content: "Lorem ipsum dolor sit amet blah blah blah"},
  {title: "Blog 4", author: "Bradder", content: "Lorem ipsum dolor sit amet"},
  {title: "Blog 5", author: "Brad", content: "Lorem ipsum dolor sit amet blah"},
  {title: "Blog 6", author: "Bradly", content: "Lorem ipsum dolor sit amet blah blah"},
  {title: "Blog 7", author: "Braditive", content: "Lorem ipsum dolor sit amet blah blah blah"},
  {title: "Blog 8", author: "Bradder", content: "Lorem ipsum dolor sit amet"}
  ];

}
