﻿"use strict";
$(document).ready(function () {
    renderImages();
    configureRenderMoreText();
});
var sendMail = function () {
    var contributionType = [];
    $("input:checkbox[name=type]:checked").each(function(){
        contributionType.push($(this).val());
    });
    var link = 'mailto:test@test.com?subject=Dilse Foundation: association request'
                   + '&body=First Name: ' + $("input[name='first_name']").val()
                   + '%0ALast Name: ' + $("input[name='last_name']").val()
                   + '%0AEmail: ' + $("input[name='email']").val()
                   + '%0APhone: ' + $("input[name='phone']").val()
                   + '%0AAddress: ' + $("input[name='address']").val()
                   + '%0AMessage: ' + $("textarea[name='comment']").val()
                   + '%0AAssociation type:%0A' + contributionType.join("%0A");
    window.location.href = link;

},
renderImages = function () {
    $.get('img/ImageList.txt', function (data) {
        var lines = data.split('\n');
        for (var iCount = 0; iCount < lines.length; iCount++) {
            var item = 'img/DilSePhotoshoot/' + lines[iCount];
            var portfolioGallery = '<div class="col-lg-4 col-sm-6">'
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
configureRenderMoreText = function(){
    var showChar = 300;
    var ellipsestext = "...";
    var moretext = "more";
    var lesstext = "less";
    $('.more').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar-1, content.length - showChar);

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
