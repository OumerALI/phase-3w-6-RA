/** @format */

$(".week-1").add(".hide");
$(".hide").hide();
$("h1").on("click", function () {
  $(this).remove(".hide");
  $(this).next(".week-1").slideToggle();
});
