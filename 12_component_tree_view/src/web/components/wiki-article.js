class Article extends HTMLElement {
	render() {
		// TODO: index.html がなかったときの例外処理
		// 初期化
		this.import()
		// URLのpathnameの変更を検知して、
		// 再import
		this.addEventListener("changepathname", () => {
			this.import()
		})
		// go.back(), go.forword()されたときに再import
		window.addEventListener("popstate", () => {
			this.import()
		});
	}

	import() {
		// パスに沿ったHTMLをimportし描画まで行う
			import("../../pages"+`${this.pagepath()}`).then( ArticleModule => {
				this.innerHTML = ArticleModule.default
			})
	}

	pagepath() {
		// pathnameからimport用のパスを生成
		let pathname = window.location.pathname
		let pagepath = ""
		// 末尾が / の時にマッチする
		if (pathname.match(/\/$/) ) {
			pagepath = pathname.replace(/\/$/, "/index.html")
		} else {
			pagepath = pathname
		}
		return pagepath
	}

	connectedCallback() {
		if (!this.rendered) {
			this.render();
			this.rendered = true;
		}
	}
}
export default Article
