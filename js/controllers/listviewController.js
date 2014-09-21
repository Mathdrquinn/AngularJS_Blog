angular.module("blog-modules")

  .controller("listviewController", function ($scope, $location, postDataSvc) {

    $scope.posts = postDataSvc.getData();

    $scope.newPost = {title: "", author: "", content: ""};
    var newb = $scope.newPost;

    $scope.magic = function (title, author, content) {
      console.log("begin magic");

      newb.title = title;
      console.log(newb.title);

      newb.author = author;
      console.log(newb.author);

      newb.content = content;
      console.log(newb.content);

      postDataSvc.putData(newb);
      //$scope.posts.push(newb);
      console.log($scope.posts);

      $scope.newPost = {title: "", author: "", content: ""};
      newb = {};
    }

    $scope.editPost = function (post, content) {
      //var spot = post.indexOf();
      console.log("el post: " + post + ", and el content: " + content);
      post.content = content;
      console.log("should be posted");
    };

    $scope.toHome = function () {
      $location.path("/");
    };
    $scope.createPost = function () {
      $location.path("/createPost");
    };
    $scope.toListView = function () {
      $location.path("/listview");
    };
  });
