const p1 = {
	tag: 'p',
	content: 'I am doing good',
	classes: 'para'
}
const p2 = {
	tag: 'p',
	content: 'Fine',
	classes: 'para'
}
const p3 = {
	tag: 'p',
	content: 'wtv the business',
	classes: 'para'
}
const b1 = {
	tag: 'button',
	id: 'mybtn',
	content: 'doing good',
	classes: 'btn'
}

export default function App(){
	return {
		tag: 'div',
		id: 'myFirstImport',
		classes: 'myclass',
		content: "Hello bhai kaisa hain",
		children:[p1, p2, p3, b1]
	}
}