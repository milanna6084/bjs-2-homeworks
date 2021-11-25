function cachingDecoratorNew(func) {
    let cash = [];

    function wrapper(...args) {    
      if (cash.length >= 5 ) {
          cash.shift(); 
      }

      let hash = args.join(",");
      let index = cash.findIndex((item) => item.hash === hash); 

      if (index !== -1) {
          console.log("Из кэша: " + cash[index].result);
          return("Из кэша: " + cash[index].result);
      }

      let result = func(...args); 
      cash.push({hash,result});
      console.log("Вычисляем: " + result);
      return("Вычисляем: " + result);        
    }

    return wrapper;
}
  

function debounceDecoratorNew(func, ms) {
  let timer; 

  function wrapper(...args) {     
    if(!timer) func(...args); 

    clearTimeout(timer);  
    timer = setTimeout(() => {
      func(...args)
    }, ms);
  }
  return wrapper;
}


function debounceDecorator2(func, ms) {
  let timer;  

  function wrapper(...args) {        
    if(!timer){
      func(...args); 
      wrapper.count++;
    }

    clearTimeout(timer);  
    timer = setTimeout(() => {
      func(...args);
      wrapper.count++;
      }, ms);
    }
  wrapper.count = 0;    
  return wrapper;
}


