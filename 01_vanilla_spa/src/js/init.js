import html from '../html/index.html'

export function init() {
	console.log(html)
	document.body.innerHTML = html;
	console.log("init.js")
}
