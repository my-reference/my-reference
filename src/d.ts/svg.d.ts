declare module '*.svg' {
	import React = require('react');

	const value: React.FC<React.SVGProps<SVGAElement>>;
	const src: string;
	export default src;
}
