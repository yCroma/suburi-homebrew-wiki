const fs = require("fs");
const path = require("path")

const dir = process.cwd();

const filenames = fs.readdirSync(dir);
//console.log("current directory files")
//console.log(filenames)

//console.log("-----------------------")

/*
function printAllFiles(dir) {
	const filenames = fs.readdirSync(dir);
	filenames.forEach( filename => {
		const fullpath = path.join(dir, filename);
		const stats = fs.statSync(fullpath);
		if (stats.isFile()) {
			console.log(fullpath);
		} else if (stats.isDirectory()) {
			printAllFiles(fullpath)
		}
	})
}
*/

//printAllFiles(dir)

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

const filepaths = AllFiles("./pages")
console.log("--------------")
console.log("Filepaths current directory")
console.log(filepaths)

var _ = require('lodash')

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
	
function 

