import TagInit from "Utils/define"

async function init() {
	TagInit()
}

document.getElementById("app").innerHTML = `
<wiki-a href="./">link ./</wiki-a>
<br>
<wiki-a href="./test.html">link ./test.html</wiki-a>
<br>
<wiki-a href="/dir/test.html">dir absolute</wiki-a>
<br>
<wiki-treeview></wiki-treeview>
<wiki-article></wiki-article>

`

init()
