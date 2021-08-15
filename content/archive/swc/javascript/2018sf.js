// Science Fair Information
// In S2018701, S = science fair; 2018 = 2018 year; 7 = 7th grade; 01 = id.
// 7 = 7th; 8 = 8th; 9 = 9th; 0 = 10th; 1 = 11th12th

// Demo
var demo = {
    title: 'Relationship Between Temperature and the Rate of Photosynthesis',
    author:'Owen Lin (11th)',
    date:  '18 May 2018',
    link1: '2018-sf/demo.html'};
document.getElementById('demo').getElementsByClassName('title')[0].innerHTML = demo.title;
document.getElementById('demo').getElementsByClassName('author')[0].innerHTML = demo.author;
document.getElementById('demo').getElementsByClassName('date')[0].innerHTML = demo.date;
document.getElementById('demo').getElementsByClassName('link')[0].href = demo.link1;

// 7th Grade
var S2018701 = {
    title: '',
    author:'',
    date:  '18 May 2018',
    link1: '2018-sf/S2018701.html'};

// 8th Grade
var S2018801 = {
    title: '',
    author:'',
    date:  '18 May 2018',
    link1: '2018-sf/'};

// 9th Grade
var S2018901 = {
    title: '',
    author:'',
    date:  '18 May 2018',
    link1: '2018-sf/'};

// 10th Grade
var S2018001 = {
    title: '',
    author:'',
    date:  '18 May 2018',
    link1: '2018-sf/'};

// 11th 12th Grade
var S2018101 = {
    title: '',
    author:'',
    date:  '18 May 2018',
    link1: '2018-sf/'};


// Science Fair Functions
function ScienceFairHtml7th() {
    var perm10 = '';
    var perm100 = '';
    for(var n=1; n<11; n++){
        if(n < 10){
            var temp10 =  '<div id="S201870' +  n + '"><a class="link"><div class="catalog_article"><p class="catalog_title title"></p><div class="catalog_information"><p class="catalog_author author"></p><p class="catalog_publish_date date"></p></div></div></a></div>';
            perm10 = perm10 + temp10;
        }else{
            var temp100 =  '<div id="S20187' +  n + '"><a class="link"><div class="catalog_article"><p class="catalog_title title"></p><div class="catalog_information"><p class="catalog_author author"></p><p class="catalog_publish_date date"></p></div></div></a></div>';
            perm100 = perm100 + temp100;
        }
    }
    sfHtmlContent7th = perm10 + perm100;
    document.getElementById('2018_sf_7th').innerHTML = sfHtmlContent7th;
}

function ScienceFairContent7th() {
    for(var i=1; i<11; i++){
            if(i < 10){
                eval("var getS201870" + i + "= document.getElementById('S201870" + i + "');");
                eval("getS201870" + i + ".getElementsByClassName('author')[0].innerHTML = S201870" + i + ".author;");
                eval("getS201870" + i + ".getElementsByClassName('title')[0].innerHTML = S201870" + i + ".title;");
                eval("getS201870" + i + ".getElementsByClassName('date')[0].innerHTML = S201870" + i + ".date;");
                eval("getS201870" + i + ".getElementsByClassName('link')[0].href = S201870" + i + ".link1;");
            }else{
                eval("var getS20187" + i + "= document.getElementById('S20187" + i + "');");
                eval("getS20187" + i + ".getElementsByClassName('author')[0].innerHTML = S20187" + i + ".author;");
                eval("getS20187" + i + ".getElementsByClassName('title')[0].innerHTML = S20187" + i + ".title;");
                eval("getS20187" + i + ".getElementsByClassName('date')[0].innerHTML = S20187" + i + ".date;");
                eval("getS20187" + i + ".getElementsByClassName('link')[0].href = S20187" + i + ".link1;");
            }
    }
}

