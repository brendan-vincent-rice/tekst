$.fn.tekst = function() {

  var thing = this;
  thing.addClass("tekst");

  $(window).on("resize", function () {

    // Variables
    var container = $.trim(thing.text()), 
      characters = container.split(""),
      containerWidth = thing.width();

    // Remove container's contents
    thing.empty();

    // Wrap each character in a span
    $.each(characters, function(i, el) {
      thing.append("<span>"+el+"</span");
    });
    
    // How many spans (characters)?
    //var letterCount = $(".demo span").length;
    var letterCount = thing.find("span").length;
  
    // Set span font size    
    fontSize = containerWidth / letterCount * 1.55 + "px";
  
     // Apply CSS change
    thing.find("span").css({
      "font-size": fontSize 
    });
  
  }).resize();

};