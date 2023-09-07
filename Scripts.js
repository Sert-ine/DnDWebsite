let BaseUrl = "/Portfolio/DnDWebsite/";

function ReadFile(name, callback)
{
  console.log("Read file function");
  const txtfile = name;
  // create a new XMLHttpRequest object to load the file
  var xhr = new XMLHttpRequest();

  // specify the path to the file
  var filePath = txtfile;

  // define a variable to store the file contents
  var fileContents;

  // define a function to handle the file loaded event
  xhr.onload = function() {
    // create a new instance of FileReader
    var reader = new FileReader();
    console.log("onload");
    // define the callback function that will be called when the file is loaded
    reader.onload = function(event) {
      // the file contents are stored in the result property
      fileContents = event.target.result;
      console.log("fileContents = "+fileContents);
      //console.log(fileContents);
      callback(fileContents);
    };

    // read the contents of the file
    reader.readAsText(xhr.response);
    console.log(reader);
  };

  // open the file
  xhr.open("GET", filePath, true);

  // specify the response type as text
  xhr.responseType = "blob";

  // send the request
  xhr.send();
}

function SwapScroll(title, file) {
  document.title = title;
  let ScrollContent = "";
  ReadFile(file, function(ScrollContent)
  {
    PlaySnd();

    var el = document.getElementById("ScrollClosed");
    el.classList.add('Hidden');
    //el = document.getElementById("ReadScrollButton");
    //el.classList.add('Hidden');
    el = document.getElementById("ScrollText");
    el.innerHTML = ScrollContent;
    console.log(ScrollContent); // will output the contents of the file, because the async function has finished executing
    setTimeout(function() {
      el = document.getElementById("ScrollOpen");
      el.classList.remove('Hidden');
    }, 200);
    setTimeout(function() {
      el = document.getElementById("ScrollText");
      InsertImages();
      ScaleText("TextScale");
      //el.classList.remove('transparent');
    }, 200);
  });
}

function PlaySnd()
{
  var audio = new Audio(BaseUrl+'Sound/PaperShuffle.wav');
  audio.play();
}

function OnClickableEnter()
{
  console.log("Entered");
}

function OnClickableExit()
{
  console.log("Exited");
}

function ScaleText(class_string)
{
  console.log("executed ScaleText, class = "+class_string);
  const els = document.getElementsByClassName(class_string);
  console.log(els);
  for(const element of els)
  {
    console.log("triggered");
    console.log(element);
    element.style.setProperty('font-size', "20px");
    var size = StyleToInt(element, 'font-size');
    console.log("font-size = "+size);
    const parent_height = StyleToInt(element.parentElement, 'height') - (StyleToInt(element, 'margin-bottom')+StyleToInt(element, 'margin-top'));
    console.log("parent_height = "+parent_height);
    console.log("offsetheight = "+element.offsetHeight);
    var dt = 0.002;
    var dh = (parent_height - element.offsetHeight);
    console.log("dh = "+dh);
    //const maxloop = 100;
    //let i = 0;
    while(dh < -10)
    {
        var dh = (parent_height - element.offsetHeight);
        element.style.fontSize = size + "px"
        size += Math.atan(dh * dt);
        console.log("font size (shrinking)= "+element.style.fontSize+", offsetheight = "+element.offsetHeight+", dh = "+dh+", New size = "+size);
        //dt += 0.001;        if (element.style.fontSize == "0px") {break;}
        //i++
        //if (i > maxloop) {break;}
    }
    /*while(element.offsetHeight < parent_height)
    {
        console.log("font size (growing)= "+element.style.fontSize+", offsetheight = "+element.offsetHeight);
        element.style.fontSize = size + "px"
        size += 0.1;
    }*/
  }
}

function StyleToInt(el, property_name)
{
  return parseInt(getComputedStyle(el).getPropertyValue(property_name))
}

window.onresize = function()
{
  ScaleText("TextScale");
}

function InsertImages()
{
  var El = document.getElementsByClassName('UnaddedImage')
  console.log(El);
  for (const element of El)
  {
    console.log(element);
    var Src = element.getAttribute('data-src');
    console.log(Src);
    element.src = BaseUrl + Src;
    element.classList.remove('UnaddedImage');
    element.removeAttribute('data-src');
  }
  /*for (let i = 0; i < Img.length; i++) {
    ImgSrc = Img[i].style.src;
    Img[i].style.src = BaseUrl + ImgSrc;
  }*/
}
