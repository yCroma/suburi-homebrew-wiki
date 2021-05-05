export default class Article extends HTMLElement {
	constructor() {
		super();
		// TODO: shadow root とは？
		// Create a shadow root
		// TODO: thisの中身は？attatchShadowのプロパティは？
		const shadow = this.attachShadow({mode: 'open'})
		
		// Create div
		const div = document.createElement('div')
		div.setAttribute('id', 'article')

		// Add text
		const comment = this.getAttribute('innerHTML')
		div.comment = "hello?"

		// attache the created element to the shadow dom
		shadow.appendChild(div);
	}
}

