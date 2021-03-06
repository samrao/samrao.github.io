

//HIDE BW IMAGES AND EMBEDS ON PAGELOAD
  $(document).ready(function(){
      $("[id$='bw']").hide();
      $("[id$='embed']").hide();
      $("[id$='embedtext']").hide();
  });


//SELECT ALL ELEMENTS WITH AN ID THAT ENDS WITH "GRID", AND ASSIGN CLICK BEHAVIOUR
$("[id$='grid']").click(function(){
  //MAKE EMBEDS FADE IN ON CLICK OF CORRESPONDING GRID ELEMENT
    //select all elements with an id that ends with "embed", and hide them
    $("[id$='embed']").hide();
    $("[id$='embedtext']").hide();
    //create a variable that stores the id of the clicked link
    var clicked = this.id;
    //at this point, the variable "clicked" ends with "grid", so replace with "embed"
    clicked = clicked.replace('grid','embed');
    //fade in the embed corresponding to the clicked element, which has an id of the form "____embed"
    $("#" + clicked).fadeIn(750);
    $("#" + clicked + "text").fadeIn(900);
    //alert (clicked);


  //TEXT REMAINS BOLD ON CLICK, EVERYTHING ELSE HAS A FONT STYLE OF "LIGHTER"
    var clickedtext = this.id;
    clickedtext = clickedtext.replace('grid','gridtext');
    $("[id$='gridtext']").css("font-weight","lighter");
    $("#" + clickedtext).css("font-weight","Bold");

  //MAKE IMAGES STAY BW ON CLICK
    //replace all black and white images with the corresponding coloured pair
    $("[id$='bw']").hide();
    $("[id$='img']").show();
    var clickedimg = this.id
    clickedimg = clickedimg.replace('grid','img');
    //on click, hide the coloured image and show the bw image
    $("#" + clickedimg).hide();
    $("#" + clickedimg + "bw").show();


  //MAKE TEXT IN THE GRID BOLD WHEN MOUSEOVER CORRESPONDING ELEMENT
    $("[id$='grid']").mouseover(function(){
      var hoveredtext = this.id
      hoveredtext = hoveredtext.replace('grid','gridtext');
      $("#" + hoveredtext).css("font-weight","Bold");
    });
    $("[id$='grid']").mouseout(function(){
      //makes all text in grid lighter, except the one that's clicked
      $("[id$='gridtext']").css("font-weight","lighter");
      $("#" + clickedtext).css("font-weight","Bold");
    });

    //PAGE AUTO-SCROLLS TO EMBED POSITION ON CLICK OF GRID ELEMENT
    //the -90 accounts for the fact that for photos, the layout is inverted and the description is positioned ABOVE the embed (which the selector is targetting in this case)
    //$("html, body").scrollTop($("#" + clicked).position().top - 400);

  //create a function that makes video stop playing when another link is clicked
});
//this is an additional funtion that is slifhtly changed from the "Film" page to go 800 pixels down the page when the grid is clicked
$("[id$='grid']").click(function(){
  var clicked = this.id;
  $("html, body").scrollTop($("#" + clicked + "text").position().top - 200);
});
