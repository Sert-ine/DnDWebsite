newdoctitle = "";
newdoctxt = '';

window.onload = function()
{
  let el = document.body;
  let divplace = el.firstElementChild;
  let scriptplace = el.getElementsByTagName('div')[1];
  let content = ""
  //console.log(content);
  //el.removeChild(el.firstElementChild);
  //console.log(el.innerHTML);
  newdoctitle = divplace.getAttribute('data-doctitle');
  newdoctxt = divplace.getAttribute('data-doctxt');
  ReadFile("ScrollTemplate.html", function(TemplateContent)
  {
    content = TemplateContent;
    let scripts = scriptplace.innerHTML;
    //console.log(scripts);
    content += scripts;
    //console.log(content);
    el.innerHTML = content;
  });

  //content += scripts.innerHTML;
  //el.innerHTML = content;
  //el.removeAttributeNode(el.attributes[0]);el.removeAttributeNode(el.attributes[0]);
  //el.id = ""
  console.log("Loaded JS");
};

function ReadScroll() {SwapScroll(newdoctitle, newdoctxt)};
