var day=new Date().getDay();

// spanish word update
var spanishword;
switch (day)
{
    case 0:
        spanishword="tener";
        break;
    case 1:
        spanishword="poner";
        break;
    case 2:
        spanishword="saber";
        break;
    case 3:
        spanishword="salir";
        break;
    case 4:
        spanishword="ser";
        break;
    case 5:
        spanishword="tener";
        break;
    case 6:
        spanishword="tener";
        break;
}
document.getElementById("spanishword").innerHTML=spanishword;


// spanish translation update
var spanishtranslation;
switch (day)
{
    case 0:
        spanishtranslation="to have";
        break;
    case 1:
        spanishtranslation="to put";
        break;
    case 2:
        spanishtranslation="to know";
        break;
    case 3:
        spanishtranslation="to leave";
        break;
    case 4:
        spanishtranslation="to be";
        break;
    case 5:
        spanishtranslation="to have";
        break;
    case 6:
        spanishtranslation="to have";
        break;
}
document.getElementById("spanishtranslation").innerHTML=spanishtranslation;


// spanish date update
var spanishdate;
switch (day)
{
    case 0:
        spanishdate="17 Mar 2017";
        break;
    case 1:
        spanishdate="13 Mar 2017";
        break;
    case 2:
        spanishdate="14 Mar 2017";
        break;
    case 3:
        spanishdate="15 Mar 2017";
        break;
    case 4:
        spanishdate="16 Mar 2017";
        break;
    case 5:
        spanishdate="17 Mar 2017";
        break;
    case 6:
        spanishdate="17 Mar 2017";
        break;
}
document.getElementById("spanishdate").innerHTML="Date: " + spanishdate;
