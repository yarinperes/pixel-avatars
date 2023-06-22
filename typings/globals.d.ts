declare module '*.png' {
	const urlToFile: string;
	export default urlToFile;
}

declare module '*.jpg' {
	const urlToFile: string;
	export default urlToFile;
}

declare module '*.jpeg' {
	const urlToFile: string;
	export default urlToFile;
}

declare module '*.gif' {
	const urlToFile: string;
	export default urlToFile;
}

declare module '*.svg' {
	import React = require('react');
	const src: React.FC<React.SVGProps<SVGSVGElement>>;
	export default src;
}
