let cevap_btn1 = document.getElementById('cevap_btn1');
let cevap_btn2 = document.getElementById('cevap_btn2');
let cevap_btn3 = document.getElementById('cevap_btn3');
let cevap_btn4 = document.getElementById('cevap_btn4');
let cevap_btn5 = document.getElementById('cevap_btn5');
let buton = document.getElementById('basla_btn');
let baslangıc_resmi = document.getElementById('resim');
let metin_panel = document.getElementById('metin_panel');
let soru_panel= document.getElementById('soru_panel');
let sorular_text = document.getElementById('sorular');
let cevapText = document.getElementById('cevapText');
let sayıcı = document.getElementById('sayıcı');
let kacinci_soru = document.getElementById('soru_sayisi');
let dogruSoru = document.getElementById('dogruSoru');
let tekrar_btn = document.getElementById('tekrar_btn');


let sorular_resim =['ulucami.jpg', 'kongre.jpg', 'kangal.jpg', 'kızılırmak.jpg', 'kara.jpg', 'bitti.png'];
let sorularYazi=[
    "SORU #1 <br> <br> Yukarıdaki yapının adı nedir? ",
    "SORU #2 <br> <br> 4 Eylül 1919'da ATATÜRK tarafından yapılan sivas kongresine ev sahipliği yapmış olan kongre binası kaç yılında yapılmıştır?",
    "SORU #3 <br> <br> Fotoğrafta görmüş olduğunuz köpeğin cinsi nedir?",
    "SORU #4 <br> <br> Sivas'ta doğup tam 9 ilden geçip Samsundan karadenize dökülen nehir hangisidir?",
    "SORU #5 <br> <br> Fotoğraftaki dizeler hangi ozana aittir?",
];


let buton1_cevap =['SUSAMIŞLAR KONAĞI','1881','LABRADOR','CEYHAN NEHRİ','KUL NESİMİ'];
let buton2_cevap =['ULU CAMİİ','1910','ÇİN ASLANI','DİCLE NEHRİ','KARACAOĞLAN'];
let buton3_cevap =['GÖK MEDRESE','1915','PİTBULL','KIZILIRMAK','YUNUS EMRE'];
let buton4_cevap =['ŞİFAİYE MEDRESESİ','1982','KANGAL','YEŞİLIRMAK','AŞIK VEYSEL'];
let buton5_cevap =[' ',' ',' ',' SEYHAN NEHRİ','NASRETTİN HOCA'];

let dogru_cevaplar =['ULU CAMİİ','1892','KANGAL','KIZILIRMAK','KARACAOĞLAN'];



buton.addEventListener('click', function(){
    
    init();
    
});


function init( ){
    
    baslangıc_resmi.remove();
    buton.style.display='none';
    sorular_text.remove();
    cevapText.style.display='inline';
    cevapText.innerHTML='Cevap nedir?';
    cevap_btn1.style.display='inline';
    cevap_btn2.style.display='inline';
    cevap_btn3.style.display='inline';
    cevap_btn4.style.display='inline';
    if(soruSayisi>2){
        cevap_btn5.style.display='inline';
    }
    

    metin_panel.lastChild.remove();
    kacinci_soru.innerHTML=soruSayisi+1;
    sorular_yazi( );
    sorular_gorsel( );
    cevap_yerlestir( );
    clearInterval(zaman);
    second=10;
    sayac();
}




function sorular_yazi( ){
    metin_panel.setAttribute('id','metin_panel2');
    let yazi = document.createElement('p');
    yazi.setAttribute('id','sorular')
    yazi.innerHTML=sorularYazi[soruSayisi];
    metin_panel.appendChild(yazi);
}

function sorular_gorsel( ){ 
    let ımg = document.createElement('img');
    ımg.setAttribute('src', sorular_resim[soruSayisi]);
    ımg.setAttribute('id','resim')
    soru_panel.appendChild(ımg);
}

function cevap_yerlestir( ){
    cevap_btn1.setAttribute('value',buton1_cevap[soruSayisi ]);
    cevap_btn2.setAttribute('value',buton2_cevap[soruSayisi ]);
    cevap_btn3.setAttribute('value',buton3_cevap[soruSayisi ]);
    cevap_btn4.setAttribute('value',buton4_cevap[soruSayisi ]);
    cevap_btn5.setAttribute('value',buton5_cevap[soruSayisi ]);
}



function sayac(){   
    zaman= setInterval(() => {
        sayıcı.innerHTML=second;
        second=second-1;
        zaman_kontrol();
    }, 1000);
}

function zaman_kontrol(){
    if(second<0){
        clearInterval(zaman);
        dogru_cevap();
        butonListener();
    }
}


var soruSayisi = 0;
let buton_degeri='';
let buton_sirasi;
let second;
let zaman;
dogru_sayisi=0;


