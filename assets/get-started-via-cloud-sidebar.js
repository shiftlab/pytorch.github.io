// Create the sidebar menus for each cloud partner

$([".aws", ".azure", ".google-cloud"]).each(function(index, cloudPartner) {
  buildSidebarMenu(cloudPartner);
});

// On page load hide menu

showSidebar();

$("#aws").on("click", function() {
  showSidebar("aws");
});

$("#azure").on("click", function() {
  showSidebar("microsoft-azure");
});

$("#google-cloud").on("click", function() {
  showSidebar("google-cloud");
});

function buildSidebarMenu(cloudPartner) {
  $(cloudPartner + " > h2," + cloudPartner + " > h3").each(function(index, element) {
    cloudPartner = cloudPartner.replace(".", "");

    // If the menu item is an H3 tag then it should be indented
    var indentMenuItem = $(element).get(0).tagName == "H3" ? "subitem" : "";

    // Combine the menu item classes
    var menuItemClasses = [cloudPartner, indentMenuItem].join(" ");

    $("#get-started-cloud-sidebar-list").append(
      "<li class='" +
        menuItemClasses +
        "' style='display:none'><a href=#" +
        this.id +
        ">" +
        this.textContent +
        "</a></li>"
    );
  });
}

function showSidebar(cloudPartner) {
  // Hide all of the menu items at first
  // Then filter for the selected cloud partner

  $(".get-started-cloud-sidebar li")
    .hide()
    .filter(function() {
      return $(this)
        .attr("class")
        .includes(cloudPartner);
    })
    .show();
}

$(".get-started-cloud-sidebar li").on("click", function() {
  removeActiveClass();
  addActiveClass(this);
});

function removeActiveClass() {
  $(".get-started-cloud-sidebar li a").each(function() {
    $(this).removeClass("active");
  });
}

function addActiveClass(element) {
  $(element)
    .find("a")
    .addClass("active");
}

if ($("#get-started-cloud-sidebar-list").text() == "") {
  $("#get-started-shortcuts-menu").hide();
}
