var day=new Date().getDay();

// toefl word update
var toeflword;
switch (day)
{
    case 0:
        toeflword="sponsor";
        break;
    case 1:
        toeflword="supreme";
        break;
    case 2:
        toeflword="senator";
        break;
    case 3:
        toeflword="grant";
        break;
    case 4:
        toeflword="derive";
        break;
    case 5:
        toeflword="sponsor";
        break;
    case 6:
        toeflword="sponsor";
        break;
}
document.getElementById("toeflword").innerHTML=toeflword;


// toefl translation update
var toefltranslation;
switch (day)
{
    case 0:
        toefltranslation=
            "n.发起者<br/>" +
            "vt.发起；资助，赞助；支持<br/>";
        break;
    case 1:
        toefltranslation=
            "adj.最高的，最大的；极度的；最重要的<br/>";
        break;
    case 2:
        toefltranslation=
            "n.参议员<br/>";
        break;
    case 3:
        toefltranslation=
            "n.授予物<br/>" +
            "vt.授予，给予<br/>";
        break;
    case 4:
        toefltranslation=
            " v.起源，取得<br/>";
        break;
    case 5:
        toefltranslation=
            "n.发起者<br/>" +
            "vt.发起；资助，赞助；支持<br/>";
        break;
    case 6:
        toefltranslation=
            "n.发起者<br/>" +
            "vt.发起；资助，赞助；支持<br/>";
        break;
}
document.getElementById("toefltranslation").innerHTML=toefltranslation;


// toefl date update
var toefldate;
switch (day)
{
    case 0:
        toefldate="17 Mar 2017";
        break;
    case 1:
        toefldate="13 Mar 2017";
        break;
    case 2:
        toefldate="14 Mar 2017";
        break;
    case 3:
        toefldate="15 Mar 2017";
        break;
    case 4:
        toefldate="16 Mar 2017";
        break;
    case 5:
        toefldate="17 Mar 2017";
        break;
    case 6:
        toefldate="17 Mar 2017";
        break;
}
document.getElementById("toefldate").innerHTML="Date: " + toefldate;

