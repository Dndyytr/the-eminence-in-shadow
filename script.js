// scrolling
document.addEventListener("DOMContentLoaded", function () {
  // Seleksi semua elemen yang akan dianimasikan berdasarkan kelas dan ID
  const elements = document.querySelectorAll(
    ".artikel1, .watch, .btn-more, #sled-img, #text-content, .more-informasi, .shadow-garden, .btn-morekarakter, .tampilan-galeri, .item-galeri, .teks-head, .figure-animasi"
  );

  // Membuat instance IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      // Iterasi melalui setiap entri yang diamati
      entries.forEach((entry) => {
        // Jika elemen masuk ke dalam viewport dan belum dianimasikan
        if (entry.isIntersecting && entry.target.dataset.animated === "false") {
          // Ubah data-animated menjadi true
          entry.target.dataset.animated = "true";
          // Hentikan observasi elemen ini karena tidak perlu dianimasikan lagi
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Mulai observasi setiap elemen yang dipilih
  elements.forEach((element) => {
    observer.observe(element);
  });
});

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".navbar .menu");

// klik menu
hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("active");
});

// klik diluar menu
document.addEventListener("click", function (e) {
  if (
    !hamburger.contains(e.target) &&
    !menu.contains(e.target) &&
    menu.classList.contains("active")
  ) {
    menu.classList.remove("active");
    hamburger.classList.toggle("active");
  }
});

let slideIndex = 0;
let slides = document.querySelectorAll(".slider img");
let timer; // variabel untuk menyimpan timer

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[n].classList.add("active");
}

function nextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

function startSlideShow() {
  timer = setInterval(function () {
    nextSlide();
  }, 8000); // Ganti gambar setiap 3 detik (3000 milidetik)
}

function stopSlideShow() {
  clearInterval(timer); // Menghentikan timer
}

// Event listener untuk saat mouse masuk dan keluar dari slider
document.querySelector(".slider").addEventListener("mouseenter", function () {
  stopSlideShow();
});

document.querySelector(".slider").addEventListener("mouseleave", function () {
  startSlideShow();
});

showSlide(slideIndex); // Menampilkan slide pertama saat halaman dimuat
startSlideShow(); // Memulai autoplay saat halaman dimuat

