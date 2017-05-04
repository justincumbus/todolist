$(document).on("click",".strikable", function( ) {
console.log("test");
    $(this).toggleClass("struckthrough");
});

$(document).on("click", '.deletable',function (event) { 
    
    $(this).parent().remove();
    event.stopPropagation();
    
    
} );

$(".deletable").on("click", function(event) {

    $(this).parent().remove();
    event.stopPropagation();


});

$("input").on("keypress", function (event) {
      if (event.which == 13) {
            console.log($("input").val());
            $("ul").append("<li class=\"strikable\"> <span class=\"deletable\">x </span>"    + $("input").val() + "</li>" );
            $("input").val('');
            
          
          
      }
    
});