function ScienceFairHtml8th() {
    var perm10 = '';
    var perm100 = '';
    for(var n=1; n<11; n++){
        if(n < 10){
            var temp10 =  '<div id="S201880' +  n + '"><a class="link"><div class="catalog_article"><p class="catalog_title title"></p><div class="catalog_information"><p class="catalog_author author"></p><p class="catalog_publish_date date"></p></div></div></a></div>';
            perm10 = perm10 + temp10;
        }else{
            var temp100 =  '<div id="S20188' +  n + '"><a class="link"><div class="catalog_article"><p class="catalog_title title"></p><div class="catalog_information"><p class="catalog_author author"></p><p class="catalog_publish_date date"></p></div></div></a></div>';
            perm100 = perm100 + temp100;
        }
    }
    sfHtmlContent8th = perm10 + perm100;
    document.getElementById('2018_sf_8th').innerHTML = sfHtmlContent8th;
}

function ScienceFairContent8th() {
    for(var i=1; i<11; i++){
        if(i < 10){
            eval("var getS201880" + i + "= document.getElementById('S201880" + i + "');");
            eval("getS201880" + i + ".getElementsByClassName('author')[0].innerHTML = S201880" + i + ".author;");
            eval("getS201880" + i + ".getElementsByClassName('title')[0].innerHTML = S201880" + i + ".title;");
            eval("getS201880" + i + ".getElementsByClassName('date')[0].innerHTML = S201880" + i + ".date;");
            eval("getS201880" + i + ".getElementsByClassName('link')[0].href = S201880" + i + ".link1;");
        }else{
            eval("var getS20188" + i + "= document.getElementById('S20188" + i + "');");
            eval("getS20188" + i + ".getElementsByClassName('author')[0].innerHTML = S20188" + i + ".author;");
            eval("getS20188" + i + ".getElementsByClassName('title')[0].innerHTML = S20188" + i + ".title;");
            eval("getS20188" + i + ".getElementsByClassName('date')[0].innerHTML = S20188" + i + ".date;");
            eval("getS20188" + i + ".getElementsByClassName('link')[0].href = S20188" + i + ".link1;");
        }
    }
}

function ScienceFairHtml9th() {
    var perm10 = '';
    var perm100 = '';
    for(var n=1; n<11; n++){
        if(n < 10){
            var temp10 =  '<div id="S201890' +  n + '"><a class="link"><div class="catalog_article"><p class="catalog_title title"></p><div class="catalog_information"><p class="catalog_author author"></p><p class="catalog_publish_date date"></p></div></div></a></div>';
            perm10 = perm10 + temp10;
        }else{
            var temp100 =  '<div id="S20189' +  n + '"><a class="link"><div class="catalog_article"><p class="catalog_title title"></p><div class="catalog_information"><p class="catalog_author author"></p><p class="catalog_publish_date date"></p></div></div></a></div>';
            perm100 = perm100 + temp100;
        }
    }
    sfHtmlContent9th = perm10 + perm100;
    document.getElementById('2018_sf_9th').innerHTML = sfHtmlContent9th;
}

function ScienceFairContent9th() {
    for(var i=1; i<11; i++){
        if(i < 10){
            eval("var getS201890" + i + "= document.getElementById('S201890" + i + "');");
            eval("getS201890" + i + ".getElementsByClassName('author')[0].innerHTML = S201890" + i + ".author;");
            eval("getS201890" + i + ".getElementsByClassName('title')[0].innerHTML = S201890" + i + ".title;");
            eval("getS201890" + i + ".getElementsByClassName('date')[0].innerHTML = S201890" + i + ".date;");
            eval("getS201890" + i + ".getElementsByClassName('link')[0].href = S201890" + i + ".link1;");
        }else{
            eval("var getS20189" + i + "= document.getElementById('S20189" + i + "');");
            eval("getS20189" + i + ".getElementsByClassName('author')[0].innerHTML = S20189" + i + ".author;");
            eval("getS20189" + i + ".getElementsByClassName('title')[0].innerHTML = S20189" + i + ".title;");
            eval("getS20189" + i + ".getElementsByClassName('date')[0].innerHTML = S20189" + i + ".date;");
            eval("getS20189" + i + ".getElementsByClassName('link')[0].href = S20189" + i + ".link1;");
        }
    }
}

