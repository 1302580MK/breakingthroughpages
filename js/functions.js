function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("phpdemo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "phpdemo_infofile.txt", true);
    xhttp.send();
  }