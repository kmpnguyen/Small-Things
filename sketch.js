// function setup() {
//   var canvas = createCanvas(windowWidth, windowHeight);
//   canvas.parent('row__circle');
//   noFill();
//   stroke(0);
//   strokeWeight(0.6);
// }

// function draw() {
//   clear(); 
//   for (var x=0; x <= windowWidth-40; x += 40){
//     ellipse(x+20,20,10,10);
//   }
// }

// function draw() {
//   clear(); 
//   for (var x=0; x <= windowWidth-40; x += 40){
//     for (var y=0; y <= windowHeight; y += 104){
//     ellipse(x+20,y+21,10,10);
//     }
//   }
// }
 function draw(){
    var parent = document.querySelectorAll(".row__circle")
    console.log(parent);

    for (var i=0; i<parent.length; i++){
      for (var j=0; j<15; j++){
        var circle = document.createElement("div")
        circle.classList.add("dot")
        parent[i].appendChild(circle)
      }
    }
    noLoop();
}
 
draw();

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  window.onscroll = function() {
  window.scrollTo(scrollLeft, scrollTop);
  };
  document.getElementById("slider").style.display="flex"; 
  document.getElementById("home").style.textDecoration="underline"; 
  document.getElementById("index").style.textDecoration="none"; 
}

function enableScroll() {
  window.onscroll = function() {};
  document.getElementById("slider").style.display="none"; 
  document.getElementById("home").style.textDecoration="none"; 
  document.getElementById("index").style.textDecoration="underline"; 
}

// $(document).ready(function(){
// //   First active item
//   $(".menu--item__one").click(function(){
//      $(".bottom__line").addClass("bottom__active");
//      $(".bottom__line").removeClass("bottom__active1 bottom__active2");
//   });
  
//   //  Second active item
//   $(".menu--item__two").click(function(){
//       $(".bottom__line").addClass("bottom__active1");
//       $(".bottom__line").removeClass("bottom__active bottom__active2");
//   });
  
//   // Third active item
//    $(".menu--item__three").click(function(){
//         $(".bottom__line").addClass("bottom__active2");
//         $(".bottom__line").removeClass("bottom__active bottom__active1");
//   });
// });


function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
