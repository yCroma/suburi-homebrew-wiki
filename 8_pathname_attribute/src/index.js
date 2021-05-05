import { Module } from "webpack"
import Article from "./components/article"
customElements.define('wiki-article', Article)

document.getElementById("app").innerHTML = `
	<wiki-article></wiki-article>
	<a href="./">index</a>
	<a href="./test">test</a>
`

document.querySelectorAll("a").forEach(a => {
	a.onclick = event => {
		event.preventDefault();
		window.history.pushState(null, "", a.href)
		document.querySelector("wiki-article").setAttribute("data-url", `${window.location.pathname}`)
	}
})

import("./pages/index.html").then( Module => {
	console.log(Module.default)
})
