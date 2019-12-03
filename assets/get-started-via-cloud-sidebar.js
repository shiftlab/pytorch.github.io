// Create the sidebar menus for each cloud partner

$([".alibaba", ".aws", ".microsoft-azure", ".google-cloud"]).each(function(index, cloudPartner) {
  buildSidebarMenu(cloudPartner);
});

$("#alibaba").on("click", function() {
  showSidebar();
});

$("#microsoft-azure").on("click", function() {
  showSidebar("microsoft-azure");
});

$("#google-cloud").on("click", function() {
  showSidebar("google-cloud");
});

$("#aws").on("click", function() {
  showSidebar("aws");
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
  $(".get-started-cloud-sidebar li")
    .filter(function() {
      return $(this)
        .attr("class")
        .includes(cloudPartner);
      })
    .toggle();
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
