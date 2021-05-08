const fs = require("fs");
const path = require("path")

// 大量にファイルが更新された際に、
// 大量にこのプログラムが展開された場合枯渇するから
// 非同期処理で実装する
 function AddJSON(path) {
	let JSON = []
	// fs.readdirSync returns Array
	const filenames = fs.readdirSync(path)
	filenames.forEach ( filename => {
		// fs.lstatSyncでファイルの情報を動的に取得するために
		// 開始ディレクトリのパスとファイル名が必要
		const childrenpath = `${path}/${filename}`
		const lstats = fs.lstatSync(childrenpath)
		if (lstats.isDirectory()) {
			// ディレクトリなら空の配列を作る代わりに
			// 戻り値の配列で再帰的に探索していく
			let newJSON = {
				name: filename,
			}
			newJSON.children = AddJSON(childrenpath)
			JSON.push(newJSON)
		} else if (lstats.isFile()) {
			// ファイルならJSONを生成して追加
			// 空の配列はファイルであることを意味している
			const newJSON = {
				name: filename,
				children: []
			}
			JSON.push(newJSON)
			console.log(filename)
		}
	})

	return JSON
}

//console.log(JSON.stringify(AddJSON(".")));

// 全てのファイルに対してlstat
// promiseではsymboliclinkが返される

function lstatsPromise(path) {
	let JSON = []
	const filenames = fs.readdirSync(path)
	filenames.forEach ( filename => {
		const childrenpath = `${path}/${filename}`
		fs.lstatSync(childrenpath).then( lstats => {
			console.log(lstats)
		})
	})
}

console.log(lstatsPromise("."))
