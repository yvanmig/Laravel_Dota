$(document).ready(function() {
let numbArray = [];
let open = 0;
let cptImg = 0;
let boolImg = false;
var checkTime;
var myImg;
  for (let a = 1; a < 121 ; a++) {
    numbArray[a] = a;
  }

  //Faire apparaître les boutons radio pour choisir l'âge
  $("#buttonAge").click(function() { 
    if (open == 0) {
      open = 1;
      numbArray = shuffle(numbArray);
      $.each( numbArray, function (index, value) {
        if (value == undefined) { //L'une des valeurs est toujours undefined, raison inconnue
          value = 19;
        }    
        $("#hardSelect").append($('<label> <input type="radio" name="age" value="' + value + '" > <p style="transition:opacity ' + (value/20) + 's ease-in-out, transform 0.1s ' + (value/30) + 's;">' + value + '</p> <div class="fillAge" </div></label>'));
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

//Informer l'utilisateur que son nom est déjà pris.
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

  //Vérifier l'âge sélectionné
  $("#hardSelect").on("click", "p", function(){
    let age = $(this).text();
    if (age <18) {
      alert("Do your parents know you're here ?");
    }
    if(age > 100) {
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

  //Aggrandir l'image non filtrée, pour signifier qu'on est train de sélectionner l'image
  $("#containerPhotosHard label").click(function(e) {
      e.preventDefault();    
      let imageFill = $(this).find(".pictureFill img");
      cptImg += 10;
      if (cptImg >= 80) {
        cptImg = 100;
      }
      imageFill.css("width",cptImg + "%");
  });

  //Lancer la fonction qui fait rétrécir l'image au fil du temps, tant qu'on hover
  $("#containerPhotosHard label").mouseenter(function(e) {
    e.preventDefault();
    myImg = $(this).find(".pictureFill img");
    console.log(myImg.css("width"));
    boolImg = true;
    setWidth();
  });

//Diminuer la taille de l'image dans le temps
function setWidth() {
  cptImg -= 10;
  if (cptImg <= 0) {
    cptImg = 0;
  }
  myImg.css("width",cptImg + "%");
  checkTime = setTimeout(setWidth, 800);
}

//Arrêter le timeout qui réduit la taille
function stopWidth() {
  clearTimeout(checkTime);
}

  $("#containerPhotosHard label").mouseleave(function() {
      cptImg = 0;
     $(".pictureFill img").css("width",cptImg + "%");
     stopWidth();
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