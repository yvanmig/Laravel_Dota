
$(".refresh").click(function() {
  $date = new Date();
  $previousMillis = $date.getTime();
  $(".containerHero").toggleClass('containerAppear'); //Brouiller le personnage tant que toutes les valeurs ne sont pas affichées
  // $("#gifLoading").css("display" , "block").delay(400);
      var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.opendota.com/api/heroStats",
            "method": "GET",
            "headers": {
              "cookie": "__cfduid=d5d64367cc61de7f6538056c9126e2eda1582288201"
            }
          }
          
          $.ajax(settings).done(function (response) {
            if (($previousMillis - $date.getTime()) > 50) {
              alert("c'est long");
            }
            $random = Math.floor(Math.random()*response.length);
            $containerResponse = response[$random]; //Vérifier si cette variable ne foire pas tout
            $urlImg = "https://api.opendota.com" + $containerResponse.img;
            
           $("#bgHero").css("background-image", "url("+$urlImg+")");
            $(".heroPhoto").attr("src", $urlImg);
            $("h1").text($containerResponse.localized_name);
            $(".range").text($containerResponse.attack_type);
            
            console.log($containerResponse.roles.length);
            $(".heroRoles").empty();
            $(".rolesRefresh").empty();

            // Spaghetti code
            // Afficher les rôles (au nombre variant entre 2 et 6) dans des nouvelles div, en séparant par des virgules sauf pour le dernier role
            $(".rolesRefresh").prepend(" - ");
            for ( $i = 0; $i < $containerResponse.roles.length; $i++ ) {
              $(".rolesRefresh").append( $containerResponse.roles[$i]);
              if ($i < ($containerResponse.roles.length)-1) {
                $(".rolesRefresh").append( ", ");
              }
             }
             
             $winRate = Math.floor(($containerResponse.pro_win*100)/($containerResponse.pro_pick));
             $("#winRate").text($winRate);
             $("#statstr").text($containerResponse.base_str);
             $("#statagi").text($containerResponse.base_agi);
             $("#statint").text($containerResponse.base_int);

             $mainStat = $containerResponse.primary_attr;
            //  if ($mainStat == "str") {
            //    alert("#stat"+$mainStat);
            //    $("#main"+$mainStat+" img").addClass("mainStatBorder");
            //    $("#stat"+$mainStat).toggleClass("mainStatBold");
            //  }
            if ($mainStat == "str") {
              $(".containerHero").css("background-color","rgba(151, 17, 17, 0.5)");
              $("#heroName h2").text("Strength");
            } else if ($mainStat == "agi") {
              $(".containerHero").css("background-color","rgba(15, 69, 13, 0.5)");
              $("#heroName h2").text("Agility");
            } else if ($mainStat == "int") {
              $(".containerHero").css("background-color","rgba(0, 93, 112, 0.5)");
              $("#heroName h2").text("Intelligence");
            }

             $(".containerHero").toggleClass('containerAppear'); //Enlever le flou une fois qu'on a tout chargé
             $(".winFill").css("width", $winRate+"%"); //Mettre à jour la barre de taux de victoire

             console.log($containerResponse);
          });
      });


