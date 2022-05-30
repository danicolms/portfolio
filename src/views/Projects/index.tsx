import React from 'react';
import Project from '../../components/Project';
import { STitle } from '../Home/styles';
import { SBackground, SGrid } from './styles';

export interface IProject{
	title: string;
	image: URL;
	url: string;

}
const projects: IProject[] = [ {
	title: "rotating box",
	image: new URL(
		'../../assets/box.png',
		import.meta.url
	  ),
	  url: "https://danicolms.github.io/rotating-box/",

}, {
	title: "word clock",
	image: new URL(
		'../../assets/clock.png',
		import.meta.url
	  ),
	  url: "https://danicolms.github.io/word-clock/",

} , {
	title: "intersecting lines",
	image: new URL(
		'../../assets/line.png',
		import.meta.url
	  ),
	  url: "https://danicolms.github.io/intersecting-lines/",

}  ];

const Projects: React.FunctionComponent = () => {
	const title = 'my work';
	return (
		<SBackground>
			<STitle> {title} </STitle>
			<SGrid>
				{projects.map((project) => (		<Project title={project.title} image={project.image} url={project.url} gradient={project.gradient}/>) )}
	
			</SGrid>
		</SBackground>
	);
};

export default Projects;
