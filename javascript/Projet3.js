var btnpopup3 = document.getElementById('btnpopup3');
var overlay3 = document.getElementById('overlay3');
var btnclose3 = document.getElementById('btnclose3');

btnpopup3.addEventListener('click',openModal3);
btnclose3.addEventListener('click',closePopup3);

function openModal3(){
    overlay3.style.display = 'block';
}

function closePopup3(){
    overlay3.style.display = 'none';
}


