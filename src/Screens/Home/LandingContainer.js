import React from 'react';
import Typewriter from 'typewriter-effect';
import { SectionContainer } from '../../Shared/Styles/Containers';
import '../../Shared/Styles/Containers';


const LandingContainer = (props) => {
    const titles = ['Frontend Developer', 'Wanderlust']

    const Writer = props => {
        return(
            <Typewriter 
                options={
                    {strings: props.title,
                    autoStart: true,
                    }
                }
            />
        )
    };
    return(
        <SectionContainer background="white" title>
                {titles.map(title => (
                    <h1><Writer title={title} /></h1>
                ))}
        </SectionContainer>
    );
};

export default LandingContainer;