function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  var right = document.getElementById("right_move");
  var left = document.getElementById("left_move");
  var img_move = document.getElementById("img_move");
  // var img_move = document.getElementById("image");

  left.onclick = function(){
    img_move.scrollBy(-200,0);
  }
  right.onclick = function(){
    img_move.scrollBy(200,0);
  }
// function demo(x){
//   document.getElementById("img_move").scrollBy(x,0);
// }
