$(document).ready(function() {
let numbArray = [];
let open = 0;
  for (let a = 1; a < 121 ; a++) {
    numbArray[a] = a;
  }

  // numbArray = shuffle(numbArray);
  // $.each( numbArray, function (index, value) {
  //   if (value == undefined) {
  //     value = 19;
  //   }    
  //   $("#hardSelect").append($('<label> <input type="radio" name="age" value="' + value + '" checked> <p style="transition:opacity ' + (value/20) + 's ease-in-out, transform 0.1s ' + (value/30) + 's;">' + value + '</p> <div class="fillAge" </div></label>'));
  // });

  $("#buttonAge").click(function() {
    console.log(open);
 
    if (open == 0) {
      open = 1;
      numbArray = shuffle(numbArray);
      $.each( numbArray, function (index, value) {
        if (value == undefined) {
          value = 19;
        }    
        $("#hardSelect").append($('<label> <input type="radio" name="age" value="' + value + '" checked> <p style="transition:opacity ' + (value/20) + 's ease-in-out, transform 0.1s ' + (value/30) + 's;">' + value + '</p> <div class="fillAge" </div></label>'));
      });
    } else if (open ==1) {
      open = 0;
      $("#hardSelect").empty();
    }
    setTimeout(function() {
    $("#hardSelect").toggleClass("selectOpen");
    $("#hardSelect label p").toggleClass("selectOpen");
    $("#hardSelect label p").toggleClass("pOpen");
  },1)

}); 

if (open == 1) {
  
  
}

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

  $("#hardSelect p").click(function(){
    let age = $(this).text();
    if (age <18) {
      alert("Do your parents know you're here ?");
    }
    if(age > 115) {
      alert("Yeah... I doubt you're that old");
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
    $('input[name=nameUser]').val(result); //Changer la valeur de l'input
    $("#checkName img").css("opacity", 1);
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


  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }