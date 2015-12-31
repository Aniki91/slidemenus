$(document).ready(function(){

  var menu_left = $('.menu_left');
  var show_left = $('#show_left');
  
  var menu_right = $('.menu_right');
  var show_right = $('#show_right');

 $(show_left).click(function(){
		$(menu_left).toggleClass("menu_left");
    console.log("clicked");
	});
  
   $(show_right).click(function(){
		$(menu_right).toggleClass("menu_right");
    console.log("clicked");
	});
});