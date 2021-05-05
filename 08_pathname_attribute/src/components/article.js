export default class Article extends HTMLElement {
	render() {
		let filepath = this.getAttribute('data-url') || window.location.pathname
		if (filepath === "/") {
			filepath = "/index"
		}
		let article_filepath = "../pages" + filepath + ".html"
		import(`${article_filepath}`)
			.then( Module => {
				return Module.default
			})
			.then( article => {
				this.innerHTML = article
			})
	}

	connectedCallback() {
		if (!this.rendered) {
			this.render();
			this.rendered = true;
		}
	}

	static get observedAttributes() {
		return ['data-url']
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.render()
	}
}
