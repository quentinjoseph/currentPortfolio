// shrink nav
$(window).scroll(function () {
  if ($(document).scrollTop() > 20) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});



// function adds class to selected nav option
function navSelect(event){
var target=$(event.srcElement);
$('.nav-ul li a').removeClass('selected');
target.addClass('selected');
}

// function removes class if "Quentin Joseph" title in nav is selected returning user to landing page
function clearSelected(){
$('.nav-ul li a').removeClass('selected');
}
// function adds class to selected mobile nav option
function mobileNavSelect(event){
var target=$(event.srcElement);
$('.sidenav a').removeClass('selected');
target.addClass('selected');
}

// these functions show and hide video titles on audio/video page
function hello(event){
	var currentdiv=$(event.srcElement.children);
	$('div').removeClass('show-me');
	currentdiv.addClass('show-me');
}
function bye(event){
	$('div').removeClass('show-me');
}


// mobile slide nav
function openNav() {
    var windowWidth = window.innerWidth;
    if (windowWidth >= 600){
    document.getElementById("mySidenav").style.width = "200px";
  }else{
    document.getElementById("mySidenav").style.width = "100%";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



// card flips
// $(document).ready(function () {
//   // make link flip card
//   $('.front').on('click', function (e) {
//     console.log('scoopsy poopsy');
//     e.preventDefault();
//     $(this).siblings('.back').css('transform', 'rotateY(0deg)');
//     $(this).css('transform', 'rotateY(180deg)');
//   });

//   //make x close card
//   $('.cardClose').on('click', function (e) {
//     $(this).parent('.back').css('transform', 'rotateY(180deg)');
//     $(this).closest('.back').siblings('.front').css('transform', 'rotateY(0deg)');
//   });


// });