(function($) {
    $.fn.SlideLaspiBox = function(interval){
        var childs;
        var active;
        var next;
        var stop_laspi_animation = false;
        slideLaspi = function(){
            if(stop_laspi_animation){
                setTimeout( "slideLaspi()", interval);
                return;
            }
            var delay = 0;
            next = active.next();
            if ( next.length == 0 ) next = childs.first();
            if(next.attr('delay') != undefined){delay = parseInt(next.attr('delay'));};
            next.css({opacity: 0.0,zIndex:10000});
            active.css({zIndex:0});
            next.css({opacity: 0.0})
                .animate({opacity: 1.0}, interval)
                .delay(delay)
                .queue(function(){
                    $(this).dequeue();
                    active = next;
                    slideLaspi();
                });
        };
        return this.each(function(){
            $(this).css('position','relative');
            childs = $(this).children();
            childs.css({position:'absolute',right:'0',display:'block',left:'0'});
            active = childs.first();
            childs.mouseover(function(){
                stop_laspi_animation = true;
            }).mouseout(function(){
                stop_laspi_animation = false;
            });
            slideLaspi();
        });
    };
})(jQuery);


