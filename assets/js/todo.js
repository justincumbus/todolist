$("li").on("click", function( ) {
console.log("test");
    $(this).toggleClass("struckthrough");
});

$(".deletable").on("click", function (event) { 
    
    $(this).parent().remove();
    event.stopPropagation();
    
    
});

$("input").on("keypress", function (event) {
      if (event.which == 13) {
            console.log($("input").val());
            $("ul").append("<li>" + $("input").val() + "</li>" );
            $("input").val('');
            
          
          
      }
    
});