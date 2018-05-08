var app= angular.module('myapp',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/about',{
      templateUrl: 'views/aboutme.html'
    })
    .when('/first',{
      templateUrl: 'views/first.html'
    })
    .when('/portfolio',{
      templateUrl: 'views/portfolio.html',
      controller: 'controller1'
    })
    .when('/audio-video',{
      templateUrl: 'views/audio-video.html',
      controller: 'controller1'
    })
    .when('/contact',{
      templateUrl: 'views/contact.html'
    })
    .otherwise({
    	templateUrl:'/views/first.html'
    });
  });
