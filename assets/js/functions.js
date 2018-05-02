function addWhatIses(){
  const whatIses = $( this ).children("a").map(function(){
    if($( this ).attr("href").match(/^\/whatis\//)){
      return { href: $( this ).attr("href"),
        text: $( this ).html()
      };
    }
  }).get();
  $( this ).append(() => {
     return whatIses.map(function(i){return formatWhatIs(i)
    }).join(" ");
  });
}

function formatWhatIs(i){
  let string = "<details ontoggle='getPage(\"" + i.href + "\")'>";
  string = string + "<summary>What is " + i.text + "?</summary><div data-whatis='" + i.href + "'></div></details>";
  return string;
}

function getPage(url){
  $.get(url, (d) => {
    $("div [data-whatis='" + url + "']").html(d);
  });
}
