import Hello from "./components/hello"

Hello();
console.log(Hello())

const App = document.createElement(`div`)
App.id = "App"
App.innerHTML = "App"
document.body.append(App)

App.innerHTML = `${Hello()}`
