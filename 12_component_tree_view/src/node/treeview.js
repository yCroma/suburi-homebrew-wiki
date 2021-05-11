const fs = require('fs/promises');
const path = require('path')

async function asyncTreeJSON(path, DocumentRoot) {
	let JSON = []
	const filenames = await fs.readdir(path)
	for (let filename of filenames) {
		// 再帰するときの動的なパスとして必要
		const childpath = `${path}/${filename}`
		// フルパスから相対ぱすを生成
		const relativepath = `${path}/${filename}`.replace(`${DocumentRoot}`, ".")
		/* JSON 
		 * {
		 * 	name: filename, 			// 表示用のファイル名
		 * 	path: relativepath,		// アンカーリンク用のパス
		 * 	children: []					// ツリー表示で利用する子要素
		 * }
		 */
		const lstat = await fs.lstat(childpath)
		if (lstat.isDirectory()) {
			// 生成された相対パスはファイルでもディレクトリでも末尾は空となる
			// ディレクトリへのパスは末尾に / を追加
			// sample) index.html, dirctory/
			const directorypath = relativepath + "/"
			let newJSON = {
				name: filename,
				path: directorypath
			}
			newJSON.children = await asyncTreeJSON(childpath, DocumentRoot)
			JSON.push(newJSON)
		} else if (lstat.isFile()) {
			const newJSON = {
				name: filename,
				path: relativepath,
				children: []
			}
			JSON.push(newJSON)
		}
	}
	return JSON
}

async function init() {
	// treeview.jsが相対ディレクトリの起点
	const ParentDir = path.resolve(__dirname, '..')
	// 再帰用のパス
	const ArticlePath = `${ParentDir}/pages`
	// ドキュメントルートにする固定のパス
	const DocumentRoot = `${ParentDir}/pages`
	const TreeJSON = JSON.stringify( await asyncTreeJSON(ArticlePath, DocumentRoot) )
	// index.js と同じ階層のパス
	const TreePath = `${ParentDir}/tree.txt`
	fs.writeFile(`${TreePath}`, TreeJSON)
}

init()
