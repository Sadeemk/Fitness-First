var context = {title: "My New Post", body: "This is my first post!"};

var json;

$.getJSON("./exercise.json", function(data) {
  json = data;
});

$(document).ready(function () {
  console.log(json);


  var template   = $('#entry-template').html();
  var templateScript = Handlebars.compile(template);


  var html    = templateScript(json[0]);
  $(document.body).append(html);

});
