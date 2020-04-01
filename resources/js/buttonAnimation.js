var animateButton = function(e) {
  e.preventDefault;
  currentId=$(e.target).attr('id');
  console.log(currentId);
  if (currentId == "like") {
    $('body').css("background-color", "#a31f35");
  } else if (currentId == "superLike") {
    $('body').css("background-color", "#bc9924");
  } else if (currentId == "dislike") {
    $('body').css("background-color", "#482828");
  }
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
    $('body').css("background-color", "#36465D");
  },850);
};

//Si clic sur l'image contenue dans le bouton, interagir sur le bouton
var animateButtonImg = function(e) {
  parentId = $(e.target).parent().attr('id'); //Prendre le parent de l'image (le bouton qui contient)
  console.log(parentId);
  if (parentId == "like") {
    $('body').css("background-color", "#a31f35");
  } else if (parentId == "superLike") {
    $('body').css("background-color", "#bc9924");
  } else if (parentId == "dislike") {
    $('body').css("background-color", "#482828");
  }
  document.getElementById(parentId).preventDefault;
  //reset animation
  document.getElementById(parentId).classList.remove('animate');  
  document.getElementById(parentId).classList.add('animate');
  setTimeout(function(){
    document.getElementById(parentId).classList.remove('animate');
    $('body').css("background-color", "#36465D");
  },850);
  
};

var bubblyButtons = document.getElementsByClassName("blocReaction");
var bubblyButtonsImg = document.getElementsByClassName("reactionImg");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
  bubblyButtonsImg[i].addEventListener('click', animateButtonImg, false);

}

