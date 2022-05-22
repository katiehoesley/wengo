import * as React from 'react';

import "./styles.css"


function ProgressBar({width, percent}) {
  
    let progress = 20 * 20;

    var seconds = 17;
    var el = document.getElementById('seconds-counter');
    
    function incrementSeconds() {
        seconds += 1;
        el.innerText = "You have been here for " + seconds + " seconds.";
    }

    return (
      <div>
      <h4 id="time-staked-text">time staked: 10:24:{seconds}</h4>
      <div className="progress-div" style={{width: width}} onload="myFunction();">
           <div style={{width: `${progress}px`}}className="progress"/>
      </div>
      </div>
    )
}

export default ProgressBar