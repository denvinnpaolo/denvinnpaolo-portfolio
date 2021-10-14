import React from 'react';
import { PageContainer } from '../../Shared/Styles/Containers.js';
import NavBar from '../../Shared/Navigation';
import LandingContainer from './LandingContainer.js';
import FeaturedContiner from './FeaturedContianer.js';
import PostsContainer from './PostsContainer.js';


const HomeContainer = (props) => {
    return(
        <PageContainer custom height={'300vh'}>
            <NavBar />
            <LandingContainer />
            <FeaturedContiner />
            <PostsContainer />
            
        </PageContainer>
    );
};

export default HomeContainer;