import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { theme } from 'styles';

const globalStyle = createGlobalStyle`
		@font-face {
		font-family: 'Apple SD Gothic Neo';
		font-style: normal;
		font-weight: 400;
		src: local('AppleSDGothicNeoM'),
			url('../fonts/AppleSDGothicNeo/AppleSDGothicNeoM.woff') format('woff'),
    	url('../fonts/AppleSDGothicNeo/AppleSDGothicNeoM.woff2') format('woff2'),
			url('../fonts/AppleSDGothicNeo/AppleSDGothicNeoM.ttf') format('truetype'),
			url('../fonts/AppleSDGothicNeo/AppleSDGothicNeoM.eot') format('embedded-opentype');
		unicode-range: U+AC00- U+D7A3, U+0030-0039;
	}

	${reset}
	* {
		box-sizing: border-box;
		margin: 0;
	}
	html, body {
		color: ${theme.colors.primary};
		background-color: ${theme.colors.background};
		font-family: -apple-system, 'Apple SD Gothic Neo', Dotum,'돋움', sans-serif; 
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	ol, ul, li {
		list-style: none;
	}
	img {
		display: block;
		width: 100%;
		height: 100%;
	}
	button {
		display: inline-block;
		background: transparent;
		border: none;
		cursor: pointer;
	}	
	p {
    white-space: pre-line;
		margin-block-start: 1em;
    margin-block-end: 1em;
	}
`;

export default globalStyle;
