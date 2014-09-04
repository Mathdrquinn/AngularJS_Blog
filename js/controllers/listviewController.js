angular.module("blog-modules.controllers")

  .controller("listviewController", function ($scope, $location) {
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

      $scope.posts.push(newb);

      $scope.newPost = {title: "", author: "", content: ""};
      newb = $scope.newPost;
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
