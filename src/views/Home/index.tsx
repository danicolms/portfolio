
import React from 'react';

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { SBackground, SSocialContainer, SSocialIcon, SSubtitle, STitle } from './styles';


// Images URL
const instagram  = new URL(
	'../../assets/instagram.png',
	import.meta.url
);
	  
const github  = new URL(	
	'../../assets/github.png',
	import.meta.url
);




const Home: React.FunctionComponent = () => {
    const title = "@danicolms"
    const subtitle = "web developer based in Santander, Spain."



	return (
		<SBackground id="home">
				<Fade bottom duration={1500}>
			<STitle>{title}</STitle>
			</Fade>
		
		<Fade delay={1200}>
			<SSubtitle aria-label={subtitle} role="heading">
				<Slide top cascade delay={1200} appear>
      				{subtitle}
				</Slide>
    		</SSubtitle>
			</Fade>
			
			<Fade delay={1600} duration={2000}>
            <SSocialContainer>
				<div onClick={() => {
					window.open("https://www.instagram.com/danicolms_art/", '_blank');
				}}>
					<SSocialIcon src={instagram}/>
				</div>
				<div onClick={() => {
					window.open("https://github.com/danicolms", '_blank');
				}}>
					<SSocialIcon src={github}/>
				</div>
			</SSocialContainer></Fade>
		</SBackground>
	);
};

export default Home;
