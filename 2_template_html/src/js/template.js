import header from "../html/header.html"
import footer from "../html/footer.html"
import index from "../html/index.html"

export default () => {
	const template = header + index + footer
	document.body.innerHTML = template
}
