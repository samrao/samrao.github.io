//Hide bw images on pageload
$(document).ready(function(){
    $("[id$='bw']").css('display','none');
    $("[id$='embed']").css('display','none');
});

//select all elements with an id that ends with "grid", and assign click behaviour
$("[id$='grid']").click(function(){
  //select all elements with an id that ends with "embed", and hide them
  $("[id$='embed']").hide();
  //create a variable that stores the id of the clicked link
  var clicked = this.id;
  //at this point, the variable "clicked" ends with "grid", so replace with "embed"
  clicked = clicked.replace('grid','embed');
  //fade in the embed corresponding to the clicked element, which has an id of the form "____embed"
  $("#" + clicked).fadeIn(750);
  //alert (clicked);


  //remain bold on click, make everything else in the grid have a font style of "lighter"
  var clickedtext = this.id;
  clickedtext = clickedtext.replace('grid','text');
  $("[id$='text']").css("font-weight","lighter");
  $("#" + clickedtext).css("font-weight","Bold");


  //replace all black and white images with the corresponding coloured pair
  $("[id$='bw']").hide();
  $("[id$='img']").show();
  var clickedimg = this.id
  clickedimg = clickedimg.replace('grid','img');
  //on click, hide the coloured image and show the bw image
  $("#" + clickedimg).hide();
  $("#" + clickedimg + "bw").show();


  //make the text in the grid bold when mouseover corresponding grid element
  $("[id$='grid']").mouseover(function(){
    var hoveredtext = this.id
    hoveredtext = hoveredtext.replace('grid','text');
    $("#" + hoveredtext).css("font-weight","Bold");
  });
  $("[id$='grid']").mouseout(function(){
    var hoveredtext = this.id
    hoveredtext = hoveredtext.replace('grid','text');
    //change the selector to not include the text corresponding to the clicked grid element
    $("#" + hoveredtext).css("font-weight","lighter");
    //makes all text in grid lighter, except the one that's clicked
    $("[id$='text']").css("font-weight","lighter");
    $("#" + clickedtext).css("font-weight","Bold");
  });

});


//I WANT AN ALL-PURPOSE JQUERY COMMAND THAT TAKES IN THE CLICKED ELEMENT AND FADES IN THE CORRESPONDING EMBED
/*$('#____grid').click(function(){ //when you click on a ____grid link
  $('#____embed').fadeIn(750); //you fade in ____embed
  document.getElementById('____embed').style.display = 'none'; //all other ____embed not equal to the clicked ____grid disappear
});*/
