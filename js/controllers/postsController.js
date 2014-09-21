angular.module("blog-modules")

  .controller("postsController", function ($scope) {
    $scope.posts = [
    {title: "Blog 1", author: "Brad", content: "Lorem ipsum dolor sit amet blah"},
    {title: "Blog 2", author: "Bradly", content: "Lorem ipsum dolor sit amet blah blah"},
    {title: "Blog 3", author: "Braditive", content: "Lorem ipsum dolor sit amet blah blah blah"},
    {title: "Blog 4", author: "Bradder", content: "Lorem ipsum dolor sit amet"}
    ]
    $scope.goToBlog = function () {
      $location.path("/list view");
    };
  });
