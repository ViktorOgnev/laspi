$(document).ready(function(){
    $('.email').each(function(){
        var ats, dots, address, i;
        address = $(this).html();
        var m;
        var t = '';
        if(m = address.match(/\[(.+)\]/)){
            t = m[1];
            address = address.replace(/\s*\[.+\]\s*/, '');
        }
        address = address.replace(/\s*\(at\)\s*/g, '@');
        address = address.replace(/\s*\(dot\)\s*/g, '.');
        if(t != ''){
            $(this).html('<a href="mailto:' + address + '">' + t + '</a>');
        }
        else {
            $(this).html('<a href="mailto:' + address + '">' + address + '</a>');
        }
    });
});
