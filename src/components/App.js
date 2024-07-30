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

//simple ones
// const para1 = `div id:myId class:heading:large:myClass %%this is a paragraph.. fine
// 	button id:btlarge-btn class:submit %%Submit
//	?customComponent props:fine %%content if any
// `


export default function App(){

	return [
			`div id::myFirstImport class::myclass::yourclass %%Hello bhai kaisa hain
				p class::para %%I am doing good
				p class::para %% Fine
				p class::para %% Yo whats up
				button id::my-btn class::btn %% doing good
				;;
			div id::anotherdiv %% this is another div
			;;
			header %%whats up
				a href::https://www.google.com %% click here
				;;
			hr;;
			hr;;
			hr`
		, {}]
	return {
		tag: 'div',
		attributes:{
			id: 'myFirstImport',
			classes: 'myclass'
		},
		content: "Hello bhai kaisa hain",
		children:[p1, p2, p3, b1]
	}
}
//hence App should return a string..