// fungsi gambar sinopsissssss
(function () {
  const sled = [
    {
      img: "img/season1.jpg",
      text: `<mark>Season 1<br /></mark>
            Selama yang dapat diingatnya, Minoru Kagenou telah terpaku untuk
            menjadi sekuat mungkin, yang telah membuatnya melakukan semua jenis
            pelatihan yang ketat. Namun, keinginan ini tidak berasal dari
            keinginan untuk diakui oleh orang lain; sebaliknya, Minoru melakukan
            semua yang dia bisa untuk berbaur dengan orang banyak. Jadi, sambil
            berpura-pura menjadi siswa yang benar-benar rata-rata di siang hari,
            dia mempersenjatai dirinya dengan linggis dan dengan kejam memukuli
            geng motor lokal di malam hari. Namun ketika Minoru menemukan
            dirinya dalam kecelakaan truk, ambisinya tampaknya berakhir
            tiba-tiba. Di saat-saat terakhirnya, dia menyesali
            ketidakberdayaannya, tidak peduli seberapa keras dia berlatih, tidak
            ada yang bisa dia lakukan untuk mengatasi keterbatasan manusianya.
            Tetapi alih-alih mati, Minoru bangkit kembali sebagai Cid, anak
            kedua dari keluarga bangsawan Kagenou, di dunia lain dimana sihir
            adalah hal yang biasa. Dengan kekuatan yang sangat diinginkannya
            akhirnya dalam genggamannya, ia mengenakan julukan "Shadow" dan
            mendirikan Shadow Garden: sebuah kelompok yang tujuan utamanya
            adalah untuk memerangi Cult of Diablos yang penuh teka-teki, sebuah
            organisasi yang lahir dari imajinasi Cid. Namun, seiring
            bertambahnya jumlah anggota dan pengaruh Shadow Garden, semakin
            jelas bahwa Cult of Diablos tidak sefiktual yang diinginkan Cid.`,
      shadow: `1px 1px 3px rgb(0, 29, 44), 2px 2px 3px rgb(0, 29, 44),
    3px 3px 3px rgb(0, 29, 44),
    4px 4px 3px rgb(0, 29, 44),
    5px 5px 3px rgb(0, 29, 44),
    6px 6px 3px rgb(0, 29, 44),
    7px 7px 3px rgb(0, 29, 44),
    8px 8px 3px rgb(0, 29, 44),
    9px 9px 3px rgb(0, 29, 44),
    10px 10px 3px rgb(0, 29, 44),
    11px 11px 3px rgb(0, 29, 44),
    12px 12px 3px rgb(0, 29, 44),
    13px 13px 3px rgb(0, 29, 44),
    14px 14px 3px rgb(0, 29, 44),
    15px 15px 3px rgb(0, 29, 44),
    16px 16px 3px rgb(0, 29, 44)`,
      tabel: `<tr>
              <td>Tipe</td>
              <td>: TV</td>
            </tr>
            <tr>
              <td>Jumlah Episode</td>
              <td>: 20</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>: Selesai Ditayangkan</td>
            </tr>
            <tr>
              <td>Ditayangkan</td>
              <td>: 5 Oktober 2022 hingga 15 Februari 2023</td>
            </tr>
            <tr>
              <td>Tayang Perdana</td>
              <td>: Musim gugur 2022</td>
            </tr>
            <tr>
              <td>Siaran</td>
              <td>: Rabu pukul 22:30 (JST)</td>
            </tr>
            <tr>
              <td>Produsen</td>
              <td>: AT-X, BS NTV, Kadokawa, NewGin, Aiming</td>
            </tr>
            <tr>
              <td>Pemberi Lisensi</td>
              <td>: Sentai Filmworks</td>
            </tr>
            <tr>
              <td>Studio</td>
              <td>: Nexus</td>
            </tr>
            <tr>
              <td>Sumber</td>
              <td>: Novel ringan</td>
            </tr>
            <tr>
              <td>Genre</td>
              <td>: Aksi, Komedi, Fantasi</td>
            </tr>
            <tr>
              <td>Tema</td>
              <td>: Isekai, Reinkarnasi</td>
            </tr>
            <tr>
              <td>Durasi</td>
              <td>: 23 menit per episode</td>
            </tr>
            <tr>
              <td>Rating</td>
              <td>: R - 17+ (kekerasan & kata-kata kasar)</td>
            </tr>`,
      info: `★8.28, 20eps, <mark>more informasi...</mark>`,
    },
    {
      img: "img/season2.jpeg",
      text: `<mark>Season 2<br /></mark>Tergoda dengan kekayaannya yang dikabarkan, Cid Kagenou dengan senang hati ikut bersama saudarinya, Claire, dalam perjalanan ke Kota Tanpa Hukum yang terkenal kejam. Wilayah tersebut diperintah oleh tiga raja Yukime, si Rubah Roh Juggernaut, si Tiran dan Elisabeth, vampir leluhur yang tidak aktif yang dikenal sebagai Ratu Darah. Memburu Elisabeth menjadi kesempatan yang sempurna bagi Claire untuk membuktikan keberaniannya yang sebenarnya. Di sisi lain, Cid memiliki tujuan yang berbeda menyelinap menjauh dari pandangan Claire, mengumpulkan sebanyak mungkin jarahan, dan membuat Shadow muncul dengan gemilang di saat yang tepat. Saat kebangkitan Elisabeth semakin dekat, bawahannya Crimson menjalankan rencana berbahaya, membuat kota menjadi hiruk pikuk. Mencari saudara laki-lakinya yang sekarang hilang, Claire menemukan sekutu yang tak terduga dalam diri Mary, seorang pemburu vampir, dan keduanya bergegas ke Menara Crimson rumah Ratu Darah. Sementara itu, Beta dan tim kecil rekrutan Shadow Garden juga tiba di Kota Tanpa Hukum. Saat para pemain kunci berkumpul di Crimson Tower, panggung disiapkan untuk konfrontasi besar di bawah bulan merah. Ratu Darah telah tertidur di peti matinya selama ribuan tahun. Cid harus menghadapi hari saat Ratu Darah bangkit, karena kebangkitan Ratu Darah menjadikan sebuah peristiwa yang sangat penting disana.`,
      shadow: `1px 1px 3px rgb(70, 0, 0), 2px 2px 3px rgb(70, 0, 0),
    3px 3px 3px rgb(70, 0, 0),
    4px 4px 3px rgb(70, 0, 0),
    5px 5px 3px rgb(70, 0, 0),
    6px 6px 3px rgb(70, 0, 0),
    7px 7px 3px rgb(70, 0, 0),
    8px 8px 3px rgb(70, 0, 0),
    9px 9px 3px rgb(70, 0, 0),
    10px 10px 3px rgb(70, 0, 0),
    11px 11px 3px rgb(70, 0, 0),
    12px 12px 3px rgb(70, 0, 0),
    13px 13px 3px rgb(70, 0, 0),
    14px 14px 3px rgb(70, 0, 0),
    15px 15px 3px rgb(70, 0, 0),
    16px 16px 3px rgb(70, 0, 0)`,
      tabel: `<tr>
              <td>Tipe</td>
              <td>: TV</td>
            </tr>
            <tr>
              <td>Jumlah Episode</td>
              <td>: 12</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>: Selesai Ditayangkan</td>
            </tr>
            <tr>
              <td>Ditayangkan</td>
              <td>:  4 Oktober 2023 hingga 20 Desember 2023</td>
            </tr>
            <tr>
              <td>Tayang Perdana</td>
              <td>: Musim gugur 2023</td>
            </tr>
            <tr>
              <td>Siaran</td>
              <td>: Rabu pukul 22:30 (JST)</td>
            </tr>
            <tr>
              <td>Produsen</td>
              <td>:  AT-X, Magic Capsule, BS NTV, Kadokawa, NewGin, Aiming</td>
            </tr>
            <tr>
              <td>Pemberi Lisensi</td>
              <td>: Sentai Filmworks</td>
            </tr>
            <tr>
              <td>Studio</td>
              <td>: Nexus</td>
            </tr>
            <tr>
              <td>Sumber</td>
              <td>: Novel ringan</td>
            </tr>
            <tr>
              <td>Genre</td>
              <td>: Aksi, Komedi, Fantasi</td>
            </tr>
            <tr>
              <td>Tema</td>
              <td>: Isekai, Reinkarnasi</td>
            </tr>
            <tr>
              <td>Durasi</td>
              <td>: 23 menit per episode</td>
            </tr>
            <tr>
              <td>Rating</td>
              <td>: R - 17+ (kekerasan & kata-kata kasar)</td>
            </tr>`,
      info: `★8.35, 12eps, <mark>more informasi...</mark>`,
    },
    // Tambahkan slide lainnya di sini
  ];

  let angka = 0;

  function sowSled(i) {
    const sledIMG = document.getElementById("sled-img");
    const teksKonten = document.getElementById("text-content");
    const table = document.getElementById("tabel");

    sledIMG.style.transition = "filter 1s ease, opacity 1s ease";
    sledIMG.style.filter = "brightness(8)";
    sledIMG.style.opacity = 0.5;
    setTimeout(() => {
      sledIMG.src = sled[i].img;
      sledIMG.style.boxShadow = sled[i].shadow;
      teksKonten.innerHTML = sled[i].text;
      btnMoreinf.innerHTML = sled[i].info;
      table.innerHTML = sled[i].tabel;

      sledIMG.style.transition = "filter 1s ease, opacity 1s ease";
      sledIMG.style.filter = "brightness(1)";
      sledIMG.style.opacity = 1;
    }, 500);
  }

  function nekSled() {
    angka = (angka + 1) % sled.length;
    sowSled(angka);
  }

  function prepSled() {
    angka = (angka - 1 + sled.length) % sled.length;
    sowSled(angka);
  }

  // Inisialisasi slide pertama
  sowSled(angka);

  // Expose functions to global scope so they can be called from HTML
  window.nekSled = nekSled;
  window.prepSled = prepSled;
})();

