import React, { useState, useEffect } from 'react';
import { SEmoji, SCaption, SButton, SProject } from './styles';

interface IProps {
	title: string;
	src: string;
	emoji: string;
}
const Project: React.FunctionComponent<IProps> = ({ title, src, emoji }) => {
	return (
		<SProject key={`${title}-${emoji}-${src}`}>
			<SEmoji>{emoji} </SEmoji>
			<SCaption> {title}</SCaption>
			<SButton
				onClick={() => {
					window.open(src, '_blank');
				}}
			>
				{' '}
				VER{' '}
			</SButton>
		</SProject>
	);
};

export default Project;
