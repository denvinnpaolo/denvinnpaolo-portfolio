import React from 'react';
import { PageContainer } from '../../Shared/Styles/Containers.js';
import NavBar from '../../Shared/Navigation';
import HomeLanding from './HomeLanding.js';
import HomeFeatured from './HomeFeatured.js';
import HomePosts from './HomePosts.js'

const HomeContainer = (props) => {
    return(
        <PageContainer custom height={'300vh'}>
            <NavBar />
            <HomeLanding />
            <HomeFeatured />
            <HomePosts />
            
        </PageContainer>
    );
};

export default HomeContainer;