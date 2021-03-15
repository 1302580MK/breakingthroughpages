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

  function viewdata(){
    $.ajax({
        type: "GET",
        url: "php/getdata.php",
        dataType: "html",
        success: function(data){
            $('#viewdata').html(data);
        }
    }).done(function(data){
        // something to do after, even if it throws an error.
    });
}

function buttonClick(){
    let t = new Date();
    let str1 = "The time was just right: the code is 27032004";
    let str2 = "The time was not right: try again later. between 30'-59'"

    document.getElementById("buttonTime").innerHTML = t.getMinutes();
    if (t.getMinutes < 30) {
        document.getElementById("buttonTimeText").innerHTML = str1;
    } else{
        document.getElementById("buttonTimeText").innerHTML = str2;
    }
}