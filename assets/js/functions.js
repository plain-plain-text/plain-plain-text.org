function addWhatIses(){
  const token = Math.floor(Math.random() * 10000000000000).toString();
  $( this ).append("<div id='whatIs-box-" + token + "'></div>");
  const whatIses = $( this ).children("a").map(function(){
    if($( this ).attr("href").match(/^\/whatis\//)){
      return { href: $( this ).attr("href"),
        text: $( this ).html()
      };
    }
  }).get();
  $("#whatIs-box-" + token).html(function(_, oldHtml){
    return formatWhatIs(whatIses, token);
  });
  // now listen for clicks.
  whatIses.forEach((i) => {
    const target = "whatIs-doc-" + i.href.replace(/^\/whatis\//, "") + "-" + token;
    $("#" + target).on("show.bs.collapse", () => {
      getPage(i.href, target);
    });
  });
}

function formatWhatIs(whatIses, token){
  let pbox = "<p id='whatIs-buttons-" + token + "'>";
  let docbox = "</p><div class='row' id='whatIs-documents-" + token + "'>";
  whatIses.forEach((i) => {
    const tag = i.href.replace(/^\/whatis\//, "");
    const target = "whatIs-doc-" + tag + "-" + token;
    let pstring = "<button class='btn btn-primary' type='button' data-toggle='collapse' ontoggle='getPage(\"" + i.href + "," + target + "\")' data-target='#" + target;
    pstring = pstring + "' aria-expanded='false' aria-controls='#" + target + "'>";
    pbox = pbox + pstring + i.text + "?</button> ";
    let docstring = "<div class='col-12'><div class='collapse multi-collapse' id='" + target + "'></div></div>";
    docbox = docbox + docstring;
  });
  return pbox + docbox + "</div>";
}

function getPage(url, target){
  if($("#" + target).html().length === 0){
    $.get(url, (d) => {
      $("#" + target).html("<div class='mb-2 card card-body'>" + d + "</div>");
    });
  }
}
