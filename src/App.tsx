import React, { useState } from 'react';
import { SBackground, SCredit, SImage, SSocialContainer, SContainer, SIconContainer, SProjectContainer, STitle } from './App.styles';
import { SNext } from './components/Next';
import { SPrevious } from './components/Previous';
import Project from './components/Project/index';

enum EPagingTypes {
	NEXT = 'next',
	PREVIOUS = 'previous'
}

const projects = [
	{
		title: 'la caja',
		src: 'https://danicolms.github.io/rotating-box/',
		emoji: '📦'
	},
	{
		title: 'el reloj',
		src: 'https://danicolms.github.io/word-clock/',
		emoji: '🕰️'
	},
	{
		title: 'lineas cruzadas',
		src: 'https://danicolms.github.io/intersecting-lines/',
		emoji: '🔀'
	}
];
console.log('💡 Running v1.0.2');

	// Images URL
	const instagram  = new URL(
		'assets/instagram.png',
		import.meta.url
	  );
	  const github  = new URL(
		'assets/github.png',
		import.meta.url
	  );
	  
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
				<STitle> @danicolms </STitle>
				<SProjectContainer>
					<SIconContainer disabled={!(current - 1 >= 0)} onClick={() => handlePaging(EPagingTypes.PREVIOUS)}>
						<SPrevious />
					</SIconContainer>

					<Project
						src={projects[current].src}
						title={projects[current].title}
						emoji={projects[current].emoji}
					/>
					<SIconContainer disabled={!(current + 1 < projects.length)} onClick={() => handlePaging(EPagingTypes.NEXT)} >
						<SNext />
					</SIconContainer>
				</SProjectContainer>
				<SSocialContainer>
					<div onClick={() => {
					window.open("https://www.instagram.com/danicolms_art/", '_blank');
				}}>
					<SImage src={instagram}/>
					</div>
					<div onClick={() => {
					window.open("https://github.com/danicolms", '_blank');
				}}>
					<SImage src={github}/>
					</div>
				</SSocialContainer>
				<SCredit> Icons by FreePik - Flaticon </SCredit>
			</SContainer>
		</SBackground>
	);
};
