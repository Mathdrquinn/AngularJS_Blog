angular.module("blog-modules")
  .factory("postDataSvc", function($rootScope, $log) {

    var _data = [
    {title: "Blog 1", author: "Brad", content: "Lorem ipsum dolor sit amet blah Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "Blog 2", author: "Bradly", content: "Lorem ipsum dolor sit amet blah blah"},
    {title: "Blog 3", author: "Braditive", content: "Lorem ipsum dolor sit amet blah blah blah"},
    {title: "Blog 4", author: "Bradder", content: "Lorem ipsum dolor sit amet"},
    {title: "Blog 5", author: "Brad", content: "Lorem ipsum dolor sit amet blah"},
    {title: "Blog 6", author: "Bradly", content: "Lorem ipsum dolor sit amet blah blah"},
    {title: "Blog 7", author: "Braditive", content: "Lorem ipsum dolor sit amet blah blah blah"},
    {title: "Blog 8", author: "Bradder", content: "Lorem ipsum dolor sit amet"}
    ];

    var getData = function() {
      return _data;
    }

    var putData = function (post) {
      _data.push(post);
    }

    return {
      getData: getData,
      putData: putData
    }

  });
