import changepathname from "Events/changepathname"

class Href extends HTMLElement {
	render() {
		this.innerHTML = this.textContent
		const relativepath = this.getAttribute("href")
		// ./relative から１文字目を削除することによって
		// 相対パスを作っている
		const absolutepath = relativepath.replace(/\./, "")

		// pushStateする際に絶対パスでないと、
		// パスの地点から相対パスを上書きし続けてしまう
		this.addEventListener("click", event => {
			event.preventDefault();
			window.history.pushState(null, "", absolutepath)
			// wiki-artcle に向けて イベントを発行
			document.querySelector("wiki-article").dispatchEvent(changepathname)
		})

		this.addEventListener("changepathname", () => {
			console.log("hello")
		})

	}

	static get observedAttributes() {
		return ['href']
	}
	/*
	 * constructer() （初期化）では、HTMLの時と同様に利用しようとすると、
	 * レンダリング済みで、innerHTMLやtextContentでの値を後から取得できない
	 * よって、呼び出されてからレンダリングをする
	 */
	connectedCallback() {
		if (!this.rendered) {
			this.render();
			this.rendered = true;
		}
	}

}
export default Href
