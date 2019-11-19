// function card(elementName) {
//     var element = document.getElementById(elementName);

//     frame();

//     function frame() {

//         if (elementName == "card3" || elementName == "card4") {

//             if (element.style.transform == "rotate(45deg)") {
//                 element.style.transform = "rotate(150deg)";
//             } else {
//                 element.style.transform = "rotate(45deg)";
//             }

//         } else {

//             if (element.style.transform == "rotate(-150deg)") {
//                 element.style.transform = "rotate(-45deg)";
//             } else {
//                 element.style.transform = "rotate(-150deg)";
//             }
//         }

//     }
// }

function togglecard1() {
    var card = document.getElementById("card1");
    var currentClass = card.className;
    card.className = currentClass == "head-card" ? "head-card1-center" : "head-card";
  }

  
  function togglecard2() {
    var card = document.getElementById("card2");
    var currentClass = card.className;
    card.className = currentClass == "head-card" ? "head-card2-center" : "head-card";
  }

function togglecard3() {
    var card = document.getElementById("card3");
    var currentClass = card.className;
    card.className = currentClass == "head-card" ? "head-card3-center" : "head-card";
  }


  function togglecard4() {
    var card = document.getElementById("card4");
    var currentClass = card.className;
    card.className = currentClass == "head-card" ? "head-card4-center" : "head-card";
  }


  // Get the modal
var modal = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}