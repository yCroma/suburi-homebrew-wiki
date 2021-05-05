export default class Article extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({mode: 'open'})

		import("../pages/index.html")
			.then( Module => {
				return Module.default
			})
			.then( article => {
				const template = document.createElement('template')
				template.innerHTML = article
				this.shadowRoot.appendChild(template.content.cloneNode(true))
			})
	}
}

