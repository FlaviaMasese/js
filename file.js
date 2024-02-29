var $searchBox = $('#search-box');
var $pageWrap = $('#page-wrap');

$("#search-launcher").on('click', function(){
  $("#search-box").addClass("flipped");
  $("#page-wrap").addClass("flipped");
  
  $("#search-box").find("input").focus();
});


$searchBox.on('click', function(){
  $searchBox.removeClass('flipped');
  $pageWrap.removeClass('flipped');
});


/* 
 *  If you wanted to have the search actually
 *  ... you know, search, you would wire
 *  that up here.
 */

$searchBox.find('form').on('submit', function(e){
  e.preventDefault();
  $searchBox.removeClass('flipped');
  $pageWrap.removeClass('flipped');
});