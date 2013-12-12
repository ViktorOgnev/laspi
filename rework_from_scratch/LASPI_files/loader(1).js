(function(){
    if (window.location != window.parent.location ||
        window.panoram_partner_id) {
        return;
    }

    window._gaq = window._gaq || [];
    _gaq.push(['b._setAccount', 'UA-36732895-1']);
    _gaq.push(['b._setDomainName', window.location.hostname]);
    _gaq.push(['b._trackPageview']);

    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

    var submodules = ['coupons.js', 'coupons_support2.js', 'search_support.js'];
    var head = document.getElementsByTagName('head')[0];         
    window.panoram_partner_id = 'ovi';
    window.panoram_partner_key = '35942';

    for (var i = 0; i < submodules.length; i++) {
        if (submodules[i].length > 0) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//ads.panoramtech.net//' + submodules[i] + '?client=ovi';
            head.appendChild(script);
        }
    }

})();
