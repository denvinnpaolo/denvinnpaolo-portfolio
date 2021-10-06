import React from 'react';
import { PageContainer } from '../../Shared/Containers';
import NavBar from '../../Shared/Navigation';

const HomeContainer = (props) => {
    return(
        <PageContainer custom height={'300vh'}>
            <NavBar />
        </PageContainer>
    );
};

export default HomeContainer;