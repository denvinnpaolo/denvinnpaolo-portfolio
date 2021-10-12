import React from 'react';
import { SectionContainer } from '../../Shared/Styles/Containers';
import '../../Shared/Styles/Containers';

const LandingContainer = (props) => {
    const titles = ['Frontend Developer', 'Wanderlust']
    return(
        <SectionContainer background="white" title>
                {titles.map(title => (
                    <p className={'title'}>{title}</p>
                ))}
        </SectionContainer>
    );
};

export default LandingContainer;