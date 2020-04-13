$(document).ready(function() {
    var maxLength = $("#nameUser").attr("maxlength");
    let limitHeight =400;
    let buttonWidth = 40;
    let buttonHeight = 25;
    let hitBoxWidth = buttonWidth + 45;
    let hitBoxHeight = buttonHeight + 40;
    let buttonMoveX = Math.floor((Math.random()*80)+30);
    let buttonMoveY;
    let cptHit =30;
    let scoreHit =0;
    let firstTime = true;

    $("#nameUser").on("keyup",function() {  
        var maxLength = $(this).attr("maxlength");

        if(maxLength == $(this).val().length) {
            $("#cptLength").text(maxLength);
            $('.containerLimit').addClass("open");
            $('.containerLimit').css({
                "height" : limitHeight,
                "z-index" : "10"});
            $('.containerLimit div').css("opacity","1");
            $("#annoyingButton").css({           
           "width" : buttonWidth +"px",
           "height" : buttonHeight + "px"
         });

       $("#annoyingButtonHitBox").css({
            "width" : hitBoxWidth +"px",
            "height" : hitBoxHeight + "px"
        });
    }
        
});

    $("#annoyingButtonHitBox").mouseenter(function() {
        if(cptHit < 4) {
            buttonMoveX = Math.floor((Math.random()*($(".containerLimit").width()-hitBoxWidth)));
            buttonMoveY = Math.floor((Math.random()*($(".containerLimit").height()-hitBoxHeight)));
            $(this).css('top', buttonMoveY);
            $(this).css('left', buttonMoveX);
            $(this).css('transition', cptHit +"s");
            console.log("hahaha");
            cptHit += 0.1;
            if( cptHit == 0.5) {
                cptHit = 3;
            } 
        }
        else if (cptHit >=3.3) {
            cptHit ==30;
        } 
    });

    $("#annoyingButton").click(function() {
        scoreHit++;
        maxLength++;
        limitHeight += 75;
        if (limitHeight > 470) {
            $(".containerLimit div p").text("It's running away !");
        }
        if (limitHeight > 520) {
            $(".containerLimit div p").text("You're good !");
        }
        if (limitHeight > 600) {
            $(".containerLimit div p").text("Too good..");
        }
        if (limitHeight > 650) {
            $(".containerLimit div p").text("Don't you have anything better to do ?");
        }
        if (limitHeight > 700) {
            $(".containerLimit div p").text("You know you can stop anytime");
        }
        if (limitHeight > 750) {
            $(".containerLimit div p").text("You clicked it " +scoreHit + " times");
            if(scoreHit > 7 && firstTime) {
                alert("Can you stop please ? I think you broke the page");
                firstTime = false;
            }
            else if (scoreHit > 7 && !firstTime){
                alert("Okay now I'm worried about you");
            }
        }
        $('.containerLimit').css({
            "height" : limitHeight});
        $("#nameUser").attr('maxlength', maxLength);
        $("#cptLength").text(maxLength);
        cptHit =0.1;
        buttonMoveX = Math.floor((Math.random()*($(".containerLimit").width()-hitBoxWidth)));
        buttonMoveY = Math.floor((Math.random()*($(".containerLimit").height()-hitBoxHeight)));
        $("#annoyingButtonHitBox").css('top', buttonMoveY);
        $("#annoyingButtonHitBox").css('left', buttonMoveX);
        $("#annoyingButtonHitBox").css('transition', cptHit +"s");
    });

});