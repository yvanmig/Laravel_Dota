var checkWinner = false;
var mouseInDiv = false;

$(document).ready(function() {
    $("#buttonStat").click(function() {
        $("#menuStat").toggleClass("openStat");
        $("#menuStat label").toggleClass("openLabel");
        
    });

    let wrapW = $(".wrap").width();
    
    $("#menuStat label").mouseenter(function() {
        if (checkWinner == false) {
            let leftR = Math.floor(Math.random()*wrapW-200);
            $(this).css("left", leftR);
            $(this).find(".labelFill").css("width", "100%");             
        } else {                
        }
    });    
          
    $("#menuStat label").mouseleave(function() {
        let child = $(this).find(".labelFill");
        //Si on a laissé la souris assez longtemps sur la div pour la remplir complètement
        if(child.css("width") == "200px" ){
            child.css({
                "background-color" : "blue"
            });           
            checkWinner = true;            
            $(this).find("input").prop("checked", true);
        } else {
            child.css("width", "0");
        }        
    });       
    
});