// tabel
const xInf = document.querySelector(".x");
const btnMoreinf = document.querySelector(".more-informasi");
const tableElement = document.querySelector(".tabel-informasi");

xInf.addEventListener("click", function () {
  tableElement.classList.remove("aktif");
  tableElement.classList.add("nonaktif");
  setTimeout(() => {
    tableElement.style.visibility = "hidden";
    tableElement.classList.remove("nonaktif");
  }, 1000); // Menunggu animasi popDown selesai
  setTimeout(() => {
    xInf.style.visibility = "hidden";
  }, 600); // Menunggu animasi popDown selesai
});

// Misalnya, jika Anda ingin memunculkan tabel dengan klik sebuah tombol
btnMoreinf.addEventListener("click", function () {
  tableElement.classList.remove("nonaktif");
  tableElement.classList.add("aktif");
  tableElement.style.visibility = "visible";
  xInf.style.visibility = "visible";
});

//  pengisi suara
const btnPengisi = document.querySelector(".btn-morekarakter");
const pengisiSuara = document.querySelector(".pengisi-suara");
const xPengisi = document.querySelector(".x-pengisi");

xPengisi.addEventListener("click", function () {
  pengisiSuara.classList.remove("aktip");
  pengisiSuara.classList.add("nonaktip");
  setTimeout(() => {
    pengisiSuara.style.visibility = "hidden";
    pengisiSuara.classList.remove("nonaktip");
  }, 1000); // Menunggu animasi popDown selesai
  setTimeout(() => {
    xPengisi.style.visibility = "hidden";
  }, 600); // Menunggu animasi popDown selesai
});

btnPengisi.addEventListener("click", function () {
  pengisiSuara.classList.remove("nonaktip");
  pengisiSuara.classList.add("aktip");
  pengisiSuara.style.visibility = "visible";
  xPengisi.style.visibility = "visible";
});

