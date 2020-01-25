const sounds = ['LAAAME.wav', 'YUP.wav','bighat.wav', 'boing.wav', 'boing1.wav', 'boing2.wav', 'boing3.wav', 'boing5.wav', 'bonerAlert.wav', 'bonerAlert2.wav', 'evilLaugh2.wav', 'fingerBeev1.wav', 'greatestHits.wav', 'greatestHits2.wav', 'loserrrr.wav', 'ledet1.wav', 'ledet2.wav', 'ledet3.wav', 'ledet4.wav', 'ledet5.wav', 'ledet6.wav', 'naah.wav', 'notaFan.wav', 'radio.wav', 'sadTrumpet.wav', 'sadTrumpet2.wav', 'stop.wav', 'uhoh.wav', 'uhoh2.wav'];

const soundsLabel = [];

// var a = document.getElementById("LAAAME");
// var YUP = document.getElementById("YUP");
// var bighat = document.getElementById("bighat");
// var boing = document.getElementById("boing");
// var boing1 = document.getElementById("boing1");
// var boing2 = document.getElementById("boing2");
// var boing3 = document.getElementById("boing3");
// var boing5 = document.getElementById("boing5");
// var bonerAlert = document.getElementById("bonerAlert");
// var evilLaugh = document.getElementById("evilLaugh");
// var evilLaugh2 = document.getElementById("evilLaugh2");
// var fingerBeev1 = document.getElementById("fingerBeev1");
// var greatestHits = document.getElementById("greatestHits");
// var greatestHits2 = document.getElementById("greatestHits2");
// var loserrrr = document.getElementById("loserrrr");
// var ledet1 = document.getElementById("ledet1");
// var ledet2 = document.getElementById("ledet2");
// var ledet3 = document.getElementById("ledet3");
// var ledet4 = document.getElementById("ledet4");
// var ledet5 = document.getElementById("ledet5");
// var ledet6 = document.getElementById("ledet6");
// var naah = document.getElementById("naah");
// var notaFan = document.getElementById("notaFan");
// var radio = document.getElementById("radio");
// var sadTrumpet = document.getElementById("sadTrumpet");
// var sadTrumpet2 = document.getElementById("sadTrumpet2");
// var stop = document.getElementById("stop");
// var uhoh = document.getElementById("uhoh");
// var uhoh2 = document.getElementById("uhoh2");

var x = document.getElementById("b");
function play32() { x.play(); };

// var a = document.getElementById("LAAAME");
// function play0() { a.play(); };

function play1() { YUP.play(); }; 
function play2() { bighat.play(); };      
function play3() { boing.play(); }; 
function play4() { boing1.play(); }; 
function play5() { boing2.play(); }; 
function play6() { boing3.play(); };
function play7() { boing5.play(); };
function play8() { bonerAlert.play(); }; 
function play9() { bonerAlert2.play(); };      
function play10() { evilLaugh2.play(); }; 
function play11() { fingerBeev1.play(); }; 
function play12() { greatestHits.play(); }; 
function play13() { greatestHits2.play(); };
function play14() { loserrrr.play(); };
function play15() { ledet1.play(); }; 
function play16() { ledet2.play(); };      
function play17() { ledet3.play(); }; 
function play18() { ledet4.play(); }; 
function play19() { ledet5.play(); }; 
function play20() { ledet6.play(); };
function play21() { naah.play(); };
function play22() { notaFan.play(); }; 
function play23() { radio.play(); };      
function play24() { sadTrumpet.play(); }; 
function play25() { sadTrumpet2.play(); }; 
// function play26() { stop.play(); }; 
function play27() { uhoh.play(); };
function play28() { uhoh2.play(); };

function go(){
for(var i = 0; i < sounds.length; i++){    

    soundsLabel.push(sounds[i].slice(0, -4));

    $(".main").append(`<button class="buttons" onclick="play`+ i +`()" type="button">` + soundsLabel[i] + `</button>`);

    $(".audio").append(`<audio id="` + sounds[i].slice(0, -4) + `"><source src="./assets/sounds/` + sounds[i] + `" type="audio/wav"></audio>`)        
    
}

// for(var i = 0; i < sounds.length; i++){
//     var soundsLabel[i] = document.getElementById(soundsLabel[i]);  
//     console.log(soundEl);
// }
}

go();

