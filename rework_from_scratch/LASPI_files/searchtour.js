// # -*- coding: utf-8 -*-
function _parseDate(str){
    var result = str.match(/^(\d\d?)\.(\d\d?)\.(\d\d\d\d)$/,str);
    if(result != null){
        var d = new Date();
        d.setFullYear(result[3],result[2]-1,result[1]);
        return d;
    }
    return new Date();
}

function _formatDate(date, format) {
    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();
    var wn = date.getWeekNumber();
    var w = date.getDay();
    var s = {};
    var hr = date.getHours();
    var pm = (hr >= 12);
    var ir = (pm) ? (hr - 12) : hr;
    var dy = date.getDayOfYear();
    if (ir == 0) {
        ir = 12;
    }
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var parts = format.split(''), part;
    for ( var i = 0; i < parts.length; i++ ) {
        part = parts[i];
        switch (parts[i]) {
            case 'a':
                part = date.getDayName();
                break;
            case 'A':
                part = date.getDayName(true);
                break;
            case 'b':
                part = date.getMonthName();
                break;
            case 'B':
                part = date.getMonthName(true);
                break;
            case 'C':
                part = 1 + Math.floor(y / 100);
                break;
            case 'd':
                part = (d < 10) ? ("0" + d) : d;
                break;
            case 'e':
                part = d;
                break;
            case 'H':
                part = (hr < 10) ? ("0" + hr) : hr;
                break;
            case 'I':
                part = (ir < 10) ? ("0" + ir) : ir;
                break;
            case 'j':
                part = (dy < 100) ? ((dy < 10) ? ("00" + dy) : ("0" + dy)) : dy;
                break;
            case 'k':
                part = hr;
                break;
            case 'l':
                part = ir;
                break;
            case 'm':
                part = (m < 9) ? ("0" + (1+m)) : (1+m);
                break;
            case 'M':
                part = (min < 10) ? ("0" + min) : min;
                break;
            case 'p':
            case 'P':
                part = pm ? "PM" : "AM";
                break;
            case 's':
                part = Math.floor(date.getTime() / 1000);
                break;
            case 'S':
                part = (sec < 10) ? ("0" + sec) : sec;
                break;
            case 'u':
                part = w + 1;
                break;
            case 'w':
                part = w;
                break;
            case 'y':
                part = ('' + y).substr(2, 2);
                break;
            case 'Y':
                part = y;
                break;
        }
        parts[i] = part;
    }
    return parts.join('');
}

$(function(){
    var from = new Date();
    var to = new Date();
    var vf =  $('#SearchTourIntervalFrom').val();
    var vt =  $('#SearchTourIntervalTo').val();
    if(vf) from = _parseDate(vf);
    if(vt) to = _parseDate(vt);
    $('#widgetSearchTourIntervalDatePicker').DatePicker({
        flat: true,
        format: 'd.m.Y',
        date: [from, to],
        current: from,
        calendars: 2,
        mode: 'range',
        starts: 1,
        locale: {
            days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
            daysShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
            daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
            months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            weekMin: 'нд'
        },
        onChange: function(formated) {
            // var d = $('#widgetSearchTourIntervalDatePicker').DatePickerGetDate(false);
            // if(d[0].getTime() < from.getTime()) return false;;
            $('#SearchTourIntervalFrom').val(formated[0]);
            $('#SearchTourIntervalTo').val(formated[1]);
            var df = new Date(formated[0]);
            var m = df.getMonth()+1;
            if(m < 10) m = '0' + m;
            dateTourFrom = '1.'+ m + '.' + df.getFullYear();
            // console.dir(formated);
            if(formated[0] != formated[1]) $('#widgetSearchTourIntervalDatePicker').css('visibility','hidden');
            return true;
        }
                
    });
    if(!vf) $('#SearchTourIntervalFrom').val(_formatDate(from,'d.m.Y'));
    if(!vt) $('#SearchTourIntervalTo').val(_formatDate(to,'d.m.Y'));
    // $('#SearchTourInterval').DatePickerShow();
    // var state = false;
    $('#SearchTourIntervalButton').click(function(event){
        var vs = $('#widgetSearchTourIntervalDatePicker').css('visibility');
        if(vs == 'visible'){
            $('#widgetSearchTourIntervalDatePicker').css('visibility','hidden');
        }
        else {
            $('#widgetSearchTourIntervalDatePicker').css('visibility','visible');
        }
        event.stopPropagation();
    });
    $('.searchtour').click(function(){        
            $('#widgetSearchTourIntervalDatePicker').css('visibility','hidden');
    });
    $('#widgetSearchTourInterval input').click(function(event){
        var vs = $('#widgetSearchTourIntervalDatePicker').css('visibility');
        if(vs == 'visible'){
            $('#widgetSearchTourIntervalDatePicker').css('visibility','hidden');
        }
        else {
            $('#widgetSearchTourIntervalDatePicker').css('visibility','visible');
        }
        event.stopPropagation();
    });

});