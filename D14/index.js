console.log("Hi");
$(document).ready(function () {
  console.log("========");
  console.log("SCRIPT RUNNING");
  console.log("========");
});
$("#click-hide").click(function () {
  $(".view").hide();
  console.log("HIDE");
});
$("#click-show").click(function () {
  $(".view").show();
  console.log("SHOW");
});

$(".active").click(function () {
  $("#home").show();
  $("#about,#profile,#about,#contact").hide();
  console.log("SHOW");
});
$(".profile").click(function () {
  $("#profile").show();
  $("#home,#about,#contact").hide();
  console.log("SHOW");
});
$(".about").click(function () {
  $("#about").show();
  $("#profile,#home,#contact").hide();
  console.log("SHOW");
});
$(".contact").click(function () {
  $("#contact").show();
  $("#about,#profile,#home").hide();
  console.log("SHOW");
});