// ganti karakter
(function () {
  const karakter = [
    {
      gambar: "img/shadowGarden.png",
      teks: ` <mark>Shadow Garden</mark><br />
              (シャドウガーデン, Shadō Gāden) adalah organisasi global rahasia
              tersembunyi misterius yang didirikan oleh Cid Kagenou yang juga
              dikenal sebagai Shadow. Tujuan utamanya adalah untuk melenyapkan
              Kultus Diabolos dan mencegah mereka membangkitkan iblis kuno,
              Diablos. Namun, selama pencapaian misi mereka yang sukses, mereka
              juga belajar tentang kebenaran yang sebenarnya terjadi antara Tiga
              Pahlawan yang telah dimanipulasi di balik layar, serta asal usul
              dan tujuan sebenarnya dari Kultus yang telah menyebabkan banyak
              kelakuan buruk yang melanda seluruh dunia untuk memenuhi keinginan
              ambisius mereka sendiri. Melalui pengungkapan tersebut, rencana
              Shadow Garden adalah untuk mengungkap kebenaran tentang Tiga
              Pahlawan sambil bekerja dalam bayang-bayang untuk menyelamatkan
              dunia dari Kultus Diablos dengan menghentikan upaya mereka untuk
              menyempurnakan Tears of Diabolos dan mengungkap kejahatan mereka
              untuk membalas penderitaan mereka atas penindasan yang mereka
              terima dari ketidakadilan Kultus akibat gejala Kerasukan Iblis
              yang mereka alami, serta menumbangkan rezim totaliter mereka yang
              sekaligus membasmi Kultus hingga bahkan mereka tanpa ampun
              membantai siapapun yang tergabung atau berhubungan dengan Kultus.
              Sebagai organisasi yang relatif tidak dikenal, mereka menjadi
              ancaman bagi negara-negara lain di dunia sehingga bahkan Kultus
              Diabolos pun takut pada mereka, karena Shadow Garden adalah
              satu-satunya kekuatan di dunia yang dengan berani menentang Kultus
              secara langsung dan berusaha menghancurkannya. Sebagai tanggapan,
              Kultus menggunakan koneksi publik mereka untuk memfitnah dan
              memberatkan Shadow Garden atas kejahatan mereka sendiri. Meski
              demikian, Shadow Garden telah menggagalkan semua skema Kultus
              dengan berusaha menghilangkan pengaruhnya meski dicap sebagai
              penjahat, hingga prestasi yang mereka raih selama ini membuat
              Kultus kewalahan dalam menghadapi tindakan mereka. Selain itu,
              sebuah faksi ekstremis dalam organisasi yang hanya setia di bawah
              salah satu dari Tujuh Bayangan, Zeta yang menyimpang dari tujuan
              awal Shadow Garden dengan mengabaikan perintah apa pun dari
              belakang kepemimpinan organisasi dan secara diam-diam memimpin
              divisi nakalnya untuk menjalankan misinya sendiri, yang secara
              tidak resmi beroperasi dalam menjalankan agenda pribadinya untuk
              menjadikan Shadow sebagai dewa dunia baru dengan menghidupkan
              kembali Iblis Diablos untuk mendapatkan keabadian.`,
      bentuk: "url(img/shadowGarden.png)",
      lebar: "11.3rem",
      layar: "8rem",
    },
    {
      gambar: "img/cid.png",
      teks: `<mark>Cid Kagenou</mark><br /> (シド・カゲノー, Shido Kagenō) merupakan tokoh utama dari The Eminence in Shadow. Cid adalah ketua atau pemimpin organisasi rahasia Shadow Garden untuk membantu mewujudkan fantasinya menjadi "Eminence in Shadow". Dia juga reinkarnasi dari Minoru Kagenou. Sebelum bereinkarnasi Cid bernama Minoru Kagenou. Minoru digambarkan sebagai pemuda yang mempunyai wajah yang biasa, dengan warna rambut dan mata hitam. Dia selalu tampak mengantuk, hal ini terbukti dengan adanya kantung hitam dibawah matanya. Ketika Cid bersekolah, dia berpenampilan rapih dengan mengenakan seragam SMA Sakurazaka yang terdiri dari kemeja putih, dasi hitam, sweater hitam, jaket blazer putih, celana panjang hitam, dan sepasang sepatu. Cid Kagenou adalah seorang pria muda langsing dengan rambut berwarna hitam dan pendek. Dia mempunyai wajah yang biasa. Sebagai siswa dari Midgar Royal Spellsword Academy dia mengenakan seragam yang terdiri dari jaket blazer biru dongker dengan aksen emas, kemeja putih, dasi, celana panjang biru dongker, dan sepasang sepatu pantofel. Ketika dia berkedok menjadi Shadow, dia mengenakan setelan dengan slime bodysuit pada seluruh tubuhnya, sarung tangan, sepatu boot, jubah dengan tudung, serta topeng domino yang keseluruhannya berwarna gelap. Hal ini bertujuan untuk menyembunyikan identitasnya. Ketika dia berkedok menjadi John Smith, dia mengenakan setelan yang diberi oleh Snow Fox Corporation. Setelan tersebut berwarna hitam yang terdiri dari kemeja bergaris, dasi hitam, dan sepatu hitam. Kemudian dia menyisir rambutnya ke samping dan memakai topeng domino putih yang menutupi setengan wajahnya. Hal ini bertujuan untuk menyembunyikan identitasnya. Minoru Kagenou mempertahankan karakter sampingan yang tidak banyak menarik perhatian di SMA. Pada siang hari dia selalu berlatih, tetapi karena dia tidak bisa membuktikan hasilnya, setiap malam dia pergi berburu bandit dan penjahat, setelah berhasil memberantas bandit dia memproklamirkan dirinya sendiri sebagai Slayer the Graceful. Dia selalu membawa batang logam di atas punggungnya. Cid terobsesi untuk menjadi Kekuatan Dalam Bayangan, seseorang yang mengerahkan kekuatan yang luar biasa dari bayang-bayang. Dia tidak berusaha keras untuk mendedikasikan dirinya untuk tujuan itu dan dia sangat bangga atas pencapaiannya. Para pengikutnya percaya bahwa dia adalah dalang yang brilian. Para Shadow Garden sangat setia kepada cid kagenou.`,
      bentuk: "url(img/cid.png)",
      lebar: "11.3rem",
      layar: "8rem",
    },
    {
      gambar: "img/alpha.png",
      teks: `<mark>Alpha</mark><br /> (アルファ, Arufa) adalah orang kedua atau bisa dibilang wakil pemimpin dari organisasi Shadow Garden. Dia disembuhkan dari Kerasukan Iblis oleh Shadow, sehingga dia mengabdikan dirinya untuk memenuhi tujuannya. Dia merupakan orang pertama yang direkrut serta berkat dirinya Shadow Garden berkembang dengan pesat. Alpha adalah elf wanita muda dengan rambut berwarna pirang panjang dan mata yang berwarna biru. Dia mempunyai postur badan yang ramping dan sering digambarkan sangat mirip dengan leluhurnya yaitu Pahlawan Olivier. Pada kesehariannya dia mengenakan gaun dekoratif berwarna gelap dengan sarung tangan opera, sepatu hak tinggi, serta memakai kalung. Selama kegiatan Shadow Garden, dia memakai bodysuit slime dengan dekorasi berpola yang unik di sekitar pakaiannya. Alpha didorong oleh balas dendam terhadap Kultus Diabolos, atas penderitaan yang dia alami ketika dia masih kecil. Oleh kareta itu, mengapa dia bertekad untuk membuat Shadow Garden berjaya untuk memenuhi tujuan itu dan memandang rendah orang-orang yang menghalangi dia dan rekan - rekannya. Dia seorang yang penyayang dan setia kepada Cid dan rekan-rekannya di Shadow Garden. Alpha memiliki keyakinan penuh terhadap tuannya, mengetahui kekuatan penuhnya, tetapi akan ada saatnya dia mengkhawatirkan keselamatan dan kesejahteraannya dan memohon padanya untuk mempercayainya dan Shadow Garden. Dia sangat mencintai Shadow dan bahkan rela memberikan hidupnya untuknya dan hampir melakukannya ketika Shadow meninggalkannya. Sebagai pemimpin yang mempelopori sebagian besar operasi Shadow Garden, dia akan selalu memastikan bahwa orang-orang yang berada di bawah komandonya kembali dengan selamat dan menolak memberi mereka perintah yang tidak bisa dia lakukan sendiri. Dia memberikan kebaikan kepada para korban Kultus Diabolos seperti yang ditunjukkan ketika dia membunuh seorang gadis yang bermutasi. Selama masa kecilnya di negara elf, Alpha menjalani kehidupannya yang relatif normal, bahkan berkenalan dengan gadis yang nantinya akan menjadi Beta. Sayangnya, setelah diketahui bahwa dia menderita Kerasukan Iblis, dia diasingkan dan terpaksa melarikan diri dari rumahnya. Kemudian, dia menjadi tawanan sekelompok bandit, sementara itu Kerasukan Iblisnya berkembang ke seluruh tubuh. Dia ditemukan oleh Cid Kagenou yang mengalahkan sekelompok bandit dan menyembuhkan Kerasukan Iblisnya serta memulihkan tubuhnya menjadi normal.`,
      bentuk: "url(img/alpha.png)",
      lebar: "8rem",
      layar: "5rem",
    },
    {
      gambar: "img/Beta.png",
      teks: `<mark>Beta</mark><br /> (ベータ, Bēta) adalah anggota ketiga dari Shadow Garden, dia mendukung masternya Shadow melawan Kultus Diabolos. Di luar aktivitas Shadow Garden-nya, dia mengadopsi identitas Natsume, seorang penulis yang sedang naik daun. Beta adalah seorang Elf muda yang mempesona dengan warna mata hijau dan rambut perak sebahu dengan kepang kiri di belakang telinganya, serta tahi lalat di bawah sudut matanya. Pakaian Shadow Garden-nya terdiri dari setelan slime gelap yang memperlihatkan belahan dadanya dengan hiasan emas di sekitar dada, bahu, lengan, dan pinggangnya. Saat berperan sebagai Natsume, dia memakai blus ruffle putih yang juga memperlihatkan belahan dadanya, rok mini berwarna gelap, stoking hitam, dan sepatu hak tinggi. Selain itu, dia juga memakai aksesoris berupa kacamata dan kalung, serta syal di pinggangnya. Beta adalah bawahan yang berdedikasi dan setia pada Shadow Garden. Dia adalah analis yang hebat, menggunakan informasi yang diberikan dari misinya, dan dia adalah seorang pejuang yang memimpin anggota timnya menuju kemenangan. Saat berbicara dengan orang lain, dia tetap tenang sebagai Natsume, dia menampilkan dirinya sebagai seorang wanita muda yang kalem dan rendah hati tetapi tidak akan ragu untuk menggunakan kecantikannya dalam menjebak targetnya dan mendapatkan apa yang dia inginkan. Di luar kesetiaannya pada Shadow Garden merupakan kesetiaannya kepada tuannya . Beta jatuh cinta padanya. Dia bermimpi suatu hari memeluknya dengan penuh gairah. Karena itu, dia menjadi sangat cemburu kepada gadis manapun yang berusaha untuk mendekatinya, khususnya Putri Alexia Midgar. Baik saat libur maupun selama menjalankan tugasnya, dia memiliki hobi menulis buku berjudul “The War Chronicles of Shadow-sama”. Tujuannya adalah suatu hari dia dapat berdiri di samping Shadow dengan kekuatan untuk mendukungnya dalam segala hal yang dia lakukan. Beta secara diam-diam menulis dengan merekam tindakan dan analoginya dengan perubahan yang penting yaitu: Putri Shadow sang penyelamat digambarkan sebagai peri dengan rambut perak dan tahi lalat di bawah mata birunya. Beta adalah pemimpin yang hebat, memerintahkan pasukannya dan menegur jika mereka tidak mematuhi perintahnya. Dia adalah penyusup yang handal, telah menipu orang-orang dengan berpenampilan sebagai Natsume yang lemah lembut dan pemalu. Pada saat mereka menyadari identitas aslinya, Beta dengan cepatnya membunuh mereka.`,
      bentuk: "url(img/Beta.png)",
      lebar: "7rem",
      layar: "4rem",
    },
    {
      gambar: "img/gamma.png",
      teks: `<mark>Gamma</mark><br /> (ガンマ, Ganma) adalah anggota Shadow Garden, menjadi salah satu Seven Shades serta presiden Mitsugoshi Company. Meskipun kurangnya koordinasi, pengetahuan Gamma telah memungkinkan dia menciptakan banyak item yang dijelaskan oleh master Shadow untuk dijual sebagai produk eksklusif Mitsugoshi. Gamma merupakan wanita dewasa dari ras elf dengan warna rambut biru tua yang beberapa helai rambutnya dikepang memanjang hampir ke kakinya. Selain itu, dia juga memiliki tahi lalat di bawah sudut kiri bibirnya. Seragam Shadow Garden-nya terdiri dari slime bodysuit standar dengan pola emas yang menghiasi dada dan lengannya. Dalam kesehariannya, Gamma biasanya mengenakan gaun gelap panjang yang memperlihatkan dada dan punggungnya. Gamma dipandang sebagai orang yang bermartabat dengan keelokan dan keanggunannya, tetapi pada kenyataanya dia sangat ceroboh yang mempengaruhi penampilannya dalam pertempuran. Meskipun bukan petarung yang kompeten, dia menebusnya dengan menjadi individu yang sangat cerdas dan licik menjadikannya orang yang bertanggung jawab atas sebagian besar operasi Shadow Garden. Setelah ditinggalkan mati oleh masyarakat, dia ditemukan oleh Cid Kagenou.  Dia menghidupkan kembali gadis itu yang menyebabkan Gamma mengembangkan kekaguman yang mendalam atas kekuatan yang dimiliki Cid Kagenou yang dianggap sebagai kehidupan itu sendiri. Menjadi salah satu dari Seven Shades, Gamma telah menghabiskan waktu pelatihan dengan Cid dan gadis-gadis lain, terutama Delta. Gamma kecewa karena dia bukan petarung yang kompeten seperti mereka. Hal tersebut sirna ketika Cid menunjukkan jalan lain melalui kecerdasan. Gamma mendengarkan kebijaksanaan Cid mulai dari ekonomi hingga teknik dan memutuskan untuk mencurahkan dedikasinya untuk mempelajarinya. Gamma mempunyai sifat alami yaitu kecerdasannya. Hal ini membuat dia sangat kompeten dalam segala bidang, menggali pengetahuan dari lawan-lawannya, dan merencanakan strategi sebelumnya. Selain dari kehebatan militer, dia mahir dalam berwirausaha dengan pendirian Mitsugoshi Company. Dia menerapkan ekonomi fundamental yang dia pelajari dari Cid ke bisnisnya seperti sistem perbankan yang menjadi popular di kalangan masyarakat. Karena kurang keterampilan atau kemampuan bertarung, namun hal tersebut diimbangi oleh kecepatan yang luar biasa dan banyaknya kekuatan magis. Namun hal ini tidak terlalu membantunya karena sifat kecanggungannya.`,
      bentuk: "url(img/gamma.png)",
      lebar: "7rem",
      layar: "4rem",
    },
    {
      gambar: "img/eta.png",
      teks: `<mark>Eta</mark><br /> (イータ, Īta) (Ήτα) adalah anggota awal kedelapan dari Shadow Garden dan kursi ketujuh dari Seven Shadows. Sebagai kepala teknisi Shadow Garden, dia telah menciptakan banyak teknologi modern melalui Shadow Wisdom-ocehan Cid tentang inovasi Bumi-yang mempercepat Revolusi Industri Dunia Lain. Identitas publiknya adalah Eta Lloyd Wright, seorang inovator yang sangat dihormati yang memenangkan Arsitek Tahun Ini untuk department store Mitsugoshi. Eta adalah peri perempuan dengan rambut ungu panjang dan poni tak terurus di atas mata ungu yang sayu. Ia sering kali tampil lusuh, akibat dari aktivitasnya yang malas. Jas lab putih pudar di atas pakaian slime yang ditata dengan pola gaun berlipit dengan rambut hitam tipis merupakan pakaian Eta yang biasa dikenakan untuk bekerja dan tidur. Di luar pakaian kerjanya, Eta menata bodysuit slime seperti gaun berpotongan ganda, berpotongan di paha atas dan dikenakan di atas bodysuit yang ringan. Lengan baju yang kebesaran dan ujung yang panjang meruncing ke tepi yang tidak rata membuat jaket longgar yang menyertainya tampak seperti jubah. Berbagai hiasan dan hiasan kecil menghiasi jaket. Sabuk longgar menjuntai di bagian belakang mantelnya, sehingga tampak seperti ekor. Eta memiliki garter di setiap kakinya untuk stoking gelap dan dua ikat pinggang dekoratif di sekitar pahanya. Posisinya berubah berdasarkan adaptasinya-kiri dalam novel ringan dan kanan dalam anime. Celana panjang hitam yang sederhana menutupi kakinya dalam anime. Celana panjang itu memiliki sirip berpaku di sepanjang punggung, dari lutut, hingga ke belakang betisnya, dan berakhir di pergelangan kaki. Alas kaki Eta dalam novel ringan adalah sepatu hak tinggi, sementara ia mengenakan sepatu hak wedges dalam anime. Sepotong hiasan emas di sekitar bagian depan sepatu hadir dalam kedua adaptasi. Eta menunjukkan kelesuan dan apatis, berbicara dengan orang lain dengan lambat dan bergerak lamban. Alasan keberadaan Eta adalah mengejar dan mengembangkan Kebijaksanaan Bayangan. Pengabdiannya yang gila telah membantu kemajuan Taman Bayangan, tetapi sering kali terwujud melalui pembangkangan kecil-kecilan atau eksperimen yang tidak sah. Kejenakaan seperti itu dapat mengganggu efisiensi administratif atau membahayakan kesejahteraan fisik orang lain. Ancaman pengurangan alokasi anggaran memodulasi eksperimen-eksperimen yang meragukan secara etis dan perilaku memberontak Eta.`,
      bentuk: "url(img/eta.png)",
      lebar: "9rem",
      layar: "6rem",
    },
    {
      gambar: "img/epsilon.png",
      teks: `<mark>Epsilon</mark><br /> (イプシロン, Ipushiron) adalah anggota kelima dari Shadow Garden. Karena kecemburuannya karena memiliki dada yang rata, dia memanipulasi slime bodysuit-nya setiap tahun untuk perlahan-lahan meningkatkan massa dadanya, dan akhirnya dia mengembangkan dada yang besar tetapi palsu. Sebagai konsekuensinya, dia mengembangkan kontrol sihir ekstrim yang memberinya gelar The Precision. Epsilon adalah Elf muda dengan postur tubuh yang tinggi serta wajah yang cantik dan halus. Dia memiliki rambut panjang berwarna biru muda yang diikat menjadi kuncir. Warna matanya lebih gelap dari warna rambutnya. Epsilon memiliki tubuh yang seksi yang akan membuat wanita manapun iri. Namun sebenarnya, dia memiliki tubuh yang ramping dan mungil. Sebagai anggota Shadow Garden dia memakai slime bodysuit berwarna gelap dengan pola yang khas pada bagian dadanya. Terdapat hiasan berwarna emas di bagian lengan dan bahunya, serta aksesoris safir berwarna ungu dibagian lengan, bahu, dan perutnya. Dia memakai syal panjang berwarna keunguan dengan aksesoris emas dan safir ungu dibagian ujungnya. Dan terkadang dia memakai kacamata berwarna gelap untuk menutupi identitas aslinya. Epsilon adalah gadis sombong yang lahir dari keluarga bangsawan. Setelah pengasingannya dia kehilangan perhatian dan hanya ingin balas dendam terhadap orang-orang yang pernah dia percayai. Hal itu semua berubah ketika dia bertemu dengan Cid Kagenou yang memberinya tujuan baru dalam kehidupannya dan dia segera jatuh cinta padanya. Hal itu menunjukkan bahwa dia setidaknya mempertahankan harga dirinya jika ada yang membuktikan nilai cintanya kepada Cid Kagenou. Kebanggaan ini juga membuatnya sangat sadar akan tubuhnya, merasa akan sulit untuk merayu tuannya. Karena itu mengapa dia menggunakan slime bodysuit-nya dalam jangka waktu yang lebih lama daripada anggota manapun di Shadow Garden. Epsilon adalah putri dari keluarga bangsawan Elf. Dia dipuji oleh banyak orang karena kecantikan, kecerdasan, dan keterampilan seni bela dirinya. Kemudian, hidupnya berubah secara drastis ketika dia ditemukan oleh keluarganya memiliki kerasukan iblis dan teman-teman terdekatnya tidak mengakuinya dan dia terpaksa melarikan diri dari pemburuan oleh orang-orang yang pernah dia percayai. Dia merangkak mendaki jalan setapak gunung tetapi Kerasukan Iblis pada dirinya mulai berpengaruh pada tubuhnya. Tiba-tiba, dia diselamatkan dari kematian oleh Cid.`,
      bentuk: "url(img/epsilon.png)",
      lebar: "9rem",
      layar: "6rem",
    },
    {
      gambar: "img/zeta.png",
      teks: `<mark>Zeta</mark><br /> (ゼータ, Zēta) (Ζήτα) sebelumnya dikenal sebagai Lilim(リリム, Ririmu) adalah anggota awal ketujuh dari Shadow Garden dan kursi keenam dari Seven Shadows, serta keturunan dari "Therianthrope Hero" Lili. Sebagai kepala eksplorasi dan spionase, Zeta telah mendirikan sebuah faksi rahasia karena perbedaan pendapat dengan arahan organisasi di bawah Alpha . Ambisinya adalah untuk membangkitkan Diablos untuk menjadikan Shadow sebagai dewa abadi. Zeta adalah Therianthrope perempuan dari Klan Macan Emas yang memiliki rambut pirang, telinga kucing besar, mata ungu, dan ekor panjang. Zeta digambarkan sebagai Therianthrope yang sangat cantik dengan ekor yang indah dan telinga berwarna emas, dan dia bahkan dianggap sebagai kecantikan yang tak tertandingi bahkan di antara ras Therianthrope. Dia mengenakan Slime Bodysuit yang biasa dengan jubah besar yang menutupi bahu kirinya dalam novel ringan, sementara desain anime-nya tidak mengenakan jubah sejauh ini. Jaket bergaya menutupi lengan dan tubuh bagian atasnya dan terbuka di bawah tulang dada, tempat area yang memperlihatkan belahan dadanya muncul. Jaketnya memiliki panjang bagian depan pendek yang berakhir di sekitar bagian tulang rusuknya sementara bagian belakangnya berlanjut hingga betisnya, dengan aksen bulu tebal di kerah dan garis pinggang, dan bagian kulit yang terbuka di sepanjang pinggul yang membentang ke daerah punggung. Dia juga memiliki legging asimetris, dengan dua cincin emas padat yang melingkari tulang paha kanannya sementara tiga sabuk paralel melingkari tulang paha kirinya. Dalam novel ringan setelannya memiliki manset celana berenda tepat sebelum tumitnya. Dalam anime dan game leggingnya tidak memiliki embel-embel melainkan sepatu bot dengan kerah V dan ujung manset di atas sepatu hak pendek dengan lapisan emas sederhana di atas metatarsal. Saat menjelajahi dunia, Zeta berpakaian sesuai dengan lokasi yang ditujunya, terutama dalam anime. Untuk hutan saat menyelidiki piramida, ia mengenakan celana pendek khaki standar dan jaket dengan sepatu bot penjelajah. Contoh lain adalah saat ia berada di tundra bersalju di tengah penguin ia mengenakan pakaian musim dingin yang tebal. Saat menaiki perahu nelayan di laut, Zeta terlihat mengenakan pakaian pelaut yang lucu mirip dengan seragam siswi sekolah, tetapi penampilan ini lebih merupakan mode pribadi daripada persyaratan lokasi. Zeta cerdas dan berkepala dingin.`,
      bentuk: "url(img/zeta.png)",
      lebar: "8rem",
      layar: "5rem",
    },
    {
      gambar: "img/delta.png",
      teks: `<mark>Delta</mark><br /> (デルタ, Deruta) adalah anggota Shadow Garden, menjadi yang keempat dari Seven Shades yang bergabung dengan organisasi setelah kerasukan iblis yang disembuhkan oleh tuannya Shadow. Sebagai orang yang paling berbakat secara fisik dari anggota Seven Shades, Delta juga orang yang paling destruktif dan brutal karena kurangnya rasa dan kontrol diri. Delta adalah seorang gadis yang cantik dengan rambut panjang berwarna hitam dan bermata ungu. Dia seorang ras Beastmen sehingga mempunyai ciri fisik alami dengan telinga anjing yang besar dan ekor yang lebat. Dia memiliki postur tubuh yang ramping serta dada yang agak besar. Dalam kesehariannya, dia memakai setelan gelap dengan baju lengan panjang yang berbulu di sekitar lehernya dan terbuka dibagian perutnya, sepasang sarung tangan, celana pendek yang dikombinasikan dengan stoking, serta sepasang sepatu. Ketika bertugas dalam Shadow Garden, dia memakai slime bodysuit berwarna gelap dengan hiasan perunggu dibagian bahu, perut, dan paha. Setelan tersebut terbuka dibagian perutnya dan memakai aksesoris bulu disekitar lehernya. Terkadang dia memakai kacamata untuk melindungi identitas aslinya. Sama seperti kepribadian umum dari ras Beastmen manapun, Delta sering digambarkan sebagai seorang yang keras kepala. Delta sangat mencintai tuannya, bahkan sampai memeluknya di setiap kesempatan yang mereka temui. Dia bahkan tidak keberatan nikah dengannya dan membaginya dengan sesama gadis di Shadow Garden. Adapun interaksinya dengan Gamma, keduanya memiliki persaingan sejak mereka masih anak-anak tetapi mereka tetap peduli satu sama lain. Sebagai anggota Shadow Garden, Delta suka berkelahi. Dia telah terbukti tanpa ampun terhadap musuh-musuhnya, tidak meninggalkan satupun dari mereka untuk hidup. Hal ini membuatnya menjadi berbahaya ketika dia berlebihan dalam serangannya yang dapat membuat bingung tuannya dan rekan-rekannya. Sifat ini berasal dari hidupnya sebagai Beastmen yang akan mengikuti bentuk kehidupan terkuat yang menganggap mereka sebagai pemimpinnya. Lalu, mengapa dia tidak ragu membunuh kakanya yang dia anggap lemah. Meskipun tersirat dia melakukannya sebagian untuk balas dendam. Delta dulunya adalah seorang gadis bernama Sarah yang diakui sebagai putri terkuat dari kepala sukunya. Karena ayahnya memiliki sekitar dua puluh selir, dia memiliki lebih dari ratusan saudara tiri. Jika dia tidak dilahirkan sebagai perempuan.`,
      bentuk: "url(img/delta.png)",
      lebar: "11.3rem",
      layar: "8rem",
    },
  ];
  let bilang = 0;

  function setCustomProperties() {
    document.documentElement.style.setProperty(
      "--max-width-default",
      karakter[bilang].lebar
    );
    document.documentElement.style.setProperty(
      "--max-width-media-query",
      karakter[bilang].layar
    );
  }

  function ganti(j) {
    const gmbrKarakter = document.querySelector(".shadow-garden");
    const teksKarakter = document.querySelector("#teks-karakter");

    gmbrKarakter.style.transition = "filter 1s ease, opacity 1s ease";
    gmbrKarakter.style.filter = "brightness(8)";
    gmbrKarakter.style.opacity = 0.5;
    setTimeout(() => {
      gmbrKarakter.src = karakter[j].gambar;
      teksKarakter.innerHTML = karakter[j].teks;
      gmbrKarakter.style.shapeOutside = karakter[j].bentuk;
      setCustomProperties();

      gmbrKarakter.style.transition = "filter 1s ease, opacity 1s ease";
      gmbrKarakter.style.filter = "brightness(1)";
      gmbrKarakter.style.opacity = 1;
    }, 500);
  }

  function gantiCr() {
    bilang = (bilang + 1) % karakter.length;
    ganti(bilang);
  }

  setCustomProperties();
  ganti(bilang);

  window.gantiCr = gantiCr;
})();

