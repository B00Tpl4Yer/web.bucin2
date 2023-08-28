function showDiv() {
  setTimeout(setel, 50);
  pergantian();
  setTimeout(kpemb, 100);
  document.getElementById("Content").style =
    "opacity:1;margin-top:4vh;animation:kont 5s infinite;";
  document.querySelector("body").style.animation = "none 8s ease infinite";
}
function kpemb() {
  bq.style = "opacity:1;visibility:visible;margin-top:5px";
}
function loadfoto() {
  fotosatu.style = "display:inline-flex";
  fotosatu.src = gambar1;
  fotodua.src = gambar2;
  fototiga.src = gambar3;
  fotoempat.src = gambar4;
  fotolima.src = gambar5;
  fotoenam.src = gambar6;
  fototujuh.src = gambar7;
}
function tombol() {
  contTom.style = "opacity:1;transform: scale(1);";
  ftom = 1;
}
ftom = 0;
function fakhiran() {
  document.getElementById("akhiran").style = "display:inline-flex";
}
const swals = Swal.mixin({
  allowOutsideClick: false,
  cancelButtonColor: "#FF0040",
});
const swalsy = Swal.mixin({
  confirmButtonText: "Iya",
  allowOutsideClick: false,
});
const swalst = Swal.mixin({
  allowOutsideClick: false,
  showConfirmButton: false,
  timer: 1200,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const b = Swal.getHtmlContainer().querySelector("b");
    timerInterval = setInterval(() => {
      Swal.getTimerLeft();
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  },
});

function otomatis() {
  befanimkata();
  setTimeout(animkata, 200);
}
function befanimkata() {
  kalimat.style = "transform:scale(.3);";
}
function animkata() {
  kalimat.style = "transform:scale(1);";
}
function otomatis2() {
  befanimkataa();
  setTimeout(animkataa, 200);
}
function befanimkataa() {
  kalimatc.style = "transform:scale(.3);font-size:14px;margin-top:30px;";
}
function animkataa() {
  kalimatc.style = "transform:scale(1);font-size:14px;margin-top:30px;";
}
function finalakhir() {
  ftom = 2;
  otomatis2();
  By.innerHTML = "Kirim Pesan";
  kalimatc.innerHTML = "Jawabanmu: " + pesanwhatsapp;
}
function sjawab() {
  if (ftom == 1) {
    kalimatc.innerHTML = "";
    otomatis2();
    jawab();
  }
  if (ftom == 2) {
    menuju();
  }
}
function setel() {
  audio.play();
}
function setel2() {
  bgm.play();
}
var aa = 0,
  katangetik;
function ngetik() {
  kalimat.style = "font-size:16px";
  if (aa < katangetik.length) {
    kalimat.innerHTML += katangetik.charAt(aa);
    aa++;
    setTimeout(ngetik, 50);
  }
}
function bawahlagi() {
  fotoenam.style = "display:none";
  fototujuh.style = "display:inline-flex";
  kalimatc.style = "margin-top:25px;";
  kalimatc.innerHTML = kataakhir;
}

function pergantian() {
  setTimeout(gantikata, 500);
  setTimeout(gantikata, 4500);
  setTimeout(gantikata, 8500);
  setTimeout(gantikata, 12500);
  setTimeout(gantikata, 16400);
  setTimeout(gantikata, 20500);
  setTimeout(gantikata, 24500);
  setTimeout(gantikata, 28500);
  setTimeout(gantikata, 32500);
  setTimeout(gantikata, 36500);
}
function tfkata() {
  fkata += 1;
}
function bersihkan() {
  kalimat.innerHTML = "";
}
fkata = 1;
function gantikata() {
  if (fkata == 1) {
    otomatis();
    kalimat.innerHTML = kata1;
  }
  if (fkata == 2) {
    otomatis();
    kalimat.innerHTML = kata2;
    fotosatu.style = "display:none";
    fotodua.style = "display:inline-flex;";
  }
  if (fkata == 3) {
    otomatis();
    kalimat.innerHTML = kata3;
    fotodua.style = "display:none";
    fototiga.style = "display:inline-flex;";
  }
  if (fkata == 4) {
    otomatis();
    kalimat.innerHTML = kata4;
  }
  if (fkata == 5) {
    otomatis();
    kalimat.innerHTML = kata5;
    fototiga.style = "display:none";
    fotoempat.style = "display:inline-flex";
  }
  if (fkata == 6) {
    otomatis();
    kalimat.innerHTML = kata6;
    fotoempat.style = "display:none";
    fotolima.style = "display:inline-flex";
  }
  if (fkata == 7) {
    otomatis();
    kalimat.innerHTML = kata7;
    fotolima.style = "display:none";
    fotoenam.style = "display:inline-flex";
  }
  if (fkata == 8) {
    kalimat.innerHTML = "";
    setTimeout(ngetik, 50);
  }
  if (fkata ==  9) {
    setTimeout(bawahlagi, 300);
  }
  setTimeout(tfkata, 300);
}
