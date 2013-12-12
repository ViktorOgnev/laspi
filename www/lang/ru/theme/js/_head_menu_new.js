
var main_items = [];
i = 0;
main_items[i++] = 'item_uslugi';
main_items[i++] = 'item_kongress';
main_items[i++] = 'item_turagent';
main_items[i++] = 'item_onas';
main_items[i++] = 'item_turistam';
main_items[i++] = 'item_det';

var main_boxs = {};
main_boxs['item_uslugi'] = 'box_1';
main_boxs['item_kongress'] = 'box_2';
main_boxs['item_turagent'] = 'box_1';
main_boxs['item_onas'] = 'box_1';
main_boxs['item_turistam'] = 'box_2';
main_boxs['item_det'] = 'box_2';

var item_vis = {};
item_vis['item_uslugi_box'] = 0;
item_vis['item_kongress_box'] = 0;
item_vis['item_turagent_box'] = 0;
item_vis['item_onas_box'] = 0;
item_vis['item_turistam_box'] = 0;
item_vis['item_det_box'] = 0;


var img_unsel = {};
var img_sel = {};

var last_out = 'xxx';

function item_out(t){
  //last_out = t;
}
function item_in(t){
  //if(last_out != t){
  //  reset_all();
  //last_out = t;
  //}
 //alert(last_out + ' ' + t);
}

function menu_out(e){
  if(e.relatedTarget){
    t = e.relatedTarget;
  }
  else if(e.toElement){
    t = e.toElement;
  }
  i = 0;
  while(p = t){
    if(p.id){
	  if(item_vis[p.id]){
	    if(item_vis[p.id] == 1){
		  return;
		}
		else {
		  reset_all();
		  return;
		}
	  }
	}
	t = t.parentNode;
	i++;
  }
  reset_all();
  return;
}

function menu_in(e){
  if(e.relatedTarget){
    t = e.relatedTarget;
  }
  else if(e.toElement){
    t = e.toElement;
  }
  i = 0;
  while(p = t){
    if(p.id){
	  if(item_vis[p.id]){
	    if(item_vis[p.id] == 1){
		  return;
		}
		else {
		  reset_all();
		  return;
		}
	  }
	}
	t = t.parentNode;
	i++;
  }
  reset_all();
  return;
}


function img_load(){

	img_unsel['item_uslugi'] = new Image; img_unsel['item_uslugi'].src = document.getElementById('item_uslugi').src;
	img_unsel['item_kongress'] =  new Image; img_unsel['item_kongress'].src = document.getElementById('item_kongress').src;
	img_unsel['item_turagent'] =  new Image; img_unsel['item_turagent'].src = document.getElementById('item_turagent').src;
	img_unsel['item_onas'] =  new Image; img_unsel['item_onas'].src = document.getElementById('item_onas').src;
	img_unsel['item_turistam'] =  new Image; img_unsel['item_turistam'].src = document.getElementById('item_turistam').src;
	img_unsel['item_det'] =  new Image; img_unsel['item_det'].src = document.getElementById('item_det').src;
	
	img_sel['item_uslugi'] = new Image; img_sel['item_uslugi'].src = '/lang/ru/theme/images/menu/item_uslugi_sel.gif';
	img_sel['item_kongress'] =  new Image; img_sel['item_kongress'].src = '/lang/ru/theme/images/menu/item_kongress_sel.gif';
	img_sel['item_turagent'] =  new Image; img_sel['item_turagent'].src = '/lang/ru/theme/images/menu/item_turagent_sel.gif';
	img_sel['item_onas'] =  new Image; img_sel['item_onas'].src = '/lang/ru/theme/images/menu/item_onas_sel.gif';
	img_sel['item_turistam'] =  new Image; img_sel['item_turistam'].src = '/lang/ru/theme/images/menu/item_turistam_sel.gif';
	img_sel['item_det'] =  new Image; img_sel['item_det'].src = '/lang/ru/theme/images/menu/item_det_sel.gif';

  for(i=0; i<main_items.length; i++){
    var t = document.getElementById(main_items[i] + '_box');
	if(t.addEventListener){
 	  t.addEventListener("mouseout", menu_out,true);
	}
	else if(t.attachEvent) {
 	  t.attachEvent("onmouseout", menu_out);
	}
  }
  reset_all();
}

function reset_all(){
 for(i=0; i<main_items.length; i++){
    var t = document.getElementById(main_items[i] + '_box');
	t.style.visibility = 'hidden';
	item_vis[main_items[i] + '_box'] = 0;
    var t = document.getElementById(main_items[i]);
	t.src = img_unsel[main_items[i]].src;
  }
  var t = document.getElementById('box_1');
  t.style.visibility = 'hidden';
  t.style.zIndex = 10;
  var t = document.getElementById('box_2');
  t.style.visibility = 'hidden';
  t.style.zIndex = 10;
}


function item_up(img){
  var t = document.getElementById('box_1');
  t.style.visibility = 'hidden';
  var t = document.getElementById('box_2');
  t.style.visibility = 'hidden';

  for(i=0; i<main_items.length; i++){
    var t = document.getElementById(main_items[i] + '_box');
	t.style.visibility = 'hidden';
  }
  var id_img_box = img + '_box';
  var ib = document.getElementById(id_img_box);
  ib.style.visibility = 'visible';
  item_vis[id_img_box] = 1;
  var t = document.getElementById(main_boxs[img]);
  t.style.visibility = 'visible';
  t.style.zIndex = 20;
  
}

function roll_on(img){
  for(i=0; i<main_items.length; i++){
    var t = document.getElementById(main_items[i]);
	t.src = img_unsel[main_items[i]].src;
  }
  var im = document.getElementById(img);
  im.src = img_sel[img].src; 
  item_up(img); 
}

function roll_off(img){
  //var im = document.getElementById(img);
  //im.src = img_unsel[img].src;  
  //item_up(img); 
}


function setBg(element,bg) {
	element.style.backgroundColor = bg;
}


//addLoadEvent(img_load);

