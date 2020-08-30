var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
// var form4 = document.getElementById("form4");


var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");

var previous1 = document.getElementById("previous1");
var previous2 = document.getElementById("previous2");

var progress = document.getElementById("progress");


next1.onclick = function() {

    form1.style.left = "-500px";
    form2.style.left = "25px";
    progress.style.width = "66%";

}

previous1.onclick = function() {

    form1.style.left = "25px";
    form2.style.left = "550px";
    progress.style.width = "33%";

}

next2.onclick = function() {

    form2.style.left = "-500px";
    form3.style.left = "25px";
    progress.style.width = "100%";

}

previous2.onclick = function() {

    form2.style.left = "25px";
    form3.style.left = "550px";
    progress.style.width = "66%";

}



// function showHide() {



//     if (document.getElementsById('yesBtn').checked) {

//         document.getElementById('hide').style.display = "none";
//     }
//     //a
//     else {

//         document.getElementById('hide').style.display = "block";
//         // document.getElementById('show').style.display = "none";
//     }


// }