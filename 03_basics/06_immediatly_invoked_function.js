// Immediatly Invoked Function Expression (IIFE)
(function child() {
  // named IIFE 
	console.log("DB Connected");
})();

// ()()

((name) => {
  // with parameter 
  console.log(`Db Connected ${name}`);
})("rohan")
