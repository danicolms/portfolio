import styled, { keyframes } from 'styled-components';
import theme from '../../theme';


const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
   opacity: 1;
  }
`;

export const SProject = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SCaption = styled.span`
	font-family: 'Roboto Mono', monospace;
	font-weight: bold;
	opacity: 75%;
	margin: .5em;
	margin-top: 1.5em;
	font-size: 20px;
	color: ${theme.colors.black};
	user-select: none;
	text-align: center;
	line-height: 1;
`;

export const SEmoji = styled.span`
	animation: 1s ease-out 0s 1 ${appear};
	font-family: 'Roboto Mono', monospace;
	margin-top: .3em;
	/* margin-bottom: .2em; */
	font-size: 120px;
	color: black;
	user-select: none;
	text-align: center;
	line-height: 1;
`;

export const SButton = styled.button`
	border: 1px solid ${theme.colors.black};

	color: ${theme.colors.black};
	background: transparent;
	font-family: 'Space Mono', monospace;
	font-size: 14px;
	max-width: 160px;
	padding: .4em 3em;
	border-radius: 2px;
	cursor: pointer;

	transition: padding .2s ease-out, border-width .2s ease-out;

	&:hover {
		font-weight: bold;
		padding: .4em 4em;
		outline-width: 1.5px;
		border-width: 1.5px;
		outline-style: solid;
		outline-width: 1px;
		outline-color: ${theme.colors.yellow};
	}
`;
