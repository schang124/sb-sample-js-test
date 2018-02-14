export const sizeFallback = (...args) => {
	const units = ['px', 'rem'];
	const cssList = args[0][0].replace(/(\r\n|\n|\r)/gm, '').replace(/\s\s+/g, '').split(';');
	cssList.splice(-1, 1);

	const styles = cssList.map((css) => {
		const cssArray = css.split(':');
		const key = cssArray[0];
		const values = cssArray[1].replace(' ', '');

		return units.map((unit) => {
			return `${key}: ${processValues(values, unit)};`
		});
	});

	return styles.reduce((acc, curr)=>{
			return acc.concat(curr);
		}).join('\n');
};

function getSize(pixel, unit){
	const ROOT_FONT_SIZE = 16;

	switch(unit){
		case 'rem':
			return pixel / ROOT_FONT_SIZE;
		case 'em':
			return pixel / ROOT_FONT_SIZE;
		default:
			return pixel;
	}
}

function processValues(values, unit){
	return values
		.toString()
		.replace(/px/g, '')
		.split(' ')
		.map((v) => {
			return `${getSize(parseInt(v, 10), unit)}${unit}`;
		})
		.join(' ');
}