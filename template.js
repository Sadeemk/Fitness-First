var json;
var queryParams = new URLSearchParams(window.location.search);
var projectTitle = queryParams.get('project');
console.log('query for', projectTitle);


$.getJSON("./exercise.json", function(data) {
  json = data;
});

$(document).ready(function () {
  // console.log(json);


  var source    = $('#entry-template').html();
  var template  = Handlebars.compile(source);
  var parentDiv = $("#templatedExercises");
  // parentDiv.append(html);

  for(var i = 0; i < json.length; i++){
    var curData = json[i];
    // var curHtml = template(curData);
    if(curData.name == projectTitle){
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }
    console.log(curData);
  }
});
