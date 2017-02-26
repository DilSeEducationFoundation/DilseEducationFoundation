"use strict";
$(document).ready(function () {
    //renderImages();    
    configureRenderMoreText();
    renderImages_Contribution("1", "img/ImageList_Before.txt");
    renderImages_Contribution("2", "img/ImageList_Transition.txt");
    renderImages_Contribution("3", "img/ImageList_After.txt");
    renderImages_Contribution("4", "img/Learning.txt");
    renderImages_Contribution("5", "img/ImageList_Republic.txt");
    renderImages_Contribution("6", "img/ImageList_Independence.txt");
    renderImages_Contribution("7", "img/ImageList_Collector.txt");
    //renderImages_Contribution("8", "img/ImageList_MlaMlc.txt");
    
    renderImages_MlaMlc();
    /*renderImages();*/
    renderImages_Press();
    //renderImages_Before();
    //renderImages_Transition();
    //renderImages_After();
    //renderImages_Events1();
    //renderImages_Events2();
    //renderImages_Events3();
    
});

/*$('.carousel .carousel-control').click(function(event) {
              if (event.stopPropagation) {    // standard
                   event.stopPropagation();
               } else {    // IE6-8
                    event.cancelBubble = true;
               }
          });*/

var sendMail = function () {
    var contributionType = [];
    $("input:checkbox[name=type]:checked").each(function(){
        contributionType.push($(this).val());
    });
    var link = 'mailto:support@dilseeducationfoundation.org?subject=Dilse Foundation: association request'
                   + '&body=First Name: ' + $("input[name='first_name']").val()
                   + '%0ALast Name: ' + $("input[name='last_name']").val()
                   + '%0AEmail: ' + $("input[name='email']").val()
                   + '%0APhone: ' + $("input[name='phone']").val()
                   + '%0AAddress: ' + $("input[name='address']").val()
                   + '%0AMessage: ' + $("textarea[name='comment']").val()
                   + '%0AAssociation type:%0A' + contributionType.join("%0A");
    window.location.href = link;

},

renderImages_Contribution = function (columnNumber, imageURL) {
    $.get(imageURL, function (data) {
        var lines = data.split('\n');      
        var max = lines.length-1;       
        var limit = 0;
        var slideHTML = '<div class="item">';        
        if(columnNumber === 1){
            initial =0;
            max = col1;
        }
        else if(columnNumber === 2){
            initial = col1 +1;
            max = col2;
        }
        else if(columnNumber === 3){
            initial = col2 +1;
            max = col3;
        }
       
        var carouselHTMLChunk = '<div id="myCarousel' + columnNumber +'" class="carousel slide" data-ride="carousel">'+
                                '<ol class="carousel-indicators"> {1}</ol>' +                                
                                '<div id="innerCarousel' + columnNumber +'" class="carousel-inner" role="listbox"></div></div>'; 
            /*'<a class="left carousel-control" href="#myCarousel' + columnNumber +'" role="button" data-slide="prev">      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a>' + 
            '<a class="right carousel-control" href="#myCarousel' + columnNumber +'" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a>' +
            '</div>'; */
        
        var navCount = max%9 === 0 ? max/9 : max/9 + 1 ; 
        navCount = parseInt(navCount,10);
        var listData = '<li data-target="#myCarousel' + columnNumber + '" ></li>';
        for(var value = 0; value < navCount; value++ ){
            if(value === 0){
                listData = '<li data-target="#myCarousel' + columnNumber + '" class="active"></li>';
            } else {
                listData = listData + '<li data-target="#myCarousel' + columnNumber + '" ></li>';
            }
        }
        carouselHTMLChunk = carouselHTMLChunk.replace("{1}", listData);
        
         $("#dilseGallery"+columnNumber).append(carouselHTMLChunk);
        
        for (var iCount = 0; iCount <max; iCount++) {
            var item = 'img/DilSePhotoshoot/' + lines[iCount];
            var portfolioGallery = '<div class="col-sm-4">'
                + '<a href="{0}" class="portfolio-box">'
                   + '<img src="{1}" class="img-responsive" alt="">'
                   + '<div class="portfolio-box-caption">'
                     + '<div class="portfolio-box-caption-content">'
                           + '<div class="project-category text-faded">'
                           + '</div>'
                           + ' <div class="project-name">'
                           + '</div>'
                        + '</div>'
                   + '</div>'
               + ' </a>'
           
            + '</div>';
            
                     
            if(columnNumber === 0)
            {
                columnNumber = "";
            }
            
            
           if(limit === 9){
                limit = 0;
                slideHTML = slideHTML + '</div>';
                $("#innerCarousel" + columnNumber).append(slideHTML);
                slideHTML = '<div class="item">';
                
            }
             if(iCount == 0){
                slideHTML = '<div class="item active">';
             }
            limit = limit + 1;
            slideHTML = slideHTML + portfolioGallery.replace("{0}", item).replace("{1}", item);  
            if(iCount === max-1){
                slideHTML = slideHTML + '</div>';
                $("#innerCarousel" + columnNumber).append(slideHTML);
            }           
        }
        
        
        
        $.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js', function () {
            $('#portfolio .img-responsive').lazyload({
            });
        });
    });

},


