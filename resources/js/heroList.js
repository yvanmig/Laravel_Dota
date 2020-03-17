https://api.stratz.com/api/v1/Hero


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.stratz.com/api/v1/Hero",
    "method": "GET",
    "headers": {}
  }
$.ajax(settings).done(function (response) {
    // console.log(response);
    // console.log(response.matchPickCount); //Nombre de picks du héro
    var nameList = [];
    var name = response[1].displayName;
//     var pick = response.name;
    // $(response).each(function (i)
    //   {
    //     //Remplir le tableau avec les valeurs de la réponse qui nous intéressent
    //         nameList[i] = response[i].name;
    //   });
// console.log(nameList);
//       $("#blocLogos").append(pick);
//       console.log(pick);
      
      console.log(response[1].displayName);
      $("#blocLogos").append(name);
      // console.log(nameList);

  });

//   $.get('dota/public/js/templates/heroPortrait.mst', function (template)
//   {
//     // On prépare la variable à l'aide de mustache, en passant le template et nos données en paramètres
//         var rendered = Mustache.render(template, { teams: teams_data });
//         // On injecte le template contenant notre code et nos valeurs dans le bloc ciblé
//         $('#blocLogos').html(rendered);
//   });