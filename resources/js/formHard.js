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

  $("#nameUser").on("keyup",function() {    
    var maxLength = $(this).attr("maxlength");
    if(maxLength == $(this).val().length) {
      alert("You can't write more than " + maxLength +" characters")
      //Faire apparaitre une popup où on propose à l'utilisateur de monter la limite de caractères. Le bouton + se déplace aléatoirement après chaque clic
      //Mettre un gros bouton vert "Annuler" et un petit gris "Confirmer" pour changer ou non la valeur et fermer le popup
    }
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

