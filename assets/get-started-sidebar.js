// Create the sidebar menus for each OS and Cloud Partner

$([".macos", ".linux", ".windows"]).each(function(index, osClass) {
  buildSidebarMenu(osClass, "#get-started-locally-sidebar-list");
});

$([".alibaba", ".aws", ".microsoft-azure", ".google-cloud"]).each(function(index, cloudPartner) {
  buildSidebarMenu(cloudPartner, "#get-started-cloud-sidebar-list");
});

// On start locally page load initially show the Mac OS menu
showSidebar("macos", ".get-started-locally-sidebar li");

$(["macos", "linux", "windows"]).each(function(index, osClass) {
  $("#" + osClass).click(function() {
    showSidebar(osClass, ".get-started-locally-sidebar li");
  })
});

// Show cloud partner side nav on click or hide side nav if already open
$(["alibaba", "aws", "microsoft-azure", "google-cloud"]).each(function(index, sidebarClass) {
  $("#" + sidebarClass).click(function() {
    if ($(this).parent().hasClass('open')) {
      showSidebar(sidebarClass);
    } else {
      showSidebar(sidebarClass, ".get-started-cloud-sidebar li");
    }
  })
});

function buildSidebarMenu(osClass, test) {
  $(osClass + " > h2," + osClass + " > h3").each(function(index, element) {
    osClass = osClass.replace(".", "");

    // If the menu item is an H3 tag then it should be indented
    var indentMenuItem = $(element).get(0).tagName == "H3" ? "subitem" : "";

    // Combine the menu item classes
    var menuItemClasses = [osClass, indentMenuItem].join(" ");

    $(test).append(
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

function showSidebar(osClass, test) {
  // Hide all of the menu items at first
  // Then filter for the selected OS

  $(test)
    .hide()
    .filter(function() {
      return $(this)
        .attr("class")
        .includes(osClass);
    })
    .show();
}

$(".get-started-locally-sidebar li").on("click", function() {
  removeActiveClass();
  addActiveClass(this);
});

function removeActiveClass() {
  $(".get-started-locally-sidebar li a").each(function() {
    $(this).removeClass("active");
  });
}

function addActiveClass(element) {
  $(element)
    .find("a")
    .addClass("active");
}

if ($("#get-started-locally-sidebar-list").text() == "") {
  $("#get-started-shortcuts-menu").hide();
}
