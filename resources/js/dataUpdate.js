$(document).ready(function() {
    $('.download').click(function(){
        $.ajaxSetup({
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
        });
        $.ajax({
          url: "/hero",
          type:"POST",
          data: {
            song_id:   $(this).attr('data-id')
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