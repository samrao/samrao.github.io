//SAME AS THE FUNCTION ABOVE, BUT DOES THE ONCLICK EVENT THROUGH JQUERY INSTEAD OF HTML, UTILIZING THE HTML ID TAG
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


  //bold on click
  var clickedtext = this.id;
  clickedtext = clickedtext.replace('grid','text');
  $("[id$='text']").css("font-weight","lighter");
  $("#" + clickedtext).css("font-weight","Bold");

  //replace all black and white images with the corresponding coloured pair
  $("[id$='bw']").hide();
  $("[id$='img']").show();
  //greyscale on click
  var clickedimg = this.id
  clickedimg = clickedimg.replace('grid','img');
  $("#" + clickedimg).hide();
  $("#" + clickedimg + "bw").show();
    //replace the image with clickedimg id with it's black and white pair

});


//I WANT AN ALL-PURPOSE JQUERY COMMAND THAT TAKES IN THE CLICKED ELEMENT AND FADES IN THE CORRESPONDING EMBED
/*$('#____grid').click(function(){ //when you click on a ____grid link
  $('#____embed').fadeIn(750); //you fade in ____embed
  document.getElementById('____embed').style.display = 'none'; //all other ____embed not equal to the clicked ____grid disappear
});*/
