$(document).ready(function(){  
    $("#thumb_1").click(function(){
        $("#zoom_01").attr("src","img/image-pdp-desktop.png");
        $('.zoomWindowContainer div').stop().css("background-image","url(img/large/image-pdp-desktop.jpg)");      
    });
    $("#thumb_2").click(function(){
        $("#zoom_01").attr("src","img/image-pdp-desktop-2.png");
        $('.zoomWindowContainer div').stop().css("background-image","url(img/large/image-pdp-desktop-2.jpg)");    
    });
    $("#thumb_3").click(function(){
        $("#zoom_01").attr("src","img/image-pdp-desktop-3.png");
        $('.zoomWindowContainer div').stop().css("background-image","url(img/large/image-pdp-desktop-3.jpg)");      
    });
});
