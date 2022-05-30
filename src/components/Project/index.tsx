import React from 'react';
import Fade from 'react-reveal/Fade';
import { IProject } from '../../views/Projects';
import { SImage, SContainer, SSubtitle } from './styles';

const Project: React.FunctionComponent<IProject> = ({ title, image, url }) => {
	const openProject = (url: string) => {
		window.open(url, '_blank');
	};

	return (
		<Fade bottom duration={1000}>
			<SContainer onClick={() => openProject(url)}>
				<SImage src={image} alt={title} />
				<SSubtitle> {title}</SSubtitle>
			</SContainer>
		</Fade>
	);
};

export default Project;
