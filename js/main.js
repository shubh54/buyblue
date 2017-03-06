(function($) {
$(function() {
    $('nav ul li a:not(:only-child)').click(function(e) {
    $(this).siblings('.nav-dropdown').toggle();
    
    $('.nav-dropdown').not($(this).siblings()).hide();
    e.stopPropagation();
    });
    
    $('html').click(function() {
    $('.nav-dropdown').hide();
    });
    
    $('#nav-toggle').click(function() {
    $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
    this.classList.toggle('active');
    });
}); 
})(jQuery);

$(document).ready(function(){
    $('.carousel').slick();
    $('.banner-mini').click(function(e){
        e.preventDefault();
        $('.banner-mini').parent().removeClass('active-banner');
        slideIndex = $('.banner-mini').index(this);
        $('.banner-mini').eq(slideIndex).parent().addClass('active-banner');
        $( '.carousel' ).slick('slickGoTo' ,parseInt(slideIndex) );
    });
    $('.carousel').on('afterChange', function(event, slick, currentSlide){
        $('.banner-mini').parent().removeClass('active-banner');   
        $('.banner-mini').eq(currentSlide).parent().addClass('active-banner');                                    
    });
});