var nav = document.getElementById('nav');
nav.innerHTML = '<nav class="nav_blue_bar">\
<div class="nav_left_container">\
<a class="nav_logo" href="../../index.html"><img src="../img/site/logo_white.jpg" height="50"></a>\
<a class="nav_white_title" href="../index.html">Journal</a>\
</div>\
<ul class="nav_right_container">\
<li><a class="nav_white_icon" href="../index.html">Journal</a></li>\
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
    <span class="footnote"><a class="foot_link" href="../../index.html">Polarize</a> | <a class="foot_link" href="../index.html">Journal</a></span></footer>';