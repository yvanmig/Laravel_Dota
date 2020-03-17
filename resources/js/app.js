require('./bootstrap');

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.stratz.com/api/v1/Hero/1",
    "method": "GET",
    "headers": {}
  }
  
  // $.ajax(settings).done(function (response) {
  //   // console.log(response);
  //   // console.log(response.matchPickCount); //Nombre de picks du héro
  //   var teams_data = [];
  //   $(response).each(function (i)
  //     {
  //       //Remplir le tableau avec les valeurs de la réponse qui nous intéressent
  //           teams_data[i] = {
  //                 "pickCount": response.matchPickCount,
  //                 "banCount" : response.matchBanCount
  //           }
  //     });
  //     console.log(teams_data);
  // });

  // $.get('templates/hero.mst', function (template)
  // {
  //   // On prépare la variable à l'aide de mustache, en passant le template et nos données en paramètres
  //       var rendered = Mustache.render(template, { teams: teams_data });
  //       // On injecte le template contenant notre code et nos valeurs dans le bloc ciblé
  //       $('#blocLogos').html(rendered);
  // });
