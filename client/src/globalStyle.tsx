import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<any>`

body {
	margin: 0;
	box-sizing: border-box;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
		'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100vh;
	width: 100vw;
	display: flex;
	overflow-x: hidden;
}

h1 {
	opacity: 87%;
	padding: 0;
	opacity: 60%;
	color: rgb(55, 158, 158);
	color: linear-gradient(90deg, rgba(55, 158, 158, 1) 0%, rgba(87, 56, 143, 1) 75%);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
	padding: 0;
	margin: 0;
    opacity: ${props => props.theme.textMediumEmph};
}

h3 {
	font-size: 1.5rem;
	text-transform: uppercase;
	font-weight: 700;
    opacity: ${props => props.theme.textMediumEmph};
}

p {
	font-weight: 300;
	font-size: 0.8rem;
}

ul,
li {
	margin: 0;
	padding: 0;
	list-style: none;
}

header {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

}

main {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}

footer {
	width: 100%;
	background-color: #fff;
}

small {
	color: #000;
}

a {
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-decoration: none;
}

img {
	object-fit: cover;
}

button {
	background-color: #222;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	cursor: pointer;

}

button:hover {
	transition: 0.2s ease-in-out;
	opacity: 80%;
}





`;

export default GlobalStyle;
