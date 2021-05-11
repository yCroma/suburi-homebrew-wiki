import Href from "Components/wiki-a"
import TreeView from "Components/wiki-treeview"
import Article from "Components/wiki-article"

function define( tagname, extendsClass) {
	customElements.define(tagname, extendsClass)
}

const TagInit = () => {
	define("wiki-a", Href)
	define("wiki-treeview", TreeView)
	define("wiki-article", Article)
}
export default TagInit
