import styled from 'styled-components';
import theme from '../../theme';

export const SContainer = styled.div`
	height: 100%;
	border-radius: 12px;
	background-color: white;
	background-image: none;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 1em;
	cursor: pointer;
	filter: invert(0);
	box-shadow: none;
	transition: filter .7s, box-shadow .1s;

	&:hover {
		filter: invert(1);
		box-shadow: 0 19px 38px #a4a4a44c, 0 15px 12px rgba(161, 161, 161, 0.22);
	}
`;

export const SImage = styled.img`
	object-fit: contain;
	width: 100%;
`;

export const SSubtitle = styled.h3`
	display: inline-block;
	text-align: center;
	font-size: 1em;
	color: ${theme.colors.black};
`;
