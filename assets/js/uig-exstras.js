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