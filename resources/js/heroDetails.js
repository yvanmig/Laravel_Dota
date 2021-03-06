$(document).ready(function() {
$(".blocReaction").click(function(e) {
  $(".containerHero").removeClass('containerSlide');
  $(".containerHero").width(); // trigger a DOM reflow
  $(".containerHero").addClass('containerSlide');
  $(".containerHero").toggleClass('containerAppear'); //Brouiller le personnage tant que toutes les valeurs ne sont pas affichées
    var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://cors-anywhere.herokuapp.com/https://api.opendota.com/api/heroStats",
          "method": "GET",
          "headers": {
            "cookie": "__cfduid=d5d64367cc61de7f6538056c9126e2eda1582288201"
          }
        }
        
        $.ajax(settings).done(function (response) {
          
          $random = Math.floor(Math.random()*response.length);
          $containerResponse = response[$random]; //Vérifier si cette variable ne foire pas tout
          $urlImg = "https://api.opendota.com" + $containerResponse.img;        
          
          $("h2").text($containerResponse.localized_name); //Nom personnage
          $(".range").text($containerResponse.attack_type); //Portée d'attaque (mêlée, distance)        
          
          $(".heroRoles").empty(); //Vider le contenu des divs contenant les rôles
          $(".rolesRefresh").empty();

          // Spaghetti code
          // Afficher les rôles (au nombre variant entre 2 et 6) dans des nouvelles div, en séparant par des virgules sauf pour le dernier role
          $(".rolesRefresh").prepend(" - ");
          for ( $i = 0; $i < $containerResponse.roles.length; $i++ ) {
            $(".rolesRefresh").append( $containerResponse.roles[$i]);
            if ($i < ($containerResponse.roles.length)-1) { //Mettre une virgule tant qu'on n'a pas atteint le dernier rôle
              $(".rolesRefresh").append( ", ");
            }
          }          


            $winRate = Math.floor(($containerResponse.pro_win*100)/($containerResponse.pro_pick)); //Calcul du % de victoire
            $("#winRate").text($winRate);
            $("#statstr").text($containerResponse.base_str);
            $("#statagi").text($containerResponse.base_agi);
            $("#statint").text($containerResponse.base_int);

            $mainStat = $containerResponse.primary_attr;
          if ($mainStat == "str") {
            $(".containerHero").css("background-color","rgba(151, 17, 17, 0.5)");
            $("h3").text("Strength");
          } else if ($mainStat == "agi") {
            $(".containerHero").css("background-color","rgba(15, 69, 13, 0.5)");
            $("h3").text("Agility");
          } else if ($mainStat == "int") {
            $(".containerHero").css("background-color","rgba(0, 93, 112, 0.5)");
            $("h3").text("Intelligence");
          }

            $(".winFill").css("width", $winRate+"%"); //Mettre à jour la barre de taux de victoire
            //Charger les nouvelles images
            $("#bgHero").css("background-image", "url("+$urlImg+")");
            $(".heroPhoto").attr("src", $urlImg);
            checkImageLoad(); //Fonction pour vérier que toutes les images sont chargées avant d'enlever le flou

          });
});


function checkImageLoad(){
              var imagesLoaded = 0;
              // Total images is the total number of <img> elements on the page.
              var totalImages = $('img').length;

              // Step through each image in the DOM, clone it, attach an onload event
              // listener, then set its source to the source of the original image. When
              // that new image has loaded, fire the imageLoaded() callback.
              $('img').each(function(idx, img) {
                $('<img>').on('load', imageLoaded).attr('src', $(img).attr('src'));
              });

              // Incrémenter la variable pour chaque image chargée. 
              // Quand elles sont toutes chargées, lancer allImagesLoaded()
              function imageLoaded() {
                imagesLoaded++;
                if (imagesLoaded == totalImages) {
                  allImagesLoaded();
                }
              }
              function allImagesLoaded() {                
                $(".containerHero").toggleClass('containerAppear'); //Enlever le flou de la page une fois qu'on a tout chargé
              }
}

});


