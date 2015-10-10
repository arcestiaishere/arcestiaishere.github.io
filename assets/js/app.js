$(document).ready(function(){
  alert("hello world");
if(window.location.href=="https://diary.arcestia.my.id/")
{
$("#sidebar").css({width:'100%'});
$("#btnblog").click(function(){
$("#sidebar").animate({width:'33.3333%'},'slow');
});
}
});
