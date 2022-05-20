import styled from 'styled-components';
import theme from './theme';

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

	font-family: 'Space Mono', monospace;
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

export const SIconContainer = styled.div`
	cursor: pointer;
	opacity: .7;

	background-color: transparent;
	&:hover {
		transition: background-color .4s ease-out;
		background-color: ${theme.colors.yellow};
	}

	&:active {
		background-color: black;
	}
`;
