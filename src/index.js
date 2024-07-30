import App from "./components/App.js"
import execute from "../main/executeComponent.js"

const root = document.createElement('div');
root.id = "root";
const AppNode = execute(App);
// console.log(AppNode)
root.append(...AppNode);
// console.log(AppNode)

document.body.appendChild(root);