renderImages = function () {
    $.get('img/ImageList_Collector.txt', function (data) {
        var lines = data.split('\n');
        for (var iCount = 0; iCount <lines.length-1; iCount++) {
            var item = 'img/DilSePhotoshoot/' + lines[iCount];
            var portfolioGallery = '<div class="col-lg-2 col-sm-6">'
                + '<a href="{0}" class="portfolio-box">'
                   + '<img src="{1}" class="img-responsive" alt="">'
                   + '<div class="portfolio-box-caption">'
                     + '<div class="portfolio-box-caption-content">'
                           + '<div class="project-category text-faded">'
                           + '</div>'
                           + ' <div class="project-name">'
                           + '</div>'
                        + '</div>'
                   + '</div>'
               + ' </a>'
            + '</div>';
            
            $("#dilseGallery7").append(portfolioGallery.replace("{0}", item).replace("{1}", item));
        }
        $.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js', function () {
            $('#portfolio .img-responsive').lazyload({
            });
        });
    });

},

renderImages_Press = function () {
    $.get('img/ImageList_Press.txt', function (data) {
        var lines = data.split('\n');
        for (var iCount = 0; iCount <lines.length-1; iCount++) {
            var item = 'img/Press/' + lines[iCount];
            var portfolioGallery = '<div class="col-sm-4">'
                + '<a href="{0}" class="portfolio-box">'
                   + '<img src="{1}" class="img-responsive" alt="">'
                   + '<div class="portfolio-box-caption">'
                     + '<div class="portfolio-box-caption-content">'
                           + '<div class="project-category text-faded">'
                           + '</div>'
                           + ' <div class="project-name">'
                           + '</div>'
                        + '</div>'
                   + '</div>'
            
               + ' </a>'
             + '</div>';
            
            $("#dilseGallery9").append(portfolioGallery.replace("{0}", item).replace("{1}", item));
        }
        $.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js', function () {
            $('#portfolio .img-responsive').lazyload({
            });
        });
    });

},
    
renderImages_MlaMlc = function () {
    $.get('img/ImageList_MlaMlc.txt', function (data) {
        var lines = data.split('\n');
        for (var iCount = 0; iCount <lines.length-1; iCount++) {
            var item = 'img/DilSePhotoshoot/' + lines[iCount];
            var portfolioGallery = '<div class="col-sm-4">'
                + '<a href="{0}" class="portfolio-box">'
                   + '<img src="{1}" class="img-responsive" alt="">'
                   + '<div class="portfolio-box-caption">'
                     + '<div class="portfolio-box-caption-content">'
                           + '<div class="project-category text-faded">'
                           + '</div>'
                           + ' <div class="project-name">'
                           + '</div>'
                        + '</div>'
                   + '</div>'
            
               + ' </a>'
             + '</div>';
            
            $("#dilseGallery8").append(portfolioGallery.replace("{0}", item).replace("{1}", item));
        }
        $.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js', function () {
            $('#portfolio .img-responsive').lazyload({
            });
        });
    });

},

