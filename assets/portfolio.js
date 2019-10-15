$(document).ready(function(){

    /*Hides the content when the browser opens*/ 
    $('#paragraph').hide();
    $('#appLinks').hide();
    $('#form').hide();

    // When the boxes are clicked it displays the content
$('#aboutMe').click(function(){
    $('#paragraph').toggle(1500);
});
$('#projects').click(function(){
    $('#appLinks').toggle(1500);
});

$('#contact').click(function(){
    $('#form').toggle(1500);
});





var linkScroll = $(".scroll");

// When the link is clicked is scrolls to the section
linkScroll.click(function(event){
    event.preventDefault();
    $('body, html').animate({
        scrollTop:$(this.hash).offset().aboutMe
    }, 1000);
});


});

