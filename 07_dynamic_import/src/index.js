import Article from "./components/article"
customElements.define('wiki-article', Article)

document.getElementById("app").innerHTML = `
	<wiki-article></wiki-article>
`
