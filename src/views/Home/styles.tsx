import styled from 'styled-components';

import theme from '../../theme';

export const SBackground = styled.div`
	width: 100%;
	height: 100%;

	padding: 3em;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const STitle = styled.h1`
	font-size: 3em;
	color: ${theme.colors.black};
`;

export const SSubtitle = styled.h3`
	display: inline-block;
	text-align: center;
	font-size: 1em;
	color: ${theme.colors.grey};
`;

export const SSocialContainer = styled.section`
	display: flex;
	justify-content: center;
`;

export const SSocialIcon = styled.img`
	width: 1.5em;
	object-fit: contain;
	opacity: 20%;
	margin: .9em .5em;
	cursor: pointer;
	padding: .1em;
	border-radius: 3px;
background-color: transparent;

	transition: background-color .5s;
	&:hover {
		background-color: ${theme.colors.grey};
	}
`;
