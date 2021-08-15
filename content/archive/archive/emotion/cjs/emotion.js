function a(){
    document.getElementById("button").setAttribute("class", "add-emotion-button-after");
    setTimeout("document.getElementById('button').style.display='none'",200);
    document.getElementById("card").style.display="inherit";
    setTimeout("document.getElementById('card').setAttribute('class', 'add-emotion-card-after')",1);
    document.getElementById("card").innerHTML=" \
        <h2 class='logintitle'>Add</h2> \
        <h5 class='loginsubtitle'>to your Emotion Diary</h5> \
            <form action='addemotion.php' method='POST'> \
                <input class='emotion' type='text' name='emotion' id='emotion' required='required' autofocus='autofocus'> \
                <label class='emotionlabel' for='emotion'>Emotion</label> \
                <input class='point' type='number' name='point' id='point' required='required'> \
                <label class='pointlabel' for='point'>Point</label> \
                <input class='comment' type='text' name='comment' id='comment' required='required'> \
                <label class='commentlabel' for='comment'>Comment (99 characters max, not required)</label><br/> \
                <input class='emotionsubmit' type='submit' value='ADD'> \
                <input class='emotioncancel' type='button' onclick='b()' value='Cancel'> \
            </form> \
    ";
}

function b(){
    document.getElementById("card").setAttribute("class", "add-emotion-card-before");
    setTimeout("document.getElementById('card').style.display='none'",200);
    document.getElementById("button").style.display="inherit";
    setTimeout("document.getElementById('button').setAttribute('class', 'add-emotion-button-before')",1);
    document.getElementById("button").innerHTML="+";
}


/*.left_top{
  left: 10px;
  top: 40px;
  transition: left 340ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms,
           top 340ms cubic-bezier(0.4, 0.0, 0.2, 1) 35ms;

}*/
