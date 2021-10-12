import React from 'react';
import { PageContainer } from '../../Shared/Styles/Containers.js';
import NavBar from '../../Shared/Navigation';
import LandingContainer from './LandingContainer.js';


const HomeContainer = (props) => {
    return(
        <PageContainer custom height={'300vh'}>
            <NavBar />
            <LandingContainer />
            
        </PageContainer>
    );
};

export default HomeContainer;