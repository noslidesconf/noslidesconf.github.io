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

        google.maps.event.addDomListener(window, 'load', function () {
            var mapOptions = {
                zoom: 13,
                scrollwheel: false,
                panControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                center: new google.maps.LatLng(44.51, 11.32)
            };

            var map = new google.maps.Map(document.getElementById('canvas-map'),mapOptions);
            var image = 'assets/img/position.png';
            var myLatLng = new google.maps.LatLng(44.5220075, 11.346994);
            var beachMarker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image
            });
        });

        onResize();
    });
})(jQuery);