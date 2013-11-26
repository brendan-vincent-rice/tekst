(function(){

  //$('.demo').tekst();

  $(window).on("resize", function () {
  
    // Variables
    var container = $.trim($(".demo").text()), 
        characters = container.split(""),
        containerWidth = $(".demo").width();

    // Remove container's contents
    $(".demo").empty();

    // Wrap each character in a span
    $.each(characters, function(i, el) {
       $(".demo").append("<span>"+el+"</span");
    });
    
    // How many spans (characters)?
    var letterCount = $(".demo span").length;
  
    // Set span font size    
    fontSize = containerWidth / letterCount * 1.55 + "px";
  
     // Apply CSS change
    $(".demo span").css({
      "font-size": fontSize 
    });
  
  }).resize();

}());