$(document).ready(function() {
var scale = 1;

$("#left").on("mousemove", function (event) {
    if (scale > 0.2) {
        scale -= 0.03;
    }    
    $(this).css("transform", "scale("+scale +")" );

});
$("#leftArea").mouseleave(function() {
    scale = 1;
    $("#left").css("transform", "scale("+scale +")" );
});

});