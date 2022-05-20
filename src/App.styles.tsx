import styled from 'styled-components';
import theme from './theme';
interface IIconContainerProps {
	disabled: boolean;
}

export const SBackground = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${theme.colors.yellow};
`;

export const SContainer = styled.main`
	width: 80%;
	height: 90%;
	max-width: 1000px;
	max-height: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: center; */
	background: ${theme.colors.white};
	padding: 2em;
	border-radius: 8px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const STitle = styled.h1`
	@media (min-width: 480px) {
		& {
			font-size: 64px;
		}
	}
	font-family: 'Roboto Mono', monospace;
	font-weight: bold;
	opacity: 75%;
	margin: 0;
	margin-bottom: .5em;
	margin-top: .3em;
	font-size: 40px;
	color: black;
	user-select: none;
	text-align: center;
	line-height: 1;
`;

export const SProjectContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 2.5em;
	width: 100%;
	max-width: 25em;
`;

export const SIconContainer =
	styled.div <
	IIconContainerProps >
	`
	cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
	opacity: ${(props) => (props.disabled ? '.06' : '.35')};


	background-color: transparent;

		${(props) =>
			!props.disabled &&
			`
		 &:hover {
		 	transition: background-color .4s ease-out;
		 	background-color: ${theme.colors.yellow};
		 }

		 &:active {
			background-color: black;
		 }
		 `}
`;

export const SSocialContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 4.5em;
`;

export const SImage = styled.img`
	width: 1.5em;
	object-fit: contain;
	opacity: 20%;
	margin: 1em;
	cursor: pointer;
	padding: .1em;
	border-radius: 3px;

	&:hover {
		width: 1.7em;
		background-color: ${theme.colors.yellow};
	}
`;

export const SCredit = styled.span`
	font-family: 'Roboto Mono', monospace;
	font-size: 9px;
	opacity: 20%;
	margin: .3em;
`;
