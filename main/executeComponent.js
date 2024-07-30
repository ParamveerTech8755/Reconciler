import parseComponent from "./parseComponent.js"

function execute(comp){
	const [rawComp, childrenComp] = comp();//its a string
	const components = parseComponent(rawComp, childrenComp)//returns an array of component objects

	return components.map(obj => createNode(obj))
	// if(components.length === 1)
	// 	return components[0];
	// return components;
}

function createCustomComponent(component){
	return execute(() => component.invoke(component.props))
}

function createNode(component){
	if(component.tag === "Component")
		return createCustomComponent(component);
	// console.log(component)

	const element = document.createElement(component.tag);
	
	for(let atr in component.attributes){
		if(component.attributes[atr])
			element[atr] = component.attributes[atr];
	}

	if(component.class)
		element.classList = component.class;

	if(component.content){
		const textNode = document.createTextNode(component.content);
		element.appendChild(textNode);
	}

	if(component.children)
		element.append(...component.children.map(c => createNode(c)));
	
	// const children = component.children ? component.children.map(c => execute(c)) : [];

	// children.forEach(child => {
	// 	//child can be an array
	// 	if(child instanceof Array)
	// 		element.append(...child);
	// 	else		
	// 		element.appendChild(child);
	// })

	return element;
}

export default execute;
