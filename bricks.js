 // This code for make square block when DOM loaded
$('document').ready(function(){

    for (var i = 1; i <30; i++) {
        var div = document.createElement("div");
        $(div).addClass( "drag" );
       //pickColor:randomly assign a color for the square's background
        div.style.background = pickColor();
        // also set the width and height of the squares in the css
        div.style.left=pickPosition();
        div.style.top=pickPosition();
        $("#bricks").append(div);         
        console.log(div);
    }
    $(".drag").draggable(
        {
            containment: $('#walls'),
        }
    );
});

/*
$( "#walls" ).droppable({
    drop: function( event, ui ) {
        $( this )
        .addClass( "ui-state-highlight" )        
    }
});*/
// pick random color
function pickColor(){ 
    var colorArray = ["red", "green", "yellow", "blue","orange","black"];
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}
//
function pickPosition(){
   return Math.floor((Math.random()*200)+100) + "px";
}