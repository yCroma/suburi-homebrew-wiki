const tabline = document.getElementById("tabline")
console.log("load: ", tabline.getBoundingClientRect())
const line_length = document.querySelectorAll("h3").length
console.log("line_length: ", line_length)
const line_content = document.querySelectorAll("h3")

function replaceArrayElements(array, targetId, sourceId) {
    const cloneArray = [...array];
    [cloneArray[targetId], cloneArray[sourceId]] = [array[sourceId], array[targetId]];
    return cloneArray;
}
const replaced_collection = replaceArrayElements(line_content, 0, 2)
console.log(replaced_collection)
tabline.innerHTML = ""
replaced_collection.forEach( tab => {
	tabline.append(tab)
})


document.querySelectorAll("h3").forEach( elm => {
	// １の位を切り捨てして１０の位を返す
	const hasuu = 100 / line_length /10 | 0;
	// １０倍して横幅にする
	const tab_width = hasuu * 10;
	elm.setAttribute("style", `width: ${tab_width}%`)
	console.log(tab_width)
})

window.addEventListener("resize", () => {
	const tabline = document.getElementById("tabline")
	console.log("resize: ", tabline.getBoundingClientRect())
})



document.querySelectorAll('h3').forEach( elm => {
	//console.log("getBoundingClientRect(): ", elm.getBoundingClientRect())

	elm.addEventListener("click", () => {
		console.log("click")
	})

	elm.addEventListener("mousedown", event => {
		event.target.setAttribute("draggable", "true")
		event.target.classList.toggle("focus")
		console.log("event mousedown")
	})
	elm.addEventListener("mouseup", event => {
		event.target.classList.toggle("focus")
	})
	elm.addEventListener("dragstart", event => {
		console.log("event: ", event)
		event.target.style.opacity = 0.5
	}, false)
	elm.addEventListener("dragenter", event => {
		console.log("event dragenter")
		//console.log("target: ", event)
	})
	elm.addEventListener("dragover", event => {
		//console.log("event dragover")
		//console.log("over target: ", event.target.getBoundingClientRect())
		//console.log("drag over: ", event.clientX)
	})
	elm.addEventListener("dragleave", event => {
		console.log("event dragleave")
		//console.log("leave target: ", event.target)
	})
	elm.addEventListener("dragexit", event => {
		console.log("event dragexit")
	})
	elm.addEventListener("dragend", event => {
		// if dragging is end, class of focus must be removed
		event.target.classList.remove("focus")
		event.target.style.opacity = ""
		console.log("event dragend")
	}, false)
	elm.addEventListener("drop", event => {
		console.log("event drop")
		console.log("position(): ", event)
	})
	elm.addEventListener("drag", event => {
		//console.log("drag: ",event.target.getBoundingClientRect())
		//console.log("event: ", event.clientX)
		//console.log("event target:, ", event)
	})
})
