$(document).ready(function() {
    // $('.containerHero').hide();

    // setTimeout(function() {
    //     $("#blocLoading").fadeOut("slow").empty();
    //   }, 5000);

    setTimeout(function() {
        $("#blocLoading").fadeOut("slow", function() {
            // alert("fini");
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