// galeri
const items = document.querySelectorAll(".item");
const displayElement = document.getElementById("displayElement");
let currentIndex = 5; // Mulai dari item ke-0 (index 0)

function updateGallery() {
  items.forEach((item, index) => {
    const position = (index - currentIndex + items.length) % items.length;

    if (position === 0) {
      item.className = "item item-1";
    } else if (position === 1) {
      item.className = "item item-2";
    } else if (position === 2) {
      item.className = "item item-3";
    } else if (position === 3) {
      item.className = "item item-4";
    } else if (position === 4) {
      item.className = "item item-5";
    } else if (position === 5) {
      item.className = "item item-6";
    } else if (position === 6) {
      item.className = "item item-7";
    } else if (position === 7) {
      item.className = "item item-8";
    } else if (position === 8) {
      item.className = "item item-9";
    }
  });

  updateDisplayElement();
}

function updateDisplayElement() {
  const currentItem = document.querySelector(".item-5");
  displayElement.src = currentItem.src;

  // Hapus animasi sebelumnya
  displayElement.classList.remove("popUp");

  // Tambahkan kembali untuk memicu animasi
  setTimeout(() => {
    displayElement.classList.add("popUp");
  }, 0);
}

function sebelum() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
  updateGallery();
}

function sesudah() {
  currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
  updateGallery();
}

updateGallery();
// Dandy tr
