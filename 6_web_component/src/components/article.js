
export default class Article extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'})
		this.shadowRoot.appendChild(this.template().content.cloneNode(true))
	}
	
	template() {
		const template = document.createElement('template')
		template.innerHTML = `
			<p>My Article</p>
			<h2>test</h2>
		`
		return template
	}
}
