$(document).ready(function(){

  $('.pre, .nxt').hide();

  $('.carousel').mouseenter(function(){
    $('.pre, .nxt').fadeIn(600);
  });

  $('.carousel').mouseleave(function(){
    $('.pre, .nxt').fadeOut(300);
  });

  $('.nxt').click(function(){
    var currentSlide = $('.activeSlide');
    var nextSlide = currentSlide.next();

    if(nextSlide.length == 0){
      nextSlide = $('.slide').first();
    }

    currentSlide.fadeOut(600).removeClass('activeSlide');
    nextSlide.fadeIn(600).addClass('activeSlide');

    var currentDot = $('.activeDot');
    var nextDot = currentDot.next();

    if(nextDot.length == 0){
      nextDot = $('.dot').first();
    }

    currentDot.removeClass('activeDot');
    nextDot.addClass('activeDot');

  });

  $('.pre').click(function(){
    var currentSlide = $('.activeSlide');
    var previousSlide = currentSlide.prev();

    if(previousSlide.length == 0){
      previousSlide = $('.slide').last();
    }
    currentSlide.fadeOut(600).removeClass('activeSlide');
    previousSlide.fadeIn(600).addClass('activeSlide');

    var currentDot = $('.activeDot');
    var previousDot = currentDot.prev();

    if(previousDot.length == 0){
      previousDot = $('.dot').last();
    }

    currentDot.removeClass('activeDot');
    previousDot.addClass('activeDot');
  });

  $('.dot1').click(function(){
    $('.activeSlide').fadeOut(600);
    $('.slide').eq(0).fadeIn(600).addClass('activeSlide');

    $('.activeDot').removeClass('activeDot');
    $('.dot').eq(0).addClass('activeDot');
  });

  $('.dot2').click(function(){
    $('.activeSlide').fadeOut(600);
    $('.slide').eq(1).fadeIn(600).addClass('activeSlide');

    $('.activeDot').removeClass('activeDot');
    $('.dot').eq(1).addClass('activeDot');
  });

  $('.dot3').click(function(){
    $('.activeSlide').fadeOut(600);
    $('.slide').eq(2).fadeIn(600).addClass('activeSlide');

    $('.activeDot').removeClass('activeDot');
    $('.dot').eq(2).addClass('activeDot');
  });
});