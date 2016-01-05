function showImage(imageId) {
document.getElementById(imageId).style.display = 'block';
}
function hideImage(imageId) {
document.getElementById(imageId).style.display = 'none';
}


function fadeinimg(imageId) {
document.getElementById(imageId).style.opacity = '1';
}

function fadeoutimg(imageId) {
document.getElementById(imageId).style.opacity = '0';
}

function reheight(imageId) {
document.getElementById(imageId).style.position = 'fixed';
document.getElementById(imageId).style.height = 'auto';
}



function liyl(){
showImage('liylembed');
}

function liyl2(){
fadeinimg('liylembed2');
}
