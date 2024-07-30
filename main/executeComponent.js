import parseComponent from "./parseComponent.js"

function execute(comp){
	const [rawComp, childrenComp] = comp();//its a string
	const components = parseComponent(rawComp, childrenComp)//returns an array of component objects

	components.forEach(obj => createComponent(obj))
	if(components.length === 1)
		return components[0];

	return components;
}

function createComponent(component){

	const element = document.createElement(component.tag);
	
	if(attributes in component){
		for(atr in component.attributes)
			element[atr] = component.attributes[atr];
	}
	if(classes in component)
		element.classList = component.classes;
	if(content in component){
		const textNode = document.createTextNode(component.content);
		element.appendChild(textNode);
	}
	const children = component.children ? component.children.map(c => execute(c)) : [];

	children.forEach(child => {
		//child can be an array
		if(child instanceof Array)
			element.append(...child);
		else		
			element.appendChild(child);
	})

	return element;
}

export default execute;