/*renderImages_Transition = function () {
    $.get('img/ImageList_Transition.txt', function (data) {
        var lines = data.split('\n');
        for (var iCount = 0; iCount <lines.length-1; iCount++) {
            var item = 'img/DilSePhotoshoot/' + lines[iCount];
            var portfolioGallery = '<div class="col-sm-4">'
                + '<a href="{0}" class="portfolio-box">'
                   + '<img src="{1}" class="img-responsive" alt="">'
                   + '<div class="portfolio-box-caption">'
                     + '<div class="portfolio-box-caption-content">'
                           + '<div class="project-category text-faded">'
                           + '</div>'
                           + ' <div class="project-name">'
                           + '</div>'
                        + '</div>'
                   + '</div>'
               + ' </a>'
            + '</div>';
            
            $("#dilseGallery2").append(portfolioGallery.replace("{0}", item).replace("{1}", item));
        }
        $.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js', function () {
            $('#portfolio .img-responsive').lazyload({
            });
        });
    });

},
    
renderImages_After = function () {
    $.get('img/ImageList_After.txt', function (data) {
        var lines = data.split('\n');
        for (var iCount = 0; iCount <lines.length-1; iCount++) {
            var item = 'img/DilSePhotoshoot/' + lines[iCount];
            var portfolioGallery = '<div class="col-sm-4">'
                + '<a href="{0}" class="portfolio-box">'
                   + '<img src="{1}" class="img-responsive" alt="">'
                   + '<div class="portfolio-box-caption">'
                     + '<div class="portfolio-box-caption-content">'
                           + '<div class="project-category text-faded">'
                           + '</div>'
                           + ' <div class="project-name">'
                           + '</div>'
                        + '</div>'
                   + '</div>'
               + ' </a>'
            + '</div>';
            
            $("#dilseGallery3").append(portfolioGallery.replace("{0}", item).replace("{1}", item));
        }
        $.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js', function () {
            $('#portfolio .img-responsive').lazyload({
            });
        });
    });

},
    

renderImages_Events1 = function () {
    $.get('img/Learning.txt', function (data) {
        var lines = data.split('\n');
        for (var iCount = 50; iCount <lines.length-1; iCount++) {
            var item = 'img/DilSePhotoshoot/' + lines[iCount];
            var portfolioGallery = '<div class="col-sm-4">'
                + '<a href="{0}" class="portfolio-box">'
                   + '<img src="{1}" class="img-responsive" alt="">'
                   + '<div class="portfolio-box-caption">'
                     + '<div class="portfolio-box-caption-content">'
                           + '<div class="project-category text-faded">'
                           + '</div>'
                           + ' <div class="project-name">'
                           + '</div>'
                        + '</div>'
                   + '</div>'
               + ' </a>'
            + '</div>';
            
            $("#dilseGallery4").append(portfolioGallery.replace("{0}", item).replace("{1}", item));
        }
        $.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js', function () {
            $('#portfolio .img-responsive').lazyload({
            });
        });
    });

},
    
renderImages_Events2 = function () {
    $.get('img/Republic.txt', function (data) {
        var lines = data.split('\n');
        for (var iCount = 0; iCount <lines.length-1; iCount++) {
            var item = 'img/DilSePhotoshoot/' + lines[iCount];
            var portfolioGallery = '<div class="col-sm-4">'
                + '<a href="{0}" class="portfolio-box">'
                   + '<img src="{1}" class="img-responsive" alt="">'
                   + '<div class="portfolio-box-caption">'
                     + '<div class="portfolio-box-caption-content">'
                           + '<div class="project-category text-faded">'
                           + '</div>'
                           + ' <div class="project-name">'
                           + '</div>'
                        + '</div>'
                   + '</div>'
               + ' </a>'
            + '</div>';
            
            $("#dilseGallery5").append(portfolioGallery.replace("{0}", item).replace("{1}", item));
        }
        $.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js', function () {
            $('#portfolio .img-responsive').lazyload({
            });
        });
    });

},

renderImages_Events3 = function () {
    $.get('img/Republic.txt', function (data) {
        var lines = data.split('\n');
        for (var iCount = 45; iCount <lines.length-1; iCount++) {
            var item = 'img/DilSePhotoshoot/' + lines[iCount];
            var portfolioGallery = '<div class="col-sm-4">'
                + '<a href="{0}" class="portfolio-box">'
                   + '<img src="{1}" class="img-responsive" alt="">'
                   + '<div class="portfolio-box-caption">'
                     + '<div class="portfolio-box-caption-content">'
                           + '<div class="project-category text-faded">'
                           + '</div>'
                           + ' <div class="project-name">'
                           + '</div>'
                        + '</div>'
                   + '</div>'
               + ' </a>'
            + '</div>';
            
            $("#dilseGallery6").append(portfolioGallery.replace("{0}", item).replace("{1}", item));
        }
        $.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js', function () {
            $('#portfolio .img-responsive').lazyload({
            });
        });
    });

},*/

configureRenderMoreText = function(){
    var showChar = 300;
    var ellipsestext = "...";
    var moretext = "more";
    var lesstext = "less";
    $('.more').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar+1);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
}
