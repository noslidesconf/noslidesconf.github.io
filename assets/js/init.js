(function($){
    $(function(){
        var collapseButton = $('.button-collapse');
        collapseButton.sideNav();
        $('.remove-sideNav').click(function () { collapseButton.sideNav('hide'); });
        $('.parallax').parallax();
    });
})(jQuery);