function ScienceFairHtml10th() {
    var perm10 = '';
    var perm100 = '';
    for(var n=1; n<11; n++){
        if(n < 10){
            var temp10 =  '<div id="S201800' +  n + '"><a class="link"><div class="catalog_article"><p class="catalog_title title"></p><div class="catalog_information"><p class="catalog_author author"></p><p class="catalog_publish_date date"></p></div></div></a></div>';
            perm10 = perm10 + temp10;
        }else{
            var temp100 =  '<div id="S20180' +  n + '"><a class="link"><div class="catalog_article"><p class="catalog_title title"></p><div class="catalog_information"><p class="catalog_author author"></p><p class="catalog_publish_date date"></p></div></div></a></div>';
            perm100 = perm100 + temp100;
        }
    }
    sfHtmlContent10th = perm10 + perm100;
    document.getElementById('2018_sf_10th').innerHTML = sfHtmlContent10th;
}

function ScienceFairContent10th() {
    for(var i=1; i<11; i++){
        if(i < 10){
            eval("var getS201800" + i + "= document.getElementById('S201800" + i + "');");
            eval("getS201800" + i + ".getElementsByClassName('author')[0].innerHTML = S201800" + i + ".author;");
            eval("getS201800" + i + ".getElementsByClassName('title')[0].innerHTML = S201800" + i + ".title;");
            eval("getS201800" + i + ".getElementsByClassName('date')[0].innerHTML = S201800" + i + ".date;");
            eval("getS201800" + i + ".getElementsByClassName('link')[0].href = S201800" + i + ".link1;");
        }else{
            eval("var getS20180" + i + "= document.getElementById('S20180" + i + "');");
            eval("getS20180" + i + ".getElementsByClassName('author')[0].innerHTML = S20180" + i + ".author;");
            eval("getS20180" + i + ".getElementsByClassName('title')[0].innerHTML = S20180" + i + ".title;");
            eval("getS20180" + i + ".getElementsByClassName('date')[0].innerHTML = S20180" + i + ".date;");
            eval("getS20180" + i + ".getElementsByClassName('link')[0].href = S20180" + i + ".link1;");
        }
    }
}

function ScienceFairHtml11th12th() {
    var perm10 = '';
    var perm100 = '';
    for(var n=1; n<11; n++){
        if(n < 10){
            var temp10 =  '<div id="S201810' +  n + '"><a class="link"><div class="catalog_article"><p class="catalog_title title"></p><div class="catalog_information"><p class="catalog_author author"></p><p class="catalog_publish_date date"></p></div></div></a></div>';
            perm10 = perm10 + temp10;
        }else{
            var temp100 =  '<div id="S20181' +  n + '"><a class="link"><div class="catalog_article"><p class="catalog_title title"></p><div class="catalog_information"><p class="catalog_author author"></p><p class="catalog_publish_date date"></p></div></div></a></div>';
            perm100 = perm100 + temp100;
        }
    }
    sfHtmlContent11th12th = perm10 + perm100;
    document.getElementById('2018_sf_11th12th').innerHTML = sfHtmlContent11th12th;
}

function ScienceFairContent11th12th() {
    for(var i=1; i<11; i++){
        if(i < 10){
            eval("var getS201810" + i + "= document.getElementById('S201810" + i + "');");
            eval("getS201810" + i + ".getElementsByClassName('author')[0].innerHTML = S201810" + i + ".author;");
            eval("getS201810" + i + ".getElementsByClassName('title')[0].innerHTML = S201810" + i + ".title;");
            eval("getS201810" + i + ".getElementsByClassName('date')[0].innerHTML = S201810" + i + ".date;");
            eval("getS201810" + i + ".getElementsByClassName('link')[0].href = S201810" + i + ".link1;");
        }else{
            eval("var getS20181" + i + "= document.getElementById('S20181" + i + "');");
            eval("getS20181" + i + ".getElementsByClassName('author')[0].innerHTML = S20181" + i + ".author;");
            eval("getS20181" + i + ".getElementsByClassName('title')[0].innerHTML = S20181" + i + ".title;");
            eval("getS20181" + i + ".getElementsByClassName('date')[0].innerHTML = S20181" + i + ".date;");
            eval("getS20181" + i + ".getElementsByClassName('link')[0].href = S20181" + i + ".link1;");
        }
    }
}
