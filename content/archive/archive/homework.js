//HOMEWORK UPDATE
// Red day update
var ac="Final exam speech start next week; Quiz on debate.";
var photographyi="Portrait PDF: draw and write";
var worldhistory="Study guide for test; Review for test";

var redupdate="Fri.";
var reddue="Wed";


// Blue day update
var spanishii="None";
var chemistry="Practice WS on Edmodo; Review for test";
var algebraii="HW56";
var englishii="Comic strip; ch7 questions on separate paper (choose only 7 questions)";

var blueupdate="Sat.";
var bluedue="Thu";


// Quiz update
var quiz=
    "Speech Quiz on Wed" + "<br/>" +
    "Chemistry Test on Thu" + "<br/>" +
    "History Test on Fri" + "<br/>";



// Project update
var project=
    "Final exam speech on Wed" + "<br/>" +
    "Comic strip on Thu" + "<br/>";


document.getElementById("redupdate").innerHTML="Red Update: "+redupdate;
document.getElementById("redday").innerHTML=
    "Advanced Communication " + "(" + reddue + "): " + ac + ". " + "<br/>" +
    "Photography I " + "(" + reddue + "): " + photographyi + ". " + "<br/>" +
    "World History " + "(" + reddue + "): " + worldhistory + ". " + "<br/>";


document.getElementById("blueupdate").innerHTML="Blue Update: "+blueupdate;
document.getElementById("blueday").innerHTML=
    "Spanish II " + "(" + bluedue + "): " + spanishii + ". " + "<br/>" +
    "Chemistry " + "(" + bluedue + "): " + chemistry + ". " + "<br/>" +
    "Algebra II " + "(" + bluedue + "): " + algebraii + ". " + "<br/>" +
    "English II " + "(" + bluedue + "): " + englishii + ". " + "<br/>";

document.getElementById("quiz").innerHTML=quiz;
document.getElementById("project").innerHTML=project;