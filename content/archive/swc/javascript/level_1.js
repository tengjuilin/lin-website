var nav = document.getElementById('nav');
nav.innerHTML =  '<nav class="nav_white_bar">\
<div class="nav_left_container">\
<a class="nav_logo" href="../index.html"><img src="img/site/logo_blue.jpg" height="50"></a>\
<a class="nav_blue_title" href="index.html">SWC</a>\
</div>\
<ul class="nav_right_container">\
<li><a class="nav_blue_icon" href="publish.html">Publish</a></li>\
<li><a class="nav_blue_icon" href="art.html">Art</a></li>\
<li><a class="nav_blue_icon" href="writing.html">Writing</a></li>\
<!--li><a class="nav_blue_icon" href="2018sf.html">Science Fair</a></li-->\
<li><a class="nav_blue_icon" href="contributors.html">Contributors</a></li>\
</ul>\
</nav>';

var scroll = document.getElementById('scroll');
scroll.innerHTML = '<a href="javascript:scrollTo(0,0);" class="scroll_top">\
    <svg style="height:10px; width:16px; padding:13px 10px;">\
    <line x1="2" y1="8" x2="8.35" y2="2" style="stroke:white;stroke-width:1"/>\
    <line x1="14" y1="8" x2="7.65" y2="2" style="stroke:white;stroke-width:1"/>\
    </svg>\
    </a>';

var footer = document.getElementById('footer');
footer.innerHTML = '<footer><span class="footnote">Copyright &copy; 2017-2018 Owen Lin, Student Original Work Publication Center, Polarize. All rights reserved.</span><br/>\
    <span class="footnote"><a class="foot_link" href="../index.html">Polarize</a> | <a class="foot_link" href="index.html">SWC</a> <!--| <a class="foot_link" href="2018sf.html">Science Fair</a--> | <a class="foot_link" href="art.html">Art</a> | <a class="foot_link" href="writing.html">Writing</a> | <a class="foot_link" href="contributors.html">Contributors</a> | <a class="foot_link" href="publish.html">Publish</a> | <a class="foot_link" href="help.html">Help</a></span></footer>';
