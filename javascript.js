function showImage(elementId) {
document.getElementById(elementId).style.display = 'block';
}
function hideImage(imageId) {
document.getElementById(imageId).style.display = 'none';
}


function fadeinimg(elementId) {
document.getElementById(elementId).style.opacity = '1';
}

function fadeoutimg(imageId) {
document.getElementById(imageId).style.opacity = '0';
}




function liyl(){
showImage('liylembed');
}

function liyl2(){
fadeinimg('liylembed2');
}


//THIS FUNCTION TAKES THE ELEMENT ID AND FADES IT IN, TO USE WITH THE ONCLICK FUNCTION IN HTML
//function display(elementId){
//$(elementId).fadeIn(750);
//}

//SAME AS THE FUNCTION ABOVE, BUT DOES THE ONCLICK EVENT THROUGH JQUERY INSTEAD OF HTML, UTILIZING THE HTML ID TAG
$('#liylgrid').click(function(){
  $('#liylembed').fadeIn(750);

  document.getElementById('reelembed').style.display = 'none';
  document.getElementById('waveembed').style.display = 'none';
  document.getElementById('alifeinprisonembed').style.display = 'none';
  document.getElementById('stayforloveembed').style.display = 'none';
  document.getElementById('alreadystartedembed').style.display = 'none';

  document.getElementById('liyltext').style.fontWeight = 'bold';
  document.getElementById('reeltext').style.fontWeight = 'lighter';
  document.getElementById('wavetext').style.fontWeight = 'lighter';
  document.getElementById('alifeinprisontext').style.fontWeight = 'lighter';
  document.getElementById('stayforlovetext').style.fontWeight = 'lighter';
  document.getElementById('alreadystartedtext').style.fontWeight = 'lighter';

});


$('#reelgrid').click(function(){
  $('#reelembed').fadeIn(750);
  document.getElementById('liylembed').style.display = 'none';
});

//I WANT AN ALL-PURPOSE JQUERY COMMAND THAT TAKES IN THE CLICKED ELEMENT AND FADES IN THE CORRESPONDING EMBED
$('#____grid').click(function(){ //when you click on a ____grid link
  $('#____embed').fadeIn(750); //you fade in ____embed
  document.getElementById('____embed').style.display = 'none'; //all other ____embed not equal to the clicked ____grid disappear
});
