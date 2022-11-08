/* Increase number */
function increaseNumber(start,limit,delay,domElement){
      start = start;
      limit = limit;
      delay = delay;
    setInterval(()=>{
       if(start < limit){
          start += 1;
          domElement.innerHTML = start + '+';
       }
    },delay)
  }
   
  
  increaseNumber()