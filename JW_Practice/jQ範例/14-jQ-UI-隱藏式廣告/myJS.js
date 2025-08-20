$(function(){

    $(".main").hover(function(){


        $(this).stop(true,false).animate({top:-200},500,"easeOutBounce")

    },  function(){
        $(this).stop(true,false).animate({top:0},500,"easeOutBounce")

    })










})