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
    if (key.which === 71) {
      window.alert "You have pressed the G key."
    }
  })
}
  
$(document).ready(function(){

// call functions here
getIt()

});

