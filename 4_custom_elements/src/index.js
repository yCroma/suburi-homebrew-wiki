// create custom element
class WikiHello extends HTMLElement {
	constructor() {
		super();
		//this.shadow = this.attachShadow({mode: 'opne'})
		const helloElement = document.createElement("h1")
		helloElement.textContent = "WikiHello"
	}
}

// define DOM
console.log("define init")
customElements.define("wiki-hello", WikiHello)
console.log("defined DOM")


// Create a class for the element
class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Create spans
    var wrapper = document.createElement('span');
    wrapper.setAttribute('class','wrapper');
    var icon = document.createElement('span');
    icon.setAttribute('class','icon');
    icon.setAttribute('tabindex', 0);
    var info = document.createElement('span');
    info.setAttribute('class','info');

    // Take attribute content and put it inside the info span
    var text = this.getAttribute('text');
    info.textContent = text;

    // Insert icon
    var imgUrl;
    if(this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = 'img/default.png';
    }
    var img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    // Create some CSS to apply to the shadow dom
    var style = document.createElement('style');

    style.textContent = '.wrapper {' +
                           'position: relative;' +
                        '}' +

                         '.info {' +
                            'font-size: 0.8rem;' +
                            'width: 200px;' +
                            'display: inline-block;' +
                            'border: 1px solid black;' +
                            'padding: 10px;' +
                            'background: white;' +
                            'border-radius: 10px;' +
                            'opacity: 0;' +
                            'transition: 0.6s all;' +
                            'position: absolute;' +
                            'bottom: 20px;' +
                            'left: 10px;' +
                            'z-index: 3;' +
                          '}' +

                          'img {' +
                            'width: 1.2rem' +
                          '}' +

                          '.icon:hover + .info, .icon:focus + .info {' +
                            'opacity: 1;' +
                          '}';

    // attach the created elements to the shadow dom

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// Define the new element
customElements.define('popup-info', PopUpInfo);


const Body = document.body
Body.innerHTML = `
<div id="app"></div>
<script src="index.js"></script>
`

document.getElementById(`app`).innerHTML = `
<wiki-hello></wiki-hello>
<h1>hello</h1>
<popup-info img="img/alt.png" text="Your card validation code (CVC) is an extra
                                    security feature — it is the last 3 or 4
                                    numbers on the back of your card.">
`

console.log(Body)
console.log(document)
