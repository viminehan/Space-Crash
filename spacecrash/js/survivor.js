/*************************
  GLOBAL DECLARATIONS
 *************************/
let solved = false;
let fails = 0;

/***************
  NAVIGATION
 ***************/


/****************
 * AUTO-PILOT
 ****************/
document.querySelector("#autoPilotButton").addEventListener('click', autoPilotClick);

function autoPilotClick () { 
  if (solved == true) {
    document.querySelector('#resClock').style.color = "green";
    gameEnd();
    console.log('Game Won.')
  } else { 
    fails ++;
  }

  updateFails();
}

function updateFails() { 
  if (fails == 1) { 
    document.querySelector('#cross1').style.color = "red";
    flashTimer();
  } else if (fails == 2) { 
    document.querySelector('#cross2').style.color = "red";
    flashTimer();
  } else if (fails == 3) { 
    document.querySelector('#cross3').style.color = "red";
    console.log('Game Failed.')
    gameEnd();
    flashTimer();
  } else { 
    console.log('Error: Counting Fail Error.')
  }
}

function flashTimer() { 
  document.querySelector('#resClock').style.color = "red";
  setTimeout(() => { document.querySelector('#resClock').style.color = "white"; }, 200);

}

function gameEnd() { 
  //Freeze clock
  //Call end screen
}

/**********************
 * MODULES 
 *********************/
document.querySelector("#solveButton").addEventListener('click', solveButtonClick);

function solveButtonClick() { 
  solved = true;
  console.log(solved);
};
