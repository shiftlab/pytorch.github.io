docsearch({
  apiKey: "e3b73ac141dff0b0fd27bdae9055bc73",
  indexName: "pytorch",
  inputSelector: "#hub-search-input",
  algoliaOptions: { facetFilters: ["tags:hub"] },
  debug: false // Set debug to true if you want to inspect the dropdown
});

$("#hub-search-icon").on("click", function() {
  $(this).hide();
  $("#hub-close-search").fadeIn("slow");
  $(".hub-divider")
    .addClass("active-hub-divider")
    .fadeIn("slow");
  $("#hub-search-input")
    .show()
    .focus();
  $(".hub-search-wrapper").addClass("active");
  $("#dropdown-filter-tags").hide();
  $(".hub-tags-container").addClass("active");
});

$("#hub-close-search").on("click", function() {
  $(this).hide();
  $("#hub-search-icon").fadeIn("slow");
  $("#hub-search-input").fadeOut("slow");
  $(".hub-divider").removeClass("active-hub-divider");
  $("#hub-search-input")
    .removeClass("active-search-icon")
    .val("");
  $(".hub-search-wrapper").removeClass("active");
  $("#dropdown-filter-tags").fadeIn("slow");
  $(".hub-tags-container").removeClass("active");
});
