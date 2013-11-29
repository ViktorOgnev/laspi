var laspiGa = {
    params: {},
    urchin_term: '',
    urchin_source: '',
	_uGC: function (l,n,s) {
	   // used to obtain a value form a string of key=value pairs
	   if (!l || l=="" || !n || n=="" || !s || s=="") return "-";
	   var i,i2,i3,c="-";
	   i=l.indexOf(n);
	   i3=n.indexOf("=")+1;
	   if (i > -1) {
		  i2=l.indexOf(s,i); if (i2 < 0) { i2=l.length; }
		  c=l.substring((i+i3),i2);
	   }
	   return c;
	},
    
    getAll: function(){
        return this.readCookie();
    },
    
    getTest: function(){
        return 'laspi_cur_term=-@laspi_cur_src=(direct)@laspi_first_year=2009@laspi_first_term=-@laspi_first_src=google';
    },
    
    writeCookie: function(z){
        try {
            z = encodeURI(z);
        } catch(err){}
        document.cookie = "laspiGA="+z+"; path=/; domain=.laspi.com";
        // document.cookie = "laspiGA="+z+"; path=/; domain=.laspi.com";
    },
    
    readCookie: function(){
        var z = this._uGC(document.cookie, "laspiGA=", ";");
        // return z;
        try {
            z = decodeURI(z);
        } catch(err){}
        return z;
    },
    
    setGa: function(urchin_term,urchin_source){
        this.urchin_term = urchin_term;
        this.urchin_source = urchin_source;
        try {
            this.urchin_term = decodeURI(urchin_term);
        } catch(err){}
        try {
            this.urchin_source = decodeURI(urchin_source);
        } catch(err){}
    },
    
    set: function(name,value){
        var z = this.readCookie();
        if(z && (z != '-')){
            var myLaspi = z.split(/\s*\@\s*/);
            var newSet = []; var notFound = true;
            for (var i =0;i<myLaspi.length;i++) {
                if(myLaspi[i].indexOf(name+"=") >= 0){
                    notFound = false;
                    if(value === '') continue;
                    newSet.push(name+'='+value);
                    continue;
                }
                newSet.push(myLaspi[i]);
            }
            if(notFound) newSet.push(name+'='+value);
            z = newSet.join("@");
        }
        else {
            z = name+'='+value;
        }
        this.writeCookie(z);
        return z;
    },
    
    get: function(name){
        var z = this.readCookie();
        if(z && (z != '-')){
            var myLaspi = z.split(/\s*\@\s*/);
            for (var i =0;i<myLaspi.length;i++) {
                if(myLaspi[i].indexOf(name+"=") >= 0){
                    var n = myLaspi[i].indexOf("=")+1;
                    if(n >= myLaspi[i].length) return null;
                    return myLaspi[i].substring(n);
                }
            }
        }
        else {
            return null;
        }
    },
    
    cur: function(){
        if(document.referrer.indexOf(".laspi.com") >= 0) return;
        if(this.get('online') == null) this.set('online','(not set)');
        this.set('c_term',this.urchin_term);
        return this.set('c_src',this.urchin_source);
    },
    
    firstInYear: function(){
        var now = new Date();
        var nowyear = now.getFullYear();
        var y = this.get('f_year');
        if(y === null){
            return this.first();
        }
        if(y == nowyear) return null;
        return this.first();
    },
    
    first: function(){
        var now = new Date();
        var nowyear = now.getFullYear();
        this.set('f_year',nowyear);
        this.set('f_term',this.urchin_term);
        if(this.get('online') == null) this.set('online','(not set)');
        return this.set('f_src',this.urchin_source);
    }    
}