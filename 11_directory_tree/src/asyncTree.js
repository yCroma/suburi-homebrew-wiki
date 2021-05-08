import * as fs from "fs/promises"

async function asyncTreeJSON(path) {
	let JSON = []
	const filenames = await fs.readdir(path)
	for (let filename of filenames) {
		const childpath = `${path}/${filename}`
		const lstat = await fs.lstat(childpath)
		if (lstat.isDirectory()) {
			let newJSON = {
				name: filename,
			}
			newJSON.children = await asyncTreeJSON(childpath)
			JSON.push(newJSON)
		} else if (lstat.isFile()) {
			const newJSON = {
				name: filename,
				children: []
			}
			JSON.push(newJSON)
		}
	}
	return JSON
}

async function consoleAsync() {
	console.log(asyncTreeJSON("."))
	const ans = await asyncTreeJSON(".")
	console.log(JSON.stringify(ans))
	return;
}
consoleAsync()
