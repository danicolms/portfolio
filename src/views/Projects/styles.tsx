import styled from 'styled-components';
import theme from '../../theme';

export const SBackground = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: ${theme.colors.white};

	padding: 3em;
`;

export const SGrid = styled.section`
	@media only screen and (min-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media only screen and (min-width: 900px) {
		grid-template-columns: repeat(3, 1fr);
	}

	width: 90%;
	height: 60%;

	display: grid;
	gap: 1em;
	grid-template-columns: 1fr;

	margin-top: 1em;
	margin-bottom: 1em;
`;
