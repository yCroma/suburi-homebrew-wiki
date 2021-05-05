import Article from "./components/article"

// Define the new element
customElements.define('wiki-article', Article)

document.body.innerHTML = `
	<wiki-article></wiki-article>
`

console.log(document.body)
