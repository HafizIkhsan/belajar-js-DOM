/** Kita bisa mempersempit scope untuk node root kita supaya bisa lebih spesifik */

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

// atau bisa dibalik
const sectionB = document.querySelector('#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';