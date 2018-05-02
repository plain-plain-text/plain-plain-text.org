function addTheGoodies(target){
  addTheMacWinTogglers(target);
  [{tag: "p", f: addWhatIses}, {tag: "h4", f: addModules}].forEach((i) => {
    $(target).find(i.tag).each(i.f);
  });
}

function addWhatIses(){
  const token = generateToken();
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
      getPage(i.href, "#" + target);
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

function addModules(){
  // $(this).replaceWith($('<h5>' + this.innerHTML + '</h5>'));
  const module = $( this ).attr("module");
  const token = generateToken();
  const target = "details-" + token;
  let details = "<details ontoggle='getPage(\"/modules/" + module + "\", \"#" + target + "\");'>"
  details = details + "<summary>" + $( this ).html() + "</summary>";
  details = details + "<div class='pt-2' id='" + target + "'></div></details>";
  $(this).replaceWith($(details));
  // console.log($( this ).html());
}

function addTheMacWinTogglers(target){
  $(target).find(".pc").each(function(){
    let toggler = "<span class='computer-toggler'>";
    toggler = toggler + "<i class='apple-toggler fab fa-apple'></i> | <i class='win-toggler text-muted fab fa-windows'></i></span>&nbsp;";
    $( this ).html(function(_, old){
      return toggler + old
    });
    const currOS = $("#master-os").data("os");
    if(currOS === "apple"){
      $( this ).find(".win").addClass("d-none");
      $( this ).find(".mac").each(makeVisible);
      $( this ).find(".win-toggler").addClass("text-muted");
      $( this ).find(".apple-toggler").removeClass("text-muted");
    } else {
      $( this ).find(".mac").addClass("d-none");
      $( this ).find(".win").each(makeVisible);
      $( this ).find(".apple-toggler").addClass("text-muted");
      $( this ).find(".win-toggler").removeClass("text-muted");
    }
    $( this ).find(".computer-toggler").on("click", toggleOS);
  });
}

function toggleOS(){
  console.log("toggler clicked");
  if($("#master-os").data("os") === "apple"){
    // switch to windows.
    $(".mac").each(makeInvisible);
    $(".win").each(makeVisible);
    $(".apple-toggler").addClass("text-muted");
    $(".win-toggler").removeClass("text-muted");
    $("#master-os").data("os", "windows");
  } else {
    // Mac reigns.
    $(".win").each(makeInvisible);
    $(".mac").each(makeVisible);
    $(".win-toggler").addClass("text-muted");
    $(".apple-toggler").removeClass("text-muted");
    $("#master-os").data("os", "apple");
  }
}

function makeInvisible(){
  $( this ).attr("class").split(/\s+/).forEach((i) => {
    if( i.match(/^d-/) ){
      console.log("has class ", i);
      $( this ).removeClass(i);
    }
  });
  $( this ).addClass("d-none");
}

function makeVisible(){
  const tag = $( this ).prop("tagName");
  console.log(tag);
  switch(tag) {
    case "KBD":
      $( this ).removeClass("d-none").addClass("d-inline");
      break;
    case "DIV":
      $( this ).removeClass("d-none").addClass("d-block");
      break;
    default:
      $( this ).removeClass("d-none").addClass("d-block");
  }
}

function getPage(url, target){
  // target has to be a full selector.
  if($(target).html().length === 0){
    $.get(url, (d) => {
      $(target).html("<div class='mb-2 card card-body'>" + d + "</div>");
      addTheGoodies(target);
    });
  }
}

function generateToken(){
  return Math.floor(Math.random() * 10000000000000).toString();
}
