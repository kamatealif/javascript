// Immediatly Invoked Function Expression (IIFE)
(function child() {
	console.log("DB Connected");
})();

// ()()

(() => {
	console.log(`Db Connected Two`);
})()