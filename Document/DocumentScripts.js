var newdoctitle = "";
var newdoctxt = '';

addEventListener("load", (event) => {
  let html = document.querySelector('html');
  newdoctitle = html.getAttribute('data-doctitle');
  newdoctxt = html.getAttribute('data-doctxt');
  InsertHTML(newdoctitle, newdoctxt);
})

function InsertHTML(doctitle, doctxt) {
  ReadFile("GenericLetter.html", function(Information) {
    console.log("Loaded Letter template");
    let html = document.querySelector('html');
    html.innerHTML = Information;
    //break//
    let scriptplace = document.body.getElementsByTagName('div')[0];
    scriptplace.setAttribute('data-doctitle',doctitle);
    scriptplace.setAttribute('data-doctxt',doctxt);
    html.removeAttribute('data-doctitle');
    html.removeAttribute('data-doctxt');
    /*
    //break//
    let el = document.body;
    let divplace = scriptplace;
    //let divplace = el.firstElementChild;
    //let scriptplace = el.getElementsByTagName('div')[1];
    let content = ""
    //console.log(content);
    //el.removeChild(el.firstElementChild);
    //console.log(el.innerHTML);
    //newdoctitle = divplace.getAttribute('data-doctitle');
    newdoctxt = BaseUrl + newdoctxt;
    ReadFile("ScrollTemplate.html", function(TemplateContent){
      content = TemplateContent;
      let scripts = scriptplace.innerHTML;
      //console.log(scripts);
      content += scripts;
      //console.log(content);
      el.innerHTML = content;
    });*/
  })
}

/*window.onload = function()
{
  let el = document.body;
  let divplace = el.firstElementChild;
  let scriptplace = el.getElementsByTagName('div')[1];
  let content = ""
  //console.log(content);
  //el.removeChild(el.firstElementChild);
  //console.log(el.innerHTML);
  newdoctitle = divplace.getAttribute('data-doctitle');
  newdoctxt = BaseUrl + divplace.getAttribute('data-doctxt');
  ReadFile("ScrollTemplate.html", function(TemplateContent)
  {
    content = TemplateContent;
    let scripts = scriptplace.innerHTML;
    //console.log(scripts);
    content += scripts;
    //console.log(content);
    el.innerHTML = content;
  });*/

  //content += scripts.innerHTML;
  //el.innerHTML = content;
  //el.removeAttributeNode(el.attributes[0]);el.removeAttributeNode(el.attributes[0]);
  //el.id = ""
  /*console.log("Loaded JS");

  InsertImages();
};*/

function ReadScroll()
{
  SwapScroll(newdoctitle, newdoctxt);
};
