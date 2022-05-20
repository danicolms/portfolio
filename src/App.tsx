import React, { useState } from 'react';
import { SBackground, SContainer, SIconContainer, SProjectContainer, STitle } from './App.styles';
import { SNext } from './components/Next';
import { SPrevious } from './components/Previous';
import Project from './components/Project/index';

enum EPagingTypes {
	NEXT = 'next',
	PREVIOUS = 'previous'
}

const projects = [
	{
		title: 'LA CAJA',
		src: 'https://danicolms.github.io/rotating-box/',
		emoji: '📦'
	},
	{
		title: 'EL RELOJ',
		src: 'https://danicolms.github.io/word-clock/',
		emoji: '🕰️'
	},
	{
		title: 'LINEAS CRUZADAS',
		src: 'https://danicolms.github.io/intersecting-lines/',
		emoji: '🔀'
	}
];

export const App: React.FunctionComponent = () => {
	const [ current, setCurrent ] = useState<number>(0);

	const handlePaging = (type: EPagingTypes): void => {
		if (type === EPagingTypes.NEXT) {
			if (current + 1 < projects.length) {
				setCurrent(current + 1);
			}
		} else if (type === EPagingTypes.PREVIOUS) {
			if (current - 1 >= 0) {
				setCurrent(current - 1);
			}
		}
	};

	return (
		<SBackground>
			<SContainer>
				<STitle> Mis proyectos</STitle>
				<SProjectContainer>
					<SIconContainer onClick={() => handlePaging(EPagingTypes.PREVIOUS)}>
						<SPrevious />
					</SIconContainer>

					<Project
						src={projects[current].src}
						title={projects[current].title}
						emoji={projects[current].emoji}
					/>
					<SIconContainer>
						<SNext onClick={() => handlePaging(EPagingTypes.NEXT)} />
					</SIconContainer>
				</SProjectContainer>
			</SContainer>
		</SBackground>
	);
};
