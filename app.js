var main = function () {
    "use strict";
    $(".tabs a span").toArray().forEach(function (element) {
       $(element).on("click", function () {
           $(".tabs a span").removeClass("active");
           $(element).addClass("active");
           $("main .content").empty();
           return false;
       });
    });
};
$(document).ready(main);

function active(child) {
    $(".tabs span").removeClass("active");
    $(`.tabs a:nth-child(${child}) span`).addClass("active");
}