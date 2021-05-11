import TreeJSON from "../utils/treejson"
// 1. SPAのパス変更に対応したDOMを追加
class TreeView extends HTMLElement {
	constructor() {
		super()
		const treeview = this.treeview()
		treeview.addEventListener("click", event => {
			console.log("event: ", )
		})
		console.log(this.treeview())
		const li_dirs = Array.from( treeview.getElementsByClassName("dir") )
		/*
		console.log(li_dirs)
		li_dirs.forEach( li_dir => {
			li_dir.addEventListener("click", () => {
				li_dir.classList.toggle("expand")
				console.log(li_dir)
			})
		})
		*/
		const style = this.style()
		const shadow = this.attachShadow({mode: 'open'})
		shadow.appendChild(treeview)
		shadow.appendChild(style)
	}
	/*
	 * JSON
	 * {
	 * 		name: display name,
	 * 		path: filepath for anker link,
	 * 		children: file under dirctory
	 * }
	 */

	searchFile( JSON ) {
		const docfrag = document.createDocumentFragment()
		// if the JSON is file, JSON.children value []
		if (JSON.children.length > 0) {
			// JSON.children.length > 0 means thas JSON.path is a directory
			// Thus, recursion on files under a directory

			// 親としてのroot li を作成
			// <wiki-a href="path" > filename </wiki-a>
			const wiki_a = document.createElement("wiki-a")
			wiki_a.setAttribute("href", `${JSON.path}`)
			wiki_a.textContent = JSON.name
			// <li><wiki-a href="path" > filename </wiki-a></li>
			const li = document.createElement("li")
			// directoryのタイトルは閉じれるようにする
			li.setAttribute("class", "dir")
			li.appendChild(wiki_a)

			/*
			 * <li>
			 * 		<wiki-a href="path">dir name</wiki-a>
			 * 		<ul>
			 * 			<li><wiki-a href="path"> file name under dirctory</wiki-a></li>
			 * 		</ul>
			 * </li>
			 */
			const ul = document.createElement("ul")
			// ディレクトリ内に複数のディレクトリがある場合
			// 次のforEachで ul 内に再帰して追加する
			// ディレクトリ毎に ul を生成する
			JSON.children.forEach( JSON => {
				ul.append(this.searchFile(JSON))
			})
			// 上のコメントような li ができる
			li.append(ul)
			docfrag.append(li)

		} else {
			// <wiki-a href="path" > filename </wiki-a>
			const wiki_a = document.createElement("wiki-a")
			wiki_a.setAttribute("href", `${JSON.path}`)
			wiki_a.innerHTML = JSON.name
			// <li><wiki-a href="path" > filename </wiki-a></li>
			const li = document.createElement("li")
			li.appendChild(wiki_a)
			// template に li を追加
			docfrag.append(li)
		}
		return docfrag
	}

	treeview() {
		let ul = document.createElement("ul")
		TreeJSON.forEach( JSON => {
			ul.appendChild(this.searchFile(JSON))
		})
		return ul
	}

	style() {
		const style = document.createElement("style")
		style.textContent = `
		li.dir > li, li.dir > ul {
			display: none;
		}
		li.expand > ul {
			display: block;
		}
		`
		return style
	}
}

export default TreeView
