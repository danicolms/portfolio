import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { characterAnimation, wordAnimation } from './animations';
import { SBackground, SCharacter, SSocialContainer, SSocialIcon, SSubtitle, STitle, SWord } from './styles';

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

	const animationControls = useAnimation();
	const {ref, inView} = useInView({threshold: 0.5, triggerOnce: true})

	useEffect(() => {
		if (inView) {
			animationControls.start("visible");
			    }
			    if (!inView) {
					animationControls.start("hidden");
			    }
	}, [animationControls, inView])

	


	return (
		<SBackground>
			<STitle>{title}</STitle>
			<SSubtitle aria-label={subtitle} role="heading">
      			{subtitle.split(" ").map((word, index) => {
        			return (
          				<SWord
							ref={ref}
							aria-hidden="true"
							key={index}
							initial="hidden"
							animate={animationControls}
							variants={wordAnimation}
							transition={{
							delayChildren: index * 0.5,
							staggerChildren: 0.05,
							}}
						>
							{word.split("").map((character, index) => {
								return (
									<SCharacter
										aria-hidden="true"
										key={index}
										variants={characterAnimation}
									>
										{character}
									</SCharacter>
								);
							})}
          				</SWord>
       				 );

				})}
    		</SSubtitle>
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
			</SSocialContainer>
		</SBackground>
	);
};

export default Home;
