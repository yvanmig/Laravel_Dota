$(document).ready(function() {

  $("#generateName").click(function() {   
    $('#errorName').empty();
    $name = $("#nameUser").val();
    let arrOrig = [...$name];
    let arrRev = [];
    let arrCheck = [];
    let indexRandom;

    // $name = $name.split("");
    arrOrig.forEach(function(item, index, array) {
      arrCheck[index] = 0;
    })

    for (let i=0; i<arrOrig.length; i++) {
      do {
        indexRandom = Math.floor(Math.random()*arrOrig.length);
      } while (arrCheck[indexRandom] == 1)
      let indexReverse = (arrOrig.length-i)-1;
      arrRev[indexRandom] = arrOrig[indexReverse];  
      arrCheck[indexRandom] = 1;        
    }
    let result = arrRev.join('');
    $('#userNameValidation').text(result);    
  });


  $("#checkName").click(function() {
    
    $('#errorName').text("This name is already taken, please generate a new one");
  });

});



function reverseString() {
  for (let i=0; i<arrOrig.length; i++) {  
    let indexReverse = (arrOrig.length-i)-1;
    arrRev[i] = arrOrig[indexReverse];          
  }
}





$(document).keypress(
    function(event){
      if (event.which == '13') {
          alert("The 'Enter' key was temporarily disabled, please contact our Customer Service");
        event.preventDefault();
      }
  });

