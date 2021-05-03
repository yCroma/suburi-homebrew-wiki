import matcher from "./matcher"

const updateView = () => {
	const pages = {
		"/": `
			<h1>Vanilla SPA</h1>
		`,
		"/home": `
			<h1>ようこそ</h1>
		`,
		"/profile": `
			<h1>私は太郎です</h1>
		`
	}
	const page = pages[window.location.pathname]
	const render = page || `<h1>404 : Not Found</h1>`
	document.getElementById("app").innerHTML = render
}

const browserback = () => {
	window.addEventListener("popstate", () => {
		updateView();
	})
}

export function router() {
	const URL = window.location.pathname
	matcher(URL)

	browserback()
	document.querySelectorAll("a").forEach( a => {
		a.onclick = event => {
			event.preventDefault();
			window.history.pushState(null, "", a.href);
			updateView();
		};
	})
}
