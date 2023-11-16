//Self invoking function, also known as Immediately invoked function IIFE is a function that run as soon as it is defined
 /*
(function()){

})();

data privacy 
we can do a set up using IIFE immediately after describle block. so it runs before the test case. However this can be achieved with hooks in cypress

 */

(function(){
  var config = {
    apiEndPoint : 'https//endpoint',
    version : '1.0.0'
  }
  console.log(`Initialized API ${config.apiEndPoint}`)
})();

console.log(typeof config) // it gives undefined


//this config is not accessible outside the config function. this is mainly used to avaoid conflict with the naming
//of variables, as variable is not block scopped. hence same var declarring again leads to conflict
