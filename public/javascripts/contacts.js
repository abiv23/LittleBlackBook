$(document).ready(function() {
    $('.carousel').carousel();

    // vvv STAR RATING vvv
    
    $.fn.stars = function() {
    return $(this).each(function() {
        var val = parseFloat($(this).html());
        halfVal = (val/2);
        var size = Math.max(0, (Math.min(5, halfVal))) * 15;
        var $span = $('<span />').width(size);
        $(this).html($span);
    });
    };
    $(function() {
      $('span.stars').stars();
    });
});
