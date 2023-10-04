$(document).ready(function(){
$('#d1').html("Workshop of basics of web designing");
$('#b1').click(function(){
    $('#d1').append("Button clicked");
});
$('#b2').click(function(){
    $('#d1').toggle();
});
});