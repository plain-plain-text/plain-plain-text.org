function addTheGoodies(target){
  addTheMacWinTogglers(target);
  addExternalLinks(target);
  [{tag: "p", f: addWhatIses}, {tag: "h4", f: addModules}].forEach((i) => {
    $(target).find(i.tag).each(i.f);
  });
}

function addWhatIses(){
  const token = generateToken();
  $( this ).after("<div id='whatIs-box-" + token + "'></div>");
  const whatIses = $( this ).children("a").map(function(){
    if($( this ).attr("href").match(/^\/whatis\//)){
      const href = $( this ).attr("href");
      const target = "#whatIs-doc-" + href.replace(/^\/whatis\//, "") + "-" + token;
      $( this ).attr("href", "#")
        .attr("data-toggle", "collapse")
        .attr("data-target", target)
        .attr("role", "button")
        .attr("aria-expanded", "false")
        .attr("aria-controls", target)
        .append("<sup><i class='fas fa-question-circle'></i></sup>");
      return { href: href,
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
  let docbox = "<div class='row' id='whatIs-documents-" + token + "'>";
  whatIses.forEach((i) => {
    const tag = i.href.replace(/^\/whatis\//, "");
    const target = "whatIs-doc-" + tag + "-" + token;
    let docstring = "<div class='col-12'><div class='collapse multi-collapse' id='" + target + "'></div></div>";
    docbox = docbox + docstring;
  });
  return docbox + "</div>";
}

function addModules(){
  const module = $( this ).attr("module");
  console.log(module);
  const token = generateToken();
  const target = "module-" + token;
  let newHtml = "<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#" + target;
  newHtml = newHtml + "' aria-expanded='false' aria-controls='#" + target + "'>";
  newHtml = newHtml + $( this ).html() + "</button></p>";
  newHtml = newHtml + "<div class='collapse' id='" + target + "'></div>";
  $( this ).replaceWith($(newHtml));
  // listen for the new div.
  $("#" + target).on("show.bs.collapse", () => {
    console.log("I'm being shown");
    getPage("/modules/" + module, "#" + target);
  });
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
      $( this ).removeClass(i);
    }
  });
  $( this ).addClass("d-none");
}

function makeVisible(){
  const tag = $( this ).prop("tagName");
  switch(tag) {
    case "SPAN":
      $( this ).removeClass("d-none").addClass("d-inline");
      break;
    case "CODE":
      $( this ).removeClass("d-none").addClass("d-inline");
      break;
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
      $(target).html("<div class='card mb-3'><div class='card-body'>" + d + "</div><div class='card-footer text-right'><button type='button' class='btn-sm btn-secondary' data-toggle='collapse' data-target='" + target + "'>Close</button></div></div>");
      addTheGoodies(target);
    });
  }
}

function generateToken(){
  return Math.floor(Math.random() * 10000000000000).toString();
}

function addExternalLinks(selector){
  const externalLink = $.parseHTML("<span>&nbsp;<i style='vertical-align: baseline; font-size: 60%;' class='fa fa-small fa-external-link-alt'></i></span>");
  $(selector).find("a[href^='http']:not(a:has(img))").append(externalLink);
  $(selector).find("a[href^='http']").attr("target", "_blank");
}
