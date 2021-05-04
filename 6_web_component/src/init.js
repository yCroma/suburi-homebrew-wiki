import Article from "./components/article"

customElements.define('my-article', Article)

export default function init () {
	document.getElementById("app").innerHTML = `
	<h1>import custome dom</h1>
	<my-article></my-article>
	`
}
