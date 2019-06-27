$(function() {
  $(document).scroll(function() {
    var $nav = $(".menu-content");
    $nav.toggleClass("scrolled-1", $(this).scrollTop() > 75);
    $nav.toggleClass("scrolled-2", $(this).scrollTop() > 500);
    $nav.toggleClass("scrolled-3", $(this).scrollTop() > 715);
  });
});
