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

        else {
        let result = func(...args); 
        cash.push({hash,result});
        console.log("Вычисляем: " + result);
        return("Вычисляем: " + result);
        }
    }

    return wrapper;
}
  

function debounceDecoratorNew(func, ms) {
  let timer;  

  function wrapper(str) {    
    if (timer) {
      clearTimeout(timer);  
      console.log(str);   
      timer = setTimeout(() => {
        func();
      }, ms);
      return;
    }
    else {
      func(); 
      
      timer = setTimeout(() => {
        func();
        }, ms); 
    } 
  }
  return wrapper;
}


function debounceDecorator2(func, ms) {
  let timer;  

  function wrapper(str) { 
    wrapper.count++;   
    if (timer) {
      clearTimeout(timer);   
      timer = setTimeout(() => {
        func();
      }, ms);
      return;
    }
    else {
      func(); 
      
      timer = setTimeout(() => {
        func();
        }, ms); 
    } 
  }
  wrapper.count = 0;
  return wrapper;
}


