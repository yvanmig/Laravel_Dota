$(document).ready(function() {


  $("#checkName").click(function() {
    if($("#nameUser").val().length > 0) {
      $("#containerNameValidation ").css({
        "z-index" : 5,
        "height": "40px",
      });
      $("#generateName").css("opacity","1");
      $('#errorName').text("This name is already taken, please generate a new one");
    }
    else {
      $('#errorName').text("Please enter your name");
    }
    
  });

  //Prendre la valeur actuelle de l'input du nom et changer de place chaque lettre de manière aléatoire
  $("#genName").click(function() {   
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
        indexRandom = Math.floor(Math.random()*arrOrig.length); //Créer un indexrandom dépendant de la taille du nom
      } while (arrCheck[indexRandom] == 1) //S'assurer que la valeur à l'index n'a pas déjà été touchée
      let indexReverse = (arrOrig.length-i)-1;  //Index allant de la fin du tableau jusqu'au début
      arrRev[indexRandom] = arrOrig[indexReverse];  //mettre à jour le tableau receveur
      arrCheck[indexRandom] = 1;          //Actualiser le tableau de booléens pour confirmer que la valeur à cette index a déjà été changée
    }
    let result = arrRev.join('');
    $('#userNameValidation').text(result);   
    $('input[name=nameUser]').val(result); 
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

