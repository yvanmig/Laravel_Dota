// Ecouter les boutons de likes, et envoyer une requete ajax contenant l'id du bouton appuyé, pour mettre à jour la table users_data
$(document).ready(function() {
    $('.blocReaction').click(function(){
        $.ajaxSetup({
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
        });
        $.ajax({
          url: "/hero",
          type:"POST",
          data: {
            like_id:$(this).attr('data-id') //Prendre l'attribut du bouton appuyé
          },
          success: function (data) {
            console.log(data);
          },
          error: function (request, status, error) {
            console.log('code: '+request.status+"\n"+'message: '+request.responseText+"\n"+'error: '+error);
          }
        });
       });

});