var idRandom = Math.floor(Math.random()*50);
var createUrl = "https://api.stratz.com/api/v1/Hero/" + idRandom;
var url= createUrl;
var settings = {
    "async": true,
    "crossDomain": true,
    "url": 'https://api.stratz.com/api/v1/Hero/' +idRandom, //Requete en insérant une ID random pour le héro
    "method": "GET",
    "headers": {}
  }
$.ajax(settings).done(function (response) {

    var pick = response.heroes;
    var heroId = response.heroes[0].heroId;

// faire un remove pour vider la div
// des .text pour changer le contenu

      $("h2").append(heroId);
      console.table(pick);
      console.log(idRandom);
      console.log(url);
      console.log(heroId);
      console.log(recup);
  });

//   $.get('dota/public/js/templates/heroPortrait.mst', function (template)
//   {
//     // On prépare la variable à l'aide de mustache, en passant le template et nos données en paramètres
//         var rendered = Mustache.render(template, { teams: teams_data });
//         // On injecte le template contenant notre code et nos valeurs dans le bloc ciblé
//         $('#blocLogos').html(rendered);
//   });