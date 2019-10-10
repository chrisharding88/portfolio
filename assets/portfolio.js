$(document).ready(function(){

 var showcontent = false;

$("#content1").hide();
$("#content2").hide();
$("#content3").hide();


$('.box').click(function() {

 if (showcontent) { 
    showcontent = true;
    $('#content1').show();
    $('#header1').hide();
    $('#content2').show();
    $('#header2').hide();
    $('#content3').show();
    $('#header4').hide();

} else {
    showcontent = false;
        $('#content1').hide();
        $('#header1').show();
        $('#content2').hide();
        $('#header2').show();
        $('#content3').hide();
        $('#header4').show();

}



});










});