cevap_btn1.addEventListener('click', function(){
    buton_degeri=cevap_btn1.getAttribute('value');
    buton_sirasi=1;
    butonListener();
    cevap_kontrol(buton_degeri,buton_sirasi );
   
});
cevap_btn2.addEventListener('click', function(){
    buton_degeri=cevap_btn2.getAttribute('value');
    buton_sirasi=2;
    butonListener( ); 
    cevap_kontrol(buton_degeri,buton_sirasi );
 });
 cevap_btn3.addEventListener('click', function(){
    buton_degeri=cevap_btn3.getAttribute('value');
    buton_sirasi=3;
    butonListener( );
    cevap_kontrol(buton_degeri,buton_sirasi );
 });
 cevap_btn4.addEventListener('click', function(){
    buton_degeri=cevap_btn4.getAttribute('value');
    buton_sirasi=4;
    butonListener( ); 
    cevap_kontrol(buton_degeri,buton_sirasi );
 });
 cevap_btn5.addEventListener('click', function(){
    buton_degeri=cevap_btn5.getAttribute('value');
    buton_sirasi=5;
    butonListener( ); 
    cevap_kontrol(buton_degeri,buton_sirasi );
 });




 function butonListener(){

    if(soruSayisi<4){ 
        
        setTimeout(function(){
            soruSayisi++;
            init();
        },1000 );
    }else{
        setTimeout(() => {
            oyun_bitti();
        }, 1000);   
    }
}





function oyun_bitti(){
    let ımg = document.createElement('img');
    ımg.setAttribute('src', sorular_resim[5]);
    ımg.setAttribute('id','resim')
    soru_panel.appendChild(ımg);
    second=0;

    cevapText.innerHTML='OYUN BİTTİ'
    cevap_btn1.style.display='none';
    cevap_btn2.style.display='none';
    cevap_btn3.style.display='none';
    cevap_btn4.style.display='none';
    cevap_btn5.style.display='none';

    metin_panel.lastChild.remove();
    let yazi = document.createElement('p');
    yazi.setAttribute('id','sorular')
    yazi.innerHTML="Toplam puan :"+ dogru_sayisi+"  / 5";
    metin_panel.appendChild(yazi);
    tekrar_btn.style.display='inline';

    tekrar_btn.addEventListener('click', function(){
        soruSayisi=0;
        dogruSoru.innerHTML='0 / ';
        tekrar_btn.style.display='none';
        init();
    });
}





function cevap_kontrol(buton_degeri,buton_sirasi){

    if(dogru_cevaplar[soruSayisi]==buton_degeri){
        
        dogru_sayisi++;
        cevapText.innerHTML='Doğru';
        dogruSoru.innerHTML= dogru_sayisi+"  /";
        switch(buton_sirasi) {
            case 1:
                cevap_btn1.style.background='green';
                setTimeout(function(){
                    cevap_btn1.style.background='white';
                },1000 );
            break;
            case 2:
                cevap_btn2.style.background='green';
                setTimeout(function(){
                    cevap_btn2.style.background='white';
                },1000 );
              break;
            case 3:
                cevap_btn3.style.background='green';
                setTimeout(function(){
                    cevap_btn3.style.background='white';
                },1000 );
              break;
            case 4:
                cevap_btn4.style.background='green';
                setTimeout(function(){
                    cevap_btn4.style.background='white';
                },1000 );
              break;
              case 5:
                cevap_btn5.style.background='green';
                setTimeout(function(){
                    cevap_btn5.style.background='white';
                },1000 );
              break;
            default:
            
        } 
      

    }else{
        cevapText.innerHTML='Yanlış!';
        switch(buton_sirasi) {
            case 1:
                cevap_btn1.style.background='red';
                setTimeout(function(){
                    cevap_btn1.style.background='white';
                },1000 );
            break;
            case 2:
                cevap_btn2.style.background='red';
                setTimeout(function(){
                    cevap_btn2.style.background='white';
                },1000 );
              break;
            case 3:
                cevap_btn3.style.background='red';
                setTimeout(function(){
                    cevap_btn3.style.background='white';
                },1000 );
              break;
            case 4:
                cevap_btn4.style.background='red';
                setTimeout(function(){
                    cevap_btn4.style.background='white';
                },1000 );
              break;
            case 5:
                cevap_btn5.style.background='red';
                setTimeout(function(){
                    cevap_btn5.style.background='white';
                },1000 );
              break;
            default:
        }
       dogru_cevap();
    }

}


function dogru_cevap(){

    if(soruSayisi==0){
        cevap_btn2.style.background='green';
        setTimeout(function(){
            cevap_btn2.style.background='white';
        },1000 );
    }else if(soruSayisi==1){
        cevap_btn4.style.background='green';
            setTimeout(function(){
                cevap_btn4.style.background='white';
            },1000 );
    }else if(soruSayisi==2){
        cevap_btn4.style.background='green';
            setTimeout(function(){
                cevap_btn4.style.background='white';
            },1000 );
    }else if(soruSayisi==3){
        cevap_btn3.style.background='green';
            setTimeout(function(){
                cevap_btn3.style.background='white';
            },1000 );
    }else if(soruSayisi==4){
        cevap_btn2.style.background='green';
            setTimeout(function(){
                cevap_btn2.style.background='white';
            },1000 );
    }

}
