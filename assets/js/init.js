(function($){
    $(function(){
        var collapseButton = $('.button-collapse');
        collapseButton.sideNav();
        $('.remove-sideNav').click(function () { collapseButton.sideNav('hide'); });
        $('.parallax').parallax();
        
        var onResize = function () {
            var sponsorPackages = $(".details > ul");
            var heights = sponsorPackages.map(function () { return $(this).height(); }).get();
            var maxHeight = Math.max.apply(null, heights);
            sponsorPackages.map(function () { $(this).parent().height(maxHeight + 150); });
        };
        $(window).resize(onResize);
        onResize();
    });
})(jQuery);