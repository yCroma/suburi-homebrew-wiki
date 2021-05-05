class TimeFormatted extends HTMLElement {

  render() { // (1)
    let date = new Date(this.getAttribute('datetime') || Date.now());

    this.innerHTML = new Intl.DateTimeFormat("default", {
      year: this.getAttribute('year') || undefined,
      month: this.getAttribute('month') || undefined,
      day: this.getAttribute('day') || undefined,
      hour: this.getAttribute('hour') || undefined,
      minute: this.getAttribute('minute') || undefined,
      second: this.getAttribute('second') || undefined,
      timeZoneName: this.getAttribute('time-zone-name') || undefined,
    }).format(date);
  }

  connectedCallback() { // (2)
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  static get observedAttributes() { // (3)
    return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];
  }

  attributeChangedCallback(name, oldValue, newValue) { // (4)
    this.render();
  }

}
customElements.define("time-formatted", TimeFormatted);

class Article extends HTMLElement {
	render() {
		let filepath = this.getAttribute('data-filepath')
		if (filepath === "/") {
			filepath = "/index"
		}
		import(`./pages${filepath}.html`).then( Module => {
			return Module.default
		}).then( article => {
			this.innerHTML = article
		})
	}

	connectedCallback() {
		if (!this.rendered) {
			this.render();
			this.rendered = true
		}
	}

	static get observedAttributes() {
		return ['data-filepath']
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.render()
	}
}
customElements.define("wiki-article", Article)

document.getElementById("app").innerHTML = `
<time-formatted id="elem" hour="numeric" minute="numeric" second="numeric"></time-formatted>
<br>
<wiki-article data-filepath="/"></wiki-article>
<br>
<a href="./">index.html</a>
<a href="./test">test.html</a>
`

setInterval(() => elem.setAttribute('datetime', new Date()), 1000);
document.querySelectorAll("a").forEach(a => {
	a.onclick = event => {
		event.preventDefault();
		window.history.pushState(null, "", a.href);
		document.querySelector("wiki-article").setAttribute('data-filepath', window.location.pathname)
	}
})
