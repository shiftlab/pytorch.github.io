var options = {
  valueNames: [ 'name', 'github-stars-count' ]
};

var $wrapper = $("#hub-cards");

console.log(options.valueNames);

$("#sortLowLeft").on("click", function() {
  sorter("low", $wrapper);
});

$("#sortHighLeft").on("click", function() {
  sorter("high", $wrapper);
});
