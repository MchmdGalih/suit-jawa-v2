// function getPilihanComputer () {
//   const compt = Math.random();

//   if (compt < 0.34) return "gajah";
//   if (compt >= 0.34 && compt < 0.67) return "orang"; 
//     return 'semut';
// }

// function getHasil(compt, player) {
//   if(player == compt) return 'seri!'
//   if(player == 'gajah') return (compt == 'orang') ? 'Menang!' : 'Kalah!';
//   if(player == 'orang') return (compt == 'gajah') ? 'Kalah!' : 'Menang!';
//   if(player == 'semut') return (compt == 'orang') ? 'Menang!' : 'Kalah!';
// }

  

// function putarImg () {
//   const imgComputer = document.querySelector('.img-computer');
//   const imgR = ['gajah', 'semut', 'orang'];
//   let i = 0;
//   const waktuMulai = new Date(). getTime();
//   setInterval(function() {
//       if( new Date(). getTime() - waktuMulai > 1000){
//         clearInterval;
//         return;
//       }
//       imgComputer.setAttribute('src', 'asset/' + imgR[i++] + '.png' );
//       if( i == imgR.length) i = 0;
//   }, 100)
// }


// const randomImg = document.querySelectorAll('li img');
//   randomImg.forEach(function(img){
//   img.addEventListener ('click', function(){
//     const pilihanComputer = getPilihanComputer();
//       const pilihanPlayer = img.className;
//       const hasil = getHasil(pilihanComputer, pilihanPlayer);

//       putarImg();

//       setTimeout(function() {
//         const imgComputer = document.querySelector('.img-computer');
//         imgComputer.setAttribute('src', 'asset/' + pilihanComputer + '.png')
      
//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
        
//       }, 1000)
//     }); 
//   });

let saldoAwal = prompt('tambahkan saldo awal anda: ');
let saldoAkhir = prompt('tambahkan saldo akhir anda: ');
let hasilSaldo = parseInt(saldoAwal) + parseInt(saldoAkhir);

alert(`anda membayar: ${saldoAwal} + ${saldoAkhir} \n jadi hasilnya : ${hasilSaldo}`);