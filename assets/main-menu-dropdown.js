$("[data-toggle='resources-dropdown']").hover(function() {
  toggleDropdown($(this).attr("data-toggle"));
  toggleArrowClass(".resource-option");
});

function toggleDropdown(menuToggle) {
  var showMenuClass = "show-menu";
  var menuClass = "." + menuToggle + "-menu";

  if ($(menuClass).hasClass(showMenuClass)) {
    $(menuClass).removeClass(showMenuClass);
  } else {
    $("[data-toggle=" + menuToggle + "].show-menu").removeClass(showMenuClass);
    $(menuClass).addClass(showMenuClass);
  }
}

function toggleArrowClass(dropdown, options) {
  var options = ["with-right-white-arrow", "with-right-orange-arrow", "with-right-black-arrow"];
  var string = "with-down-white-arrow";
  $(dropdown).toggleClass(options + string);
}
