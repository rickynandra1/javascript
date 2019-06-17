$(document).ready(function () {

    $('#slot1').click(function () {
        $('#slot1').addClass('penguin1-reveal');
    });
    $('#slot2').click(function () {
        $('#slot2').addClass('penguin2-reveal');
    });
    $('#slot3').click(function () {
        $('#slot3').addClass('penguin3-reveal');
    });
    $('#slot4').click(function () {
        $('#slot4').addClass('penguin4-reveal');
    });
    $('#slot9').click(function () {
        $('#slot9').addClass('penguin5-reveal');
    });
    $('#slot6').click(function () {
        $('#slot6').addClass('penguin6-reveal');
    });
    $('#slot7').click(function () {
        $('#slot7').addClass('penguin7-reveal');
    });
    $('#slot8').click(function () {
        $('#slot8').addClass('penguin8-reveal');
    });
    $("#slot5").click(function () {
        $('#slot5').addClass('yeti-reveal');
       setTimeout(function () { 
           var penguin_divs = $("#gameholder").children("div");
           shuffle(penguin_divs);
          }, 600);

    });
});
function sound() {
    var s = document.getElementById('yetisound');
    s.currentTime = 0;
    s.play();
    setTimeout(function () {
        if (window.confirm('YAAARRR!!!\n\nReset Game?')) {
    if ($('#slot5').hasClass('yeti-reveal')) {
        $('#slot5').removeClass('yeti-reveal');
            }
    if ($('#slot1').hasClass('penguin1-reveal')) {
        $('#slot1').removeClass('penguin1-reveal');
            }
    if ($('#slot2').hasClass('penguin2-reveal')) {
        $('#slot2').removeClass('penguin2-reveal');
            }
    if ($('#slot3').hasClass('penguin3-reveal')) {
        $('#slot3').removeClass('penguin3-reveal');
            }
    if ($('#slot4').hasClass('penguin4-reveal')) {
        $('#slot4').removeClass('penguin4-reveal');
            }
    if ($('#slot9').hasClass('penguin5-reveal')) {
        $('#slot9').removeClass('penguin5-reveal');
            }
    if ($('#slot6').hasClass('penguin6-reveal')) {
        $('#slot6').removeClass('penguin6-reveal');
            }
    if ($('#slot7').hasClass('penguin7-reveal')) {
        $('#slot7').removeClass('penguin7-reveal');
            }
     if ($('#slot8').hasClass('penguin8-reveal')) {
         $('#slot8').removeClass('penguin8-reveal');
            }
        }
    }, 500);
}
function jump() {
    var p = document.getElementById('jumpsound');
    p.currentTime = 0;
    p.play();
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
 while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
    
  for(i=0;i<array.length;i++){
            $('#gameholder').append($(array[i]));
        }
}
