function showphoto(url,x,y) {
	windowPop = window.open (url,"photo","width="+x+",height="+y+",location=1,menubar=0,scrollbars=1,resizable=0,status=0,titlebar=1,toolbar=0");
	windowPop.focus();
}

function showphoto_for_conference(url,x,y) {
	windowPop = window.open (url,"photo","width="+x+",height="+y+",location=1,menubar=0,scrollbars=1,resizable=0,status=0,titlebar=1,toolbar=0");
	windowPop.focus();
}

function showphoto_page(url,x,y) {
	windowPop = window.open (url,"photo","width="+x+",height="+y+",location=1,menubar=0,scrollbars=1,resizable=0,status=0,titlebar=1,toolbar=0");
	windowPop.focus();
}

function show_popup(url,x,y) {
	windowPop = window.open (url,"photo","width="+x+",height="+y+",location=0,menubar=0,resizable=0,scrollbars=0,status=0,titlebar=1,toolbar=0");
	windowPop.focus();
}


function showfile(url) {
	windowPop = window.open (url,"photo","width=470,location=0,menubar=0,resizable=1,scrollbars=1,status=0,titlebar=1,toolbar=0");
	windowPop.focus();
}

function show_win(url) {
	windowPop = window.open (url,"photo","width=700,height=500,location=0,menubar=0,resizable=1,scrollbars=1,status=0,titlebar=1,toolbar=0");
	windowPop.focus();
}

function show_win_zag(url) {
    if(typeof dateTourFrom !== 'undefined' && (dateTourFrom.search(/\d+\.\d+\.\d+/) != -1)){
        url = url + '&date='+dateTourFrom;
    }
    winzag = window.open(url, "grafik_zag","width=950,height=680,location=0,menubar=0,resizable=0,scrollbars=1,status=0,titlebar=1,toolbar=0");
    winzag.focus();
    
}
