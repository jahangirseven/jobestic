/* Increase number */
function increaseNumber(start,limit,delay,domElement){
      start = start;
      limit = limit;
      delay = delay;
    setInterval(()=>{
       if(start < limit){
         if(start == Math.floor(limit/3) ){
            start = start+(start/2)
         }
          start += 1;
          domElement.innerHTML = Math.floor(start) + '+';
       }
    },delay)
  }
   
  
  increaseNumber()

  /* Header item popup toggle */

  function toggleInnerElement(parentElement_selector,popupElement_selector,classname){
      try{
         document.querySelector(parentElement_selector).addEventListener('click',()=>{
            document.querySelector(popupElement_selector).classList.toggle(classname);
         })
      }catch(e){
          console.log('ERROR: Failed to find DOM elements')
      }
  }