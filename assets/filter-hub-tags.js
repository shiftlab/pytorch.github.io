var filterScript = $("script[src*=filter-hub-tags]");
var listId = filterScript.attr("list-id");
var displayCount = Number(filterScript.attr("display-count"));
var pagination = filterScript.attr("pagination");
var options, hubList;

$.getJSON("/github-stars.json", function(data) {
  githubInfo = data["data"];

  for (var i = 0; i < githubInfo.length; i++) {
    $("[data-id='" + githubInfo[i].id + "'] .github-stars-count").html(
      githubInfo[i].count
    );
  }

  options = {
    valueNames: ["github-stars-count", { data: ["tags"] }],
    page: displayCount
  };

  // Only the hub index pages should have pagination

  if (pagination == "true") {
    options.pagination = true;
  }

  hubList = new List("hub-cards", options);
});

function filterSelectedTags(cardTags, selectedTags) {
  return cardTags.some(function(tag) {
    return selectedTags.some(function(selectedTag) {
      return selectedTag == tag;
    });
  });
}

function updateList() {
  var selectedTags = [];

  $(".selected").each(function() {
    selectedTags.push($(this).data("tag"));
  });

  hubList.filter(function(item) {
    var cardTags = item.values().tags.split(",");

    if (selectedTags.length == 0) {
      return true;
    } else {
      return filterSelectedTags(cardTags, selectedTags);
    }
  });
}

$(".filter-btn").on("click", function() {
  if ($(this).data("tag") == "all") {
    $(this).addClass("all-tag-selected");
    $(".filter").removeClass("selected");
  } else {
    $(this).toggleClass("selected");
    $("[data-tag='all']").removeClass("all-tag-selected");
  }

  // If no tags are selected then highlight the 'All' tag

  if (!$(".selected")[0]) {
    $("[data-tag='all']").addClass("all-tag-selected");
  }

  updateList();
});

$("#sortLowLeft").on("click", function() {
  hubList.sort("github-stars-count", { order: "asc" });
});

$("#sortHighLeft").on("click", function() {
  hubList.sort("github-stars-count", { order: "desc" });
});
