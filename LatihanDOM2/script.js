function getPilihanKomputer(){
    const output = Math.random();
    if (output <= 0.3) return 'Gunting';
    if (output > 0.3 && output <= 0.6) return 'Batu';
    return 'Kertas';
}


function getHasil(pKomp, pOrang){
    if (pOrang == pKomp) return 'seri';
    if (pOrang == 'Gunting') return (pKomp == 'Batu') ? 'kalah' : 'menang';
    if (pOrang == 'Kertas') return (pKomp == 'Gunting') ? 'kalah' : 'menang';
    if (pOrang == 'Batu') return (pKomp == 'Kertas') ? 'kalah' : 'menang';
}

function putar(){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['Gunting', 'Batu', 'Kertas'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        };
        imgComputer.setAttribute('src', 'assets/144ppi/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(img){
    img.addEventListener('click', function(){
        const pKomp = getPilihanKomputer();
        const pOrang = img.className;
        const hasil = getHasil(pKomp, pOrang);

        putar();

        setTimeout(function(){
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'assets/144ppi/' + pKomp + '.png');
    
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);
    });
});

// const pGunting = document.querySelector('.Gunting');
// pGunting.addEventListener('click', function(){
//     const pKomp = getPilihanKomputer();
//     const pOrang = pGunting.className;
//     const hasil = getHasil(pKomp, pOrang);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'assets/144ppi/' + pKomp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pBatu = document.querySelector('.Batu');
// pBatu.addEventListener('click', function(){
//     const pKomp = getPilihanKomputer();
//     const pOrang = pBatu.className;
//     const hasil = getHasil(pKomp, pOrang);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'assets/144ppi/' + pKomp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pKertas = document.querySelector('.Kertas');
// pKertas.addEventListener('click', function(){
//     const pKomp = getPilihanKomputer();
//     const pOrang = pKertas.className;
//     const hasil = getHasil(pKomp, pOrang);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'assets/144ppi/' + pKomp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });