console.log("index.js")


import("./pages/test.html")
	.then( Module => {
		return Module.default
	})
	.then( article => {
		document.getElementById("app").innerHTML = article
	})
