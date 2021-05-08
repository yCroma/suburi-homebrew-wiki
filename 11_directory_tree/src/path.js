const fs = require("fs");
const path = require("path")

const dir = process.cwd();

const filenames = fs.readdirSync(dir);

let array_paths = []
function AllFiles(dir) {
	// カレントディレクトリないのファイルを取得するために必要
	const filenames = fs.readdirSync(dir);
	console.log(filenames)
	filenames.forEach( filename => {
		const fullpath = path.join(dir, filename);
		const stats = fs.statSync(fullpath);
		if (stats.isFile()) {
			array_paths.push(fullpath);
		} else if (stats.isDirectory()) {
			AllFiles(fullpath)
		}
	})
	return array_paths
}

//const filepaths = AllFiles("./pages")
const filepaths = AllFiles(".")
console.log("--------------")
console.log("Filepaths current directory")
console.log(filepaths)

const _ = require('lodash')

function pathString2Tree(paths, cb) {
    var tree = [];

    //ループする！
    _.each(paths, function (path) {
        // currentLevelを rootに初期化する
        var pathParts = path.split('/');
        pathParts.shift();
        // currentLevelを rootに初期化する
        var currentLevel = tree;

        _.each(pathParts, function (part) {

            // pathが既存しているかどうかをチェックする
            var existingPath = _.find(currentLevel, {
                name: part
            });

            if (existingPath) {
                // Pathはすでにツリー構造に入っているので、追加しない
                // current levelを下の子供階層に設定し直す
                currentLevel = existingPath.children;
            } else {
                var newPart = {
                    name: part,
                    children: [],
                }

                currentLevel.push(newPart);
                currentLevel = newPart.children;
            }
        });
    });

    cb(tree);
}

pathString2Tree(filepaths, function (tree) {
    console.log('tree: ', JSON.stringify(tree));
});


/*	
function pathsarray2TreeJSON(pathsarray, callback) {
	let tree = [];

	pathsarray.forEach( path => {
		console.log("------")
		console.log(path)
		const pathParts = path.split('/')
		console.log("pathParts: ", pathParts)
		pathParts.shift();
		console.log("pathParts.shift: ", pathParts)
		let currentLevel = tree;
		pathParts.forEach( part => {
			console.log("----")
			console.log(part)
			const exsistingPath = fs.existsSync(part)
			console.log(exsistingPath)

			if (exsistingPath) {

			} else {
				let newPart = {
					name: part,
					children: [],
				}

				currentLevel.push(newPart)
				currentLevel = newPart.children;
			}
		})

	})
}

pathsarray2TreeJSON(filepaths)
*/

console.log("--------")
console.log(fs.existsSync("index.js"))

function filepaths2TreeJSON(filepaths){
	filepaths.forEach( filepath => {
		const pathParts = filepath.split('/');
		console.log(pathParts)
		const pathPart = pathParts.shift();
		console.log(pathPart)

		pathParts.forEach( part => {
			const existingPath = fs.existsSync(part) || {
				name: part
			}
			console.log(existingPath)

			if (existingPath) {
				currentLevel = existingPath.children;
			} else {
				const newPart = {
					name: part,
					children: []
				}

				currentLevel.push(newPart)
				currentLevel = newPart.children
			}
		})
	})
}

//filepaths2TreeJSON(filepaths)

function FileDetective(path) {
	const existsPath = fs.statSync(path)
	if (existsPath.isDirectory()) {
		FileDetective(path)
	} else if (existsPath.isFile()) {
		return 0
	}
}

// 
function CreateJSON(filepathParts) {
	let createPath = ""
	let JSONArray = []

	filepathParts.forEach( filepathPart => {
		const addedPath = createPath ? "/" + filepathPart : filepathPart
		createPath += addedPath
		console.log(createPath)
		const stats = fs.statSync(createPath)
		if (stats.isDirectory()) {
			console.log("isDir: ", filepathPart)
			const newPart = {
				name: filepathPart,
				children: []
			}
			JSONArray.push(newPart)
			JSONArray = newPart.children
		} else if (stats.isFile()) {
			console.log("isFile: ", filepathPart)
			let JSONArray = {
				name: filepathPart,
				children: []
			}
		}
	})
	console.log(JSONArray)
}

// ディレクトリ毎に再起関数でJSONを作成する
// ディレクトリにヒットしたらJSONを掘り下げる
// ファイルはJSONに追加

function TreeJSON(dir) {
	let JSON = []
	let CurrentJSON = {}

	const filenames = fs.readdirSync(dir)
	console.log(filenames)

	// fileならJSONに登録
	// dir ならその中で再帰的にJSONへ登録
	filenames.forEach( filename => {

	})
	
}

function AddJSON(path) {
	let JSON = []
	const filenames = fs.readdirSync(path)
	console.log("path: ", path)
	console.log("filenames: ", filenames)
	filenames.forEach ( filename => {
		const childrenpath = `${path}/${filename}`
		const stats = fs.statSync(childrenpath)
		if (stats.isDirectory()) {
			let newJSON = {
				name: filename,
			}
			console.log("currentpath: ", childrenpath)
			newJSON.children = AddJSON(childrenpath)
			JSON.push(newJSON)
		} else if (stats.isFile()) {
			const newJSON = {
				name: filename,
				children: []
			}
			console.log("currentpath: ", childrenpath)
			JSON.push(newJSON)
			console.log(JSON)
		}
	})
	return JSON
}

//TreeJSON(".")
// AddJSON(".")
console.log("------------")
//console.log(JSON.stringify(AddJSON(".")));

function FileTreeJSON(filepaths){
	console.log(filepaths)
	filepaths.forEach( filepath => {
		console.log(filepath)
		const filepathParts = filepath.split('/')
		console.log(filepathParts)
		// ファイルパスを生成するための配列
		CreateJSON(filepathParts)
		/*
		const filepathArray = []
		filepathParts.forEach( part => {
			const existpath = fs.statSync(part)
			if (existpath.isFile()) {

			} else if (existpath.isDirectory()) {

			}
		})
		*/
	})
}

//FileTreeJSON(filepaths)
