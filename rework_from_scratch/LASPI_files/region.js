// -*- coding: utf-8 -*-

var region = {
    init: function (reg){
        $('.region .noactive').hide();
        if(reg) this.show(reg);
    },
    show: function(region) {
        // $('.region').not('#region-'+region).hide();
        $('#region-'+region).toggle('normal');
        $('#show-'+region).toggleClass('active-region');
        $('#direct-'+region).toggleClass('active-direct');
        $('#arr-'+region).toggleClass('show-all');
        // $('.show-region a').text('показать все');
        if($('#arr-'+region).hasClass('show-all')){
            $('#arr-'+region).html('&nbsp;<img src="/img/uarr.gif" border="0">');
        }
        else {
            $('#arr-'+region).html('&nbsp;<img src="/img/darr.gif" border="0">');
        }
    },
    shownoactive: function(region,noa) {
        $('#region-'+region+' .'+noa).toggle('normal');
        $('#show-'+region+'-'+noa).toggleClass('show-all');
        if($('#show-'+region+'-'+noa).hasClass('show-all')){
            $('#show-'+region+'-'+noa).text('скрыть сезонные');
        }
        else {
            $('#show-'+region+'-'+noa).text('показать сезонные');
        }
    }
}

