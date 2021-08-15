// Journal Information
var J2018001 = {
    title: '揭秘2018年AP考前说明会',
    author:'Lin, Teng-Jui',
    date:  '1 May 2018',
    link1: '2018-journal/2018-ap-pre-exam-meeting.html'};
var J2018002 = {
    title: 'Day -1 Beijing',
    author:'Lin, Teng-Jui',
    date:  '23 Jun. 2018',
    link1: '2018-journal/day-1.html'};

// Journal functions
function categoryJournalHtml2018() {
    var perm10 = '';
    var perm100 = '';
    var perm1000 = '';
    for(var n=1; n<3; n++){
        if(n < 10){
            var temp10 =  '<div id="J201800' +  eval(n) + '"><a class="link"><div class="catalog_article"><p class="catalog_title title"></p><div class="catalog_information"><p class="catalog_author author"></p><p class="catalog_publish_date date"></p></div></div></a></div>';
            perm10 = perm10 + temp10;
        }else if(n < 100){
            var temp100 =  '<div id="J20180' +  eval(n) + '"><a class="link"><div class="catalog_article"><p class="catalog_title title"></p><div class="catalog_information"><p class="catalog_author author"></p><p class="catalog_publish_date date"></p></div></div></a></div>';
            perm100 = perm100 + temp100;
        }else{
            var temp1000 =  '<div id="J2018' +  eval(n) + '"><a class="link"><div class="catalog_article"><p class="catalog_title title"></p><div class="catalog_information"><p class="catalog_author author"></p><p class="catalog_publish_date date"></p></div></div></a></div>';
            perm1000 = perm1000 + temp1000;
        }
    }
    journalHtmlContent = perm10 + perm100 + perm1000;
    document.getElementById('2018_journal').innerHTML = journalHtmlContent;
}

function categoryJournalContent2018() {
    for(var i=1; i<3; i++){
        if(i < 10){
            eval("var getJ201800" + i + "= document.getElementById('J201800" + i + "');");
            eval("getJ201800" + i + ".getElementsByClassName('author')[0].innerHTML = J201800" + i + ".author;");
            eval("getJ201800" + i + ".getElementsByClassName('title')[0].innerHTML = J201800" + i + ".title;");
            eval("getJ201800" + i + ".getElementsByClassName('date')[0].innerHTML = J201800" + i + ".date;");
            eval("getJ201800" + i + ".getElementsByClassName('link')[0].href = J201800" + i + ".link1;");
        }else if(i < 100){
            eval("var getW20180" + i + "= document.getElementById('J20180" + i + "');");
            eval("getJ20180" + i + ".getElementsByClassName('author')[0].innerHTML = J20180" + i + ".author;");
            eval("getJ20180" + i + ".getElementsByClassName('title')[0].innerHTML = J20180" + i + ".title;");
            eval("getJ20180" + i + ".getElementsByClassName('date')[0].innerHTML = J20180" + i + ".date;");
            eval("getJ20180" + i + ".getElementsByClassName('link')[0].href = J20180" + i + ".link1;");
        }else{
            eval("var getJ2018" + i + "= document.getElementById('J2018" + i + "');");
            eval("getJ2018" + i + ".getElementsByClassName('author')[0].innerHTML = J2018" + i + ".author;");
            eval("getJ2018" + i + ".getElementsByClassName('title')[0].innerHTML = J2018" + i + ".title;");
            eval("getJ2018" + i + ".getElementsByClassName('date')[0].innerHTML = J2018" + i + ".date;");
            eval("getJ2018" + i + ".getElementsByClassName('link')[0].href = J2018" + i + ".link1;");
        }
    }
}

function categoryJournalFeature() {
    var getfeature1 = document.getElementById('feature1');
    getfeature1.getElementsByClassName('author')[0].innerHTML = J2018001.author;
    getfeature1.getElementsByClassName('title')[0].innerHTML = J2018001.title;
    getfeature1.getElementsByClassName('date')[0].innerHTML = J2018001.date;
    getfeature1.getElementsByClassName('link')[0].href = J2018001.link1;
    var getfeature2 = document.getElementById('feature2');
    getfeature2.getElementsByClassName('author')[0].innerHTML = J2018002.author;
    getfeature2.getElementsByClassName('title')[0].innerHTML = J2018002.title;
    getfeature2.getElementsByClassName('date')[0].innerHTML = J2018002.date;
    getfeature2.getElementsByClassName('link')[0].href = J2018002.link1;
    var getfeature3 = document.getElementById('feature3');
    getfeature3.getElementsByClassName('author')[0].innerHTML = J2018003.author;
    getfeature3.getElementsByClassName('title')[0].innerHTML = J2018003.title;
    getfeature3.getElementsByClassName('date')[0].innerHTML = J2018003.date;
    getfeature3.getElementsByClassName('link')[0].href = J2018003.link1;
    var getfeature4 = document.getElementById('feature4');
    getfeature4.getElementsByClassName('author')[0].innerHTML = J2018004.author;
    getfeature4.getElementsByClassName('title')[0].innerHTML = J2018004.title;
    getfeature4.getElementsByClassName('date')[0].innerHTML = J2018004.date;
    getfeature4.getElementsByClassName('link')[0].href = J2018004.link1;
}
