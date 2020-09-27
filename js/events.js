//define functions here
function getIt(){
  $("p").on("click", function(){
    window.alert("Hey!");
    });
  }
  
  function frameIt(){
  $("img").on("load", function(){
    $("img").addClass("tasty");
  });
}

function pressIt() {
  $("input").keydown("pressed", function(key){
    if key.pressed == ""
  })
}
  
$(document).ready(function(){

// call functions here
getIt()

});

