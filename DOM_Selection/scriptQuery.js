// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

const p = document.querySelector('p');
p.innerHTML = 'Ini diubah melalui javascript';

// documnet.querySelectorAll() -> nodelist
const pAll = document.querySelectorAll('p');
for(let i = 0; i < pAll.length; i++){
    pAll[i].style.color = 'blue';
}

/**
 * Pilih yang mana?
 * - getElementById()
 * - getElementsByTagName()
 * - getElementsByClassName()
 * - querySelector()
 * - querySelectorAll()
 * 
 * // BY Performances
 * getElementById() sama getElementByTagName() itu yang paling cepat
 * performanya jadi pasttin pake 2 ini dlu utk target yang spesifik kalau 
 * tidak bisa baru pake yang 3 lainnya
 */