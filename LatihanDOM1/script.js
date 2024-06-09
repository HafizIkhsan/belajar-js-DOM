const tUbahWarna = document.getElementById('tUbahWarna');

tUbahWarna.addEventListener('click', function(){
    document.body.classList.toggle('biru-muda');
});

const buatTombol = document.createElement('button');
const teksTombol = document.createTextNode('acakWarna');
buatTombol.appendChild(teksTombol);
buatTombol.setAttribute('type', 'button');
tUbahWarna.after(buatTombol);

buatTombol.onclick = function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
};

//Slider
//Panggil Slider
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');


sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});