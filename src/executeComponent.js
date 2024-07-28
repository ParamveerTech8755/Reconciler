function execute(component){
	//component is a function
	let comp;
	if(typeof component == 'function')
		comp = component();
	else if(typeof component == 'object')
		comp = component;

	const element = document.createElement(comp.tag);
	element.id = comp.id;
	element.textContent = comp.content;
	element.classList = comp.classes;
	const children = comp.children ? comp.children.map(c => execute(c)) : [];

	children.forEach(child => {
		element.appendChild(child);
	})

	return element;
}

export default execute;