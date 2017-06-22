$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >0){
            $(".header").addClass("acortar");
            $("#h2-headerr").removeClass("text-header");
            $("#h2-header").addClass("text-no-header");
        }else{
            $(".header").removeClass("acortar");
            $("#h2-header").addClass("text-header");
            $("#h2-header").removeClass("text-no-header");
   }
    })
})