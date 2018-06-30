function include() {
    console.log("IN FUNCTION");
  let file, xhttp; 
  let allElements = document.getElementsByTagName('*'); //get all elements on the page

  for (let i = 0; i < allElements.length; i++) { // process all the elements looking for the custom attribute 'includefile'
    file = allElements[i].getAttribute("includefile");  
    if (file) { // if the attribute is found, process an AJAX XMLHttpRequest
        console.log("file: " + file);
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) { allElements[i].innerHTML = this.responseText;}
          if (this.status == 400) { allElements[i].innerHTML = "Page not found!";}
          allElements[i].removeAttribute('includefile');
          include();
        }

       }
        let includeFile = 'includes/' + file;
        console.log(includeFile)
        xhttp.open('GET', includeFile, true); // matching file names in includes folder
        xhttp.send();
        return;    
    }
  }
}

include();  // initial function call