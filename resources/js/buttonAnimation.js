var animateButton = function(e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

//Si clic sur l'image contenue dans le bouton, interagir sur le bouton
var animateButtonImg = function(e) {
  parentId = $(e.target).parent().attr('id'); //Prendre le parent de l'image (soit le bouton)
  document.getElementById(parentId).preventDefault;
  //reset animation
  document.getElementById(parentId).classList.remove('animate');
  
  document.getElementById(parentId).classList.add('animate');
  setTimeout(function(){
    document.getElementById(parentId).classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("blocReaction");
var bubblyButtonsImg = document.getElementsByClassName("reactionImg");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
  bubblyButtonsImg[i].addEventListener('click', animateButtonImg, false);

}