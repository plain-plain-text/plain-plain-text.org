/* global addTheGoodies, addExternalLinks, toggleOS */

// Add icon for external links & flesh out ToC
$(document).ready(function() {
  
// Bump down content
  if($(".fixed-top").length){
    $("#main").css("margin-top",  $("#navbar").height() + $(".fixed-top").data("margin") + "px");
  }

  // flesh out table of contents.
  $("#tocList").append(function(){
    let contents =  "";
    $("article > h2").each(function(){
      contents += "<div class='nav-item'><a class='nav-link' href='#" + $( this ).attr("id") + "'>" + $( this ).text() + "</a></div>\n";
    });
    if(contents.length > 0){
      $("#tocDiv").attr("style", "display: block;");
    }
    return contents;
  });
}); 

$(document).ready(() => {
// Add the whatis and tutorials.
  addTheGoodies("article"); // this also adds external link icons.
  addExternalLinks("footer");
  $("#master-os").on("click", toggleOS);
});
