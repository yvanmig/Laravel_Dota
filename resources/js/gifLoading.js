/* Afficher un bloc contenant un gif et petit texte pendant quelques secondes puis afficher le contenu
*/
$(document).ready(function() {
    setTimeout(function() {
        $("#blocLoading").fadeOut("slow", function() {
        });
      }, 3000);

      setTimeout(function() {
        $('.containerHero').fadeIn("slow");
        
      }, 4000);
      setTimeout(function() {
        $('#containerReactions').fadeIn("slow");
        $('#containerReactions').css("display","flex");
      }, 4000);            
});