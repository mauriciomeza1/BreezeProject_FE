
import React from 'react'

export default function MoodTracker() {
  return (
    <div>

        
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
<link rel="stylesheet" href="style.css"/>


<div class="container">

<header>
    <p>Mood Diary v1.0 Beta</p>
</header>

<h1>Sooo, what happened or what are you thinking?</h1> 
<textarea id="input-diary" class="textarea-normal" autofocus placeholder="Sooo, what happened?"></textarea>
<div id="input-diary" style="height: 100px;"></div>
 <p id="char-left">140 left</p> 

<div class="container-mood-selector">
   <h2>How does it make you feel?</h2> 



   
    <ul id="moods">
        <li id="mood-happy"><img src={require("https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/129/slightly-smiling-face_1f642.png" )} width="60" title="happy"/></li>
        <li id="mood-neutral"><img src={require("https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/129/expressionless-face_1f611.png" )} width="60" title="neutral"/></li>
        <li id="mood-sad"><img src={require("https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/129/white-frowning-face_2639.png" )} width="60" title="sad"/></li>
        <li id="mood-unsure"><img src={require("https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/129/face-without-mouth_1f636.png")} width="60" title="unsure"/></li>
    </ul>
</div>

<div class="container-meter">

    <div id="mood-meter">
        <div id="meter-happy" class="mood-meter-perc"></div><div id="meter-neutral" class="mood-meter-perc"></div><div id="meter-sad" class="mood-meter-perc"></div><div id="meter-unsure" class="mood-meter-perc"></div>
    </div>

</div>    

<ul id="mood-sorter">
    <li id="sort-all" class="sort-selected">All</li><li id="sort-happy">Happy</li><li id="sort-neutral">Neutral</li><li id="sort-sad">Sad</li><li id="sort-unsure">Unsure</li>
</ul>

<p id="empty-entries" class="text-center">You haven't logged any entry yet.<br/>Think about what happened today!</p>

<ul id="entries">
     <li class="entry sad-entry">
        <p class="entry-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus tortor nunc, vel finibus felis ultricies nec. Ut dapibus est vitae tortor maximus tristique.</p>

        <div class="overflow-hidden">
            <span class="timestamp">10 May 18, 9:00 PM</span>  
            <div class="actions">
                <span class="">Delete</span>  
                <span class="">Edit</span>  
            </div>
        </div>
    </li> 
</ul>


</div>

    </div>
  )
}







