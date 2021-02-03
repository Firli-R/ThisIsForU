
function hai(){
    let tanya = 'apa kabar kamu?';
    document.getElementById('pertanyaan').innerHTML = tanya;
    document.getElementById('tanya1').innerHTML = '<button class="btn" onclick="klik1();"> baik sayang  </button>';
    document.getElementById('tanya2').innerHTML = '<button class="btn" onclick="klik2();"> tidak baik </button>';
}

function klik2(){
    let tanya = 'kok tidak baik :( kamu kenapa?tapi aku pengennya kamu baik baik aja ya';
    document.getElementById('pertanyaan').innerHTML = tanya;
    document.getElementById('tanya1').innerHTML = '<button class="btn" onclick="klik1();">iya sayang </button>';
    document.getElementById('tanya2').innerHTML = '';
}

function klik1(){
    let tanya = 'loh kok udh manggil sayang-sayang aja :),emgnya kamu sayang sama aku?';
    document.getElementById('pertanyaan').innerHTML = tanya;
    document.getElementById('tanya1').innerHTML = '<button class="btn" onclick="pencet2();"> engga lu burik  </button>';
    document.getElementById('tanya2').innerHTML = '<button class="btn" onclick="pencet1();"> sayang pake banget</button>';
    
}

function pencet1(){
    let tanya = 'aww ayaangg , ayang kangen ga ama aku?';
    document.getElementById('pertanyaan').innerHTML = tanya;
    document.getElementById('tanya1').innerHTML = '<button class="btn" onclick="kangen1();">iya kangen bgt ayang</button>';
    document.getElementById('tanya2').innerHTML = '<button class="btn" onclick="kangen2();">engga biasa aja yeu</button>';
}

function pencet2(){
    let tanya = 'yeuuu dasar babi,udhlah sayang aja ya';
    document.getElementById('pertanyaan').innerHTML = tanya;
    document.getElementById('tanya1').innerHTML = '<button class="btn" onclick="pencet1();">iyaa sayanggg pake bangett nget</button>';
    document.getElementById('tanya2').innerHTML = '';
}

function kangen1(){
    let tanya = 'aww sama aku juga kangeenn sayang aku,btw ini hari spesial kamu ya?';
    document.getElementById('pertanyaan').innerHTML = tanya;
    document.getElementById('tanya1').innerHTML = '<button class="btn" onclick="teken();">iya sayang</button>';
    document.getElementById('tanya2').innerHTML = '';
}

function kangen2(){
    let tanya = 'Diiih yaudah aku ga lanjutin nih pertanyaannya';
    document.getElementById('pertanyaan').innerHTML = tanya;
    document.getElementById('tanya1').innerHTML = '<button class="btn" onclick="kangen1();">iya kangen,lanjutin ayang</button>';
    document.getElementById('tanya2').innerHTML = '<button class="btn" onclick="lanjut();">yauda gausah</button>';
}

function lanjut(){
    let tanya = 'yeuu sayang udh jauh nih mampus bisanya tombol lanjut';
    document.getElementById('pertanyaan').innerHTML = tanya;
    document.getElementById('tanya1').innerHTML = '<button class="btn" onclick="kangen2();">lanjut</button>';
    document.getElementById('tanya2').innerHTML = '';
}

function teken(){
    let tanya = 'ini juga spesial buat kamu tau dari aku,aku buatnya sulit asal kamu tau,tapi karna ini buat kamu ,sulitnya menjadi bukan apa-apa ,bagi aku yang penting kamu bahagia';
    document.getElementById('pertanyaan').innerHTML = tanya;
    document.getElementById('tanya1').innerHTML = '<button class="btn" onclick="teken1();">utu utu ayang</button>';
    document.getElementById('tanya2').innerHTML = '';
}

function teken1(){
    let tanya = 'ayo tulis nama kamu disini trus pencet lanjut nanti keluar yang spesial';
    document.getElementById('pertanyaan').innerHTML = tanya;
    document.getElementById('tanya1').innerHTML = '<input class="kotak" id="input1" type="text">';
    document.getElementById('tanya3').innerHTML = '<button class="btn">lanjut</button>';
    document.getElementById('text').innerHTML = 'pencet juga lagu ini biar makin dramatis wkwk,nanti tungguin sampe semua teks sama tombolnya nyala ya';
    document.getElementById('tanya2').innerHTML = '<audio src="MarriedLife.mp3" width="200px" controls loop></audio>';
}




