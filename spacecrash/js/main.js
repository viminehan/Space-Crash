/*************************
  GLOBAL DECLARATIONS
 *************************/


  

/***************
  NAVIGATION
 ***************/
  document.querySelector("#selectResponder").addEventListener('click', selectResponderClick);
  document.querySelector("#selectSurvivor").addEventListener('click', selectSurvivorClick);

  function selectResponderClick () { 
    window.location = "responder.html"
  }

  function selectSurvivorClick () { 
    window.location = "survivor.html"
  }

