$(document).ready(function() {


// PARALLAXING-------------------------------------------------------------->

// makes the parallax elements
function parallaxIt() {
  // create variables
  var $fwindow = $(window);
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  var $contents = [];
  var $backgrounds = [];

  // for each of content parallax element
  $('[data-type="content"]').each(function(index, e) {
    var $contentObj = $(this);

    $contentObj.__speed = ($contentObj.data('speed') || 1);
    $contentObj.__fgOffset = $contentObj.offset().left;
    $contents.push($contentObj);
  });

  // for each of background parallax element
  $('[data-type="background"]').each(function() {
    var $backgroundObj = $(this);

    $backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
    $backgroundObj.__fgOffset = $backgroundObj.offset().left;
    $backgrounds.push($backgroundObj);
  });

  // update positions
  $fwindow.on('scroll resize', function() {
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    $contents.forEach(function($contentObj) {
      var xPos = $contentObj.__fgOffset - scrollLeft / $contentObj.__speed;

      $contentObj.css('left', xPos);
    })

    $backgrounds.forEach(function($backgroundObj) {
      var xPos = -((scrollLeft - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

      $backgroundObj.css({
        backgroundPosition: xPos + 'px'
      });
    });
  });

  // triggers winodw scroll for refresh
  $fwindow.trigger('scroll');
};

parallaxIt();



// HAMBURGER MENU


$(document).ready(function(){
    $("#hamburger").mouseenter(function(){
       $("#menu").removeClass("display");
       $("#side-bar").removeClass("display");
    });

    $("#hamburger2").mouseenter(function(){
       $("#menu").removeClass("display");
       $("#side-bar").removeClass("display");
    });


    $("#menu").mouseleave(function(){
       $("#menu").addClass("display");
       $("#side-bar").addClass("display");
    });



});




// TEXT FADES IN ON SHORT ARTICLES

$(function () {
  $('.tlt').textillate();
  $('.tlt2').textillate({initialDelay:1500});
  $('.tlt3').textillate({initialDelay:2000});
  
})



$(function(){ 
  $('#ar-right').hide().delay(5500).fadeIn(2000);
});



// RANDOMIZATION


$(document).ready(function() {
  

var images = ["police1.png", "police2.png", "police3.png"]

$("#car").attr('src','images/' + images[Math.floor(Math.random()*images.length)] );


var ice = ["kids1.png", "kids2.png", "kids3.png"]

$("#kids").attr('src','images/' + ice[Math.floor(Math.random()*ice.length)] );


var easter = ["eggs1.png", "eggs2.png", "eggs3.png"]

$("#eggs").attr('src','images/' + easter[Math.floor(Math.random()*easter.length)] );


});


});