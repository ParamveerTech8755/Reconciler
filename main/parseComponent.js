export default function parseComponent(component_string, children_component_object){
	// const components = component_string.split('\n');
	const components = component_string.split(';;');
	// console.log(components[0], components[1]);

	return components.map(element => {
		const family = split(element.trim(), '\n');
		// console.log(family[0], family[1])
		// const parentString = family[0];
		
		const [parent, ...children] = family.map(member => parseLine(member, children_component_object));
		// const parent = familyArr[0];
		parent.children = children;

		return parent;
	})
}

function split(str, delimiter){
	let n = str.length
	const res = []

	let ele = ""
	for(let i = 0; i < n; i++){
		if(str[i] === delimiter){
			if(ele)
				res.push(ele)
			ele = ""
		}
		else
			ele += str[i]
	}

	if(ele)
		res.push(ele)

	return res
}

function parseLine(line, childrenComponents){
	let [element, content] = line.split('%%');
	console.log("element: ", element)
	if(content)
		content = content.trim();
	const arr = split(element, ' ').map(chunk => chunk.trim());
	console.log('arr: ', arr)
	const tagName = arr[0];
	const res = {};
	const attributes = {};

	for(let i = 1; i < arr.length; i++){
		const attr = arr[i].split("::");
		const key = attr[0];
		let value = attr[1];
		for(let j = 2; j < attr.length; j++)
			value += " " + attr[j];

		attributes[key] = value;
	}


	if(tagName[0] === '?'){
		//custom component
		res.tag = "Component";
		res.name = tagName.substr(1);
		res.invoke = childrenComponents[res.name];
		res.props = attributes;
	}
	else{
		//DOM
		res.tag = tagName;
		res.attributes = attributes;
		res.content = content;
	}
	console.log(res)
	return res
}