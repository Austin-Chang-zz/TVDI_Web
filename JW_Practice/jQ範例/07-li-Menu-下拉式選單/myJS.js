// $(function()){

//     $("#SUB1").show();
// }, function(){
//     $("#SUB1").hide();
// }


$(function(){

    $("#MENU1").hover(function(){
        $("#SUB1").stop(true,true).slideDown();   
}, function(){
    $("#SUB1").stop(true,true).slideUp();  
})
})


