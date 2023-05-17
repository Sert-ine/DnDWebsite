function ReadFile(name, callback)
{
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

    // define the callback function that will be called when the file is loaded
    reader.onload = function(event) {
      // the file contents are stored in the result property
      fileContents = event.target.result;
      //console.log(fileContents);
      callback(fileContents);
    };

    // read the contents of the file
    reader.readAsText(xhr.response);
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
      //el.classList.remove('transparent');
    }, 200);
  });
}

function PlaySnd()
{
  var audio = new Audio('/DnDWebsite/Sound/PaperShuffle.wav');
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
