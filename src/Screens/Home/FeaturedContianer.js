import React from 'react';
import { SectionContainer } from '../../Shared/Styles/Containers';
import FeaturedList from './FeaturedList';

const FeaturedContiner = (props) => {
    return(
        <SectionContainer background="white">
            <div>Featured Work</div>
            <FeaturedList />
        </SectionContainer>
    );
};

export default FeaturedContiner;