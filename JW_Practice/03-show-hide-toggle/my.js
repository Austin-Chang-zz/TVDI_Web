// $(function(){

//     $("#AAA").click(function(){
//         $("#PP").show();
//     })

//     $("#BBB").click(function(){
//         $("#PP").hide();
//     })

//     $("#CCC").click(function(){
//         $("#PP").toggle();
//     })



// })

$(function(){

    $("#AAA").click(function(){
        $("#PP").fadeIn(800);
    })

    $("#BBB").click(function(){
        $("#PP").fadeOut(800);
    })

    $("#CCC").click(function(){
        $("#PP").fadeToggle(800);
    })



})

$(function(){

    $("#AAA").click(function(){
        $("#PP").fadeTo(500,1);
    })

    $("#BBB").click(function(){
        $("#PP").fadeTo(500,0);
    })

    $("#CCC").click(function(){
        $("#PP").fadeToggle();
    })
    $("#DDD").click(function(){
        $("#PP").fadeTo(500,0.5);
    })


})