var btnpopup2 = document.getElementById('btnpopup2');
var overlay2 = document.getElementById('overlay2');
var btnclose2 = document.getElementById('btnclose2');

btnpopup2.addEventListener('click',openModal2);
btnclose2.addEventListener('click',closePopup2);

function openModal2(){
    overlay2.style.display = 'block';
}

function closePopup2(){
    overlay2.style.display = 'none';
}

