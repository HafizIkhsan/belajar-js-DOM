// DOM Node Manipulation
// Urutan pengerjaan menambahkan node baru

// Cara pertama menggunakan node.appendChild
// Membuat Element baru
const buatP = document.createElement('p');
const teksBaru = document.createTextNode('Paragraf Baru');
// Simpan tulisan ke dalam paragraf
buatP.appendChild(teksBaru);
// Simpan p baru di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(buatP);

// Cara kedua menggunakan node.insertBefore()
// Membuat Element baru
const buatList = document.createElement('li');
const teksLiBaru = document.createTextNode('List Baru');
// Simpan tulisan ke dalam paragraf
buatList.appendChild(teksLiBaru);
// Simpan li baru di tengah node li
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(buatList, li2);


// Urutan pengerjaan menghapus node baru
// menggunakan parentNode.removeChild()
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


// Urutan pengerjaan mengganti node lama dengan node baru
// ambil sectionB
const sectionB = document.getElementById('b');
// cari element yang mau diganti
const ganti = sectionB.getElementsByTagName('p')[0];
// buat element baru
const buatH2 = document.createElement('h2');
const H2baru = document.createTextNode('H2 Baru');
// Simpan tulisan ke dalam element h2
buatH2.appendChild(H2baru)

sectionB.replaceChild(buatH2, ganti);

buatP.style.backgroundColor = 'lightblue';
buatList.style.backgroundColor = 'lightblue';
buatH2.style.backgroundColor = 'lightblue';