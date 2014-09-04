angular.module("blog-modules.controllers", [])
.controller("homeController", function($scope, $location) {
  $scope.hello = "Hello, Welcome to Blog Place. THE place for blogs.";
  $scope.notFound = "Sorry, wrong place";

  $scope.toListView = function () {
    $location.path("/listview");
  };
  $scope.createPost = function () {
    $location.path("/createPost");
  };
});
