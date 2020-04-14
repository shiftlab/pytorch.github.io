function getIds() {
  $.ajax({
    url: "http://127.0.0.1:4000/github-stars.json",
    type: "GET",
    dataType: "json",
    success: function(data) {
      window.alert(data);
      callGithub(data);
    }
  });
}

function callGithub(data) {
  // loop through data
  // send each ID to github call
  // add response to obj
  // write obj to file
}

$.ajax({
  url: "https://api.github.com/repos/pytorch/pytorch",
  type: "GET",
  dataType: "data",
  success: function(data) {
    window.alert(data);
  }
});

curl -i https://api.github.com/repos/pytorch/pytorch
Response[“stargazers_count”]
