// Add icon for external links & flesh out ToC
$(document).ready(function() {
  let externalLink = $.parseHTML("<span>&nbsp;<i style='vertical-align: baseline; font-size: 60%;' class='fa fa-small fa-external-link-alt'></i></span>");
  $("a[href^='http']:not(a:has(img))").append(externalLink);
  $("a[href^='http']").attr("target", "_blank");
  
// Bump down content
if($(".fixed-top").length){
  $("#main").css("margin-top",  $("#navbar").height() + $(".fixed-top").data("margin") + "px");
}

  // flesh out table of contents.
  $("#tocList").append(function(){
    let contents =  ""
    $("article > h2").each(function(){
      contents += "<div class='nav-item'><a class='nav-link' href='#" + $( this ).attr("id") + "'>" + $( this ).text() + "</a></div>\n";
    });
    if(contents.length > 0){
      $("#tocDiv").attr("style", "display: block;");
    }
    return contents;
  });
}); 

// Add the whatis and tutorials.
$(document).ready(() => {
  addTheGoodies("article");
});

// Add the modules.
// $(document).ready(() => {
//   $("article > h4").each(addModules);
// });
