"use strict";
$(document).ready(function () {
    renderImages();    
    configureRenderMoreText();
    renderImages_Contribution("Slider");
    renderImages_Before();
    renderImages_Transition();
    renderImages_After();
    renderImages_Events1();
    renderImages_Events2();
    renderImages_Events3();
    
});
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

renderImages_Contribution = function (columnNumber) {
    $.get('img/ImageList_Before.txt', function (data) {
        var lines = data.split('\n');
       // var col1 = 30;
      //  var col2 = 80;
       // var col3 = 172;
        var max = lines.length-1;
        var initial;
        var gridFlag = 1;
        var limit = 0;
        var slideHTML = '<div>';
        
       // var portfolioGalleryDiv = "<div id="gallerydiv"> </div>;
        
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
       
        for (var iCount = initial; iCount <max; iCount++) {
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
            
            //gridFlag +=1;
            //if(gridFlag%9 === 0){
                //gridFlag = 1;
                //$("#dilseGallery"+columnNumber).append(portfolioGalleryDiv);
                //portfolioGalleryDiv = "<div class='portfolioGal'> portfolioGallery.replace("{0}", item).replace("{1}", item) </div>";
            //}
            
            //$("#gallerydiv").append(portfolioGallery.replace("{0}", item).replace("{1}", item));            
            if(columnNumber === 0)
            {
                columnNumber = "";
            }
            
            
           if(limit === 9){
                limit = 0;
                slideHTML = slideHTML + '</div>';
                $("#dilseGallery"+columnNumber).append(slideHTML);
                slideHTML = '<div>';
                
            }
            limit = limit + 1;
            slideHTML = slideHTML + portfolioGallery.replace("{0}", item).replace("{1}", item);  
            if(iCount === max){
                slideHTML = slideHTML + '</div>';
            }
            
           // $("#dilseGallery"+columnNumber).append(slideHTML);
            //$("#dilseGallery"+columnNumber).append(portfolioGallery.replace("{0}", item).replace("{1}", item));
            
        }
        $.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js', function () {
            $('#portfolio .img-responsive').lazyload({
            });
        });
    });

},


renderImages = function () {
    $.get('img/ImageList.txt', function (data) {
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
            
            $("#dilseGallery").append(portfolioGallery.replace("{0}", item).replace("{1}", item));
        }
        $.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js', function () {
            $('#portfolio .img-responsive').lazyload({
            });
        });
    });

},

renderImages_Before = function () {
    $.get('img/ImageList_Before.txt', function (data) {
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
            
            $("#dilseGallery1").append(portfolioGallery.replace("{0}", item).replace("{1}", item));
        }
        $.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js', function () {
            $('#portfolio .img-responsive').lazyload({
            });
        });
    });

},

renderImages_Transition = function () {
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
    $.get('img/ImageList.txt', function (data) {
        var lines = data.split('\n');
        for (var iCount = 150; iCount <lines.length-1; iCount++) {
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
    $.get('img/ImageList.txt', function (data) {
        var lines = data.split('\n');
        for (var iCount = 150; iCount <lines.length-1; iCount++) {
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
    $.get('img/ImageList.txt', function (data) {
        var lines = data.split('\n');
        for (var iCount = 150; iCount <lines.length-1; iCount++) {
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

},

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
