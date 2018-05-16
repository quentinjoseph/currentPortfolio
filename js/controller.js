var app = angular.module('myapp');

app.controller('controller1', function ($scope, $location, $http){

  $scope.sites =[
  	{
      title: 'Finnea Group',
      img: '/img/portfolio-thumbs/finnea.jpg',
      link: 'http://finneagroup.com/',
      description: 'Sketch file conversion for the homepage and many other pages on this site. A Wordpress site created with HTML, Javascript, Jquery, PHP, and Sass. '
  	},
  	{
      title: 'LJPR',
      img: '/img/portfolio-thumbs/ljpr.jpg',
      link: 'http://ljpr.com/',
      description: 'PSD design conversion of the large CTA at the top of the homepage as well as the hero below it.'
  	},
  	{
  		title: 'Music and Such',
      img:'/img/portfolio-thumbs/musicandsuch.jpg',
      link: 'http://musicandsuch.site/',
  		description:"This is a tiny site I created as a personal project to get familiar with WordPress. Site created using PHP, HTML, JavaScript, Sass, Jquery, lastFM api and CSS grid."
  	},
  	{
  		title: 'Quentin Joseph',
      img:'/img/portfolio-thumbs/quentinjoseph.jpg',
      link: 'http://quentinjoseph.com/',
  		description:"This site. Created with Angular, HTML, JavaScript, and Sass."
  	},
  	{
  		title: 'Nicole Joseph Soprano',
      img:'/img/portfolio-thumbs/nicolesite.jpg',
  		link: 'http://www.nicolejosephsoprano.com/',
  		description:'This was my first attempt at creating an entire website immediately after graduating Grand Circus a year ago. Coded from scratch, this site uses HTML5, CSS, Angular, JavaScript, NodeJS, Mailjet API, Google Maps API, and a Postgresql Database.'
  	},
  	{
  		title: 'Hypenings',
      img:'/img/portfolio-thumbs/hypenings.jpg',
  		link: 'https://hypenings.herokuapp.com',
  		description:'A group project created at Grand Circus using HTML5, CSS, AngularJS, JavaScript, NodeJS, Mailjet API, Google Maps API, geolocation, and a Postgresql Database.'
  	},
  	{
      title: 'Moash',
      img: '/img/portfolio-thumbs/moash.jpg',
      link: 'http://www.moash.org/',
      description: "I didn't create this site, however, I did code the site update designed by the designers at Deep Canvas. A brand new navigation bar, some positioning tweaks, footer, and mobile navigation were coded by me."
  	},
  	{
  		title: 'Various Excersises & Projects',
      img: '/img/portfolio-thumbs/codepen.jpg',
  		link: 'https://codepen.io/quentinjoseph/',
  		description:'Various CodePen projects. Feel free to browse.'
  	}
  ]






});
