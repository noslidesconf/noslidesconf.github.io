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

        var sessionLists = $("#hallSessionLists .hallSessionList").filter('.hidden').hide().end();
        $("#halls").on("click", ".hall", function (e) {
            e.preventDefault();
            $elem = $(this);
            $elem.addClass('selected').closest('#halls').find('.selected').not($elem).removeClass('selected');
            var sessionListSelector = $elem.data("sessionListSelector");
            sessionLists
                .not('.hidden')
                .addClass('hidden')
                .fadeOut("fast")
                .end()
                .filter(sessionListSelector)
                .removeClass('hidden')
                .fadeIn("fast");
        });

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
            var image = 'assets/img/misc/position.png';
            var myLatLng = new google.maps.LatLng(44.5220075, 11.346994);
            var beachMarker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image
            });
        });
    });
})(jQuery);