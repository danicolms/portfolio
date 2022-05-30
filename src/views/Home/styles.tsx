import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../../theme';

export const SBackground = styled.main`
	width: 100%;
	height: 100%;

	padding: 3em;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: ${theme.colors.white};
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

export const SWord = styled(motion.span)`
 display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

export const SCharacter = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
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
	&:hover {
		background-color: ${theme.colors.grey};
	}
`;
