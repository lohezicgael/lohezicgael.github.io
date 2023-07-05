var btnpopup7 = document.getElementById('btnpopup7');
var overlay7 = document.getElementById('overlay7');
var btnclose7 = document.getElementById('btnclose7');

btnpopup7.addEventListener('click',openModal7);
btnclose7.addEventListener('click',closePopup7);

function openModal7(){
    overlay7.style.display = 'block';
}

function closePopup7(){
    overlay7.style.display = 'none';
}

