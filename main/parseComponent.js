export default function parseComponent(component_string, children_component_object){
	const components = component_string.split('\n');

	return components.map(element => {
		const [ele, content] = element.split("%%");
		const attr = ele.split(" ");
		const res = {
			tag: attr[0],
			content
		}
		for(let i = 1; i < attr.length; i++){
			const arr = attr[i].split(":");
			const key = arr[0];
			let value = "";
			for(let j = 1; j < arr.length; j++)
				value += arr[j];
			res[key] = value;
		}

		return res;
	})
}